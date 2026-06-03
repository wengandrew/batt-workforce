#!/usr/bin/env python3
"""
Template script for processing a new primary research source.

Usage:
    python process_source.py --source <source_id> --input data/raw/<filename>

This script provides the framework for extracting quantitative data
from a raw research source and writing it to the appropriate
processed data directories.
"""

import argparse
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
SOURCES_FILE = ROOT / "data" / "processed" / "sources.yaml"
SENSITIVITIES_DIR = ROOT / "data" / "processed" / "sensitivities"


def load_sources():
    with open(SOURCES_FILE) as f:
        return yaml.safe_load(f)


def save_sources(data):
    with open(SOURCES_FILE, "w") as f:
        yaml.dump(data, f, default_flow_style=False, sort_keys=False)


def process(source_id: str, input_file: Path):
    sources_data = load_sources()

    source = None
    for s in sources_data["sources"]:
        if s["id"] == source_id:
            source = s
            break

    if source is None:
        print(f"Error: source '{source_id}' not found in sources.yaml")
        sys.exit(1)

    print(f"Processing: {source['name']}")
    print(f"Input file: {input_file}")
    print()

    # TODO: Implement source-specific extraction logic
    # This will vary by source type (PDF, spreadsheet, report, etc.)
    #
    # General steps:
    # 1. Read and parse the input file
    # 2. Identify relevant quantitative data points
    # 3. Map data to appropriate sensitivities
    # 4. Write CSV files to sensitivities/<category>/
    # 5. Update metadata.yaml for each affected sensitivity
    # 6. Mark source as processed in sources.yaml

    print("Source-specific processing not yet implemented.")
    print(f"Sensitivities directory: {SENSITIVITIES_DIR}")
    print()
    print("After implementing extraction, update sources.yaml:")
    print(f"  - Set provided: true")
    print(f"  - Set processed: true")
    print(f"  - Set raw_file: '{input_file.name}'")
    print(f"  - List affected sensitivities")


def main():
    parser = argparse.ArgumentParser(description="Process a primary research source")
    parser.add_argument("--source", required=True, help="Source ID from sources.yaml")
    parser.add_argument("--input", required=True, type=Path, help="Path to raw input file")
    args = parser.parse_args()

    if not args.input.exists():
        print(f"Error: input file not found: {args.input}")
        sys.exit(1)

    process(args.source, args.input)


if __name__ == "__main__":
    main()
