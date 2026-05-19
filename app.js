/* Lagos POC sensor coverage — updated standalone distribution
 * 15 new AllUnite sensors supporting all 30 submitted screen locations.
 *  - 15 modelled screen locations: 7 represented by nearby sensors,
 *    5 do not require a separate sensor (nearby sensor already covers them),
 *    3 are non-electrified extended modelled cases.
 * Coordinates and labels preserved exactly from the source data.
 */

const COLORS = {
  new:        '#1D9E75',
  covered:    '#888780',
  nosensor:   '#BA7517',
  outlier:    '#A32D2D',
  link:       '#6F716B',
};

/* 15 new AllUnite sensors (physical recommended installations). */
const newS = [
  { n: "LGS-OJOD-BERG-24",       lat: 6.639622,  lon: 3.358554,  addr: "Ogunnusi Rd, Grammar School",          cov: "LGS-OJOD-BERG-23 (987m); LGS-AGEG-CINE-26 (via CINE-25)" },
  { n: "LGS-LAGO-BADA-EXPR-27",  lat: 6.460169,  lon: 3.300753,  addr: "Festac 1st Gate",                      cov: "LGS-MILE-2-AMUW-29 (0m); LGS-MILE-2-AMUW-30 (937m)" },
  { n: "LGS-LEKK-TOLL-PLAZ-07",  lat: 6.4494018, lon: 3.4580457, addr: "Lekki Ikoyi Link Bridge",              cov: "—" },
  { n: "LGS-LEKK-TOLL-PLAZ-08",  lat: 6.4357377, lon: 3.4471613, addr: "Admiralty Toll Plaza, Lekki",          cov: "—" },
  { n: "LGS-ADEN-ADEL-BUS-06",   lat: 6.458305,  lon: 3.402088,  addr: "Adeniji Adele, 3rd Mainland Bridge",   cov: "LGS-ADEN-ADEL-BUS-05 (526m); LGS-THIR-MAIN-BRID-02 (846m)" },
  { n: "LGS-MARY-IKOR-ROAD-15",  lat: 6.574759,  lon: 3.369452,  addr: "Maryland LED",                         cov: "LGS-MARY-IKOR-ROAD-16 (956m)" },
  { n: "LGS-YABA-19",            lat: 6.526234,  lon: 3.367657,  addr: "Fadeyi LED",                           cov: "—" },
  { n: "LGS-AGEG-CINE-25",       lat: 6.6281,    lon: 3.340852,  addr: "Wemco Rd, Sunday Market",              cov: "LGS-AGEG-CINE-26 (1787m)" },
  { n: "LGS-OBAL-ISLA-HUB-03",   lat: 6.473416,  lon: 3.376527,  addr: "Eko Bridge FTT Costain",               cov: "LGS-THIR-MAIN-BRID-01 (1869m); LGS-OBAL-ISLA-HUB-04 (1894m)" },
  { n: "LGS-ADEO-ODEK-VICT-09",  lat: 6.4298962, lon: 3.4089825, addr: "Adeola Odeku Junction, V.I.",          cov: "LGS-ADEO-ODEK-VICT-10 (2072m)" },
  { n: "LGS-MILE-12-KETU-21",    lat: 6.605699,  lon: 3.373481,  addr: "Radius board, Mile 12",                cov: "—" },
  { n: "LGS-ALLE-AVEN-IKEJ-13",  lat: 6.607206,  lon: 3.348898,  addr: "Allen Junction, Ikeja",                cov: "LGS-ALLE-AVEN-IKEJ-14 (1086m)" },
  { n: "LGS-AJAH-VGC-JUNC-11",   lat: 6.4367075, lon: 3.5080216, addr: "Osapa Junction, Ajah",                 cov: "—" },
  { n: "LGS-MOBO-BANK-ANTH-17",  lat: 6.587363,  lon: 3.356924,  addr: "Mobolaji Bank Anthony",                cov: "LGS-MOBO-BANK-ANTH-18 (50m)" },
  { n: "LGS-YABA-20",            lat: 6.573719,  lon: 3.362744,  addr: "Herbert Macaulay Way, Yaba",           cov: "—" },
];

/* Modelled screen locations represented by a nearby recommended sensor (within ~2 km). */
const covered = [
  { n: "LGS-AGEG-CINE-26",       lat: 6.627524,  lon: 3.324685,  by: "LGS-AGEG-CINE-25",       d: 1787 },
  { n: "LGS-MILE-2-AMUW-29",     lat: 6.460169,  lon: 3.300753,  by: "LGS-LAGO-BADA-EXPR-27",  d: 0 },
  { n: "LGS-THIR-MAIN-BRID-01",  lat: 6.483615,  lon: 3.389968,  by: "LGS-OBAL-ISLA-HUB-03",   d: 1869 },
  { n: "LGS-ADEO-ODEK-VICT-10",  lat: 6.443348,  lon: 3.421953,  by: "LGS-ADEO-ODEK-VICT-09",  d: 2072 },
  { n: "LGS-OBAL-ISLA-HUB-04",   lat: 6.457515,  lon: 3.382679,  by: "LGS-OBAL-ISLA-HUB-03",   d: 1894 },
  { n: "LGS-ALLE-AVEN-IKEJ-14",  lat: 6.598568,  lon: 3.353496,  by: "LGS-ALLE-AVEN-IKEJ-13",  d: 1086 },
  { n: "LGS-MARY-IKOR-ROAD-16",  lat: 6.581614,  lon: 3.374682,  by: "LGS-MARY-IKOR-ROAD-15",  d: 956 },
];

/* Modelled screen locations where a separate sensor is not required — a recommended
 * sensor sits very close by and already represents the location in the POC model. */
const nosensor = [
  { n: "LGS-OJOD-BERG-23",       lat: 6.631117,  lon: 3.355998,  by: "LGS-OJOD-BERG-24",       d: 987 },
  { n: "LGS-MILE-2-AMUW-30",     lat: 6.467995,  lon: 3.297607,  by: "LGS-LAGO-BADA-EXPR-27",  d: 937 },
  { n: "LGS-THIR-MAIN-BRID-02",  lat: 6.4545609, lon: 3.4087538, by: "LGS-ADEN-ADEL-BUS-06",   d: 846 },
  { n: "LGS-ADEN-ADEL-BUS-05",   lat: 6.460496,  lon: 3.39787,   by: "LGS-ADEN-ADEL-BUS-06",   d: 526 },
  { n: "LGS-MOBO-BANK-ANTH-18",  lat: 6.573413,  lon: 3.363069,  by: "LGS-YABA-20",            d: 50 },
];

/* Non-electrified extended modelled cases (no power available, sits outside footprint). */
const outliers = [
  { n: "LGS-MILE-12-KETU-22",    lat: 6.609492,  lon: 3.429295,  by: "LGS-MILE-12-KETU-21",    d: 6179 },
  { n: "LGS-LAGO-BADA-EXPR-28",  lat: 6.461972,  lon: 3.204519,  by: "LGS-LAGO-BADA-EXPR-27",  d: 10635 },
  { n: "LGS-AJAH-VGC-JUNC-12",   lat: 6.475868,  lon: 3.766681,  by: "LGS-AJAH-VGC-JUNC-11",   d: 28909 },
];

/* ──────────────────────────────────────────────────────── */

const infoBody = document.getElementById('info-body');
const fmtMeters = m => m >= 1000 ? `${(m / 1000).toFixed(m >= 10000 ? 1 : 2)} km` : `${m} m`;

function renderInfo({ name, tagColor, tagText, address, covers, by, distance, note }) {
  const meta = [];
  if (address) meta.push(`<dt>Address</dt><dd>${address}</dd>`);
  if (covers)  meta.push(`<dt>Also covers</dt><dd>${covers}</dd>`);
  if (by)      meta.push(`<dt>Represented by</dt><dd>${by}</dd>`);
  if (distance !== undefined) meta.push(`<dt>Distance</dt><dd class="mono">${fmtMeters(distance)}</dd>`);

  infoBody.innerHTML = `
    <h2 class="site-name">${name}</h2>
    <span class="site-tag" style="background:${hexA(tagColor, 0.12)};color:${tagColor}">${tagText}</span>
    ${meta.length ? `<dl class="meta">${meta.join('')}</dl>` : ''}
    ${note ? `<div class="note">${note}</div>` : ''}
  `;
}

function hexA(hex, a) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ──────────── Map setup ──────────── */

const map = L.map('map', {
  scrollWheelZoom: true,
  zoomControl: false,
  attributionControl: true,
}).setView([6.53, 3.40], 11);

L.control.zoom({ position: 'bottomleft' }).addTo(map);

const tileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
const tileAttr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

L.tileLayer(tileUrl, {
  attribution: tileAttr,
  subdomains: 'abcd',
  maxZoom: 19,
}).addTo(map);

/* ──────────── Layers ──────────── */

const coverageLayer = L.layerGroup().addTo(map);
const linkLayer = L.layerGroup().addTo(map);
const markerLayer = L.layerGroup().addTo(map);

// 2 km coverage rings around each recommended AllUnite sensor.
newS.forEach(s => {
  L.circle([s.lat, s.lon], {
    radius: 2000,
    color: COLORS.new,
    weight: 0.8,
    opacity: 0.55,
    fillColor: COLORS.new,
    fillOpacity: 0.05,
    dashArray: '4 4',
    interactive: false,
  }).addTo(coverageLayer);
});

// Coverage-assignment lines for all modelled screen locations.
[...covered, ...nosensor, ...outliers].forEach(c => {
  const sensor = newS.find(s => s.n === c.by);
  if (!sensor) return;
  L.polyline([[c.lat, c.lon], [sensor.lat, sensor.lon]], {
    color: COLORS.link,
    weight: 1,
    opacity: 0.55,
    dashArray: '3 5',
    interactive: false,
  }).addTo(linkLayer);
});

/* ──────────── Markers ──────────── */

// New AllUnite sensors
newS.forEach((s, i) => {
  L.circleMarker([s.lat, s.lon], {
    radius: 9,
    fillColor: COLORS.new,
    color: '#fff',
    weight: 2,
    fillOpacity: 0.92,
  })
    .addTo(markerLayer)
    .bindTooltip(`#${i + 1} · ${s.n}`, { direction: 'top', offset: [0, -8] })
    .on('click', () => renderInfo({
      name: `#${i + 1} · ${s.n}`,
      tagColor: COLORS.new,
      tagText: 'Recommended new AllUnite sensor',
      address: s.addr,
      covers: s.cov && s.cov !== '—' ? s.cov : null,
      note: 'Physical installation point. Provides a 2 km coverage radius and may also represent other submitted screen locations within range.',
    }));
});

// Modelled — represented by nearby recommended sensor
covered.forEach(c => {
  L.circleMarker([c.lat, c.lon], {
    radius: 5,
    fillColor: COLORS.covered,
    color: COLORS.covered,
    weight: 1.5,
    fillOpacity: 0.18,
  })
    .addTo(markerLayer)
    .bindTooltip(c.n, { direction: 'top', offset: [0, -6] })
    .on('click', () => renderInfo({
      name: c.n,
      tagColor: COLORS.covered,
      tagText: 'Modelled location · represented by nearby sensor',
      by: c.by,
      distance: c.d,
      note: 'This submitted screen location is represented in the POC model by a nearby recommended AllUnite sensor within the 2 km coverage radius.',
    }));
});

// Modelled — no separate sensor required (a recommended sensor sits very close by)
nosensor.forEach(c => {
  L.circleMarker([c.lat, c.lon], {
    radius: 5,
    fillColor: COLORS.nosensor,
    color: COLORS.nosensor,
    weight: 1.5,
    fillOpacity: 0.18,
  })
    .addTo(markerLayer)
    .bindTooltip(c.n, { direction: 'top', offset: [0, -6] })
    .on('click', () => renderInfo({
      name: c.n,
      tagColor: COLORS.nosensor,
      tagText: 'Modelled location · no separate sensor required',
      by: c.by,
      distance: c.d,
      note: 'A recommended AllUnite sensor sits close enough to this submitted screen location that no separate installation is required — the nearby sensor already represents this location in the POC model.',
    }));
});

// Modelled — non-electrified extended cases
outliers.forEach(o => {
  L.circleMarker([o.lat, o.lon], {
    radius: 7,
    fillColor: COLORS.outlier,
    color: COLORS.outlier,
    weight: 2,
    fillOpacity: 0.18,
  })
    .addTo(markerLayer)
    .bindTooltip(o.n, { direction: 'top', offset: [0, -6] })
    .on('click', () => renderInfo({
      name: o.n,
      tagColor: COLORS.outlier,
      tagText: 'Modelled location · non-electrified extended case',
      by: o.by,
      distance: o.d,
      note: 'This submitted screen location is not electrified and sits outside the nearby-sensor installation footprint, so no physical POC sensor is recommended here. It remains included as a modelled location in the POC assessment.',
    }));
});

/* ──────────── Fit bounds ──────────── */

const allBoundsPts = [
  ...newS.map(s => [s.lat, s.lon]),
  ...covered.map(c => [c.lat, c.lon]),
  ...nosensor.map(c => [c.lat, c.lon]),
  ...outliers.map(o => [o.lat, o.lon]),
];
if (allBoundsPts.length) {
  map.fitBounds(L.latLngBounds(allBoundsPts).pad(0.1));
}
