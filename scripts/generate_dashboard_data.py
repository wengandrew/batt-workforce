#!/usr/bin/env python3
"""
Generate dashboard JSON data files from processed CSV sources.

Reads data from data/processed/sensitivities/*/,
performs curve fitting, and outputs JSON to site/data/.
"""

import json
import csv
import sys
from pathlib import Path
from datetime import date

try:
    import numpy as np
    from scipy.optimize import curve_fit
except ImportError:
    print("Warning: numpy/scipy not installed. Using raw data without curve fitting.")
    np = None

ROOT = Path(__file__).resolve().parent.parent
PROCESSED_DIR = ROOT / "data" / "processed" / "sensitivities"
OUTPUT_DIR = ROOT / "site" / "data"


def exponential_decay(t, A, k, C):
    return A * np.exp(-k * t) + C


def load_labor_intensity_csv():
    csv_path = PROCESSED_DIR / "manufacturing_productivity" / "labor_intensity_benchmarks.csv"
    if not csv_path.exists():
        print(f"Warning: {csv_path} not found")
        return []

    rows = []
    with open(csv_path) as f:
        reader = csv.DictReader(f)
        for row in reader:
            rows.append(row)
    return rows


def build_facility_data(rows):
    facilities = {}
    for row in rows:
        name = row["facility"]
        if name not in facilities:
            facilities[name] = {"name": name, "region": row["region"], "data": []}

        entry = {
            "year": int(row["year"]),
            "workers_per_gwh": float(row["workers_per_gwh"]),
        }
        for field in ["years_since_start", "workforce_total", "production_gwh"]:
            val = row.get(field, "")
            entry[field.replace("workforce_total", "workforce").replace("production_gwh", "production_gwh")] = (
                float(val) if val else None
            )
        facilities[name]["data"].append(entry)

    return list(facilities.values())


def fit_curve(facilities):
    if np is None:
        return {"note": "scipy not available, no curve fit performed"}

    t_all, y_all = [], []
    for fac in facilities:
        for d in fac["data"]:
            t = d.get("years_since_start")
            if t is not None and t > 0:
                t_all.append(t)
                y_all.append(d["workers_per_gwh"])

    if len(t_all) < 3:
        return {"note": "Insufficient data points for curve fit"}

    t_arr = np.array(t_all)
    y_arr = np.array(y_all)

    try:
        popt, pcov = curve_fit(
            exponential_decay, t_arr, y_arr,
            p0=[380, 0.5, 90],
            bounds=([0, 0, 0], [1000, 5, 500]),
            maxfev=10000,
        )
        residuals = y_arr - exponential_decay(t_arr, *popt)
        ss_res = np.sum(residuals ** 2)
        ss_tot = np.sum((y_arr - np.mean(y_arr)) ** 2)
        r_squared = 1 - (ss_res / ss_tot) if ss_tot > 0 else None

        return {
            "model": "exponential_decay",
            "equation": "workers_per_gwh = A * exp(-k * t) + C",
            "parameters": {"A": round(popt[0], 1), "k": round(popt[1], 3), "C": round(popt[2], 1)},
            "r_squared": round(r_squared, 4) if r_squared else None,
        }
    except Exception as e:
        return {"note": f"Curve fit failed: {e}"}


def generate_labor_intensity():
    rows = load_labor_intensity_csv()
    facilities = build_facility_data(rows)
    curve = fit_curve(facilities)

    output = {
        "metadata": {
            "title": "Labor Intensity: Workers per GWh vs. Factory Maturity",
            "x_axis": "Years Since Factory Start",
            "y_axis": "Workers per GWh",
            "last_updated": str(date.today()),
            "curve_fit": curve,
        },
        "facilities": facilities,
    }

    out_path = OUTPUT_DIR / "labor_intensity.json"
    with open(out_path, "w") as f:
        json.dump(output, f, indent=2)
    print(f"Wrote {out_path}")


def generate_global_jobs():
    """Placeholder — does not yet generate global_jobs.json from processed data.

    TODO: Build projection model that reads from processed sensitivities
    (market_share, policy_scenarios) and outputs site/data/global_jobs.json.
    For now, global_jobs.json is maintained manually.
    """
    out_path = OUTPUT_DIR / "global_jobs.json"
    if out_path.exists():
        print(f"Skipped {out_path} — manual file exists (auto-generation not yet implemented)")
    else:
        print(f"Warning: {out_path} not found. Create it manually or implement this function.")


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    print("Generating dashboard data...")
    generate_labor_intensity()
    generate_global_jobs()
    print("Done.")


if __name__ == "__main__":
    main()
