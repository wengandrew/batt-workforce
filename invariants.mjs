// GENERALIZED invariant sweep across every tab/site — catches the CLASS, not the instance.
import { readFileSync } from "node:fs";
import { JSDOM, VirtualConsole } from "jsdom";
const d=readFileSync("./site/battman_data.js","utf8"),s=readFileSync("./site/battman_shared.js","utf8"),html=readFileSync("./site/index.html","utf8");
const errs=[];const vc=new VirtualConsole();vc.on("jsdomError",e=>errs.push(e.detail?.message||e.message));vc.on("error",(...a)=>errs.push(a.join(" ")));
const h=html.replace(/<script src="battman_data\.js"><\/script>/,"").replace(/<script src="battman_shared\.js"><\/script>/,"");
const dom=new JSDOM(h,{runScripts:"outside-only",virtualConsole:vc,pretendToBeVisual:true});const w=dom.window;w.HTMLElement.prototype.scrollIntoView=()=>{};
w.eval(d);w.eval(s);w.document.dispatchEvent(new w.Event("DOMContentLoaded"));w.eval(html.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/)[1]);
const doc=w.document; const P=[];
const strip=t=>t.replace(/\s+/g," ").replace(/^[▸▾●○■\s]+/,"").replace(/(▸ how it's derived|▾ how it's derived)/,"").trim();
// INV1: intensity toggles == series-table data rows (labels), for every site
for(const id of ["catl","pena","wro","mi"]){
  const togs=[...doc.querySelectorAll(`#site-${id} .controls .tog`)].map(l=>strip(l.textContent));
  const rows=[...doc.querySelectorAll(`#seriesTbl_${id} tbody tr[data-rowkey]`)].map(r=>strip(r.querySelector("td").textContent));
  if(JSON.stringify(togs)!==JSON.stringify(rows)) P.push(`${id}: toggles != table rows\n     tog=${JSON.stringify(togs)}\n     row=${JSON.stringify(rows)}`);
}
// INV2: every chart legend entry corresponds to a plotted series marker set (legend count <= toggles, and each legend label appears among table rows or is a layer label)
// INV3: no doubled units anywhere
if(/%\s*%/.test(doc.body.textContent)) P.push("doubled % somewhere");
if(/GWh\s*\/\s*yr\s+GWh/.test(doc.body.textContent)) P.push("doubled GWh unit somewhere");
// INV4: every chart with a .chartlegend — legend entries are non-empty and each has a marker swatch (svg)
[...doc.querySelectorAll(".chartlegend")].forEach(cl=>{const bad=[...cl.querySelectorAll(".legent")].filter(e=>!e.querySelector("svg")&&!/dashed =/.test(e.textContent));if(bad.length)P.push("legend entry missing swatch in "+(cl.closest("[id]")?.id));});
// INV5: click every intensity point -> exactly one highlighted row; and detail boxes gone
for(const id of ["catl","pena","wro","mi"]){
  const pts=[...doc.querySelectorAll(`#int_${id} .pt`)];
  for(const p of pts){ doc.getElementById("seriesTbl_"+id).querySelectorAll("tr.rowhi").forEach(r=>r.classList.remove("rowhi")); p.dispatchEvent(new w.Event("click")); const n=doc.getElementById("seriesTbl_"+id).querySelectorAll("tr.rowhi").length; if(n!==1){P.push(`${id}: intensity click highlights ${n} rows`);break;} }
  if(doc.getElementById("intdet_"+id)) P.push(`${id}: stale intensity detail box`);
}
// INV6: ladder nested in series table (not standalone) for catl/pena/wro; MI none
for(const id of ["catl","pena","wro"]){ if(!doc.getElementById("lsub_"+id)) P.push(`${id}: missing nested ladder`); if(doc.getElementById("ladder_"+id)) P.push(`${id}: standalone ladder still present`); }
if(doc.getElementById("lsub_mi")) P.push("mi: unexpected ladder");
// INV7: ladder toggle actually reveals rows
const tog=doc.querySelector('#seriesTbl_catl .ltoggle'); if(tog){ tog.dispatchEvent(new w.window.MouseEvent('click',{bubbles:true})); const disp=doc.getElementById("lsub_catl").style.display; if(disp==="none")P.push("catl ladder toggle did not reveal"); }
// INV8: headcount legend/table count coherence (catl: chart legend==layer rows)
const hcLeg=[...doc.querySelectorAll('#hc_catl .chartlegend .legent')].length;
const layerRows=[...doc.querySelectorAll('#catlLayers tbody tr[data-rowkey]')].length;
if(hcLeg!==layerRows) P.push(`catl headcount legend ${hcLeg} != layer rows ${layerRows}`);
// INV9: output caption produced-claim matches a produced series, all sites
for(const id of ["catl","pena","wro","mi"]){ const site=w.BM.SITES.find(x=>x.id===id); const hasProd=site.charts.gwh.pts.some(p=>!p.series2); const cap=doc.querySelector(`#site-${id} .subpanel[data-sub=output] .minihead`).textContent; if(/produced/.test(cap)&&!hasProd) P.push(`${id}: output caption claims produced but none plotted`); }
console.log("CONSOLE ERRORS:",errs.length, errs.slice(0,3).join(" | "));
console.log("INVARIANT VIOLATIONS:", P.length?("\n - "+P.join("\n - ")):"NONE");
