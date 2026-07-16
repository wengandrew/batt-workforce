/* =====================================================================
   battman_data.js — SINGLE SOURCE OF TRUTH for the BattManf Labor project.
   Consumed by Battery_Labor_Intensity_Dashboard.html (via battman_shared.js).
   Every number lives here and only here. Edit numbers HERE.
   Attribute schema (attrs) per intensity series:
     den:   "produced-disclosed" | "produced-derived" | "produced-estimated"
            | "nameplate" | "nameplate-target"
     cell / pack / upstream / construction: true | false | "partial" | "allocated out"
            (does the HEADCOUNT include labor for cells, module/pack assembly,
             upstream materials/mining/recycling, construction crews)
     functions: "all" | "production only"
     hc:    short description of the headcount basis
   ===================================================================== */
window.BM = {
VERSION: "2026-07-16.1",
UPDATED: "July 16, 2026",

SRC: {
  A19:{n:"CATL 2019 Annual Report", u:"https://www.catl.com/uploads/1/file/public/2020/04/30/158821140988173wxpg.pdf"},
  A20:{n:"CATL 2020 Annual Report", u:"https://www.catl.com/uploads/1/file/public/202104/20210430094928_4n1av8qek4.pdf"},
  A21:{n:"CATL 2021 Annual Report", u:"https://www.catl.com/uploads/1/file/public/202204/20220426184645_v8k07d2sih.pdf"},
  A22:{n:"CATL 2022 Annual Report", u:"https://www.catl.com/uploads/1/file/public/202303/20230314112847_577pbym8lr.pdf"},
  A23:{n:"CATL 2023 Annual Report", u:"https://www.catl.com/uploads/1/file/public/202403/20240321205248_hda9h48qci.pdf"},
  A24:{n:"CATL 2024 Annual Report", u:"https://www.catl.com/uploads/1/file/public/202503/20250317094543_6ig9e0mwng.pdf"},
  A25:{n:"CATL 2025 Annual Report", u:"https://www.catl.com/uploads/1/file/public/202603/20260310105829_c5p2l3q9ll.pdf"},
  BMK:{n:"Benchmark Mineral Intelligence — CATL revenue streams by segment", u:"https://source.benchmarkminerals.com/article/charting-the-evolution-of-catls-revenue-streams"},
  CNEV:{n:"CnEVPost — CATL FY2024 earnings (segment shares corroboration)", u:"https://cnevpost.com/2025/03/14/catl-q4-2024-earnings/"},
  ESSN:{n:"ess-news — CATL 2025 results (segment revenue & shares)", u:"https://www.ess-news.com/2026/03/09/catl-sold-661-gwh-of-lithium-ion-batteries-in-2025-reports-profit-growth/"},
  G22:{n:"Nevada GOED NRS 360.975 FY2022 (Eide Bailly audit)", u:"https://goed.nv.gov/wp-content/uploads/2024/02/NRS-360.975-3.5B-Annual-Tesla-Report.pdf"},
  G23:{n:"Nevada GOED NRS 360.975 FY2023", u:"https://goed.nv.gov/wp-content/uploads/2024/01/NRS-360.975-3.5B-Annual-Tesla-ReportV2.pdf"},
  G24:{n:"Nevada GOED NRS 360.975 FY2024", u:"https://www.leg.state.nv.us/Division/Research/Documents/RTTL_NRS360.975_1_2024.pdf"},
  G25:{n:"Nevada GOED NRS 360.975 FY2025", u:"https://www.leg.state.nv.us/Division/Research/Documents/RTTL_NRS360.975_1_2025.pdf"},
  PAN10B:{n:"Panasonic press release — 10 billionth cell (Jul 2024)", u:"https://na.panasonic.com/news/panasonic-celebrates-milestone-achievement-of-producing-10-billion-lithium-ion-cells"},
  WIKI_GF:{n:"Wikipedia — Gigafactory Nevada (capacity & cell milestones)", u:"https://en.wikipedia.org/wiki/Gigafactory_Nevada"},
  AMS:{n:"Automotive Manufacturing Solutions — 14th line / 3B cells (2020)", u:"https://www.automotivemanufacturingsolutions.com/electrification/panasonic-to-grow-battery-production-by-10-at-tesla-nevada-gigafactory/526130"},
  ELEC23:{n:"Electrek — 15th line, ~38→39 GWh (Jun 2023)", u:"https://electrek.co/2023/06/06/panasonic-add-new-battery-production-line-at-tesla-gigafactory-nevada/"},
  TC20:{n:"TechCrunch — COVID pull-out, ~3,500 employees (Mar 2020)", u:"https://techcrunch.com/2020/03/20/tesla-partner-panasonic-is-shutting-down-its-operations-at-nevada-gigafactory/"},
  NVAPP:{n:"Nevada Appeal — >4,000, nearing 4,500 (Apr 2024)", u:"https://www.nevadaappeal.com/news/2024/apr/18/panasonic-tmcc-unveil-advanced-manufacturing-center-in-reno/"},
  EVMAG:{n:"EV Magazine — ~41 GWh; 11B+ cells (2025)", u:"https://evmagazine.com/articles/panasonic-opens-one-of-the-worlds-largest-ev-battery-plants"},
  BTO:{n:"BatteryTech Online — 8B cells; 6.003M cells/day record", u:"https://www.batterytechonline.com/battery-manufacturing/panasonic-energy-s-production-prowess-accelerates"},
  FARADAY:{n:"Faraday Institution Gigafactory Report 2024 (~70 FTE/GWh)", u:"https://www.faraday.ac.uk/wp-content/uploads/2024/09/Gigafactory-Report_2024_final_17Sept2024.pdf"},
  ICCT:{n:"ICCT battery-jobs working paper 2024 (direct 60–75%)", u:"https://theicct.org/wp-content/uploads/2024/12/ID-255-%E2%80%93-Battery-jobs_working-paper_final.pdf"},
  EIB:{n:"EIB press 2020-088 — 35→65 GWh; >6,000 FTE by end-2022", u:"https://www.eib.org/en/press/all/2020-088-electric-vehicle-battery-production-in-europe-gets-boost-thanks-to-eib-loan-of-eur480-million-to-lg-chem-wroclaw-energy-in-poland"},
  LGWRO23:{n:"LGES Newsroom (Jul 2023) — 86→90 GWh; 7,000 employees", u:"https://news.lgensol.com/insights/from-our-experts/3071/"},
  LGBI24:{n:"LGES Battery Inside (Dec 2024) — ~86 GWh", u:"https://inside.lgensol.com/en/2024/12/time-for-ask-anything-to-lg-energy-solution-revitalization-of-wroclaw-poland/"},
  IIW:{n:"Invest-in-Wrocław (city) — ~9,500 employees (2021); 100 GWh target", u:"https://invest-in-wroclaw.pl/5-years-of-lg-energy-solution-wroclaw-the-largest-investment-in-the-region"},
  KED:{n:"KED Global (Jul 2022) — 70 GWh capacity", u:"https://www.kedglobal.com/automobiles/newsView/ked202207220010"},
  THEBELL:{n:"TheBell (Feb 2025) — company-wide 가동률 73.6/69.3/57.8%, citing DART", u:"https://m.thebell.co.kr/m/newsview.asp?svccode=&newskey=202502070907398860107261"},
  ELEC_Q3:{n:"THE ELEC — LGES Q3 2024 call (59.8% YTD util.)", u:"https://www.thelec.kr/news/articleView.html?idxno=30810"},
  ELEC_Q4:{n:"THE ELEC — LGES Q4 2024 call", u:"https://www.thelec.kr/news/articleView.html?idxno=32566"},
  LEMONDE:{n:"Le Monde Diplomatique KR (Dec 2025) — Wrocław ~60% util.; Ford cancellation", u:"https://www.ilemonde.com/news/articleView.html?idxno=21621"},
  DDAILY:{n:"디지털데일리 — Wrocław ~50% H1 2024", u:"https://m.ddaily.co.kr/page/view/2023071216311869917"},
  DEALSITE:{n:"딜사이트 (Aug 2023) — Wrocław entity revenue (KRS filings)", u:"https://dealsite.co.kr/articles/108986"},
  REVELIO:{n:"Revelio Labs — Wrocław legal-entity headcount", u:"https://www.reveliolabs.com/companies/lg-energy-solution-wroclaw-sp-z-o-o/employees/"},
  KRS_BIZ:{n:"bizraport.pl — KRS 0000614214 audited avg employment & revenue (2017–2024)", u:"https://www.bizraport.pl/krs/0000614214/lg-energy-solution-wroclaw-spolka-z-ograniczona-odpowiedzialnoscia"},
  LGBR24:{n:"LGES 2024 Business Report — office/production split", u:"https://www.lgensol.com/assets/file/2024_LGES_Business_Report.pdf"},
  LG681:{n:"LGES press (Mar 2022) — Holland 5→25 GWh, 1,200 jobs", u:"https://news.lgensol.com/company-news/supplementary-stories/681/"},
  WHIT:{n:"Gov. Whitmer / MEDC (Mar 2022) — ~1,495 MI employees", u:"https://www.michigan.gov/whitmer/news/press-releases/2022/03/22/whitmer-announces-1200-new-jobs-from-lg-energy-solutions-investment"},
  MFGDIVE:{n:"Manufacturing Dive — 170 production layoffs (WARN, 2023)", u:"https://www.manufacturingdive.com/news/lg-energy-solution-ev-battery-manufacturer-layoffs-labor-holland-michigan/700081/"},
  TECHC:{n:"TechCentury (Oct 2015) — Holland workforce >300", u:"https://www.techcentury.com/2015/10/21/lg-chem-holland-workforce-doubles-to-300/"},
  CANARY:{n:"Canary Media (Jun 2025) — LFP opening; ~1,500 staff, 1,700 target", u:"https://www.canarymedia.com/articles/energy-storage/lg-michigan-lfp-battery-factory"},
  SPW6:{n:"Solar Power World (Jun 2025) — 16.5 GWh LFP plant opens", u:"https://www.solarpowerworldonline.com/2025/06/lg-energy-solutions-opens-lfp-battery-cell-manufacturing-plant-in-michigan/"},
  SPW7:{n:"Solar Power World (Jul 2025) — 17 GWh 2025 / 30 GWh 2026 targets", u:"https://www.solarpowerworldonline.com/2025/07/lges-to-expand-michigan-ess-battery-plant-to-30-gwh/"},
  BTO_MI:{n:"BatteryTech Online — 21.5 GWh total site", u:"https://www.batterytechonline.com/battery-manufacturing/lg-energy-solution-opens-first-us-large-scale-lfp-battery-plant-for-energy-storage"},
  CAP:{n:"Center for American Progress — Holland expansion overview", u:"https://www.americanprogress.org/article/lg-energy-battery-plant-expansion-project/"},
  MONOIST:{n:"MONOist — Panasonic HD: IRA benefit ≈ ¥100bn to FY2023 net income (May 2023)", u:"https://monoist.itmedia.co.jp/mn/articles/2305/11/news084.html"},
  PANIR:{n:"Panasonic HD FY2024 Q1 results — IRA booking policy (≈half of subsidy into adjusted OP)", u:"https://holdings.panasonic/jp/corporate/investors/pdf/2024_1q/1q_financial_results_j.pdf"},
  ZJIC:{n:"CATL 2024 AR summary (ZJ gov media) — power GM 23.94%; materials & recycling ¥28.7bn, GM 10.51%", u:"https://zjic.zj.gov.cn/ywdh/tzgl/202503/t20250318_23320372.shtml"},
  SINAESS:{n:"Sina Finance — CATL 2024 AR: ESS revenue ¥57.29bn, GM 26.84% (93 GWh sold)", u:"https://finance.sina.com.cn/stock/relnews/cn/2025-03-15/doc-inepucqa2476570.shtml"}
},

START: {catl:{y:2012, note:"first mass production (company-wide — mixes plant vintages)"},
        pena:{y:2017, note:"cell production from Jan 2017"},
        wro:{y:2017, note:"EV cell production from H2 2017"},
        mi:{y:2013, note:"EV cells from 2013 (plant est. 2010)"}},

INTENSITY: [
 {id:"catl_adj_total", site:"CATL", siteKey:"catl", colorHex:"#7f1d1d", on:false, marker:"circle",
  label:"CATL — battery-business employees ÷ GWh produced",
  attrs:{den:"produced-disclosed", cell:true, pack:true, upstream:"allocated out", construction:false,
         functions:"all", hc:"consolidated group × battery-systems revenue share (81–89%)"},
  mx:{bias:"The closest proxy for whole-battery-business labor, though it still blends every plant and vintage. The allocation assumes equal revenue per employee across segments, giving about a 10 to 15 percent band.", conf:"Medium", confNote:"inputs are primary; the allocation is assumed"},
  pts:[
   {year:2019,t:7,v:485,disp:"~485",err:[412,558],num:"26,775 total employees × 85.6% battery-systems revenue share (power 38,584 + ESS 610 of 45,788 RMB mn) ≈ 22,919",numSrc:["A19","A20"],den:"47.26 GWh produced",denSrc:["A20"],q:"DERIVED",c:"Medium",note:"Allocation assumes equal revenue per employee across segments (±15% band shown). Strips materials/mining/other (~14% of revenue)."},
   {year:2020,t:8,v:526,disp:"~526",err:[447,605],num:"33,078 total employees × 82.2% (power 39,426 + ESS 1,943 of 50,319) ≈ 27,190",numSrc:["A20"],den:"51.71 GWh produced",denSrc:["A20"],q:"DERIVED",c:"Medium",note:"Lithium-materials segment was 15.8% of revenue this year — largest non-battery share of the series."},
   {year:2021,t:9,v:415,disp:"~415",err:[353,477],num:"83,601 × 80.6% (91,491 + 13,624 of 130,356) ≈ 67,382",numSrc:["A21","BMK"],den:"162.30 GWh produced",denSrc:["A21"],q:"DERIVED",c:"Medium",note:"Battery share at its series low (80.6%)."},
   {year:2022,t:10,v:314,disp:"~314",err:[267,361],num:"118,914 × 85.7% (236,615 + 44,980 of 328,594) ≈ 101,909",numSrc:["A22","BMK"],den:"325 GWh produced",denSrc:["A22"],q:"DERIVED",c:"Medium",note:""},
   {year:2023,t:11,v:257,disp:"~257",err:[218,296],num:"116,055 × 86.1% (285,250 + 59,900 of 400,917) ≈ 99,912",numSrc:["A23"],den:"389 GWh produced",denSrc:["A23"],q:"DERIVED",c:"Medium",note:""},
   {year:2024,t:12,v:219,disp:"~219",err:[186,252],num:"131,988 × 85.7% (253,041 + 57,290 of 362,013) ≈ 113,145",numSrc:["A24","CNEV"],den:"516 GWh produced",denSrc:["A24"],q:"DERIVED",c:"Medium",note:"Segment shares corroborated by trade coverage (69.90% power + 15.83% ESS)."},
   {year:2025,t:13,v:222,disp:"~222",err:[189,255],num:"185,839 × 89.4% (316,510 + 62,440 of 423,700) ≈ 166,140",numSrc:["A25","ESSN"],den:"748 GWh produced",denSrc:["A25"],q:"DERIVED",c:"Medium",note:"Slight uptick vs 2024 is partly mechanical: materials revenue fell 24%, raising the battery share. Plateau signal ≈ 200–222."}
  ]},
 {id:"catl_adj_prod", site:"CATL", siteKey:"catl", colorHex:"#7f1d1d", on:true, marker:"circle", open:true, dash:"5,4",
  label:"CATL — battery-business production workers ÷ GWh produced",
  attrs:{den:"produced-disclosed", cell:true, pack:true, upstream:"allocated out", construction:false,
         functions:"production only", hc:"生产人员 × battery-systems revenue share"},
  mx:{bias:"The best CATL proxy for battery cell labor. Taking out a 15 to 30 percent benchmark for module and pack labor leaves a cell-only figure of about 112 to 137 per GWh in 2024, which is the plant-comparable number.", conf:"Medium", confNote:"inputs are primary; the allocation and pack benchmark are assumed"},
  pts:[
   {year:2019,t:7,v:274,disp:"~274",err:[233,315],num:"15,129 production personnel × 85.6% ≈ 12,950",numSrc:["A19"],den:"47.26 GWh produced",denSrc:["A20"],q:"DERIVED",c:"Medium",note:"Cell-only ~192-233. Pre-scale-up year, excluded from the fit window. 生产人员 15,129 (2019 AR 专业构成 table, p.72)."},
   {year:2020,t:8,v:329,disp:"~329",err:[280,378],num:"20,674 production personnel × 82.2% ≈ 16,994",numSrc:["A20"],den:"51.71 GWh produced",denSrc:["A20"],q:"DERIVED",c:"Medium",note:"Cell-only ~230-280. COVID year, excluded from the fit window. 生产人员 20,674 (2020 AR 专业构成 table, p.70)."},
   {year:2021,t:9,v:325,disp:"~325",err:[276,374],num:"65,364 production personnel × 80.6% ≈ 52,683",numSrc:["A21"],den:"162.30 GWh produced",denSrc:["A21"],q:"DERIVED",c:"Medium",note:"Cell-only: ~227–276. 生产人员 65,364 read directly from the 2021 AR 专业构成 table (p.57) — the earlier 44,690 was that year's production net-add, not the total."},
   {year:2022,t:10,v:235,disp:"~235",err:[200,270],num:"89,080 production personnel × 85.7% ≈ 76,342",numSrc:["A22"],den:"325 GWh produced",denSrc:["A22"],q:"DERIVED",c:"Medium",note:"Cell-only ~165-200. 生产人员 89,080 (2022 AR 专业构成 table, p.53)."},
   {year:2023,t:11,v:181,disp:"~181",err:[154,208],num:"81,817 production personnel × 86.1% ≈ 70,436",numSrc:["A23"],den:"389 GWh produced",denSrc:["A23"],q:"DERIVED",c:"Medium",note:"Cell-only: ~127–154."},
   {year:2024,t:12,v:161,disp:"~161",err:[137,185],num:"96,725 production personnel × 85.7% ≈ 82,916",numSrc:["A24","CNEV"],den:"516 GWh produced",denSrc:["A24"],q:"DERIVED",c:"Medium",note:"Cell-only: ~112–137 — the CATL figure most comparable to PENA (~100) and the cross-site 70–120 band. Pack-labor share benchmark: Faraday/ICCT."},
   {year:2025,t:13,v:174,disp:"~174",err:[148,200],num:"145,568 production personnel × 89.4% ≈ 130,138",numSrc:["A25","ESSN"],den:"748 GWh produced",denSrc:["A25"],q:"DERIVED",c:"Medium",note:"Cell-only: ~122–148. Production share of the workforce rose to 78.3% (from 73.3% in 2024), so production-personnel intensity ticks up even as total-employee intensity keeps falling."}
  ]},
 {id:"catl_total", site:"CATL", siteKey:"catl", colorHex:"#b91c1c", on:false, marker:"circle",
  label:"CATL — all employees ÷ GWh produced (whole company)",
  attrs:{den:"produced-disclosed", cell:true, pack:true, upstream:true, construction:false,
         functions:"all", hc:"consolidated group, year-end (all businesses)"},
  mx:{bias:"Overstates cell-plant labor. The worker count includes materials, mining, recycling, battery-swap and ESS-integration staff, and R&D adds another 12 to 20 percent.", conf:"High", confNote:"both inputs are primary"},
  pts:[
   {year:2019,t:7,v:566,disp:"566",num:"26,775 total employees (consolidated, year-end)",numSrc:["A19"],den:"47.26 GWh produced (产量, 2020 AR comparative col.)",denSrc:["A20"],q:"PRIMARY",c:"High",note:"26,775 ÷ 47.26 = 566. No 2019 capacity/utilization disclosed (rule began FY2020)."},
   {year:2020,t:8,v:640,disp:"640",num:"33,078 total employees (reported consolidated in-service headcount, 2020 AR)",numSrc:["A20"],den:"51.71 GWh produced",denSrc:["A20"],q:"PRIMARY",c:"High",note:"33,078 ÷ 51.71 = 640. Utilization 74.83% (capacity 69.10 GWh)."},
   {year:2021,t:9,v:515,disp:"515",num:"83,601 total employees (reported)",numSrc:["A21"],den:"162.30 GWh produced",denSrc:["A21"],q:"PRIMARY",c:"High",note:"83,601 ÷ 162.30 = 515. Utilization 95.0% (capacity 170.39 GWh). +50,523 vs 2020 (33,078) — the headline 2021 hiring surge."},
   {year:2022,t:10,v:366,disp:"366",num:"118,914 total employees (reported consolidated in-service headcount, 2022 AR)",numSrc:["A22"],den:"325 GWh produced",denSrc:["A22"],q:"PRIMARY",c:"High",note:"118,914 ÷ 325 = 366. Utilization 83.4% (capacity 390 GWh)."},
   {year:2023,t:11,v:298,disp:"298",num:"116,055 total employees (reported; real dip in price-war year)",numSrc:["A23"],den:"389 GWh produced",denSrc:["A23"],q:"PRIMARY",c:"High",note:"116,055 ÷ 389 = 298. Utilization 70.47% (capacity 552 GWh)."},
   {year:2024,t:12,v:256,disp:"256",num:"131,988 total employees (reported)",numSrc:["A24"],den:"516 GWh produced",denSrc:["A24"],q:"PRIMARY",c:"High",note:"131,988 ÷ 516 = 256. Utilization 76.33% (capacity 676 GWh)."},
   {year:2025,t:13,v:248,disp:"248",num:"185,839 total employees (reported consolidated in-service headcount, 2025 AR)",numSrc:["A25"],den:"748 GWh produced",denSrc:["A25"],q:"PRIMARY",c:"High",note:"185,839 ÷ 748 = 248. Utilization 96.9% (capacity 772 GWh). Headcount +41% YoY — includes non-cell business growth. Consolidated basis: ≈16,200 in the listed parent entity + ≈169,600 in subsidiaries (secondary split, approximate)."}
  ]},
 {id:"catl_prod", site:"CATL", siteKey:"catl", colorHex:"#b91c1c", on:false, marker:"circle", open:true, dash:"5,4",
  label:"CATL — all production workers ÷ GWh produced",
  attrs:{den:"produced-disclosed", cell:true, pack:true, upstream:true, construction:false,
         functions:"production only", hc:"生产人员 incl. staff at materials/recycling plants"},
  mx:{bias:"Slightly overstates cell and pack labor, because production staff at materials and recycling plants are also counted.", conf:"Medium", confNote:"every point is reported 生产人员 (2019 to 2025)"},
  pts:[
   {year:2019,t:7,v:320,disp:"320",num:"15,129 production personnel (生产人员, reported directly; = 56.5% of workforce)",numSrc:["A19"],den:"47.26 GWh produced",denSrc:["A20"],q:"PRIMARY",c:"High",note:"15,129 ÷ 47.26 = 320 (2019 AR 专业构成 table, p.72). Pre-scale-up; excluded from the fit window."},
   {year:2020,t:8,v:400,disp:"400",num:"20,674 production personnel (生产人员, reported directly; = 62.5% of workforce)",numSrc:["A20"],den:"51.71 GWh produced",denSrc:["A20"],q:"PRIMARY",c:"High",note:"20,674 ÷ 51.71 = 400 (2020 AR 专业构成 table, p.70). COVID year; excluded from the fit window."},
   {year:2021,t:9,v:403,disp:"403",num:"65,364 production personnel (生产人员, reported directly; = 78.2% of workforce)",numSrc:["A21"],den:"162.30 GWh produced",denSrc:["A21"],q:"PRIMARY",c:"High",note:"65,364 ÷ 162.30 = 403. From the 2021 AR 专业构成 table (p.57); the 44,690 once used here was the year's net-add, not the total."},
   {year:2022,t:10,v:274,disp:"274",num:"89,080 production personnel (生产人员, reported directly; = 74.9% of workforce)",numSrc:["A22"],den:"325 GWh produced",denSrc:["A22"],q:"PRIMARY",c:"High",note:"89,080 ÷ 325 = 274 (2022 AR 专业构成 table, p.53)."},
   {year:2023,t:11,v:210,disp:"210",num:"81,817 production personnel (生产人员, reported directly; = 70.5% of workforce)",numSrc:["A23"],den:"389 GWh produced",denSrc:["A23"],q:"PRIMARY",c:"High",note:"81,817 ÷ 389 = 210."},
   {year:2024,t:12,v:187,disp:"187",num:"96,725 production personnel (生产人员, reported directly; = 73.3% of workforce)",numSrc:["A24"],den:"516 GWh produced",denSrc:["A24"],q:"PRIMARY",c:"High",note:"96,725 ÷ 516 = 187."},
   {year:2025,t:13,v:195,disp:"195",num:"145,568 production personnel (生产人员, reported directly; = 78.3% of workforce)",numSrc:["A25"],den:"748 GWh produced",denSrc:["A25"],q:"PRIMARY",c:"High",note:"145,568 ÷ 748 = 195."}
  ]},
 {id:"pena", site:"PENA Nevada", siteKey:"pena", colorHex:"#0f766e", on:true, marker:"circle",
  label:"PENA Nevada — audited workers ÷ estimated GWh produced",
  attrs:{den:"produced-derived", cell:true, pack:false, upstream:false, construction:false,
         functions:"all", hc:"audited Qualified Employees, Jun-30 snapshot (≈80–85% of payroll)"},
  mx:{bias:"Counts cell-plant workers only. Tesla runs the pack lines and construction is tracked separately, so both are left out. The audited QE count sits a little below full payroll and includes indirect site staff, so direct workers are roughly 60 to 75 percent of it. The fiscal year ends June 30, about six months off the calendar-year output.", conf:"Medium", confNote:"audited workers over modeled output"},
  pts:[
   {year:2021.5,t:4.5,v:96,disp:"~96",yr:"FY2021 (Jun 30, 2021)",err:[79,122],num:"2,690 Qualified Employees — audited (project-to-date)",numSrc:["G22"],den:"~28 GWh produced — derived from cumulative cell counts (±15–20%)",denSrc:["WIKI_GF"],q:"PRIMARY ÷ DERIVED",c:"Medium",note:"2,690 ÷ ~28 = ~96. First audited data point; the 2,690 project-to-date total ties out to the FY2022 filing (4,026 − 1,336 net add)."},
   {year:2022.5,t:5.5,v:126,disp:"~126",yr:"FY2022 (Jun 30, 2022)",err:[105,148],num:"4,026 Qualified Employees — audited (Eide Bailly), cell-specific",numSrc:["G22"],den:"~32 GWh produced — derived from cumulative cell counts × ~18 Wh/cell (±15–20%)",denSrc:["WIKI_GF","PAN10B"],q:"PRIMARY ÷ DERIVED",c:"Medium",note:"4,026 ÷ ~32 = ~126. Over-ramp peak: workforce ahead of output. Total-headcount basis ~130–150 (QE ≈ 80–85% of payroll). ~6-month fiscal/calendar offset."},
   {year:2023.5,t:6.5,v:98,disp:"~98",yr:"FY2023 (Jun 30, 2023)",err:[82,115],num:"3,330 Qualified Employees — audited",numSrc:["G23"],den:"~34 GWh produced — derived (7.3B cells cumulative by 2023)",denSrc:["WIKI_GF"],q:"PRIMARY ÷ DERIVED",c:"Medium",note:"3,330 ÷ ~34 = ~98. Workforce trimmed while output held. Total-HC basis ~115–125."},
   {year:2024.5,t:7.5,v:101,disp:"~101",yr:"FY2024 (Jun 30, 2024)",err:[84,119],num:"3,445 Qualified Employees — audited",numSrc:["G24"],den:"~34 GWh produced — derived (8→10B cells across 2024)",denSrc:["PAN10B","BTO"],q:"PRIMARY ÷ DERIVED",c:"Medium",note:"3,445 ÷ ~34 = ~101. Stable. FY2025 (556 QE, net −2,889) is an anomaly — reported but excluded from ratios."}
  ]},
 {id:"pena_constr", site:"PENA Nevada", siteKey:"pena", colorHex:"#0f766e", on:false, marker:"circle", open:true, dash:"2,3",
  label:"PENA Nevada — workers + construction (upper bound) ÷ estimated GWh produced",
  attrs:{den:"produced-derived", cell:true, pack:false, upstream:false, construction:"project-wide adds",
         functions:"all", hc:"audited QE + GOED construction net adds (Tesla+PENA+suppliers combined — upper bound)"},
  mx:{bias:"Nevada is the only site that audits construction labor, but the figure is project-wide (mostly Tesla's own building) and counts net new workers rather than crew size, so it caps construction's effect rather than measuring it. It lifts intensity only 1 to 8 percent, because the plant was largely built before FY2022.", conf:"Low", confNote:"construction is not PENA-attributable"},
  pts:[
   {year:2022.5,t:5.5,v:129,disp:"~129",yr:"FY2022 (Jun 30, 2022)",err:[108,152],num:"4,026 audited QE + 110 project-wide construction employees added in FY2022 (Exhibit I: Tesla+PENA+H&T+Valeo combined) = 4,136",numSrc:["G22"],den:"~32 GWh produced — derived (±15–20%)",denSrc:["WIKI_GF","PAN10B"],q:"DERIVED / UPPER BOUND",c:"Low",note:"4,136 ÷ ~32 = ~129 vs ~126 without construction (+2.7%). Construction is not broken out by participant — attributing all of it to PENA overstates."},
   {year:2023.5,t:6.5,v:100,disp:"~100",yr:"FY2023 (Jun 30, 2023)",err:[84,117],num:"3,330 QE + 61 project-wide construction adds = 3,391",numSrc:["G23"],den:"~34 GWh produced — derived",denSrc:["WIKI_GF"],q:"DERIVED / UPPER BOUND",c:"Low",note:"3,391 ÷ ~34 = ~100 vs ~98 (+1.8%). Construction essentially finished on the original project by this point."},
   {year:2024.5,t:7.5,v:109,disp:"~109",yr:"FY2024 (Jun 30, 2024)",err:[91,128],num:"3,445 QE + 258 project-wide construction adds = 3,703",numSrc:["G24"],den:"~34 GWh produced — derived",denSrc:["PAN10B","BTO"],q:"DERIVED / UPPER BOUND",c:"Low",note:"3,703 ÷ ~34 = ~109 vs ~101 (+7.5%). FY2025 is excluded twice over: the QE anomaly, and the +1,845 construction surge belongs to the separate Gigafactory-2 expansion project."}
  ]},
 {id:"wro_ent", site:"LGES Wrocław", siteKey:"wro", colorHex:"#4338ca", on:true, marker:"circle",
  label:"Wrocław — LGES payroll (KRS audited) ÷ estimated GWh produced",
  attrs:{den:"produced-estimated", cell:true, pack:"partial", upstream:false, construction:false,
         functions:"all", hc:"KRS-audited legal entity (LGES own payroll; excludes only a small ~7% agency layer, not half the campus)"},
  mx:{bias:"Both numerator (KRS average employment) and denominator (KRS filed revenue ÷ cell ASP) come from the SAME audited KRS filing — one consistent, fully-traceable basis. By 2023 the legal entity ≈ the whole operational campus, so it barely under-states site labor. The remaining uncertainty is the ASP: Wrocław's revenue includes some module/pack sales, so the revenue route can overstate cell GWh and understate intensity — the nameplate × utilization cross-check sits ~30% higher (the upper error band).", conf:"Low", confNote:"KRS workers ÷ KRS revenue-route output — same source; ASP is the uncertainty"},
  pts:[
   {year:2019,t:2,v:163,disp:"~163",err:[147,200],num:"2,121 KRS-audited employees",numSrc:["KRS_BIZ"],den:"~13 GWh produced (KRS revenue 7.78bn PLN ≈ $2.0bn ÷ ~$155/kWh cell ASP)",denSrc:["KRS_BIZ"],q:"ESTIMATE",c:"Low",note:"2,121 ÷ ~13 = ~163. Early ramp; numerator and denominator both from the same audited KRS filing."},
   {year:2020,t:3,v:121,disp:"~121",err:[110,160],num:"3,904 KRS-audited employees",numSrc:["KRS_BIZ"],den:"~32 GWh produced (KRS revenue 18.07bn PLN ≈ $4.6bn ÷ ~$145/kWh)",denSrc:["KRS_BIZ"],q:"ESTIMATE",c:"Low",note:"3,904 ÷ ~32 = ~121."},
   {year:2021,t:4,v:97,disp:"~97",err:[85,130],num:"5,172 KRS-audited employees",numSrc:["KRS_BIZ"],den:"~53 GWh produced (KRS revenue 27.46bn PLN ≈ $7.1bn ÷ ~$135/kWh)",denSrc:["KRS_BIZ"],q:"ESTIMATE",c:"Low",note:"5,172 ÷ ~53 = ~97."},
   {year:2022,t:5,v:82,disp:"~82",err:[73,117],num:"6,094 KRS-audited employees",numSrc:["KRS_BIZ"],den:"~74 GWh produced (KRS revenue 40.80bn PLN ≈ $9.1bn ÷ ~$125/kWh); nameplate×util cross-check ~52 → ~117",denSrc:["KRS_BIZ","KED","THEBELL"],q:"ESTIMATE",c:"Low",note:"6,094 ÷ ~74 = ~82. Upper band reflects the nameplate route (~117)."},
   {year:2023,t:6,v:76,disp:"~76",err:[67,107],num:"6,546 KRS-audited employees (audited peak)",numSrc:["KRS_BIZ"],den:"~86 GWh produced (KRS revenue 40.73bn PLN ≈ $9.7bn ÷ ~$113/kWh); nameplate×util cross-check ~61 → ~107",denSrc:["KRS_BIZ","LGWRO23"],q:"ESTIMATE",c:"Low",note:"6,546 ÷ ~86 = ~76. Still well above the ~73 shown before with Revelio's undercounted 4,457."},
   {year:2024,t:7,v:79,disp:"~79",err:[69,91],num:"4,249 KRS-audited employees (−35% cut)",numSrc:["KRS_BIZ"],den:"~54 GWh produced (KRS revenue 23.49bn PLN ≈ $5.8bn ÷ ~$108/kWh); nameplate×util cross-check ~52 → ~82",denSrc:["KRS_BIZ","LGBI24"],q:"ESTIMATE",c:"Low",note:"4,249 ÷ ~54 = ~79. Revenue and headcount both fell (EV→LFP, Ford cancellation)."}
  ]},
 {id:"wro_site", site:"LGES Wrocław", siteKey:"wro", colorHex:"#4338ca", on:false, marker:"circle", open:true, dash:"5,4",
  label:"Wrocław — whole campus (incl. agency/temps) ÷ estimated GWh produced",
  attrs:{den:"produced-estimated", cell:true, pack:"partial", upstream:false, construction:false,
         functions:"all", hc:"campus incl. agency/temp labor & on-site suppliers"},
  mx:{bias:"Overstates LGES cell labor, because suppliers and temps are in the worker count. The scope also drifts between statements, and the 2022 row pairs a 2021 headcount with 2022 output.", conf:"Low", confNote:"statement headcounts over estimated output"},
  pts:[
   {year:2022,t:5,v:184,disp:"~184",num:"~9,500 campus workforce (city statement, 2021 — incl. agency/temp & on-site suppliers; carried to 2022 per dossier §6)",numSrc:["IIW"],den:"~52 GWh est. = 70 GWh nameplate × 73.6% company-wide 가동률 (proxy; Wrocław likely ran above this mid-ramp)",denSrc:["KED","THEBELL"],q:"ESTIMATE",c:"Low",note:"9,500 ÷ ~52 = ~184. Headcount vintage (2021) vs denominator (2022) mismatch — treat as order-of-magnitude."},
   {year:2023,t:6,v:115,disp:"~115",num:"7,000 campus employees (LGES President Jangha Lee, Jul 2023)",numSrc:["LGWRO23"],den:"~61 GWh est. = 88 × 69.3% (company-wide proxy)",denSrc:["LGWRO23","THEBELL"],q:"ESTIMATE",c:"Low",note:"7,000 ÷ ~61 = ~115. Campus scope ≈ 2× legal entity — do not mix with the entity series."}
  ]},
 {id:"mi_name", site:"LGES Michigan", siteKey:"mi", colorHex:"#b45309", on:false, marker:"square", open:true, noline:true,
  label:"Michigan — workers ÷ capacity GWh (not actual output)",
  attrs:{den:"nameplate", cell:true, pack:false, upstream:false, construction:false,
         functions:"all", hc:"site headcount (mixes 'Michigan total' & 'Holland only' scopes)"},
  mx:{bias:"Understates the real figure whenever the plant runs below full capacity, which is always. The 2022 and 2025 points are not on the same capacity basis, because the plant switched from EV to LFP. Joint ventures such as Ultium are left out.", conf:"Low", confNote:"nameplate basis; produced GWh is missing"},
  pts:[
   {year:2022,t:9,v:299,disp:"~299",num:"~1,495 Michigan employees (incl. >1,300 Holland + Hazel Park/Troy offices)",numSrc:["WHIT"],den:"5 GWh nameplate (pre-expansion EV lines) — produced GWh not disclosed",denSrc:["LG681"],q:"SECONDARY / nameplate basis",c:"Low",note:"1,495 ÷ 5 = ~299. Large workforce on small installed base mid-expansion; NOT comparable to produced-basis points."},
   {year:2025,t:12,v:70,disp:"~70",num:"~1,500 Holland employees (at LFP plant opening)",numSrc:["CANARY"],den:"21.5 GWh site nameplate (5 EV + 16.5 LFP; LFP opened mid-year, 2 of 3 lines)",denSrc:["BTO_MI","SPW6"],q:"SECONDARY / nameplate basis",c:"Low",note:"1,500 ÷ 21.5 = ~70. Understates true intensity (util. <100%); capacity not full-year. At target staffing (~1,700) on the same 21.5 GWh: ~79."},
   {year:2026,t:13,v:57,disp:"~57 (target)",num:"~1,700 target headcount at full production",numSrc:["CANARY"],den:"30 GWh LFP-plant nameplate target (year-end 2026)",denSrc:["SPW7"],q:"TARGET",c:"Low",note:"1,700 ÷ 30 = ~57. Both numerator and denominator are targets, not actuals."}
  ]},
 {id:"mi_prod", site:"LGES Michigan", siteKey:"mi", colorHex:"#b45309", on:true, marker:"square",
  label:"Michigan — workers ÷ rough output estimate (~60% of capacity)",
  attrs:{den:"produced-estimated", cell:true, pack:false, upstream:false, construction:false,
         functions:"all", hc:"Holland site headcount"},
  mx:{bias:"A single illustrative point. The roughly 60 percent utilization is the global LGES blend, not Michigan's own rate, which is unknown while the plant is mid-conversion. Wide band.", conf:"Low", confNote:"assumed utilization"},
  pts:[
   {year:2025,t:12,v:116,disp:"~116",err:[87,155],num:"~1,500 Holland employees",numSrc:["CANARY"],den:"~12.9 GWh est. produced = 21.5 GWh × ~60% — the ~60% is the GLOBAL blended LGES rate used as a stand-in; Michigan's own rate is unknown (plant was mid EV→LFP conversion)",denSrc:["BTO_MI","THEBELL"],q:"ILLUSTRATIVE",c:"Low",note:"1,500 ÷ 12.9 = ~116. Single illustrative point — the dossier explicitly labels this not-Michigan-accurate. Wide error band reflects ±20 pp utilization uncertainty."}
  ]}
],

FITS: [
 {id:"fit_catl_adj_total", series:"catl_adj_total", colorHex:"#7f1d1d", type:"exp", Linf:201.1, A:98545, k:0.681, t0:9, t1:20, r2:0.994,
  wnd:"2021–2025 (5 pts)", asym:"L∞ ≈ 201", dispL:"201",
  note:"Headcount × battery-systems revenue share (81–89%, audited segment tables: power battery + ESS ÷ total revenue) strips materials, mining, recycling & other. Assumes equal revenue per employee across segments (±10–15%). 2019–20 points excluded for the same scale-up reason as the unadjusted fit."},
 {id:"fit_catl_adj_prod", series:"catl_adj_prod", colorHex:"#7f1d1d", type:"exp", Linf:159.0, A:503384, k:0.8898, t0:9, t1:20, r2:0.984, dash:"2,3",
  wnd:"2021–2025 (5 pts, all reported 生产人员)", asym:"L∞ ≈ 159", dispL:"159",
  note:"Best CATL proxy for battery-manufacturing direct labor, now on five post-scale-up years of directly-reported production personnel (生产人员: 65,364 / 89,080 / 81,817 / 96,725 / 145,568). Falls from ~325 (2021) toward ~159, with a small 2025 tick-up as production's share of the workforce rose to 78%. Deducting module/pack assembly labor (15–30% benchmark, Faraday/ICCT) gives a cell-only steady state ≈ 111–135 — the number to compare with the plant-level cell sites."},
 {id:"fit_catl_total", series:"catl_total", colorHex:"#b91c1c", type:"exp", Linf:230.7, A:224870, k:0.741, t0:9, t1:20, r2:0.999,
  wnd:"2021–2025 (5 pts)", asym:"L∞ ≈ 231", dispL:"231",
  note:"Unadjusted (includes materials/mining). Robust on the monotone post-scale-up segment. Fitting all 7 points (2019–25) is degenerate (L∞→0, R²=0.90) because 2019–20 predate the gigafactory scale-up — so the 2021–25 window is the honest choice, and it already includes the 2023 down-cycle and 2025 near-full utilization (96.9%)."},
 {id:"fit_catl_prod", series:"catl_prod", colorHex:"#b91c1c", type:"exp", Linf:181.4, A:1055001, k:0.9403, t0:9, t1:20, r2:0.994, dash:"2,3",
  wnd:"2021–2025 (5 pts)", asym:"L∞ ≈ 181", dispL:"181",
  note:"Unadjusted production personnel (incl. materials/recycling plant staff). Falls from ~403 (2021) toward ~181 across 2022–25."},
 {id:"fit_pena", series:"pena", colorHex:"#0f766e", type:"const", Linf:99.6, t0:6.5, t1:20,
  wnd:"FY2023–24 plateau (4 pts plotted)", asym:"≈ 100", dispL:"≈100 (plateau)",
  note:"An exponential fit is degenerate on these points (non-monotone: 96 in FY2021, then 126, 98, 101), so the steady state is reported as the FY2023–24 plateau mean, 99.6 ≈ 100. The FY2021 and FY2022 points (96 and 126) are early-ramp and are plotted but left out of the plateau. The denominator carries ±15–20%. On a total-headcount basis multiply by about 1.15 to 1.25, giving roughly 115 to 125."},
 {id:"fit_wro", series:"wro_ent", colorHex:"#4338ca", type:"const", Linf:79, t0:5, t1:20,
  wnd:"2022–2024 plateau (6 pts plotted)", asym:"≈ 79", dispL:"≈79",
  note:"On audited KRS headcount ÷ KRS revenue-route output, the ratio settles near ~79 across 2022–24 (82 → 76 → 79), well above the ~74 shown before with Revelio's undercounted payroll. Early-ramp years (2019–21) sit far higher and are excluded from the plateau. The nameplate × utilization cross-check would put the plateau near ~107 (the upper band); cell-vs-module ASP is the swing factor."},
 {id:"fit_mi", series:"mi_name", colorHex:"#b45309", type:"none",
  wnd:"—", dispL:"not fittable",
  note:"Two usable points sit on different bases (2022: 5 GWh EV nameplate mid-conversion; 2025: 21.5 GWh incl. new LFP plant), produced GWh is undisclosed, and the plant underwent an EV→LFP/ESS structural break in 2023–25. Any fitted long-run level would be invented. Directional expectation if 30 GWh (2026) and ~1,700 staff are realized at ~80% util.: ~57 nameplate / ~71 produced."}
],

TABLES: {
 segRev: {
  title:"CATL battery-systems revenue share (from the audited segment tables)",
  cols:["Year","Power battery rev (RMB mn)","ESS battery rev","Total revenue","Battery-systems share","Source"],
  rows:[
   ["2019","38,584","610","45,788","85.6%",["A19"]],
   ["2020","39,426","1,943","50,319","82.2%",["A20"]],
   ["2021","91,491","13,624","130,356","80.6%",["A21","BMK"]],
   ["2022","236,615","44,980","328,594","85.7%",["A22","BMK"]],
   ["2023","285,250","59,900","400,917","86.1%",["A23"]],
   ["2024","253,041 (69.90%)","57,290 (15.83%)","362,013","85.7%",["A24","CNEV"]],
   ["2025","316,510 (74.70%)","62,440 (14.74%)","423,700","89.4%",["A25","ESSN"]]
  ],
  note:"Remainder = battery materials & recycling (7.9% in 2024, falling to 5.2% in 2025), mineral resources, and 'other'. Used to allocate headcount to the battery business — assumes equal revenue per employee across segments."
 }
},

/* Puts the three comparable sites on one common ("normalized") definition.
   Normalized basis = PERMANENT plant-site employees ÷ GWh actually produced
   (temp/agency workers and construction crews left out — project decision Jul 1, 2026). */
RECON: {
 h1:"Normalized basis: PERMANENT plant-site employees ÷ GWh actually produced. Temp/agency workers, on-site suppliers, and construction crews are left out, so the sites are compared on the same footing. Conveniently, each site's cleanest headcount already approximates this basis: PENA's audited QE excludes temps and <3-month hires; Wrocław's legal-entity count excludes agency labor and on-site suppliers; CATL's consolidated count excludes dispatch (劳务派遣) workers.",
 asym:"Known asymmetry to keep in view: the SHARE of work done by the excluded temp layer differs by site — largest at Wrocław, where the campus runs ≈1.6–1.9× the legal entity, i.e. roughly 40–50% of on-site workers are agency/temp (+ suppliers) excluded from the entity count, so its normalized value runs low relative to PENA and CATL. Upper-bound (campus-basis) variants are shown for exactly this reason.",
 capnote:"Adjusted for how full each plant runs: dividing the same normalized worker count by full capacity (instead of GWh actually produced) strips out the demand cycle. It assumes staffing stays roughly flat as output rises toward capacity — so the true full-capacity level sits between the produced-basis and capacity-basis figures.",
 ladders:[
  {id:"pena", site:"PENA Nevada", colorHex:"#0f766e",
   steps:[
    {label:"Headline (FY2024)", val:"~101", how:"3,445 audited QE ÷ ~34 GWh (derived from cumulative cell milestones × ~18 Wh/cell)", src:["G24","PAN10B","BTO"], assume:"denominator ±15–20%"},
    {label:"Adjust to permanent staff", val:"~101 — unchanged", how:"QE already excludes temps and <3-month hires, matching the permanent-staff basis", src:["G24"], assume:"low steady-state churn → QE ≈ permanent payroll; adding short-tenure staff back would give ×1.15–1.25 → ~116–126"},
    {label:"Denominator cross-check — IRA 45X route (new research)", val:"~31.6 GWh → ~109", how:"Panasonic booked ~¥80bn of IRA credit into FY3/24 adjusted OP and states it recognizes ≈half of the total subsidy → total ≈ ¥160bn ≈ $1.11bn @ ¥144.6/$ ÷ $35/kWh ≈ 31.6 GWh, vs ~34 from cell counts", src:["MONOIST","PANIR"], assume:"'half booked' policy holds for the period; ≈all credit is Nevada (Kansas ramped only from FY24Q4); fiscal-year timing offset ignored"},
    {label:"Normalized result", val:"≈ 100–115", how:"3,445 ÷ 30–34 GWh — the two independent denominator routes (cell counts, 45X) bracket each other within ~10%", src:[], assume:""}
   ]},
  {id:"wro", site:"LGES Wrocław", colorHex:"#4338ca",
   steps:[
    {label:"Headline (2022–24)", val:"~76–82 (plateau ≈79)", how:"audited KRS legal-entity headcount ÷ produced GWh (KRS filed revenue ÷ cell ASP) — numerator and denominator from the same filing", src:["KRS_BIZ"], assume:"revenue includes some module/pack sales, so cell GWh may be overstated (intensity understated)"},
    {label:"Adjust to permanent staff", val:"unchanged", how:"the KRS legal entity is already LGES's own permanent payroll; agency temps (employed by agencies) are excluded, matching the normalized basis", src:["KRS_BIZ"], assume:"no numerator adjustment needed — the entity ≈ the operational campus"},
    {label:"Denominator cross-check — nameplate × utilization", val:"2023: ~107", how:"nameplate ~88 × ~69% util ≈ 61 GWh; 6,546 ÷ 61 = ~107. The revenue route and this cross-check bracket ~76–107", src:["THEBELL","LGWRO23"], assume:"cell-vs-module ASP is the swing factor between the two routes"},
    {label:"Normalized result", val:"≈ 79 (band 76–107)", how:"same as the headline — Wrocław needs no normalization adjustment (KRS legal entity already permanent and ≈ the operational campus)", src:["KRS_BIZ"], assume:"residual bias is a small agency/supplier layer (~7%)"}
   ]},
  {id:"catl", site:"CATL (fleet average)", colorHex:"#7f1d1d",
   steps:[
    {label:"Headline (2024)", val:"~161 — wrong function scope for the normalized basis", how:"battery-allocated production personnel ÷ produced GWh excludes office/engineering staff that PENA and Wrocław counts include", src:["A24","CNEV"], assume:""},
    {label:"All functions, year-AVERAGE headcount", val:"206 (2024) · 190 (2025)", how:"avg(year-start, year-end) total employees × battery-systems revenue share ÷ produced GWh: (116,055+131,988)/2 × 85.7% ÷ 516 = 206; (131,988+185,839)/2 × 89.4% ÷ 748 = 190", src:["A23","A24","A25"], assume:"year-averaging corrects the year-end snapshot during rapid hiring (year-end basis would give 219/222)"},
    {label:"Remove group R&D / central functions", val:"174 (2024) · 167 (2025)", how:"× (1 − R&D share): 15.42% (2024), 12.32% (2025) — a single plant carries little of the group's central R&D", src:["A24","A25"], assume:"treats ALL R&D as central; if half is plant-embedded process engineering, results rise ~9%"},
    {label:"Remove module/pack assembly labor", val:"122–148 (2024) · 117–142 (2025)", how:"× 0.70–0.85 (module/pack = 15–30% of battery production labor)", src:["FARADAY","ICCT"], assume:"Western staffing benchmark applied to CATL automation levels"},
    {label:"Dispatch labor (劳务派遣) — open item", val:"unquantified (+)", how:"consolidated headcount excludes dispatch workers, consistent with the normalized basis leaving out temps; the AR's dispatch disclosure was not retrievable in this pass — if the dispatch share of production work is material, CATL's normalized value understates comparably to Wrocław's", src:[], assume:"direction: would RAISE a temp-inclusive figure, not the normalized one"},
    {label:"Normalized result", val:"≈ 115–150", how:"2024 and 2025 ladders overlap on this range", src:[], assume:""}
   ]}
 ],
 summary:{
  cols:["Site","Normalized: permanent ÷ GWh produced (long-run)","Temp-inclusive upper bound","Adjusted for full capacity (÷ nameplate)","How full the plant runs (in the value)","Main remaining bias"],
  rows:[
   ["PENA Nevada","≈ 100–115","≈ 116–126 (payroll incl. short-tenure)","≈ 86 (3,445 ÷ ~40)","~85–89%","modeled denominator (two routes bracket it within ~10%)"],
   ["LGES Wrocław","≈ 79 (KRS revenue route; nameplate cross-check ~107)","≈ 79 (campus ≈ entity, no temp gap)","≈ 74 (6,546 ÷ 88, 2023)","~60–69%","KRS workers ÷ KRS revenue-route output (same filing); cell-vs-module ASP swings it 76–107"],
   ["CATL (fleet avg)","≈ 115–150","n/a — dispatch labor unquantified (would raise it)","≈ 93–113 (2024) · ≈ 113–137 (2025)","76.3% (2024) · 96.9% (2025)","fleet+group averaging; pack-labor benchmark; revenue-share allocation"]
  ]},
 sens:{
  title:"CATL sensitivity tests (strategy 4)",
  cols:["Test","Method & sources","Result / verdict"],
  rows:[
   ["Allocation basis: revenue vs gross-profit share","2024 battery gross profit = 253,041×23.94% + 57,290×26.84% = ¥76.0bn ÷ company gross profit ¥88.5bn (362,013 × 24.44%) = 85.8% GP share vs 85.7% revenue share; 2025 (3 disclosed segments): 93.9% GP vs 94.5% revenue",["ZJIC","SINAESS","A24"],"<1 pp → <1% intensity. Robust."],
   ["Labor-weighted allocation","If materials/mining employ 1.5–2× workers per revenue unit, battery employee share falls 85.7% → 80.0% / 75.0% (2024)",[],"Intensity ×0.93 / ×0.88 → normalized lower edge stretches to ~102."],
   ["R&D removal assumption","If half of group R&D is plant-embedded (not central), remove only half the R&D share",[],"×1.09 → normalized upper edge stretches to ~161."],
   ["Module/pack labor band","15–30% of battery production labor (already carried through every result)",["FARADAY","ICCT"],"±10% around the midpoint; the dominant single assumption."]
  ],
  verdict:"CATL's normalized value is robust within ≈ 100–160 (central ≈ 130) across all four tests; no single assumption reorders the three sites."},
 /* Before/after visualization: "before" = the headline series exactly as in §1;
    "after" = the normalization applied to EVERY year of each series. */
 viz:{
  beforeIds:["catl_adj_prod","pena","wro_ent"],
  beforeFitIds:["fit_catl_adj_prod","fit_pena","fit_wro"],
  after:[
   {id:"h1_catl", siteKey:"catl", colorHex:"#7f1d1d", marker:"circle", mx:{bias:"The apples-to-apples basis: permanent battery-cell workers ÷ GWh produced, with temps, construction, non-cell business and central R&D removed. Remaining bias comes from fleet-and-group averaging, the pack-labor benchmark and the revenue-share allocation. Dispatch (劳务派遣) labor is excluded and unquantified.", conf:"Medium", confNote:"built via the ladder below"},
    label:"CATL — normalized: year-average permanent staff, battery-only, minus central R&D and pack labor ÷ GWh produced",
    attrs:{den:"produced-disclosed", cell:true, pack:"removed (15–30% benchmark)", upstream:"allocated out", construction:false, functions:"all", hc:"year-average permanent employees, battery-allocated, ex-group-R&D"},
    pts:[
     {year:2020,t:8,v:306,disp:"~306",err:[277,336],num:"year-avg (26,775+33,078)/2 = 29,927 employees × 82.2% battery share = 24,600; − 16.91% R&D → 20,441; × 0.70–0.85 pack deduction",numSrc:["A19","A20"],den:"51.71 GWh produced (disclosed)",denSrc:["A20"],q:"NORMALIZED",c:"Medium",note:"Ladder: 475.7 all-functions → 395.3 ex-R&D → 277–336 cell-only permanent (central ×0.775 = 306). COVID year, pre-scale-up. Pack benchmark: Faraday/ICCT; allocation ±10–15% additional."},
     {year:2021,t:9,v:194,disp:"~194",err:[175,212],num:"year-avg 57,200 × 80.6% = 46,103; − 12.06% R&D → 40,543; × 0.70–0.85",numSrc:["A20","A21"],den:"162.30 GWh produced",denSrc:["A21"],q:"NORMALIZED",c:"Medium",note:"284.1 → 249.8 → 175–212 (central 194)."},
     {year:2022,t:10,v:179,disp:"~179",err:[161,196],num:"year-avg 101,250 × 85.7% = 86,771; − 13.73% R&D → 74,858; × 0.70–0.85",numSrc:["A21","A22"],den:"325 GWh produced",denSrc:["A22"],q:"NORMALIZED",c:"Medium",note:"267.0 → 230.3 → 161–196 (central 179)."},
     {year:2023,t:11,v:166,disp:"~166",err:[150,182],num:"year-avg 117,478 × 86.1% = 101,148; − 17.75% R&D → 83,194; × 0.70–0.85",numSrc:["A22","A23"],den:"389 GWh produced",denSrc:["A23"],q:"NORMALIZED",c:"Medium",note:"260.0 → 213.9 → 150–182 (central 166)."},
     {year:2024,t:12,v:135,disp:"~135",err:[122,148],num:"year-avg 124,022 × 85.7% = 106,287; − 15.42% R&D → 89,898; × 0.70–0.85",numSrc:["A23","A24"],den:"516 GWh produced",denSrc:["A24"],q:"NORMALIZED",c:"Medium",note:"206.0 → 174.2 → 122–148 (central 135)."},
     {year:2025,t:13,v:129,disp:"~129",err:[117,142],num:"year-avg 158,914 × 89.4% = 142,069; − 12.32% R&D → 124,575; × 0.70–0.85",numSrc:["A24","A25"],den:"748 GWh produced",denSrc:["A25"],q:"NORMALIZED",c:"Medium",note:"189.9 → 166.5 → 117–142 (central 129). Dispatch labor (excluded by the normalized basis) remains unquantified."}
    ]},
   {id:"h1_pena", siteKey:"pena", colorHex:"#0f766e", marker:"circle", mx:{bias:"The apples-to-apples basis: audited permanent workers ÷ GWh produced. The worker count barely changes from the reported figure because audited QE already excludes temps. Remaining bias is the modeled denominator, which two independent routes bracket within about 10 percent.", conf:"Medium", confNote:"built via the ladder below"},
    label:"PENA Nevada — normalized: audited permanent workers ÷ GWh produced",
    attrs:{den:"produced-derived", cell:true, pack:false, upstream:false, construction:false, functions:"all", hc:"audited Qualified Employees (permanent basis)"},
    pts:[
     {year:2021.5,t:4.5,v:96,disp:"~96",yr:"FY2021 (Jun 30, 2021)",err:[79,122],num:"2,690 audited QE — already permanent-basis",numSrc:["G22"],den:"~28 GWh — cell-count route (45X credit began Jan 2023)",denSrc:["WIKI_GF"],q:"NORMALIZED",c:"Medium",note:"Identical to the headline point: the normalized worker count is unchanged for PENA. Early-ramp, plotted but outside the plateau."},
     {year:2022.5,t:5.5,v:126,disp:"~126",yr:"FY2022 (Jun 30, 2022)",err:[105,148],num:"4,026 audited QE — already permanent-basis, unchanged from headline",numSrc:["G22"],den:"~32 GWh — cell-count route only (45X credit began Jan 2023)",denSrc:["WIKI_GF","PAN10B"],q:"NORMALIZED",c:"Medium",note:"Identical to the headline point: the normalized worker count is unchanged for PENA."},
     {year:2023.5,t:6.5,v:98,disp:"~98",yr:"FY2023 (Jun 30, 2023)",err:[82,115],num:"3,330 audited QE",numSrc:["G23"],den:"~34 GWh — cell-count route (45X spans only part of this fiscal year; not used)",denSrc:["WIKI_GF"],q:"NORMALIZED",c:"Medium",note:"Identical to the headline point."},
     {year:2024.5,t:7.5,v:108,disp:"~108",yr:"FY2024 (Jun 30, 2024)",err:[101,115],num:"3,445 audited QE",numSrc:["G24"],den:"30–34 GWh — cell-count route ~34 and IRA-45X route ~31.6 bracket the denominator; central 32",denSrc:["PAN10B","BTO","MONOIST","PANIR"],q:"NORMALIZED",c:"Medium",note:"3,445 ÷ 32 = ~108, band 101–115. The 45X cross-check narrows the ±15–20% band and nudges the central value up from ~101."}
    ]},
   {id:"h1_wro", siteKey:"wro", colorHex:"#4338ca", marker:"circle", mx:{bias:"The apples-to-apples basis: audited KRS permanent payroll ÷ GWh produced. Only lightly biased low now — the excluded agency layer is small (the legal entity ≈ the whole campus by 2023), not the ~50% once assumed. The denominator (produced GWh) is still an estimate and the main uncertainty.", conf:"Low", confNote:"built via the ladder below"},
    label:"Wrocław — normalized: KRS permanent payroll ÷ GWh produced",
    attrs:{den:"produced-estimated", cell:true, pack:"partial", upstream:false, construction:false, functions:"all", hc:"KRS legal entity (permanent; small agency layer excluded)"},
    pts:[
     {year:2021,t:4,v:97,disp:"~97",err:[85,120],num:"5,172 KRS-audited employees",numSrc:["KRS_BIZ"],den:"~53 GWh via KRS revenue (27.46bn PLN ≈ $7.1bn) ÷ ~$135/kWh cell ASP",denSrc:["KRS_BIZ"],q:"NORMALIZED",c:"Low",note:"5,172 ÷ ~53 = ~97."},
     {year:2022,t:5,v:82,disp:"~82",err:[73,93],num:"6,094 KRS-audited employees",numSrc:["KRS_BIZ"],den:"~74 GWh via KRS revenue (40.80bn PLN ≈ $9.1bn) ÷ ~$125/kWh",denSrc:["KRS_BIZ"],q:"NORMALIZED",c:"Low",note:"6,094 ÷ ~74 = ~82. Both numerator and denominator now come from the same audited KRS filing."},
     {year:2023,t:6,v:76,disp:"~76",err:[67,88],num:"6,546 KRS-audited employees",numSrc:["KRS_BIZ"],den:"~86 GWh via KRS revenue (40.73bn PLN ≈ $9.7bn) ÷ ~$113/kWh",denSrc:["KRS_BIZ"],q:"NORMALIZED",c:"Low",note:"6,546 ÷ ~86 = ~76."},
     {year:2024,t:7,v:79,disp:"~79",err:[69,91],num:"4,249 KRS-audited employees (−35% cut)",numSrc:["KRS_BIZ"],den:"~54 GWh via KRS revenue (23.49bn PLN ≈ $5.8bn) ÷ ~$108/kWh",denSrc:["KRS_BIZ"],q:"NORMALIZED",c:"Low",note:"4,249 ÷ ~54 = ~79. Revenue and headcount both fell."}
    ]}
  ],
  afterFits:[
   {id:"fit_h1_catl", series:"h1_catl", colorHex:"#7f1d1d", type:"exp", Linf:134.3, A:30813, k:0.681, t0:9, t1:20, r2:0.828, kFixed:true,
    wnd:"2021–2025 (5 pts, k fixed at 0.681)", asym:"L∞ ≈ 134", dispL:"≈134",
    note:"A free-form fit on the normalized series won't settle (L∞→0): unlike the raw series, the normalized one is still falling ~5%/yr in 2024–25, so the long-run level isn't pinned down by the data alone. Borrowing k from the battery-business fit gives L∞ ≈ 134 (R² 0.83) — read it as 'the normalized long-run level is ≈115–150, most likely ~130, and not yet fully settled'."},
   {id:"fit_h1_pena", series:"h1_pena", colorHex:"#0f766e", type:"const", Linf:102.8, t0:6.5, t1:20,
    wnd:"FY2023–FY2024 (2 pts)", asym:"≈ 103", dispL:"≈103 (plateau)",
    note:"Average of the normalized points 98 and 108 — slightly above the headline ≈100 because the 45X route pulls the FY2024 denominator down."},
   {id:"fit_h1_wro", series:"h1_wro", colorHex:"#4338ca", type:"const", Linf:79, t0:5, t1:20,
    wnd:"2022–2024 (revenue route)", asym:"≈ 79", dispL:"≈79",
    note:"Flat ~79 across 2022–24 on audited KRS payroll ÷ revenue-route GWh. Only lightly biased low now (small agency layer), a marked change from the earlier ~73 which used undercounted Revelio payroll."}
  ]
 },
 conclusion:"Normalized long-run ordering: Wrocław ≈ 65–90 (partly because Poland's agency production labor is excluded here) < PENA ≈ 100–115 < CATL ≈ 115–150 (fleet + group residuals; possibly offset by uncounted dispatch labor). Adjusted for full capacity, PENA (~86) and Wrocław campus (~80) sit near the Faraday ~70/GWh capacity benchmark while CATL spans ~93–137. Best single statement: a mature plant's long-run level is ≈ 80–120 permanent workers per GWh at full utilization, with CATL's residual premium attributable to group scope and product/format mix rather than demonstrated plant-level inefficiency."
},

/* CATL headcount decomposition — the four layers from reported total workforce
   down to cell-only manufacturing labor. Only the raw inputs are stored; the
   renderer derives Layers 3 and 4 so every number traces to a reported figure
   or a single stated assumption. Layer-3 ÷ produced GWh = catl_adj_prod; the
   Layer-4 band ÷ GWh is the cell-only intensity the normalization converges to. */
CATL_LAYERS: {
 packLo:0.70, packHi:0.85,
 shareNote:"battery-systems revenue share = (power battery + ESS) ÷ total revenue, from the audited segment tables. Assumption: equal revenue per employee across segments (±10–15%); this strips production staff at the materials / mining / recycling plants.",
 packNote:"Assumption: module/pack assembly is 15–30% of battery-systems production labor (Faraday / ICCT benchmark; a Western staffing ratio applied to CATL's automation level). Removing it leaves cell-only manufacturing labor.",
 years:[
  {year:2019, total:26775, prod:15129, prodQ:"PRIMARY", share:0.856, gwh:47.26,
   totalSrc:["A19"], prodSrc:["A19"], shareSrc:["A19"], gwhSrc:["A20"],
   prodNote:"生产人员 15,129, read directly from the 2019 AR 专业构成 table (56.5% of workforce)."},
  {year:2020, total:33078, prod:20674, prodQ:"PRIMARY", share:0.822, gwh:51.71,
   totalSrc:["A20"], prodSrc:["A20"], shareSrc:["A20"], gwhSrc:["A20"],
   prodNote:"生产人员 20,674, read directly from the 2020 AR 专业构成 table (62.5% of workforce)."},
  {year:2021, total:83601, prod:65364, prodQ:"PRIMARY", share:0.806, gwh:162.30,
   totalSrc:["A21"], prodSrc:["A21"], shareSrc:["A21","BMK"], gwhSrc:["A21"],
   prodNote:"生产人员 65,364, read directly from the 2021 AR 专业构成 table (78.2% of workforce). (The 44,690 once used was that year's net-add, not the total.)"},
  {year:2022, total:118914, prod:89080, prodQ:"PRIMARY", share:0.857, gwh:325,
   totalSrc:["A22"], prodSrc:["A22"], shareSrc:["A22","BMK"], gwhSrc:["A22"],
   prodNote:"生产人员 89,080, read directly from the 2022 AR 专业构成 table (74.9% of workforce)."},
  {year:2023, total:116055, prod:81817, prodQ:"PRIMARY", share:0.861, gwh:389,
   totalSrc:["A23"], prodSrc:["A23"], shareSrc:["A23"], gwhSrc:["A23"],
   prodNote:"生产人员, reported directly (70.5% of workforce)."},
  {year:2024, total:131988, prod:96725, prodQ:"PRIMARY", share:0.857, gwh:516,
   totalSrc:["A24"], prodSrc:["A24"], shareSrc:["A24","CNEV"], gwhSrc:["A24"],
   prodNote:"生产人员, reported directly (73.3% of workforce)."},
  {year:2025, total:185839, prod:145568, prodQ:"PRIMARY", share:0.894, gwh:748,
   totalSrc:["A25"], prodSrc:["A25"], shareSrc:["A25","ESSN"], gwhSrc:["A25"],
   prodNote:"生产人员, reported directly (78.3% of workforce)."}
 ]
},

SITES: [
 {id:"catl", name:"CATL", colorHex:"#b91c1c",
  scope:"Consolidated group headcount = parent + subsidiaries. The PARENT is the listed entity, 宁德时代新能源科技股份有限公司 (CATL Co., Ltd., Ningde HQ, SZSE 300750) — head office, core R&D, and Fujian base plants. The SUBSIDIARIES are its controlled companies: the regional cell megafactories (Sichuan / Jiangsu / Guangdong / Qinghai Times, etc.), Brunp recycling, upstream mining/materials JVs, battery-swap (EVOGO), ESS integration, and overseas units (Germany, Hungary). The consolidated total (parent + subsidiaries) is the correct labor-intensity basis; parent-only counts (~33k in 2021, ~62k in 2022) exclude the subsidiary factories where most workers are and badly understate it. Covers cells + materials, mining, recycling, battery-swap, ESS. Audited annual reports, Shenzhen SE.",
  caveats:{
   headcount:"Consolidated group headcount = the listed parent (Ningde HQ, core R&D, Fujian base plants) plus its subsidiaries (regional cell megafactories, Brunp recycling, upstream mining and materials, battery-swap, ESS integration, overseas units). That consolidated total is the correct basis, not any single factory. Parent-only figures (~33k in 2021, ~62k in 2022) circulating in third-party sources understate it badly. Total, production (生产人员) and R&D headcounts are each reported directly in every annual report, so nothing is reconstructed. The 2023 dip is real (a price-war year), not an artifact.",
   output:"Capacity is a year-end snapshot while production is a full-year flow, so fast-build years look less utilized than they were. 2019 capacity and utilization weren't disclosed (the disclosure rule began in FY2020).",
   intensity:"'Plant age' is measured from 2012 (first mass production), so the curve blends plants of different ages. To isolate cell-plant labor, the main series keeps only the battery-business share of headcount (81–89%, from the audited revenue split, assuming equal revenue per worker across businesses), then optionally removes a 15–30% module/pack allowance (a Western benchmark applied to CATL's automation). Both are assumptions and are labeled as such."
  },
  charts:{
   headcount:{unit:"employees", pts:[
    {year:2019,v:26775,disp:"26,775",lbl:"Total employees",q:"PRIMARY",c:"High",src:["A19"],note:"Reported, consolidated, year-end."},
    {year:2020,v:33078,disp:"33,078",lbl:"Total employees",q:"PRIMARY",c:"High",src:["A20"],note:"Reported consolidated in-service headcount (2020 AR)."},
    {year:2021,v:83601,disp:"83,601",lbl:"Total employees",q:"PRIMARY",c:"High",src:["A21"],note:"Reported consolidated (2021 AR); +50,523 vs 2020. Parent-entity-only figures (~33k) circulating for 2021 are the wrong basis — this is the consolidated count."},
    {year:2022,v:118914,disp:"118,914",lbl:"Total employees",q:"PRIMARY",c:"High",src:["A22"],note:"Reported consolidated in-service headcount (2022 AR)."},
    {year:2023,v:116055,disp:"116,055",lbl:"Total employees",q:"PRIMARY",c:"High",src:["A23"],note:"Reported. Real dip (price-war year), not an artifact."},
    {year:2024,v:131988,disp:"131,988",lbl:"Total employees",q:"PRIMARY",c:"High",src:["A24"],note:"Reported."},
    {year:2025,v:185839,disp:"185,839",lbl:"Total employees",q:"PRIMARY",c:"High",src:["A25"],note:"Reported consolidated (2025 AR). ≈16,200 in the listed parent entity + ≈169,600 in subsidiaries (approximate split)."},
    {year:2019,v:15129,disp:"15,129",lbl:"Production personnel (生产人员)",series2:true,q:"PRIMARY",c:"High",src:["A19"],note:"56.5% of workforce (2019 AR 专业构成 table, p.72)."},
    {year:2020,v:20674,disp:"20,674",lbl:"Production personnel (生产人员)",series2:true,q:"PRIMARY",c:"High",src:["A20"],note:"62.5% of workforce (2020 AR 专业构成 table, p.70)."},
    {year:2021,v:65364,disp:"65,364",lbl:"Production personnel (生产人员)",series2:true,q:"PRIMARY",c:"High",src:["A21"],note:"78.2% of workforce (2021 AR 专业构成 table, p.57). The 44,690 once used here was this year's NET ADD of production staff (88.5% of the +50,523 hiring), not the total."},
    {year:2022,v:89080,disp:"89,080",lbl:"Production personnel (生产人员)",series2:true,q:"PRIMARY",c:"High",src:["A22"],note:"74.9% of workforce (2022 AR 专业构成 table, p.53). Dips to 81,817 in the 2023 price-war year."},
    {year:2023,v:81817,disp:"81,817",lbl:"Production personnel (生产人员)",series2:true,q:"PRIMARY",c:"High",src:["A23"],note:"70.5% of workforce (reported directly)."},
    {year:2024,v:96725,disp:"96,725",lbl:"Production personnel (生产人员)",series2:true,q:"PRIMARY",c:"High",src:["A24"],note:"73.3% of workforce (reported directly)."},
    {year:2025,v:145568,disp:"145,568",lbl:"Production personnel (生产人员)",series2:true,q:"PRIMARY",c:"High",src:["A25"],note:"78.3% of workforce (reported directly)."}
   ]},
   gwh:{unit:"GWh / yr", pts:[
    {year:2019,v:47.26,disp:"47.26",lbl:"Produced (产量)",q:"PRIMARY",c:"High",src:["A20"],note:"2020 AR comparative column."},
    {year:2020,v:51.71,disp:"51.71",lbl:"Produced (产量)",q:"PRIMARY",c:"High",src:["A20"],note:""},
    {year:2021,v:162.30,disp:"162.30",lbl:"Produced (产量)",q:"PRIMARY",c:"High",src:["A21"],note:""},
    {year:2022,v:325,disp:"325",lbl:"Produced (产量)",q:"PRIMARY",c:"High",src:["A22"],note:""},
    {year:2023,v:389,disp:"389",lbl:"Produced (产量)",q:"PRIMARY",c:"High",src:["A23"],note:""},
    {year:2024,v:516,disp:"516",lbl:"Produced (产量)",q:"PRIMARY",c:"High",src:["A24"],note:"Cross-check: 516 ÷ 676 = 76.3% = reported utilization ✓"},
    {year:2025,v:748,disp:"748",lbl:"Produced (产量)",q:"PRIMARY",c:"High",src:["A25"],note:"Cross-check: 748 ÷ 772 = 96.9% ✓"},
    {year:2020,v:69.10,disp:"69.10",lbl:"Nameplate capacity (产能)",series2:true,q:"PRIMARY",c:"High",src:["A20"],note:"First year the disclosure rule applied; 2019 capacity is a GAP."},
    {year:2021,v:170.39,disp:"170.39",lbl:"Nameplate capacity (产能)",series2:true,q:"PRIMARY",c:"High",src:["A21"],note:""},
    {year:2022,v:390,disp:"390",lbl:"Nameplate capacity (产能)",series2:true,q:"PRIMARY",c:"High",src:["A22"],note:"Year-end snapshot vs full-year production flow — depresses reported utilization in fast-build years."},
    {year:2023,v:552,disp:"552",lbl:"Nameplate capacity (产能)",series2:true,q:"PRIMARY",c:"High",src:["A23"],note:""},
    {year:2024,v:676,disp:"676",lbl:"Nameplate capacity (产能)",series2:true,q:"PRIMARY",c:"High",src:["A24"],note:""},
    {year:2025,v:772,disp:"772",lbl:"Nameplate capacity (产能)",series2:true,q:"PRIMARY",c:"High",src:["A25"],note:""}
   ]},
   util:{unit:"%", pts:[
    {year:2020,v:74.83,disp:"74.83%",lbl:"Utilization",q:"PRIMARY",c:"High",src:["A20"],note:"Disclosed in the AR 产销情况 (产能利用率) table."},
    {year:2021,v:95.00,disp:"95.00%",lbl:"Utilization",q:"PRIMARY",c:"High",src:["A21"],note:""},
    {year:2022,v:83.4,disp:"83.4%",lbl:"Utilization",q:"PRIMARY",c:"High",src:["A22"],note:""},
    {year:2023,v:70.47,disp:"70.47%",lbl:"Utilization",q:"PRIMARY",c:"High",src:["A23"],note:""},
    {year:2024,v:76.33,disp:"76.33%",lbl:"Utilization",q:"PRIMARY",c:"High",src:["A24"],note:""},
    {year:2025,v:96.9,disp:"96.9%",lbl:"Utilization",q:"PRIMARY",c:"High",src:["A25"],note:""}
   ]}
  },
  extraRows:[
   {yr:"2019–25",metric:"Sales volume (GWh sold)",val:"40.96 / 46.84 / 133.41 / 289 / 390 / 475 / 661",q:"PRIMARY",c:"High",src:["A20","A21","A22","A23","A24","A25"],note:"Sold ≠ produced; inventory build visible in most years."},
   {yr:"2019–25",metric:"R&D / technical personnel (技术人员)",val:"5,364 / 5,592 / 10,079 / 16,322 / 20,604 / 20,346 / 22,901",q:"PRIMARY",c:"High",src:["A20","A21","A22","A23","A24","A25"],note:"12–20% of the workforce — part of why total-employee intensity overstates cell labor. Reported in the same 专业构成 (professional-composition) table as production personnel."},
   {yr:"2019–25",metric:"Battery-systems revenue share (power + ESS ÷ total revenue)",val:"85.6% / 82.2% / 80.6% / 85.7% / 86.1% / 85.7% / 89.4%",q:"PRIMARY",c:"High",src:["A19","A20","A21","A22","A23","A24","A25","BMK","CNEV","ESSN"],note:"From the audited segment tables (e.g. 2024: power 253,041 + ESS 57,290 of 362,013 RMB mn). Used to allocate headcount to the battery business — assumes equal revenue per employee across segments."},
   {yr:"2019",metric:"Capacity & utilization",val:"not disclosed",q:"GAP",c:"—",src:[],note:"ChiNext disclosure rule took effect FY2020."}
  ]},
 {id:"pena", name:"Panasonic Energy (PENA) — Gigafactory Nevada", colorHex:"#0f766e",
  scope:"Cell manufacturing only (2170 cylindrical), leased space inside Tesla's building. Headcount = audited Qualified Employees (Nevada NRS 360.975, Eide Bailly). Tesla pack/drive-unit/4680 staff excluded. Construction workers tracked separately and excluded.",
  caveats:{
   headcount:"Scope is cell manufacturing only (2170 cylindrical cells) in leased space inside Tesla's building. Tesla's pack and 4680 staff are not counted. Headcount is audited Qualified Employees (QE), a June-30 snapshot equal to roughly 80–85% of total payroll. The FY2025 drop to 556 (net −2,889, while Tesla's QE rose +1,487) lines up with Panasonic's global restructuring and ramp delay. It could be a real cut, a reclassification, or a QE-definition artifact, so it's excluded from the ratios. Construction workers are counted separately (project-wide only) and left out.",
   output:"Produced GWh isn't disclosed. It's built up from cumulative cell-count milestones (±15–20%), and those milestone dates lag the actual production by a few months.",
   intensity:"After 2025 the ratio loses meaning: Tesla's own 4680/LFP lines mean Nevada cell work is no longer ~100% PENA. The audited worker count ÷ modeled GWh is an honest band (~85–120), not a precise number."
  },
  charts:{
   headcount:{unit:"employees", pts:[
    {year:2019,v:3200,disp:"~3,200",lbl:"Total workforce (news)",series2:true,q:"SECONDARY",c:"Low",src:["WIKI_GF"],note:"~3,000 US + ~200 JP technicians."},
    {year:2020.2,v:3500,disp:"~3,500",lbl:"Total workforce (news)",series2:true,q:"SECONDARY",c:"Medium",src:["TC20"],note:"March 2020, pre-COVID pull-out."},
    {year:2024.3,v:4250,disp:"~4,000–4,500",lbl:"Total workforce (news)",series2:true,q:"SECONDARY",c:"Medium",src:["NVAPP"],note:"“More than 4,000, nearing 4,500” — supports QE ≈ 80–85% of payroll.",err:[4000,4500]},
    {year:2021.5,v:2690,disp:"2,690",lbl:"Qualified Employees (audited)",q:"PRIMARY",c:"High",src:["G22"],note:"PENA project-to-date QE as of Jun 30, 2021 = 2,690 — now CONFIRMED directly against the audited GOED FY2022 report (period Jul 2021–Jun 2022): its Exhibit C reports PENA reporting-period net NQE = +1,336 on a 4,026 project-to-date total, so the prior-year (FY2021) PTD ties out to exactly 2,690. It is the audited FY2021 total, not an estimate. It reads low next to press headcounts (Panasonic ~4,000 by Dec 2021) because QE is a narrower, lagged measure — an audited Jun-30 count of employees past the 3-month-tenure + wage/health bar, trailing total payroll during a ramp. Trajectory is coherent: 2,690 QE (Jun 2021) → ~4,000 payroll (Dec 2021, press) → 4,026 QE (Jun 2022)."},
    {year:2022.5,v:4026,disp:"4,026",lbl:"Qualified Employees (audited)",q:"PRIMARY",c:"High",src:["G22"],note:"GOED/Eide-Bailly Exhibit C, 'Project to Date' column as of Jun 30, 2022 — the cumulative-net (current) count of qualified employees, i.e. the TOTAL, not the reporting-period net add. Each report states this total directly; the smaller 'Reporting Period' NQE (net hires−departures) is separate. Wage $30.06/hr."},
    {year:2023.5,v:3330,disp:"3,330",lbl:"Qualified Employees (audited)",q:"PRIMARY",c:"High",src:["G23"],note:"Net −696 (gross hired 640, departures 1,336). Wage $30.41/hr."},
    {year:2024.5,v:3445,disp:"3,445",lbl:"Qualified Employees (audited)",q:"PRIMARY",c:"High",src:["G24"],note:"Net +115 (gross 941, departures 826). Wage $31.75/hr."},
    {year:2025.5,v:556,disp:"556 ⚠ anomaly",lbl:"Qualified Employees (audited)",q:"PRIMARY",c:"Low",src:["G25"],note:"The figure itself is audited and reported, but its meaning is not: a net drop of 2,889 in one year, while Tesla's own QE rose +1,487, points to a reclassification or a change in how QE was counted rather than 2,889 people leaving. Coincides with Panasonic's global restructuring and a ramp delay. Excluded from intensity ratios. Confidence is Low because the number is not representative of the plant's workforce, not because the source is weak. Wage $31.78/hr."}
   ]},
   gwh:{unit:"GWh / yr", pts:[
    {year:2019,v:20,disp:"~20",lbl:"Produced (derived)",q:"DERIVED",c:"Low",src:["WIKI_GF"],note:"From 1B→2B cell milestones × ~18 Wh/cell. ±15–20%.",err:[16,24]},
    {year:2020,v:24,disp:"~24",lbl:"Produced (derived)",q:"DERIVED",c:"Low",src:["AMS"],note:"COVID disruption; 3B cells by Aug 2020.",err:[19,29]},
    {year:2021,v:28,disp:"~28",lbl:"Produced (derived)",q:"DERIVED",c:"Low",src:["WIKI_GF"],note:"Cell deltas ~1.5B/yr.",err:[22,34]},
    {year:2022,v:32,disp:"~32",lbl:"Produced (derived)",q:"DERIVED",c:"Low",src:["WIKI_GF"],note:"6B+ cells cumulative by 2022.",err:[26,38]},
    {year:2023,v:34,disp:"~34",lbl:"Produced (derived)",q:"DERIVED",c:"Low",src:["WIKI_GF"],note:"7.3B cumulative.",err:[27,41]},
    {year:2024,v:34,disp:"~34",lbl:"Produced (derived)",q:"DERIVED",c:"Low",src:["PAN10B","BTO"],note:"8B (Jan, reported late) → 10B (Jul). Milestone dating imprecise — the cumulative ~180 GWh anchor is solid, the annual split is soft.",err:[27,41]},
    {year:2018,v:20,disp:"~20",lbl:"Nameplate capacity",series2:true,q:"SECONDARY",c:"Low",src:["WIKI_GF"],note:"13 lines by year-end 2018."},
    {year:2019,v:30,disp:"~30",lbl:"Nameplate capacity",series2:true,q:"SECONDARY",c:"Low",src:["WIKI_GF"],note:"~24 Apr → ~30 EOY."},
    {year:2020,v:37,disp:"~35–39",lbl:"Nameplate capacity",series2:true,q:"SECONDARY",c:"Medium",src:["AMS"],note:"14th line added Aug 2020 (+$100M).",err:[35,39]},
    {year:2023,v:38,disp:"~38",lbl:"Nameplate capacity",series2:true,q:"SECONDARY",c:"Medium",src:["ELEC23"],note:"15th line planned → 39."},
    {year:2025,v:41,disp:"~41",lbl:"Nameplate capacity",series2:true,q:"SECONDARY",c:"Medium",src:["EVMAG"],note:"Capacity figures drift across sources (35/38/39/41) by line count & date."}
   ]},
   util:{unit:"%", pts:[
    {year:2019,v:74,disp:"~74%",lbl:"Utilization (derived)",q:"DERIVED",c:"Low",src:["WIKI_GF"],note:"= derived produced ÷ nameplate. Inherits both uncertainties."},
    {year:2020,v:65,disp:"~65%",lbl:"Utilization (derived)",q:"DERIVED",c:"Low",src:["AMS"],note:"COVID year."},
    {year:2021,v:78,disp:"~78%",lbl:"Utilization (derived)",q:"DERIVED",c:"Low",src:["WIKI_GF"],note:""},
    {year:2022,v:84,disp:"~84%",lbl:"Utilization (derived)",q:"DERIVED",c:"Low",src:["WIKI_GF"],note:""},
    {year:2023,v:89,disp:"~89%",lbl:"Utilization (derived)",q:"DERIVED",c:"Low",src:["WIKI_GF"],note:""},
    {year:2024,v:85,disp:"~85%",lbl:"Utilization (derived)",q:"DERIVED",c:"Low",src:["PAN10B"],note:"2025: Panasonic publicly delayed ramp on weak Tesla demand."}
   ]}
  },
  extraRows:[
   {yr:"Feb 2019 → 2025",metric:"Cumulative cell milestones",val:"1B → 2B (Nov 19) → 3B (Aug 20) → 6B+ (2022) → 7.3B (2023) → 8B (Jan 24) → 10B (Jul 24) → 11B+ (2025)",q:"SECONDARY/PRIMARY",c:"Med",src:["WIKI_GF","AMS","PAN10B","EVMAG"],note:"×~18 Wh/cell (range 17.2–19) → cumulative ~180 GWh by mid-2024. The produced-GWh series is differenced from these."},
   {yr:"FY22–25",metric:"Average wage (audited)",val:"$30.06 → $30.41 → $31.75 → $31.78 /hr",q:"PRIMARY",c:"High",src:["G22","G23","G24","G25"],note:"Far below Tesla's ~$48/hr — consistent with operator-heavy workforce."},
   {yr:"benchmarks",metric:"Direct-labor share & FTE/GWh",val:"direct 60–75% of cell-plant workforce; ~70 FTE/GWh capacity",q:"SECONDARY",c:"Med",src:["ICCT","FARADAY"],note:"QE/GWh is an UPPER bound on direct-labor intensity."},
   {yr:"FY22–25",metric:"Construction employees (project-wide, audited)",val:"net adds 110 / 61 / 258 / 1,845 · PTD cumulative 16,506 / 16,567 / 16,825 / 18,670 · NV-resident 9,205 / 9,254 / 9,456 / 10,044 (54–56%)",q:"PRIMARY",c:"High",src:["G22","G23","G24","G25"],note:"GOED Exhibit I/J/H. Single combined figure for the whole Gigafactory project (Tesla+PENA+H&T+Valeo); never broken out by participant. Cumulative count runs since Oct 2014, so only the annual net adds are usable — they feed the 'QE + construction' upper-bound series. FY2025's +1,845 is the separate Gigafactory-2 expansion."},
   {yr:"FY21–25",metric:"QE net-add reconciliation (audited Exhibit C)",val:"FY22 +1,336 · FY23 −696 (gross 640, dep 1,336) · FY24 +115 (gross 941, dep 826) · FY25 −2,889 (gross 538, dep 3,427)",q:"PRIMARY",c:"High",src:["G22","G23","G24","G25"],note:"Each year's project-to-date QE = prior PTD + reporting-period net add, so every headcount ties out to its Exhibit C. FY2021 PTD 2,690 is fixed by this same audited tie-out (4,026− 1,336) — audit-confirmed, not an estimate."}
  ]},
 {id:"wro", name:"LG Energy Solution — Wrocław (Biskupice Podgórne), Poland", colorHex:"#4338ca",
  scope:"Wholly-owned; LGES's only operational EU cell plant (Europe segment ≈ Wrocław). No plant-level produced GWh is filed — produced is estimated two ways (KRS revenue ÷ cell ASP, and nameplate × utilization), which bracket recent intensity roughly 76–108. HEADCOUNT is now anchored on the AUDITED KRS filing (KRS 0000614214, via bizraport): average employment 2,121 (2019) → 3,904 → 5,172 → 6,094 → 6,546 (2023 peak) → 4,249 (2024 — a real −35% cut as EV lines idled and Ford's 75 GWh contract was cancelled). This SUPERSEDES the earlier Revelio estimate, which under-counted blue-collar line operators by 25–47% (Revelio infers from public professional profiles). KEY REVISION: the audited legal entity (6,546 in 2023) ≈ the '7,000 campus' statement, so the LGES entity is nearly the WHOLE operational workforce — the agency/temp + supplier layer on top is small (~7% by 2023), NOT the ~40–50% previously inferred from the undercounted Revelio figure. The 2021 '9,500 campus' figure was inflated by construction/commissioning crews during build-out (KRS operational payroll was 5,172 that year), so it is not comparable to the 2023 operational campus. Neither scope is cell-only: the site runs cell + module/pack lines + full support. NET EFFECT: Wrocław's labor intensity is materially HIGHER than previously shown (~85–91 long-run vs the old ~74), moving it up toward PENA, and it is no longer strongly 'biased low' — the remaining uncertainty is the produced-GWh denominator, not the headcount.",
  caveats:{
   headcount:"Headcount is the audited KRS average employment (KRS 0000614214, via bizraport) — LGES's own payroll. It runs 25–47% above the older Revelio estimate. Revelio infers headcount from public professional profiles (LinkedIn-type data), which captures salaried/engineering staff well but structurally under-counts blue-collar line operators, who often have no professional profile — and a cell plant is overwhelmingly line operators, exactly the population Revelio misses, which is why its figures came in 24–47% low. By 2023 the legal entity (6,546) ≈ the 7,000 'campus' figure, so the agency/temp layer on top is small (not the ~half once assumed). The 2021 '9,500 campus' was construction-inflated during build-out and isn't comparable across years.",
   output:"No plant-level produced GWh or utilization is filed. Produced is estimated two ways — KRS revenue ÷ cell ASP, and nameplate × utilization — which bracket about 30% apart. Utilization is a company-wide proxy (가동률: 73.6→69.3→57.8%) plus a Wrocław-specific ~50–60% (2024–25) from trade press.",
   intensity:"Numerator is now audited KRS payroll, so it's firm; the produced-GWh denominator is the remaining uncertainty (the two routes bracket recent intensity ~76–108). The earlier 'biased low by ~40–50% excluded temps' concern no longer holds — the legal entity ≈ the operational campus, so only a small agency layer is excluded. Ford's Dec 2025 75 GWh cancellation (~28.5% of revenue) makes post-2026 projection shaky."
  },
  charts:{
   headcount:{unit:"employees", pts:[
    {year:2021,v:9500,disp:"~9,500",lbl:"Whole campus (+ agency/temps & suppliers)",series2:true,q:"PRIMARY",c:"Medium",src:["IIW"],note:"City statement during build-out. Includes agency/temp, on-site suppliers AND (unlike the 2023 figure) a large construction/commissioning workforce, so it overstates the operational headcount — KRS operational payroll was 5,172 that year."},
    {year:2023.5,v:7000,disp:"7,000",lbl:"Whole campus (+ agency/temps & suppliers)",series2:true,q:"PRIMARY",c:"High",src:["LGWRO23"],note:"President Jangha Lee, Jul 2023. ≈ the audited KRS payroll (6,546) that year, so by 2023 the agency/supplier layer on top of LGES's own staff was small."},
    {year:2019,v:2121,disp:"2,121",lbl:"LGES payroll — KRS audited (high conf.)",q:"PRIMARY",c:"High",src:["KRS_BIZ"],note:"Audited average employment, filed financial statement (KRS 0000614214)."},
    {year:2020,v:3904,disp:"3,904",lbl:"LGES payroll — KRS audited (high conf.)",q:"PRIMARY",c:"High",src:["KRS_BIZ"],note:"Audited average employment."},
    {year:2021,v:5172,disp:"5,172",lbl:"LGES payroll — KRS audited (high conf.)",q:"PRIMARY",c:"High",src:["KRS_BIZ"],note:"Audited average employment."},
    {year:2022,v:6094,disp:"6,094",lbl:"LGES payroll — KRS audited (high conf.)",q:"PRIMARY",c:"High",src:["KRS_BIZ"],note:"Audited. Revelio implied only ~4,898 here (−24%); Revelio infers from professional profiles and under-counts blue-collar operators."},
    {year:2023,v:6546,disp:"6,546",lbl:"LGES payroll — KRS audited (high conf.)",q:"PRIMARY",c:"High",src:["KRS_BIZ"],note:"Audited peak. ≈ the 7,000 'campus' figure, so the LGES legal entity is nearly the whole operational campus — NOT half of it. Revelio implied 4,457 (−47%)."},
    {year:2024,v:4249,disp:"4,249",lbl:"LGES payroll — KRS audited (high conf.)",q:"PRIMARY",c:"High",src:["KRS_BIZ"],note:"Audited. Sharp −35% cut from 2023 (6,546) as EV lines idled and Ford's 75 GWh contract was cancelled — a real drop the Revelio series (which only drifted to 4,036) missed."},
    {year:2022,v:4898,disp:"~4,898",lbl:"LGES payroll — Revelio est. (low conf.)",cmp:true,q:"SECONDARY",c:"Low",src:["REVELIO"],note:"Older profile-based estimate, shown for comparison. Under-counts line operators — the audited KRS figure is 6,094 (+24%)."},
    {year:2023,v:4457,disp:"4,457",lbl:"LGES payroll — Revelio est. (low conf.)",cmp:true,q:"SECONDARY",c:"Low",src:["REVELIO"],note:"vs audited KRS 6,546 (+47%)."},
    {year:2024,v:4036,disp:"4,036",lbl:"LGES payroll — Revelio est. (low conf.)",cmp:true,q:"SECONDARY",c:"Low",src:["REVELIO"],note:"vs audited KRS 4,249 — and Revelio missed the sharp 2024 cut."},
    {year:2025,v:3673,disp:"3,673",lbl:"LGES payroll — Revelio est. (low conf.)",cmp:true,q:"SECONDARY",c:"Low",src:["REVELIO"],note:"2025 (no KRS filing published yet). Revelio −9.4% YoY."}
   ]},
   gwh:{unit:"GWh / yr", pts:[
    {year:2022,v:52,disp:"~52",lbl:"Produced (estimated)",q:"ESTIMATE",c:"Low",src:["KED","THEBELL"],note:"70 nameplate × 73.6% company-wide 가동률 (proxy). Wrocław likely ran ABOVE this mid-ramp (entity revenue +117% YoY H1'23).",err:[42,63]},
    {year:2023,v:61,disp:"~61",lbl:"Produced (estimated)",q:"ESTIMATE",c:"Low",src:["LGWRO23","THEBELL"],note:"88 × 69.3% (company-wide proxy). Late 2023: some lines suspended at VW's request.",err:[49,73]},
    {year:2024,v:52,disp:"~52",lbl:"Produced (estimated)",q:"ESTIMATE",c:"Low",src:["LGBI24","LEMONDE","DDAILY"],note:"86 × ~60% Wrocław-specific (press; H1 ~50%).",err:[43,65]},
    {year:2025,v:52,disp:"~52",lbl:"Produced (estimated)",q:"ESTIMATE",c:"Low",src:["LGBI24","LEMONDE"],note:"86 × ~60% (press).",err:[43,65]},
    {year:2020,v:35,disp:">35",lbl:"Nameplate capacity",series2:true,q:"PRIMARY",c:"High",src:["EIB"],note:"EIB-backed project; ramp target ~65 GWh."},
    {year:2022,v:70,disp:"70",lbl:"Nameplate capacity",series2:true,q:"SECONDARY",c:"High",src:["KED"],note:""},
    {year:2023,v:88,disp:"86→90",lbl:"Nameplate capacity",series2:true,q:"PRIMARY",c:"High",src:["LGWRO23"],note:"“From 86 to 90 GWh by end of this year” — 88 used as the 2023 value.",err:[86,90]},
    {year:2024,v:86,disp:"~86",lbl:"Nameplate capacity",series2:true,q:"PRIMARY",c:"High",src:["LGBI24"],note:"Stage-IV target: 100 GWh (city source). EV lines being converted to LFP/ESS."}
   ]},
   util:{unit:"%", pts:[
    {year:2022,v:73.6,disp:"73.6%",lbl:"Company-wide 가동률 (proxy)",series2:true,q:"PRIMARY",c:"High",src:["THEBELL"],note:"Blended across ALL LGES cell plants (KR/PL/CN/US) — NOT Wrocław-specific."},
    {year:2023,v:69.3,disp:"69.3%",lbl:"Company-wide 가동률 (proxy)",series2:true,q:"PRIMARY",c:"High",src:["THEBELL"],note:""},
    {year:2024,v:57.8,disp:"57.8%",lbl:"Company-wide 가동률 (proxy)",series2:true,q:"PRIMARY",c:"High",src:["THEBELL"],note:"Full-year; YTD-Q3 was 59.8%."},
    {year:2024.2,v:50,disp:"~50%",lbl:"Wrocław-specific (press)",q:"SECONDARY",c:"Low",src:["DDAILY"],note:"H1 2024 operation rate."},
    {year:2024.8,v:60,disp:"~60%",lbl:"Wrocław-specific (press)",q:"SECONDARY",c:"Medium",src:["LEMONDE"],note:"“Fallen to ~60%” on weak EU EV demand, 2024–25."}
   ]}
  },
  extraRows:[
   {yr:"2019–24",metric:"Wrocław entity revenue (PLN, audited KRS)",val:"7.78bn / 18.07bn / 27.46bn / 40.80bn / 40.73bn / 23.49bn",q:"PRIMARY",c:"High",src:["KRS_BIZ","DEALSITE"],note:"Audited filed revenue (bizraport/KRS). ÷ cell ASP ($95–175/kWh, declining) is the produced-GWh route. Supersedes the earlier KRW figures (딜사이트/DEALSITE, linked), which disagreed materially for 2020–21."},
   {yr:"2024",metric:"LGES global production/office split",val:"consolidated: 15,134 production / 32,073 total = 47.2%",q:"PRIMARY",c:"High",src:["LGBR24"],note:"No Wrocław-specific split published; EU cell plant plausibly higher."},
   {yr:"Dec 2025",metric:"Ford contract cancellation",val:"75 GWh (2027–32), ~₩9.6tn ≈ 28.5% of revenue",q:"PRIMARY",c:"High",src:["LEMONDE"],note:"Structural break — post-2026 utilization projections unreliable."},
   {yr:"2020",metric:"EIB project targets",val:">35 → ~65 GWh ramp; >6,000 FTE campus by end-2022",q:"PRIMARY",c:"High",src:["EIB"],note:"EIB press 2020-088 (EUR480M loan to LG Chem Wrocław Energy). Stage-IV nameplate target 100 GWh (city source). Campus reached ~9,500 (2021) → 7,000 (2023 President's statement) → '10,000+' (2025, Revelio profile text, low conf.)."},
   {yr:"2022 / 2024",metric:"Company-wide 가동률 basis",val:"2022: 46.6M capacity / 34.3M output units = 73.6%; 2024 YTD-Q3 59.8%, full-year 57.8%",q:"PRIMARY",c:"High",src:["THEBELL","ELEC_Q3"],note:"Blended across ALL LGES cell plants; 별도(standalone)-vs-연결(consolidated) basis unconfirmed from the primary DART filing — so it is NOT a Wrocław-specific rate."}
  ]},
 {id:"mi", name:"LG Energy Solution — Holland, Michigan", colorHex:"#b45309",
  scope:"Wholly-owned (est. 2010; EV cells from 2013; LFP/ESS plant added 2025). Excludes Ultium (GM), Honda, Stellantis JVs. No plant-level produced GWh or utilization in any public source.",
  caveats:{
   headcount:"Wholly-owned Holland, Michigan plant (EV cells from 2013, LFP/ESS plant added 2025). Headcount mixes two scopes ('Michigan total' vs 'Holland only'), so points aren't all on the same basis. GM/Honda/Stellantis joint ventures (including Ultium Lansing) are separate companies and are left out.",
   output:"No published produced GWh or plant utilization exists in any public source; the single 'illustrative' produced point is a modeled stand-in (capacity times a global utilization proxy), not a reported figure. The 25 GWh EV target was effectively dropped and lines retooled to LFP/ESS (170 production layoffs, 2023 WARN notice). The 2025 site capacity (21.5 GWh) opened mid-year with 2 of 3 LFP lines, so it isn't a full-year figure.",
   intensity:"Because published output is unknown, Michigan's ratios divide either by nameplate capacity (which understates the real figure whenever the plant runs below full) or by a single illustrative output estimate. Neither uses a reported produced-GWh figure. The global 45X tax credit ÷ $35/kWh is the cleanest future route to actual output, but needs a Holland-share assumption."
  },
  charts:{
   headcount:{unit:"employees", pts:[
    {year:2015.8,v:300,disp:">300",lbl:"Holland headcount",q:"SECONDARY",c:"Medium",src:["TECHC"],note:"Workforce doubled to 300+, Oct 2015."},
    {year:2018,v:400,disp:">400",lbl:"Holland headcount",q:"SECONDARY",c:"Low",src:["CAP"],note:"Cumulative jobs created; round figure, year approximate."},
    {year:2022.2,v:1495,disp:"~1,495",lbl:"Michigan total (incl. Hazel Park/Troy)",q:"PRIMARY",c:"High",src:["WHIT"],note:"Incl. >1,300 in Holland. Scope broader than 'Holland only' — flagged."},
    {year:2023.8,v:1325,disp:"−170 layoff",lbl:"Holland (post-layoff, approx.)",q:"PRIMARY",c:"Medium",src:["MFGDIVE"],note:"The 170 production-team cut is a hard figure from the WARN notice, but the 1,325 level itself is derived (1,495 − 170) to keep the line continuous. It is not a separately reported total, so confidence is Medium for the level even though the layoff count is certain."},
    {year:2025.5,v:1500,disp:"~1,500",lbl:"Holland headcount",q:"SECONDARY",c:"Medium",src:["CANARY"],note:"At LFP plant opening, Jun 2025."},
    {year:2026.5,v:1700,disp:"~1,700 (target)",lbl:"Target at full production",series2:true,q:"SECONDARY",c:"Medium",src:["CANARY"],note:"Company target, not an actual."}
   ]},
   gwh:{unit:"GWh / yr", pts:[
    {year:2021,v:5,disp:"5",lbl:"Nameplate capacity",series2:true,q:"PRIMARY",c:"High",src:["LG681"],note:"Pre-expansion EV lines ('from 5GWh…')."},
    {year:2025,v:21.5,disp:"21.5",lbl:"Nameplate capacity",series2:true,q:"SECONDARY",c:"Medium",src:["BTO_MI","SPW6"],note:"5 EV + 16.5 LFP; LFP opened mid-2025 with 2 of 3 lines."},
    {year:2026,v:30,disp:"30 (target)",lbl:"Nameplate capacity",series2:true,q:"SECONDARY",c:"Medium",src:["SPW7"],note:"LFP-plant target, year-end 2026. Original 25 GWh EV target was effectively abandoned (retooled to LFP/ESS)."},
    {year:2025.5,v:12.9,disp:"~12.9 (illustrative)",lbl:"Produced (illustrative)",q:"ILLUSTRATIVE",c:"Low",src:["BTO_MI","THEBELL"],note:"21.5 × ~60% GLOBAL utilization stand-in. Michigan's own rate unknown. Produced GWh: GAP in all public sources.",err:[9.7,17.2]}
   ]},
   util:{unit:"%", pts:[
    {year:2022,v:73.6,disp:"73.6%",lbl:"LGES global blended (context only)",series2:true,q:"PRIMARY",c:"High",src:["THEBELL"],note:"NOT Michigan's rate. Basis (standalone vs consolidated) ambiguous in DART; Holland likely BELOW blend during EV→LFP conversion."},
    {year:2023,v:69.3,disp:"69.3%",lbl:"LGES global blended (context only)",series2:true,q:"PRIMARY",c:"High",src:["THEBELL"],note:""},
    {year:2024,v:57.8,disp:"57.8%",lbl:"LGES global blended (context only)",series2:true,q:"PRIMARY",c:"High",src:["THEBELL"],note:"2025: 'recovering', not quantified. Analyst steady-state assumption for US plants: 80% (Mirae Asset)."}
   ]}
  },
  extraRows:[
   {yr:"2022",metric:"Expansion pledge",val:"$1.7B, 5→25 GWh by 2025, 1,200 new jobs",q:"PRIMARY",c:"High",src:["LG681","WHIT"],note:"Grant condition; EV target later abandoned in favor of LFP/ESS."},
   {yr:"2024",metric:"LGES global production/office split",val:"consolidated 47.2% production; Korea-standalone 16.7%",q:"PRIMARY",c:"High",src:["LGBR24"],note:"No Michigan split published. The 2023 layoff being explicitly 'production team members' is the only Michigan-specific direct-labor signal."},
   {yr:"route",metric:"Cleanest produced-GWh route",val:"IRA 45X credit ÷ $35/kWh (global) + Holland-share assumption",q:"—",c:"—",src:[],note:"45X has no employment-reporting requirement."},
   {yr:"2013",metric:"Plant start (EV cells, Chevy Volt)",val:"~$303M capex, ~50% DOE-funded, ~1 GWh class",q:"SECONDARY",c:"Low",src:["CAP"],note:"Early capacity poorly defined in public sources."},
   {yr:"2025–26",metric:"LFP/ESS plant capacity build-out",val:"16.5 GWh (2 of 3 lines, Jun 2025) → 17 GWh (year-end 2025 target) → 30 GWh (2026 target)",q:"SECONDARY",c:"Medium",src:["SPW6","SPW7"],note:"LFP/ESS plant alone; NOT additive to the 5 GWh legacy EV lines. Whole-site nameplate 21.5 GWh (2025). Analyst US-plant steady-state utilization assumption: 80% (Mirae Asset)."}
  ]}
]
};
