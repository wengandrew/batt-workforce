// Battery Manufacturing Workforce Dashboard
// D3.js interactive visualizations

(function() {
  'use strict';

  const COLORS = {
    'China': '#ef4444',
    'EU': '#3b82f6',
    'US': '#10b981',
    'Rest of World': '#8b5cf6',
    'CATL (Global)': '#ef4444',
    'LGES (Wroclaw, Poland)': '#3b82f6',
    'LGES (Michigan, US)': '#10b981',
    'PENA (Nevada, US)': '#f59e0b'
  };

  const MARGIN = { top: 30, right: 140, bottom: 50, left: 65 };

  let laborData = null;
  let jobsData = null;

  // ── Navigation ──

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-section');
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      document.getElementById(sectionId).classList.add('active');
      this.classList.add('active');
    });
  });

  // ── Data Loading ──

  Promise.all([
    fetch('data/labor_intensity.json').then(r => r.json()),
    fetch('data/global_jobs.json').then(r => r.json())
  ]).then(([labor, jobs]) => {
    laborData = labor;
    jobsData = jobs;
    renderLaborIntensity();
    renderGlobalJobs();
    updateMetrics();
  }).catch(err => {
    console.error('Failed to load data:', err);
    document.getElementById('chart-labor-intensity').innerHTML =
      '<div class="placeholder">Error loading data. Run from a web server (python -m http.server).</div>';
  });

  // ── View A: Labor Intensity Chart ──

  function renderLaborIntensity() {
    const container = document.getElementById('chart-labor-intensity');
    container.innerHTML = '';

    const width = container.clientWidth;
    const height = 420;
    const innerW = width - MARGIN.left - MARGIN.right;
    const innerH = height - MARGIN.top - MARGIN.bottom;

    const svg = d3.select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    const allPoints = [];
    laborData.facilities.forEach(f => {
      f.data.forEach(d => {
        if (d.years_since_start != null) {
          allPoints.push({ ...d, facility: f.name, region: f.region });
        }
      });
    });

    const x = d3.scaleLinear()
      .domain([0, d3.max(allPoints, d => d.years_since_start) + 1])
      .range([0, innerW]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(allPoints, d => d.workers_per_gwh) * 1.1])
      .range([innerH, 0]);

    // Grid
    g.append('g').attr('class', 'grid')
      .attr('transform', `translate(0,${innerH})`)
      .call(d3.axisBottom(x).tickSize(-innerH).tickFormat(''));

    g.append('g').attr('class', 'grid')
      .call(d3.axisLeft(y).tickSize(-innerW).tickFormat(''));

    // Axes
    g.append('g').attr('class', 'axis')
      .attr('transform', `translate(0,${innerH})`)
      .call(d3.axisBottom(x).ticks(8));

    g.append('g').attr('class', 'axis')
      .call(d3.axisLeft(y));

    // Axis labels
    svg.append('text')
      .attr('x', MARGIN.left + innerW / 2)
      .attr('y', height - 8)
      .attr('text-anchor', 'middle')
      .attr('font-size', '13px')
      .attr('fill', '#6b7280')
      .text('Years Since Factory Start');

    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -(MARGIN.top + innerH / 2))
      .attr('y', 16)
      .attr('text-anchor', 'middle')
      .attr('font-size', '13px')
      .attr('fill', '#6b7280')
      .text('Workers per GWh');

    // Curve fit line
    const cf = laborData.metadata.curve_fit;
    if (cf && cf.parameters) {
      const { A, k, C } = cf.parameters;
      const curveData = d3.range(0, 16, 0.2).map(t => ({
        t: t,
        y: A * Math.exp(-k * t) + C
      }));

      const line = d3.line()
        .x(d => x(d.t))
        .y(d => y(d.y))
        .curve(d3.curveNatural);

      g.append('path')
        .datum(curveData)
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', '#9ca3af')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '6,4')
        .attr('opacity', 0.8);

      g.append('text')
        .attr('x', x(14))
        .attr('y', y(A * Math.exp(-k * 14) + C) - 10)
        .attr('font-size', '10px')
        .attr('fill', '#9ca3af')
        .text(`y = ${A}e^(-${k}t) + ${C}`);
    }

    // Facility lines and points
    const tooltip = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

    laborData.facilities.forEach(facility => {
      const data = facility.data.filter(d => d.years_since_start != null);
      if (data.length < 2) return;

      const line = d3.line()
        .x(d => x(d.years_since_start))
        .y(d => y(d.workers_per_gwh))
        .curve(d3.curveMonotoneX);

      g.append('path')
        .datum(data)
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', COLORS[facility.name] || '#6b7280')
        .attr('stroke-width', 2.5)
        .attr('opacity', 0.8);
    });

    // All data points
    g.selectAll('.data-point')
      .data(allPoints)
      .enter()
      .append('circle')
      .attr('class', 'data-point')
      .attr('cx', d => x(d.years_since_start))
      .attr('cy', d => y(d.workers_per_gwh))
      .attr('r', 5)
      .attr('fill', d => COLORS[d.facility] || '#6b7280')
      .attr('stroke', 'white')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')
      .on('mouseover', function(event, d) {
        d3.select(this).attr('r', 7);
        tooltip.transition().duration(100).style('opacity', 1);
        let html = `<strong>${d.facility}</strong><br>`;
        html += `Year: ${d.year}<br>`;
        html += `${d.workers_per_gwh} workers/GWh<br>`;
        html += `${d.years_since_start} years since start`;
        if (d.workforce) html += `<br>Total: ${d.workforce.toLocaleString()} workers`;
        if (d.production_gwh) html += `<br>Production: ${d.production_gwh} GWh`;
        tooltip.html(html)
          .style('left', (event.pageX + 12) + 'px')
          .style('top', (event.pageY - 12) + 'px');
      })
      .on('mouseout', function() {
        d3.select(this).attr('r', 5);
        tooltip.transition().duration(200).style('opacity', 0);
      });

    // Single-point facilities (no line, just marker)
    laborData.facilities.forEach(facility => {
      const data = facility.data.filter(d => d.years_since_start == null);
      // These won't appear on this chart since they lack years_since_start
    });

    // Legend
    const legend = g.append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${innerW + 15}, 0)`);

    const facilityNames = laborData.facilities.map(f => f.name);
    facilityNames.forEach((name, i) => {
      const row = legend.append('g')
        .attr('transform', `translate(0, ${i * 22})`);
      row.append('rect')
        .attr('width', 14).attr('height', 14)
        .attr('fill', COLORS[name] || '#6b7280');
      row.append('text')
        .attr('x', 20).attr('y', 11)
        .attr('font-size', '11px')
        .attr('fill', '#374151')
        .text(name.length > 18 ? name.substring(0, 18) + '...' : name);
    });

    // Add dashed line to legend
    const cfRow = legend.append('g')
      .attr('transform', `translate(0, ${facilityNames.length * 22})`);
    cfRow.append('line')
      .attr('x1', 0).attr('x2', 14)
      .attr('y1', 7).attr('y2', 7)
      .attr('stroke', '#9ca3af')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '4,3');
    cfRow.append('text')
      .attr('x', 20).attr('y', 11)
      .attr('font-size', '11px')
      .attr('fill', '#374151')
      .text('Curve fit');
  }

  // ── View B: Global Jobs Projection ──

  function renderGlobalJobs() {
    const container = document.getElementById('chart-global-jobs');
    container.innerHTML = '';

    const width = container.clientWidth;
    const height = 420;
    const innerW = width - MARGIN.left - MARGIN.right;
    const innerH = height - MARGIN.top - MARGIN.bottom;

    const svg = d3.select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    // Get control values
    const scenario = document.getElementById('ctrl-scenario').value;
    const baseWpg = +document.getElementById('ctrl-workers-per-gwh').value;
    const autoRate = +document.getElementById('ctrl-automation').value / 100;
    const multiplier = +document.getElementById('ctrl-multiplier').value;
    const usShareOverride = +document.getElementById('ctrl-us-share').value / 100;
    const gwh2035Override = +document.getElementById('ctrl-gwh-2035').value;

    const scenarioData = jobsData.scenarios[scenario] || jobsData.scenarios.baseline;
    const effAutoRate = scenarioData.automation_reduction_per_year || autoRate;

    // Build projection data
    const demand = jobsData.global_gwh_demand.map((d, i) => {
      const scaleGwh = d.year <= 2035
        ? d.gwh * (gwh2035Override / 4500)
        : d.gwh * (gwh2035Override / 4500);

      const yearOffset = d.year - 2024;
      const wpg = baseWpg * Math.pow(1 - effAutoRate, yearOffset);

      const shares = scenarioData.market_shares || jobsData.scenarios.baseline.market_shares;
      const regions = {};
      ['US', 'EU', 'China', 'Rest of World'].forEach(region => {
        let share = shares[region] ? shares[region][i] || shares[region][shares[region].length - 1] : 0.25;
        if (region === 'US') share = usShareOverride;
        regions[region] = Math.round(scaleGwh * wpg * multiplier * share / 1000);
      });

      return {
        year: d.year,
        gwh: Math.round(scaleGwh),
        workers_per_gwh: Math.round(wpg),
        ...regions,
        total: Object.values(regions).reduce((a, b) => a + b, 0)
      };
    });

    const x = d3.scaleLinear()
      .domain([2024, 2050])
      .range([0, innerW]);

    const maxY = d3.max(demand, d => d.total) * 1.1;
    const y = d3.scaleLinear()
      .domain([0, maxY])
      .range([innerH, 0]);

    // Grid
    g.append('g').attr('class', 'grid')
      .attr('transform', `translate(0,${innerH})`)
      .call(d3.axisBottom(x).tickSize(-innerH).tickFormat(''));

    g.append('g').attr('class', 'grid')
      .call(d3.axisLeft(y).tickSize(-innerW).tickFormat(''));

    // Axes
    g.append('g').attr('class', 'axis')
      .attr('transform', `translate(0,${innerH})`)
      .call(d3.axisBottom(x).tickFormat(d3.format('d')));

    g.append('g').attr('class', 'axis')
      .call(d3.axisLeft(y).tickFormat(d => d + 'k'));

    // Axis labels
    svg.append('text')
      .attr('x', MARGIN.left + innerW / 2)
      .attr('y', height - 8)
      .attr('text-anchor', 'middle')
      .attr('font-size', '13px')
      .attr('fill', '#6b7280')
      .text('Year');

    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -(MARGIN.top + innerH / 2))
      .attr('y', 16)
      .attr('text-anchor', 'middle')
      .attr('font-size', '13px')
      .attr('fill', '#6b7280')
      .text('Workers (thousands)');

    // Stacked area
    const regions = ['China', 'EU', 'US', 'Rest of World'];
    const stack = d3.stack()
      .keys(regions)
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    const series = stack(demand);

    const area = d3.area()
      .x(d => x(d.data.year))
      .y0(d => y(d[0]))
      .y1(d => y(d[1]))
      .curve(d3.curveMonotoneX);

    const tooltip = d3.select('body').selectAll('.tooltip-jobs').data([0])
      .join('div').attr('class', 'tooltip tooltip-jobs').style('opacity', 0);

    g.selectAll('.area')
      .data(series)
      .enter()
      .append('path')
      .attr('class', 'area')
      .attr('d', area)
      .attr('fill', d => COLORS[d.key])
      .attr('opacity', 0.7)
      .on('mouseover', function(event, d) {
        d3.select(this).attr('opacity', 0.9);
      })
      .on('mouseout', function() {
        d3.select(this).attr('opacity', 0.7);
      });

    // Total line on top
    const totalLine = d3.line()
      .x(d => x(d.year))
      .y(d => y(d.total))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(demand)
      .attr('d', totalLine)
      .attr('fill', 'none')
      .attr('stroke', '#1f2937')
      .attr('stroke-width', 2.5);

    // Hover dots on total line
    g.selectAll('.total-dot')
      .data(demand)
      .enter()
      .append('circle')
      .attr('class', 'total-dot')
      .attr('cx', d => x(d.year))
      .attr('cy', d => y(d.total))
      .attr('r', 4)
      .attr('fill', '#1f2937')
      .attr('stroke', 'white')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')
      .on('mouseover', function(event, d) {
        d3.select(this).attr('r', 6);
        tooltip.transition().duration(100).style('opacity', 1);
        let html = `<strong>${d.year}</strong><br>`;
        html += `Total: ${d.total.toLocaleString()}k workers<br>`;
        html += `GWh demand: ${d.gwh.toLocaleString()}<br>`;
        html += `Workers/GWh: ${d.workers_per_gwh}<br>`;
        html += `<br>`;
        regions.forEach(r => {
          html += `${r}: ${d[r].toLocaleString()}k<br>`;
        });
        tooltip.html(html)
          .style('left', (event.pageX + 12) + 'px')
          .style('top', (event.pageY - 12) + 'px');
      })
      .on('mouseout', function() {
        d3.select(this).attr('r', 4);
        tooltip.transition().duration(200).style('opacity', 0);
      });

    // Legend
    const legend = g.append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${innerW + 15}, 0)`);

    regions.forEach((name, i) => {
      const row = legend.append('g')
        .attr('transform', `translate(0, ${i * 22})`);
      row.append('rect')
        .attr('width', 14).attr('height', 14)
        .attr('fill', COLORS[name])
        .attr('opacity', 0.7);
      row.append('text')
        .attr('x', 20).attr('y', 11)
        .attr('font-size', '11px')
        .attr('fill', '#374151')
        .text(name);
    });

    const totalRow = legend.append('g')
      .attr('transform', `translate(0, ${regions.length * 22})`);
    totalRow.append('line')
      .attr('x1', 0).attr('x2', 14)
      .attr('y1', 7).attr('y2', 7)
      .attr('stroke', '#1f2937')
      .attr('stroke-width', 2.5);
    totalRow.append('text')
      .attr('x', 20).attr('y', 11)
      .attr('font-size', '11px')
      .attr('fill', '#374151')
      .text('Total');

    // Update metrics
    updateMetrics(demand);
  }

  // ── Metrics Update ──

  function updateMetrics(projections) {
    if (!projections) return;

    const d2035 = projections.find(d => d.year === 2035);
    const d2050 = projections.find(d => d.year === 2050);

    if (d2035) {
      document.getElementById('metric-global-2035').textContent =
        d2035.total.toLocaleString() + 'k';
    }
    if (d2050) {
      document.getElementById('metric-global-2050').textContent =
        d2050.total.toLocaleString() + 'k';
    }
  }

  // ── Controls ──

  function bindControl(id, displayId, formatter) {
    const el = document.getElementById(id);
    const display = document.getElementById(displayId);
    el.addEventListener('input', function() {
      display.textContent = formatter(this.value);
      renderGlobalJobs();
    });
  }

  bindControl('ctrl-workers-per-gwh', 'val-workers-per-gwh', v => v);
  bindControl('ctrl-automation', 'val-automation', v => (+v).toFixed(1) + '%');
  bindControl('ctrl-multiplier', 'val-multiplier', v => (+v).toFixed(1) + 'x');
  bindControl('ctrl-us-share', 'val-us-share', v => v + '%');
  bindControl('ctrl-gwh-2035', 'val-gwh-2035', v => Number(v).toLocaleString() + ' GWh');

  document.getElementById('ctrl-scenario').addEventListener('change', renderGlobalJobs);

  // Resize handler
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      if (laborData) renderLaborIntensity();
      if (jobsData) renderGlobalJobs();
    }, 250);
  });

})();
