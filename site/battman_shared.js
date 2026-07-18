/* =====================================================================
   battman_shared.js — shared helpers & renderers for the BattManf Labor
   project. Requires battman_data.js (window.BM) loaded first.
   Provides:
     - attribute chips (bmChips) rendered from series.attrs
     - <div data-bm-mount="intensity" data-series="a,b"> per-point tables
     - <div data-bm-mount="fits"    data-fits="a,b">   fit-parameter tables
     - <div data-bm-mount="segrev">                     CATL segment-revenue table
     - <span data-bm="fit:ID:field:decimals">           inline number binding
     - bmInit() auto-runs at load (call after DOM is parsed)
   ===================================================================== */
(function(){
const BM = window.BM;
if(!BM){ console.error("battman_shared.js: battman_data.js (window.BM) must be loaded first"); return; }

// ---------- helpers (exported on window.BMH) ----------
const esc = s => String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const fmtV = v => Math.abs(v)>=1000 ? Math.round(v).toLocaleString("en-US") : (Math.round(v*100)/100);
const srcLinks = keys => (keys||[]).map(k=>BM.SRC[k]?`<a href="${esc(BM.SRC[k].u)}" target="_blank" rel="noopener">${esc(BM.SRC[k].n)}</a>`:esc(k)).join(" · ");
const srcNames = keys => (keys||[]).map(k=>BM.SRC[k]?BM.SRC[k].n:k).join(" · ");
function qClass(q){ q=(q||"").toUpperCase();
  if(q.includes("GAP"))return"t-gap";
  if(q.includes("ESTIM")||q.includes("ILLUSTR")||q.includes("TARGET"))return"t-est";
  if(q.includes("DERIV"))return"t-derived";
  if(q.includes("SECONDARY"))return"t-secondary";
  if(q.includes("PRIMARY"))return"t-primary"; return"t-est";}
function cClass(c){ c=(c||"").toLowerCase(); return c.startsWith("h")?"c-high":c.startsWith("m")?"c-med":"c-low";}

// ---------- attribute chips ----------
const DEN_LABELS = {
  "produced-disclosed": ["GWh = reported output","bmc-den-good","Denominator is actual output from an audited filing"],
  "produced-derived":   ["GWh = derived output","bmc-den-mid","Denominator is actual output derived from sourced inputs such as cell counts"],
  "produced-estimated": ["GWh = estimated output","bmc-den-mid","Denominator estimated as capacity times utilization, itself uncertain"],
  "nameplate":          ["GWh = capacity, not output","bmc-den-bad","Denominator is installed capacity, not what was actually produced"],
  "nameplate-target":   ["GWh = target capacity","bmc-den-bad","Denominator is a company target, not an actual figure"]
};
function triChip(name, v){
  if(v===true)  return `<span class="bmchip bmc-inc" title="Counted in the workers: ${name}">${name} counted</span>`;
  if(v===false) return `<span class="bmchip bmc-exc" title="Not counted in the workers: ${name}">${name} not counted</span>`;
  return `<span class="bmchip bmc-part" title="${name}: ${esc(v)}">${name}: ${esc(v)}</span>`;
}
function bmChips(a, compact){
  if(!a) return "";
  const d = DEN_LABELS[a.den]||["GWh = ?","bmc-part",""];
  let h = `<span class="bmchip ${d[1]}" title="${esc(d[2])}">${esc(d[0])}</span>`;
  h += triChip("cell",a.cell)+triChip("pack",a.pack)+triChip("upstream",a.upstream)+triChip("construction",a.construction);
  h += `<span class="bmchip bmc-fn" title="Which job functions are counted">${a.functions==="all"?"all functions":"production only"}</span>`;
  if(!compact) h += `<span class="bmchip bmc-hc" title="Who is counted">${esc(a.hc)}</span>`;
  return h;
}

// ---------- injected CSS (so dossiers don't need chip styles) ----------
const CSS = `
.bmchip{display:inline-block;font-size:10px;font-weight:700;padding:1px 6px;border-radius:9px;margin:1px 3px 1px 0;white-space:nowrap;letter-spacing:.2px;}
.bmc-inc{background:#fdf3e0;color:#9a6b00;} .bmc-exc{background:#eef4ef;color:#4a7a58;}
.bmc-part{background:#e8ecf7;color:#3a4a8a;} .bmc-fn{background:#f0eeef;color:#555;}
.bmc-hc{background:#f0eeef;color:#555;font-weight:600;max-width:340px;overflow:hidden;text-overflow:ellipsis;vertical-align:bottom;}
.bmc-den-good{background:#e7f1ea;color:#1f6b3a;} .bmc-den-mid{background:#eae7f1;color:#5b3a9a;} .bmc-den-bad{background:#f7e6e3;color:#a23a2a;}
.bm-table{border-collapse:collapse;width:100%;margin:12px 0 6px;font-size:12.5px;}
.bm-table th,.bm-table td{border:1px solid #e2e2e2;padding:6px 8px;text-align:left;vertical-align:top;}
.bm-table th{background:#f6ecec;font-weight:600;}
.bm-table td.num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap;}
.bm-serieshdr td{background:#faf7f7;border-top:2px solid #7a1f2b;}
.bm-foot{font-size:11.5px;color:#5c5c5c;margin:2px 0 10px;}
.bm-table .tag{display:inline-block;font-size:10.5px;font-weight:700;padding:1px 7px;border-radius:10px;white-space:nowrap;}
.bm-table .t-primary{background:#e7f1ea;color:#1f6b3a;} .bm-table .t-secondary{background:#fdf3e0;color:#9a6b00;}
.bm-table .t-derived{background:#eae7f1;color:#5b3a9a;} .bm-table .t-est{background:#e8ecf7;color:#3a4a8a;} .bm-table .t-gap{background:#f7e6e3;color:#a23a2a;}
.bm-table .conf{font-size:10.5px;font-weight:700;} .bm-table .c-high{color:#1f6b3a;} .bm-table .c-med{color:#9a6b00;} .bm-table .c-low{color:#a23a2a;}
`;

// ---------- mount renderers ----------
function renderIntensityMount(el){
  const ids = (el.dataset.series||"").split(",").map(s=>s.trim()).filter(Boolean);
  const series = ids.map(id=>BM.INTENSITY.find(s=>s.id===id)).filter(Boolean);
  let h = `<table class="bm-table"><thead><tr><th>Year</th><th class="num">Workers / GWh</th><th>Numerator (who is counted)</th><th>Denominator (what GWh means)</th><th>Quality</th><th>Conf.</th><th>Note</th></tr></thead><tbody>`;
  series.forEach(s=>{
    h += `<tr class="bm-serieshdr"><td colspan="7"><b style="color:${s.colorHex}">${esc(s.label)}</b><br>${bmChips(s.attrs)}</td></tr>`;
    s.pts.forEach(p=>{
      h += `<tr><td>${esc(p.yr||p.year)}</td><td class="num"><b>${esc(p.disp)}</b>${p.err?`<br><span style="font-weight:400;font-size:11px">(${p.err[0]}–${p.err[1]})</span>`:""}</td>`+
        `<td>${esc(p.num)}<br><span style="font-size:11px">${srcLinks(p.numSrc)}</span></td>`+
        `<td>${esc(p.den)}<br><span style="font-size:11px">${srcLinks(p.denSrc)}</span></td>`+
        `<td><span class="tag ${qClass(p.q)}">${esc(p.q)}</span></td><td><span class="conf ${cClass(p.c)}">● ${esc(p.c)}</span></td>`+
        `<td style="font-size:11.5px">${esc(p.note||"")}</td></tr>`;
    });
  });
  h += `</tbody></table><p class="bm-foot">Rendered from <code>battman_data.js</code> v${esc(BM.VERSION)} (single source of truth — edit values there, not here). Chips show who is counted in the workers and what the GWh denominator measures.</p>`;
  el.innerHTML = h;
}

function renderFitsMount(el){
  const ids = (el.dataset.fits||"").split(",").map(s=>s.trim()).filter(Boolean);
  const fits = (ids.length?ids.map(id=>BM.FITS.find(f=>f.id===id)).filter(Boolean):BM.FITS);
  let h = `<table class="bm-table"><thead><tr><th>Series</th><th>Window fitted</th><th class="num">L<sub>∞</sub> (steady state)</th><th class="num">A</th><th class="num">k (/yr)</th><th class="num">R²</th><th>Status &amp; caveats</th></tr></thead><tbody>`;
  fits.forEach(f=>{
    const s = BM.INTENSITY.find(x=>x.id===f.series)||{label:f.series,colorHex:"#333"};
    const isExp = f.type==="exp";
    h += `<tr><td style="color:${s.colorHex}"><b>${esc(s.label)}</b><br>${bmChips(s.attrs,true)}</td><td>${esc(f.wnd||"")}</td>`+
      `<td class="num"><b>${esc(f.dispL|| (f.Linf!=null?Math.round(f.Linf):"—"))}</b></td>`+
      `<td class="num">${isExp?fmtV(f.A):"—"}</td><td class="num">${isExp?(f.kFixed?`(${f.k})`:f.k):"—"}</td><td class="num">${f.r2!=null?f.r2:"—"}</td>`+
      `<td style="font-size:12px">${esc(f.note||"")}</td></tr>`;
  });
  h += `</tbody></table><p class="bm-foot">Functional form L(t) = L<sub>∞</sub> + A·e<sup>−k·t</sup>, t = years since production start; parameters computed numerically (SciPy) on exactly the plotted points. Rendered from <code>battman_data.js</code> v${esc(BM.VERSION)}.</p>`;
  el.innerHTML = h;
}

function renderSegRevMount(el){
  const T = BM.TABLES.segRev;
  let h = `<table class="bm-table"><thead><tr>${T.cols.map(c=>`<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>`;
  T.rows.forEach(r=>{
    h += `<tr>${r.map((c,i)=> i===r.length-1 ? `<td style="font-size:11px">${srcLinks(c)}</td>` : `<td class="${i>0?"num":""}">${esc(c)}</td>`).join("")}</tr>`;
  });
  h += `</tbody></table><p class="bm-foot">${esc(T.note)} Rendered from <code>battman_data.js</code> v${esc(BM.VERSION)}.</p>`;
  el.innerHTML = h;
}

function renderReconMount(el){
  const R = BM.RECON; if(!R){ el.innerHTML=""; return; }
  let h = `<p style="font-size:13px;max-width:960px"><b>${esc(R.h1)}</b></p><p class="bm-foot" style="max-width:960px">${esc(R.asym)}</p>`;
  R.ladders.forEach(L=>{
    h += `<h3 style="color:${L.colorHex};font-size:14px;margin:18px 0 4px">${esc(L.site)} — adjustment ladder</h3>`;
    h += `<table class="bm-table"><thead><tr><th style="width:20%">Step</th><th style="width:15%">Result (workers/GWh)</th><th>Computation & sources</th><th style="width:24%">Assumption</th></tr></thead><tbody>`;
    L.steps.forEach(s=>{
      const last = s.label.startsWith("H1 result");
      h += `<tr${last?' style="background:#f6ecec;font-weight:600"':''}><td>${esc(s.label)}</td><td class="num"><b>${esc(s.val)}</b></td>`+
        `<td style="font-size:12px">${esc(s.how)}${(s.src&&s.src.length)?`<br><span style="font-size:11px">${srcLinks(s.src)}</span>`:""}</td>`+
        `<td style="font-size:11.5px">${esc(s.assume||"—")}</td></tr>`;
    });
    h += `</tbody></table>`;
  });
  h += `<h3 style="font-size:14px;margin:20px 0 4px">Harmonized comparison — summary</h3><table class="bm-table"><thead><tr>${R.summary.cols.map(c=>`<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>`;
  R.summary.rows.forEach(row=>{ h += `<tr>${row.map((c,i)=>`<td${i===0?' style="font-weight:600"':' style="font-size:12px"'}>${esc(c)}</td>`).join("")}</tr>`; });
  h += `</tbody></table><p class="bm-foot" style="max-width:960px">${esc(R.capnote)}</p>`;
  h += `<h3 style="font-size:14px;margin:20px 0 4px">${esc(R.sens.title)}</h3><table class="bm-table"><thead><tr>${R.sens.cols.map(c=>`<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>`;
  R.sens.rows.forEach(row=>{ h += `<tr><td style="font-weight:600;width:20%">${esc(row[0])}</td>`+
    `<td style="font-size:12px">${esc(row[1])}${(row[2]&&row[2].length)?`<br><span style="font-size:11px">${srcLinks(row[2])}</span>`:""}</td>`+
    `<td style="font-size:12px;width:28%">${esc(row[3])}</td></tr>`; });
  h += `</tbody></table><p class="bm-foot"><b>${esc(R.sens.verdict)}</b></p>`;
  h += `<p style="font-size:13px;max-width:960px;border-top:1px solid #e2e2e2;padding-top:8px"><b>Conclusion:</b> ${esc(R.conclusion)} <span style="color:#5c5c5c;font-size:11.5px">Rendered from battman_data.js v${esc(BM.VERSION)}.</span></p>`;
  el.innerHTML = h;
}

// ---------- inline number binder: <span data-bm="fit:ID:field[:decimals]"> ----------
function bindBM(root){
  (root||document).querySelectorAll("[data-bm]").forEach(el=>{
    const [kind,id,field,dec] = el.dataset.bm.split(":");
    let v;
    if(kind==="fit"){ const f=BM.FITS.find(f=>f.id===id); v=f?f[field]:undefined; }
    else if(kind==="pt"){ const s=BM.INTENSITY.find(s=>s.id===id);
      const p=s?(field==="last"?s.pts[s.pts.length-1]:s.pts.find(p=>String(p.year)===field)):null;
      v=p?p[dec||"disp"]:undefined; el.textContent = v!=null?v:"[?]"; return; }
    if(v==null){ el.textContent="[?]"; el.title="battman_data.js: reference not found: "+el.dataset.bm; return; }
    if(typeof v==="number"){ const d=dec!=null?+dec:0; v = d>0 ? v.toFixed(d) : Math.round(v).toLocaleString("en-US"); }
    el.textContent = v;
  });
}

// ---------- init ----------
function bmInit(){
  if(!document.getElementById("bm-shared-css")){
    const st=document.createElement("style"); st.id="bm-shared-css"; st.textContent=CSS; document.head.appendChild(st);
  }
  document.querySelectorAll('[data-bm-mount="intensity"]').forEach(renderIntensityMount);
  document.querySelectorAll('[data-bm-mount="fits"]').forEach(renderFitsMount);
  document.querySelectorAll('[data-bm-mount="segrev"]').forEach(renderSegRevMount);
  document.querySelectorAll('[data-bm-mount="recon"]').forEach(renderReconMount);
  bindBM(document);
}
window.BMH = {esc,fmtV,srcLinks,srcNames,qClass,cClass,bmChips,bindBM,bmInit};
if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",bmInit); else bmInit();
})();
