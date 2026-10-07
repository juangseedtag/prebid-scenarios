(function () {
  const D = window.REPORT_DATA;

  /* ---------- i18n ---------- */
  const I18N = {
    en: {
      title: "MagniteDirect Weekly Pulse",
      subtitle: "Network performance of the MagniteDirect channel, current week vs previous week, with Rubicon as the reference line.",
      curWeek: "Current week", prvWeek: "Previous week", generated: "Generated",
      lang: "Language",
      partA: "MagniteDirect · Week vs Week", partAsub: "Every figure is MagniteDirect net revenue (USD) unless stated otherwise.",
      partB: "MagniteDirect vs Rubicon", partBsub: "Both Magnite lines side by side, same windows.",
      partC: "New accounts", partCsub: "Editorial groups recently connected to MagniteDirect, tracked against their Rubicon line.",
      navNetwork: "Network", navEgUp: "EG increase", navEgDown: "EG decrease", navCountry: "EG country", navSource: "Source type", navAU: "Ad unit type",
      navPubs: "Publisher movers", navTop: "Top publishers", navZero: "Zero alert", navVsNet: "Network daily", navVsEg: "Top 10 EG", navVsSt: "Source type", navVsAu: "Ad unit type", navNew: "New accounts",
      summaryEyebrow: "MagniteDirect revenue · current week",
      vsPrev: "vs previous week",
      takeaways: "Key takeaways", heroNote: "Daily MagniteDirect revenue, full USD",
      revenue: "Revenue", impressions: "Impressions", ecpm: "eCPM", activePubs: "Active publishers / day", requests: "Requests",
      prevShort: "prev", deltaUsd: "Δ USD", deltaPct: "Δ %", trend: "Trend", share: "Share",
      network: "Network", networkSub: "MagniteDirect revenue across the whole network. The daily chart lays the current week over the same weekday of the previous week.",
      dailyCurVsPrev: "Daily revenue · current vs previous week", weekTotals: "Weekly totals",
      egUp: "Editorial Groups · biggest increase", egUpSub: "Top 10 editorial groups ranked by revenue gained on MagniteDirect versus the previous week.",
      egDown: "Editorial Groups · biggest decrease", egDownSub: "Top 10 editorial groups ranked by revenue lost on MagniteDirect versus the previous week.",
      country: "Editorial Group country", countrySub: "Top 10 editorial-group countries by MagniteDirect revenue concentration, with the week-over-week direction.",
      source: "Source type", sourceSub: "MagniteDirect revenue by integration source, highest to lowest.",
      au: "Ad unit type", auSub: "MagniteDirect revenue by ad unit format, highest to lowest.",
      pubs: "Publisher movers", pubsSub: "Top 50 publishers ranked by the size of their week-over-week revenue change (up or down), with their editorial group.",
      topPubs: "Top 50 publishers by revenue", topPubsSub: "The 50 highest-earning MagniteDirect publishers this week, with their editorial group and trend.",
      zero: "Publishers at zero", zeroSub: "Publishers with the MagniteDirect line active (receiving requests) but delivering 0 impressions and $0 revenue this week.",
      zeroBand: (n, t) => `publishers sent MagniteDirect requests this week without a single impression or dollar of revenue (out of ${t} publishers with MagniteDirect traffic in the two weeks).`,
      droppedTitle: "Stopped monetizing this week", droppedSub: (n) => `${n} publishers earned revenue last week and fell to $0 this week. The amounts are small, but the line stopped delivering.`,
      zeroTop: "Top 50 zero-delivery publishers by request volume",
      reqTrend: "Request trend",
      vsNet: "Network · daily", vsNetSub: "Daily revenue of both lines across the current 7 days, and the MagniteDirect share of total Magnite revenue.",
      mdShare: "MagniteDirect share", combined: "Combined Magnite",
      vsEg: "Top 10 editorial groups", vsEgSub: "The 10 editorial groups with the highest combined Magnite revenue this week, split by line.",
      vsSt: "Source type", vsStSub: "Revenue by source type for both lines, highest to lowest by combined revenue.",
      vsAu: "Ad unit type", vsAuSub: "Week-over-week by ad unit type, and the daily evolution over the current 7 days for the selected format.",
      pickAu: "Ad unit type",
      newSub: (a, b, c) => `Analysed range: ${a} – ${b}. MagniteDirect delivery for all five groups starts on ${c}.`,
      noRevenue: "No revenue yet", ramping: "Ramping up", steady: "Steady", early: "Early stage",
      mdWeek: "MagniteDirect · week", rbWeek: "Rubicon · week", mdLastDay: "MagniteDirect · last day", firstDelivery: "First delivery",
      rbNone: "No Rubicon line", mdPubsLbl: (n) => `${n} publishers delivering on MagniteDirect`,
      editorialGroup: "Editorial group", publisher: "Publisher", countryCol: "Country", value: "Value",
      cur: "Current", prv: "Previous", new: "New", gone: "To zero",
      search: "Filter publisher or EG…", showAll: "Show all 50", showLess: "Show top 15",
      md: "MagniteDirect", rb: "Rubicon",
      prevRev: "Prev. revenue", prevImps: "Prev. imps", curReq: "Requests (cur)", prvReq: "Requests (prev)",
      notes: "Source: Trino · st_datalakehouse.ad_exchange.ssp_events_daily_simplified, channels MagniteDirect and Rubicon. Revenue = ssp_net_imp_paid / 1000 (net, USD).",
      notes2: "Week = the 7 days ending today, compared to the 7 days before that. eCPM = revenue / impressions × 1000.",
      egCount: "EGs", none: "—",
      navEgZero: "EG zero alert",
      egZero: "Editorial Groups at zero", egZeroSub: "Whole editorial groups with the MagniteDirect line active (receiving requests) but 0 impressions and $0 revenue across all their publishers this week.",
      egZeroBand: (n, t) => `of ${t} editorial groups with MagniteDirect traffic delivered 0 impressions and $0 this week.`,
      egsWithLine: "EGs with the line", egsZero: "EGs fully at zero", egsStopped: "Stopped monetizing this week", egsMonet: "EGs monetizing",
      stStopped: "Stopped this week", stNever: "Never delivered",
      egZeroDaily: "blox · daily MagniteDirect delivery", egZeroDailySub: "blox delivered until Sep 23, dropped to 6 impressions on Sep 24 and has been at 0 since Sep 25 while requests continue.",
      egZeroReq: "Requests · previous vs current week",
      egZeroPubsTitle: "Editorial groups with zero-delivery publishers", egZeroPubsSub: "EGs that still monetize but have publishers receiving MagniteDirect requests with 0 impressions this week, ranked by number of zero publishers.",
      pubsOnMd: "Publishers on MD", zeroPubs: "Zero pubs", zeroRate: "% at zero", stoppedPubs: "Stopped this week",
      pubStoppedLbl: "Publishers that stopped monetizing", pubStoppedSub: "Had revenue last week, $0 this week",
      pubZeroLbl: "Publishers at zero", pubZeroSub: "Requests but 0 imps / $0", lostRev: "Revenue lost", lostRevSub: "Their previous-week revenue",
      activated: "Activated", activatedSub: "First MagniteDirect request, impression and revenue",
      status: "Status"
    },
    es: {
      title: "MagniteDirect Pulso Semanal",
      subtitle: "Rendimiento del canal MagniteDirect en la network, semana actual vs semana anterior, con Rubicon como línea de referencia.",
      curWeek: "Semana actual", prvWeek: "Semana anterior", generated: "Generado",
      lang: "Idioma",
      partA: "MagniteDirect · Semana vs Semana", partAsub: "Todas las cifras son revenue neto de MagniteDirect (USD) salvo que se indique lo contrario.",
      partB: "MagniteDirect vs Rubicon", partBsub: "Ambas líneas de Magnite lado a lado, mismas ventanas de tiempo.",
      partC: "Nuevas cuentas", partCsub: "Grupos editoriales conectados recientemente a MagniteDirect, comparados con su línea de Rubicon.",
      navNetwork: "Network", navEgUp: "EG incremento", navEgDown: "EG disminución", navCountry: "País EG", navSource: "Source type", navAU: "Ad unit type",
      navPubs: "Publishers en movimiento", navTop: "Top publishers", navZero: "Alerta en cero", navVsNet: "Network diario", navVsEg: "Top 10 EG", navVsSt: "Source type", navVsAu: "Ad unit type", navNew: "Nuevas cuentas",
      summaryEyebrow: "Revenue MagniteDirect · semana actual",
      vsPrev: "vs semana anterior",
      takeaways: "Conclusiones clave", heroNote: "Revenue diario de MagniteDirect, USD completos",
      revenue: "Revenue", impressions: "Impresiones", ecpm: "eCPM", activePubs: "Publishers activos / día", requests: "Requests",
      prevShort: "ant.", deltaUsd: "Δ USD", deltaPct: "Δ %", trend: "Tendencia", share: "Peso",
      network: "Network", networkSub: "Revenue de MagniteDirect en toda la network. El gráfico diario superpone la semana actual con el mismo día de la semana anterior.",
      dailyCurVsPrev: "Revenue diario · semana actual vs anterior", weekTotals: "Totales semanales",
      egUp: "Grupos Editoriales · mayor incremento", egUpSub: "Top 10 grupos editoriales con mayor revenue ganado en MagniteDirect frente a la semana anterior.",
      egDown: "Grupos Editoriales · mayor disminución", egDownSub: "Top 10 grupos editoriales con mayor revenue perdido en MagniteDirect frente a la semana anterior.",
      country: "País del Grupo Editorial", countrySub: "Top 10 países de grupo editorial por concentración de revenue en MagniteDirect, con la dirección semana a semana.",
      source: "Source type", sourceSub: "Revenue de MagniteDirect por fuente de integración, de mayor a menor.",
      au: "Ad unit type", auSub: "Revenue de MagniteDirect por formato, de mayor a menor.",
      pubs: "Publishers en movimiento", pubsSub: "Top 50 publishers ordenados por el tamaño de su cambio de revenue semana a semana (subida o bajada), con su grupo editorial.",
      topPubs: "Top 50 publishers por revenue", topPubsSub: "Los 50 publishers con más revenue en MagniteDirect esta semana, con su grupo editorial y tendencia.",
      zero: "Publishers en cero", zeroSub: "Publishers con la línea de MagniteDirect activa (reciben requests) pero con 0 impresiones y $0 de revenue esta semana.",
      zeroBand: (n, t) => `publishers enviaron requests a MagniteDirect esta semana sin una sola impresión ni revenue (de ${t} publishers con tráfico MagniteDirect en las dos semanas).`,
      droppedTitle: "Dejaron de monetizar esta semana", droppedSub: (n) => `${n} publishers generaron revenue la semana pasada y bajaron a $0 esta semana. Los importes son pequeños, pero la línea dejó de entregar.`,
      zeroTop: "Top 50 publishers en cero por volumen de requests",
      reqTrend: "Tendencia requests",
      vsNet: "Network · diario", vsNetSub: "Revenue diario de ambas líneas en los 7 días actuales y el peso de MagniteDirect sobre el total de Magnite.",
      mdShare: "Peso MagniteDirect", combined: "Magnite combinado",
      vsEg: "Top 10 grupos editoriales", vsEgSub: "Los 10 grupos editoriales con mayor revenue combinado de Magnite esta semana, separado por línea.",
      vsSt: "Source type", vsStSub: "Revenue por source type en ambas líneas, de mayor a menor por revenue combinado.",
      vsAu: "Ad unit type", vsAuSub: "Semana vs semana por ad unit type y evolución diaria de los 7 días actuales para el formato seleccionado.",
      pickAu: "Ad unit type",
      newSub: (a, b, c) => `Rango analizado: ${a} – ${b}. La entrega en MagniteDirect de los cinco grupos empieza el ${c}.`,
      noRevenue: "Sin revenue aún", ramping: "En crecimiento", steady: "Estable", early: "Etapa inicial",
      mdWeek: "MagniteDirect · semana", rbWeek: "Rubicon · semana", mdLastDay: "MagniteDirect · último día", firstDelivery: "Primera entrega",
      rbNone: "Sin línea Rubicon", mdPubsLbl: (n) => `${n} publishers entregando en MagniteDirect`,
      editorialGroup: "Grupo editorial", publisher: "Publisher", countryCol: "País", value: "Valor",
      cur: "Actual", prv: "Anterior", new: "Nuevo", gone: "A cero",
      search: "Filtrar publisher o EG…", showAll: "Ver los 50", showLess: "Ver top 15",
      md: "MagniteDirect", rb: "Rubicon",
      prevRev: "Revenue ant.", prevImps: "Imps ant.", curReq: "Requests (act.)", prvReq: "Requests (ant.)",
      notes: "Fuente: Trino · st_datalakehouse.ad_exchange.ssp_events_daily_simplified, canales MagniteDirect y Rubicon. Revenue = ssp_net_imp_paid / 1000 (neto, USD).",
      notes2: "Semana = los 7 días que terminan hoy, comparados con los 7 días anteriores. eCPM = revenue / impresiones × 1000.",
      egCount: "EGs", none: "—",
      navEgZero: "Alerta EG en cero",
      egZero: "Grupos Editoriales en cero", egZeroSub: "Grupos editoriales completos con la línea de MagniteDirect activa (reciben requests) pero con 0 impresiones y $0 de revenue en todos sus publishers esta semana.",
      egZeroBand: (n, t) => `de ${t} grupos editoriales con tráfico MagniteDirect entregaron 0 impresiones y $0 esta semana.`,
      egsWithLine: "EGs con la línea", egsZero: "EGs totalmente en cero", egsStopped: "Dejaron de monetizar esta semana", egsMonet: "EGs monetizando",
      stStopped: "Dejó de monetizar esta semana", stNever: "Nunca entregó",
      egZeroDaily: "blox · entrega diaria en MagniteDirect", egZeroDailySub: "blox entregó hasta el 23 sep, cayó a 6 impresiones el 24 sep y está en 0 desde el 25 sep aunque sigue recibiendo requests.",
      egZeroReq: "Requests · semana anterior vs actual",
      egZeroPubsTitle: "Grupos editoriales con publishers en cero", egZeroPubsSub: "EGs que siguen monetizando pero tienen publishers que reciben requests de MagniteDirect con 0 impresiones esta semana, ordenados por número de publishers en cero.",
      pubsOnMd: "Publishers en MD", zeroPubs: "Pubs en cero", zeroRate: "% en cero", stoppedPubs: "Dejaron esta semana",
      pubStoppedLbl: "Publishers que dejaron de monetizar", pubStoppedSub: "Tenían revenue la semana pasada, $0 esta semana",
      pubZeroLbl: "Publishers en cero", pubZeroSub: "Requests pero 0 imps / $0", lostRev: "Revenue perdido", lostRevSub: "Su revenue de la semana anterior",
      activated: "Activado", activatedSub: "Primer request, impresión y revenue en MagniteDirect",
      status: "Estado"
    }
  };
  let lang = "en";
  try { lang = localStorage.getItem("mdpulse-lang") || "en"; } catch (e) {}
  const t = (k) => (I18N[lang][k] !== undefined ? I18N[lang][k] : I18N.en[k]);

  /* ---------- helpers ---------- */
  const sum = (a) => a.reduce((x, y) => x + y, 0);
  const locale = () => (lang === "es" ? "es-ES" : "en-US");
  const money = (v, dec) => {
    const a = Math.abs(v), s = v < 0 ? "−" : "";
    if (a >= 1e6) return s + "$" + (a / 1e6).toFixed(2) + "M";
    if (a >= 1e4) return s + "$" + (a / 1e3).toFixed(1) + "K";
    return s + "$" + a.toLocaleString(locale(), { maximumFractionDigits: dec === undefined ? 0 : dec, minimumFractionDigits: 0 });
  };
  const moneyFull = (v) => (v < 0 ? "−$" : "$") + Math.abs(v).toLocaleString(locale(), { maximumFractionDigits: v !== 0 && Math.abs(v) < 100 ? 1 : 0 });
  const signedMoney = (v) => (v > 0 ? "+" : "") + money(v, Math.abs(v) < 100 ? 1 : 0);
  const big = (v) => {
    const a = Math.abs(v);
    if (a >= 1e9) return (v / 1e9).toFixed(2) + "B";
    if (a >= 1e6) return (v / 1e6).toFixed(1) + "M";
    if (a >= 1e3) return (v / 1e3).toFixed(1) + "K";
    return String(Math.round(v));
  };
  const pct = (c, p) => (p > 0 ? (c - p) / p : null);
  const fmtPct = (x, d) => (x > 0 ? "+" : x < 0 ? "−" : "") + Math.abs(x * 100).toFixed(d === undefined ? 1 : d) + "%";
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmtDate = (iso, opt) => new Date(iso + "T12:00:00Z").toLocaleDateString(locale(), Object.assign({ timeZone: "UTC" }, opt || { month: "short", day: "numeric" }));
  const dayLbl = (iso) => fmtDate(iso, { weekday: "short", day: "numeric", month: "short" });

  function deltaPill(c, p, big) {
    const cls = big ? " lg" : "";
    if (p <= 0.05 && c > 0) return `<span class="delta new${cls}">▲ ${t("new")}</span>`;
    if (p <= 0.05 && c <= 0) return `<span class="delta flat${cls}">${t("none")}</span>`;
    if (c <= 0) return `<span class="delta down${cls}">▼ −100%</span>`;
    const x = pct(c, p);
    if (x > 9.99) return `<span class="delta up${cls}">▲ &gt;999%</span>`;
    if (Math.abs(x) < 0.005) return `<span class="delta flat${cls}">● ${fmtPct(x)}</span>`;
    return `<span class="delta ${x > 0 ? "up" : "down"}${cls}">${x > 0 ? "▲" : "▼"} ${fmtPct(x)}</span>`;
  }
  function arrow(c, p) {
    if (c > p * 1.005) return `<span class="trend-arrow up" aria-label="up">▲</span>`;
    if (c < p * 0.995) return `<span class="trend-arrow down" aria-label="down">▼</span>`;
    return `<span class="trend-arrow flat" aria-label="flat">●</span>`;
  }
  function miniBar(c, p, max) {
    return `<div class="mini" title="${t("cur")} ${moneyFull(c)} · ${t("prv")} ${moneyFull(p)}"><span style="width:${(Math.max(c, 0) / max) * 100}%"></span><span class="prev" style="width:${(Math.max(p, 0) / max) * 100}%"></span></div>`;
  }
  function stat(label, value, sub) {
    return `<div class="stat"><div class="eyebrow">${label}</div><div class="v">${value}</div><div class="s">${sub || ""}</div></div>`;
  }

  /* ---------- derived numbers ---------- */
  const md = D.daily.md, rb = D.daily.rb;
  const P = (a) => a.slice(0, 7), C = (a) => a.slice(7);
  const curDates = C(D.dates), prvDates = P(D.dates);
  const M = {
    mdC: sum(C(md.rev)), mdP: sum(P(md.rev)), rbC: sum(C(rb.rev)), rbP: sum(P(rb.rev)),
    mdIC: sum(C(md.imps)), mdIP: sum(P(md.imps)), rbIC: sum(C(rb.imps)), rbIP: sum(P(rb.imps)),
    mdRC: sum(C(md.reqs)), mdRP: sum(P(md.reqs)),
    mdPubC: sum(C(md.pubs)) / 7, mdPubP: sum(P(md.pubs)) / 7
  };
  M.mdEC = (M.mdC / M.mdIC) * 1000; M.mdEP = (M.mdP / M.mdIP) * 1000;
  M.rbEC = (M.rbC / M.rbIC) * 1000; M.rbEP = (M.rbP / M.rbIP) * 1000;
  M.shareC = M.mdC / (M.mdC + M.rbC); M.shareP = M.mdP / (M.mdP + M.rbP);

  /* ---------- chart theme ---------- */
  const charts = [];
  const css = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  function palette() {
    return { md: css("--md"), mdSoft: css("--md-soft"), rb: css("--rb"), rbSoft: css("--rb-soft"), prev: css("--prev"), up: css("--up"), down: css("--down"),
      ink: css("--ink"), muted: css("--muted"), line: css("--line"), surface: css("--surface"), warn: css("--warn") };
  }
  function baseOpts(c, extra) {
    const o = {
      responsive: true, maintainAspectRatio: false, animation: { duration: 350 },
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { position: "bottom", labels: { color: c.muted, boxWidth: 10, boxHeight: 10, usePointStyle: false, font: { family: "IBM Plex Sans", size: 12 } } },
        tooltip: { backgroundColor: c.ink, titleColor: c.surface, bodyColor: c.surface, padding: 10, cornerRadius: 6, titleFont: { family: "IBM Plex Sans", weight: "600" }, bodyFont: { family: "IBM Plex Mono", size: 12 },
          callbacks: { label: (ctx) => ` ${ctx.dataset.label}: ${moneyFull(ctx.parsed[ctx.chart.options.indexAxis === "y" ? "x" : "y"])}` } }
      },
      scales: {
        x: { grid: { color: c.line, drawTicks: false }, border: { display: false }, ticks: { color: c.muted, padding: 6, font: { family: "IBM Plex Sans", size: 11.5 } } },
        y: { grid: { color: c.line, drawTicks: false }, border: { display: false }, ticks: { color: c.muted, padding: 6, font: { family: "IBM Plex Mono", size: 11 } } }
      }
    };
    return deepMerge(o, extra || {});
  }
  function deepMerge(a, b) {
    for (const k in b) {
      if (b[k] && typeof b[k] === "object" && !Array.isArray(b[k]) && typeof a[k] === "object") deepMerge(a[k], b[k]);
      else a[k] = b[k];
    }
    return a;
  }
  const moneyTick = { callback: (v) => money(v) };
  function mk(id, cfg) {
    const el = document.getElementById(id);
    if (!el || !window.Chart) return;
    charts.push(new Chart(el, cfg));
  }
  function hbarCompare(id, labels, prevVals, curVals, c, curColor, curLabel, prevLabel) {
    mk(id, { type: "bar", data: { labels, datasets: [
      { label: prevLabel || t("prvWeek"), data: prevVals, backgroundColor: c.prev, borderRadius: 3, barPercentage: 0.9, categoryPercentage: 0.75 },
      { label: curLabel || t("curWeek"), data: curVals, backgroundColor: curColor || c.md, borderRadius: 3, barPercentage: 0.9, categoryPercentage: 0.75 }
    ] }, options: baseOpts(c, { indexAxis: "y", scales: { x: { ticks: moneyTick }, y: { grid: { display: false }, ticks: { font: { family: "IBM Plex Sans", size: 11.5 } } } } }) });
  }

  /* ---------- table builders ---------- */
  function egTable(rows) {
    const max = Math.max(...rows.map((r) => Math.max(r[2], r[3])));
    return `<div class="table-wrap"><table><thead><tr><th>#</th><th>${t("editorialGroup")}</th><th>${t("countryCol")}</th><th class="r">${t("prvWeek")}</th><th class="r">${t("curWeek")}</th><th class="r">${t("deltaUsd")}</th><th class="r">${t("deltaPct")}</th><th>${t("trend")}</th><th class="r">${t("impressions")}</th></tr></thead><tbody>${rows
      .map((r, i) => `<tr><td class="rank">${i + 1}</td><td><strong>${esc(r[0])}</strong></td><td>${r[1]}</td><td class="r num">${moneyFull(r[3])}</td><td class="r num">${moneyFull(r[2])}</td><td class="r num">${signedMoney(r[2] - r[3])}</td><td class="r">${deltaPill(r[2], r[3])}</td><td class="bar-cell">${miniBar(r[2], r[3], max)}</td><td class="r num">${big(r[4])} <span class="muted">/ ${big(r[5])}</span></td></tr>`)
      .join("")}</tbody></table></div>`;
  }
  function dimTable(rows, total) {
    const max = Math.max(...rows.map((r) => Math.max(r[1], r[2])));
    return `<div class="table-wrap"><table><thead><tr><th>#</th><th>${t("value")}</th><th class="r">${t("prvWeek")}</th><th class="r">${t("curWeek")}</th><th class="r">${t("deltaUsd")}</th><th class="r">${t("deltaPct")}</th><th class="r">${t("share")}</th><th>${t("trend")}</th><th class="r">${t("ecpm")}</th></tr></thead><tbody>${rows
      .map((r, i) => `<tr><td class="rank">${i + 1}</td><td><strong>${esc(r[0])}</strong></td><td class="r num">${moneyFull(r[2])}</td><td class="r num">${moneyFull(r[1])}</td><td class="r num">${signedMoney(r[1] - r[2])}</td><td class="r">${deltaPill(r[1], r[2])}</td><td class="r num">${((r[1] / total) * 100).toFixed(1)}%</td><td class="bar-cell">${miniBar(r[1], r[2], max)}</td><td class="r num">${r[3] ? "$" + ((r[1] / r[3]) * 1000).toFixed(2) : "—"}</td></tr>`)
      .join("")}</tbody></table></div>`;
  }
  function pubTable(id, rows) {
    const max = Math.max(...rows.map((r) => Math.max(r[3], r[4])));
    return `<div class="table-wrap"><table id="${id}"><thead><tr><th>#</th><th>${t("publisher")}</th><th>${t("editorialGroup")}</th><th>${t("countryCol")}</th><th class="r">${t("prvWeek")}</th><th class="r">${t("curWeek")}</th><th class="r">${t("deltaUsd")}</th><th class="r">${t("deltaPct")}</th><th>${t("trend")}</th><th class="r">${t("ecpm")}</th></tr></thead><tbody>${rows
      .map((r, i) => `<tr data-q="${esc((r[0] + " " + r[1]).toLowerCase())}" data-i="${i}"><td class="rank">${i + 1}</td><td><strong>${esc(r[0])}</strong></td><td class="eg-tag">${esc(r[1])}</td><td>${r[2]}</td><td class="r num">${moneyFull(r[4])}</td><td class="r num">${moneyFull(r[3])}</td><td class="r num">${signedMoney(r[3] - r[4])}</td><td class="r">${deltaPill(r[3], r[4])}</td><td class="bar-cell">${miniBar(r[3], r[4], max)}</td><td class="r num">${r[5] ? "$" + ((r[3] / r[5]) * 1000).toFixed(2) : "—"}</td></tr>`)
      .join("")}</tbody></table></div>`;
  }
  function tableControls(id) {
    return `<div class="controls"><input id="${id}-q" type="search" placeholder="${t("search")}" aria-label="${t("search")}"><button class="btn" id="${id}-more" type="button" data-open="0">${t("showAll")}</button></div>`;
  }
  function wireTable(id) {
    const tbl = document.getElementById(id), q = document.getElementById(id + "-q"), more = document.getElementById(id + "-more");
    if (!tbl) return;
    const apply = () => {
      const term = (q.value || "").trim().toLowerCase(), open = more.dataset.open === "1";
      tbl.querySelectorAll("tbody tr").forEach((tr) => {
        const hit = !term || tr.dataset.q.includes(term);
        tr.hidden = !(hit && (open || term || +tr.dataset.i < 15));
      });
      more.textContent = open ? t("showLess") : t("showAll");
    };
    q.addEventListener("input", apply);
    more.addEventListener("click", () => { more.dataset.open = more.dataset.open === "1" ? "0" : "1"; apply(); });
    apply();
  }

  /* ---------- page ---------- */
  function render() {
    charts.splice(0).forEach((ch) => ch.destroy());
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-lang-btn]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.langBtn === lang)));

    const egUpTop = D.egInc[0], egDownTop = D.egDec[0];
    const totalCountry = D.country.reduce((s, r) => s + r[1], 0);
    const mdStC = sum(D.sourceType.md.map((r) => r[1])), mdAuC = sum(D.adUnitType.md.map((r) => r[1]));
    const droppedRev = sum(D.dropped.map((r) => r[5]));
    const newMdTotal = sum(D.newAccounts.map((a) => sum(C(a.md))));

    /* key takeaways: fixed 10-bullet template, every figure computed from REPORT_DATA */
    const dMd = M.mdC - M.mdP, dRb = M.rbC - M.rbP, comC = M.mdC + M.rbC, comP = M.mdP + M.rbP;
    const b = (x) => `<strong>${x}</strong>`;
    const egTop = D.egInc.find((r) => r[0] === D.peak[0]) || D.egInc[0];
    const mp = D.pubTop.find((r) => r[1] === egTop[0]);
    const stTot = sum(D.egStarted.map((r) => r[1]));
    const stNames = D.egStarted.slice(0, 6).map((r) => r[0]).join(", ");
    const stRest = D.egStarted.length - 6;
    const loss1 = D.egDec[0], loss2 = D.egDec[1];
    const ls = D.lineShift[0];
    const naTot = sum(D.newAccounts.map((a) => sum(C(a.md))));
    const naNames = D.newAccounts.map((a) => a.name).join(", ");
    const naDays = C(D.newAccounts[0].md).filter((v) => v > 0).length;
    const ut = D.newAccounts.slice().sort((x, y) => sum(C(y.md)) - sum(C(x.md)))[0];
    const utLast = ut.md[ut.md.length - 1], utShare = utLast / (utLast + ut.rb[ut.rb.length - 1]);
    const auUp = D.adUnitType.md.slice().sort((x, y) => (y[1] - y[2]) - (x[1] - x[2]))[0];
    const auMdDown = D.adUnitType.md.filter((r) => r[1] < r[2] && r[2] > 1000);
    const rbDownAll = D.adUnitType.rb.filter((r) => r[1] < r[2]);
    const rbDown = rbDownAll.slice(0, 4);
    const steep = rbDownAll.slice().sort((x, y) => pct(x[1], x[2]) - pct(y[1], y[2]))[0];
    if (steep && !rbDown.includes(steep)) rbDown.push(steep);
    const pctList = (rows, and) => rows.map((r) => `${r[0]} ${deltaPill(r[1], r[2])}`).join(", ").replace(/, ([^,]*)$/, ` ${and} $1`);
    const egZ = D.egZero, pi = egZ[0];
    const egStopped = egZ.filter((r) => r[9] === "stopped");
    const lastImp = (n) => { const d = D.egZeroDaily[n]; if (!d) return null; let i = -1; d.imps.forEach((v, k) => { if (v >= 5) i = k; }); return i >= 0 ? D.dates[i] : null; };
    const zp = D.egZeroPubs.slice().sort((x, y) => y[2] - x[2]).slice(0, 3);
    const drop = D.dropped, dropRev = sum(drop.map((r) => r[5]));
    const dropBy = {}; drop.forEach((r) => (dropBy[r[1]] = (dropBy[r[1]] || 0) + 1));
    const dropTop = Object.entries(dropBy).sort((x, y) => y[1] - x[1]).slice(0, 3);
    const nf = (n) => n.toLocaleString(locale());
    const es = lang === "es";
    const tk = [
      [es
        ? `MagniteDirect generó ${b(moneyFull(M.mdC))} esta semana, ${signedMoney(dMd)} (${deltaPill(M.mdC, M.mdP)}) frente a la semana anterior. El eCPM ${M.mdEC >= M.mdEP ? "subió" : "bajó"} de $${M.mdEP.toFixed(2)} a ${b("$" + M.mdEC.toFixed(2))}.`
        : `MagniteDirect generated ${b(moneyFull(M.mdC))} this week, ${signedMoney(dMd)} (${deltaPill(M.mdC, M.mdP)}) vs the previous week. eCPM ${M.mdEC >= M.mdEP ? "rose" : "fell"} from $${M.mdEP.toFixed(2)} to ${b("$" + M.mdEC.toFixed(2))}.`, dMd >= 0 ? "up" : "down"],
      [es
        ? `Rubicon ${dRb < 0 ? "cayó" : "subió"} ${money(Math.abs(dRb))} (${deltaPill(M.rbC, M.rbP)}) hasta ${b(moneyFull(M.rbC))}. El revenue combinado de Magnite (ambas líneas) es ${b(moneyFull(comC))}, ${signedMoney(comC - comP)} (${deltaPill(comC, comP)}). ${dRb < 0 && dMd < -dRb ? "Las ganancias de MagniteDirect todavía no compensan la caída de Rubicon." : dRb < 0 ? "Las ganancias de MagniteDirect ya compensan la caída de Rubicon." : "Ambas líneas crecen."}`
        : `Rubicon ${dRb < 0 ? "fell" : "rose"} ${money(Math.abs(dRb))} (${deltaPill(M.rbC, M.rbP)}) to ${b(moneyFull(M.rbC))}. Combined Magnite revenue (both lines) is ${b(moneyFull(comC))}, ${signedMoney(comC - comP)} (${deltaPill(comC, comP)}). ${dRb < 0 && dMd < -dRb ? "MagniteDirect gains do not yet offset the Rubicon decline." : dRb < 0 ? "MagniteDirect gains already offset the Rubicon decline." : "Both lines are growing."}`, comC >= comP ? "up" : "down"],
      [es
        ? `La cuota de MagniteDirect sobre el revenue total de Magnite pasó de ${(M.shareP * 100).toFixed(1)}% a ${b((M.shareC * 100).toFixed(1) + "%")} (${M.shareC >= M.shareP ? "+" : "−"}${Math.abs((M.shareC - M.shareP) * 100).toFixed(1)} pts).`
        : `MagniteDirect's share of total Magnite revenue moved from ${(M.shareP * 100).toFixed(1)}% to ${b((M.shareC * 100).toFixed(1) + "%")} (${M.shareC >= M.shareP ? "+" : "−"}${Math.abs((M.shareC - M.shareP) * 100).toFixed(1)} pts).`, M.shareC >= M.shareP ? "up" : "down"],
      [es
        ? `${b("El crecimiento está concentrado.")} ${egTop[0]} sumó ${signedMoney(egTop[2] - egTop[3])} (${deltaPill(egTop[2], egTop[3])}), ${mp ? `casi todo de ${mp[0]} (${signedMoney(mp[3] - mp[4])})` : ""}, con un pico de ${moneyFull(D.peak[2])} el ${fmtDate(D.peak[1], { weekday: "long", day: "numeric", month: "long" })}. ${D.egStarted.length} Editorial Groups empezaron en MagniteDirect esta semana (${stNames}${stRest > 0 ? ` y ${stRest} más` : ""}) y aportaron ${b(moneyFull(stTot))}.`
        : `${b("Growth is concentrated.")} ${egTop[0]} added ${signedMoney(egTop[2] - egTop[3])} (${deltaPill(egTop[2], egTop[3])}), ${mp ? `almost all from ${mp[0]} (${signedMoney(mp[3] - mp[4])})` : ""}, with a peak of ${moneyFull(D.peak[2])} on ${fmtDate(D.peak[1], { weekday: "long", month: "short", day: "numeric" })}. ${D.egStarted.length} Editorial Groups started on MagniteDirect this week (${stNames}${stRest > 0 ? ` and ${stRest} more` : ""}) and contributed ${b(moneyFull(stTot))}.`, "up"],
      [es
        ? `${b("A vigilar:")} ${loss1[0]}, el mayor Editorial Group, perdió ${money(loss1[3] - loss1[2])} (${deltaPill(loss1[2], loss1[3])}) y ${loss2[0]} perdió ${money(loss2[3] - loss2[2])} (${deltaPill(loss2[2], loss2[3])}). En ${ls[0]}, Rubicon bajó ${money(ls[4] - ls[3])} mientras MagniteDirect sumó ${money(ls[1] - ls[2])}, lo que apunta a revenue que se mueve entre líneas y no a revenue nuevo.`
        : `${b("Watch list:")} ${loss1[0]}, the largest Editorial Group, lost ${money(loss1[3] - loss1[2])} (${deltaPill(loss1[2], loss1[3])}) and ${loss2[0]} lost ${money(loss2[3] - loss2[2])} (${deltaPill(loss2[2], loss2[3])}). At ${ls[0]}, Rubicon dropped ${money(ls[4] - ls[3])} while MagniteDirect added ${money(ls[1] - ls[2])}, which points to revenue moving between lines rather than new revenue.`, "down"],
      [es
        ? `${b("Nuevas cuentas:")} ${naNames} empezaron en MagniteDirect el ${fmtDate(D.newAccounts[0].activated, { day: "numeric", month: "short" })} y suman ${b(moneyFull(naTot))} en ${naDays} días. ${ut.name} ya aporta el ${b((utShare * 100).toFixed(0) + "%")} del revenue combinado de Magnite en su EG.`
        : `${b("New accounts:")} ${naNames} went live on MagniteDirect on ${fmtDate(D.newAccounts[0].activated, { month: "short", day: "numeric" })} and produced ${b(moneyFull(naTot))} in ${naDays} days. ${ut.name} already takes ${b((utShare * 100).toFixed(0) + "%")} of combined Magnite revenue in its EG.`, "up"],
      [es
        ? `${b("Por formato:")} ${auUp[0]} impulsa la subida en MagniteDirect (${signedMoney(auUp[1] - auUp[2])}, ${deltaPill(auUp[1], auUp[2])})${auMdDown.length ? `; bajan ${pctList(auMdDown, "y")}` : ""}. En Rubicon la caída es generalizada: ${pctList(rbDown, "e")}.`
        : `${b("By format:")} ${auUp[0]} drives the MagniteDirect gain (${signedMoney(auUp[1] - auUp[2])}, ${deltaPill(auUp[1], auUp[2])})${auMdDown.length ? `; ${pctList(auMdDown, "and")} are down` : ""}. On Rubicon the decline is broad: ${pctList(rbDown, "and")}.`, "neutral"],
      [es
        ? `${b(egZ.length + " Editorial Groups completos")} tienen la línea MagniteDirect y no entregan nada (0 impresiones, $0): ${pi[0]} (${pi[2]} publishers, ${big(pi[3])} requests), ${egZ.slice(1).map((r) => r[0]).join(", ")}.`
        : `${b(egZ.length + " whole Editorial Groups")} have the MagniteDirect line and deliver nothing (0 impressions, $0): ${pi[0]} (${pi[2]} publishers, ${big(pi[3])} requests), ${egZ.slice(1).map((r) => r[0]).join(", ")}.`, "warn"],
      [es
        ? `${b(nf(D.zeroCounts.zero) + " publishers")} reciben requests de MagniteDirect sin entregar nada (${((D.zeroCounts.zero / D.zeroCounts.total) * 100).toFixed(1)}% de ${nf(D.zeroCounts.total)}). Se concentran en ${zp.map((r) => `${r[0]} (${nf(r[2])} de ${nf(r[1])})`).join(", ")}.`
        : `${b(nf(D.zeroCounts.zero) + " publishers")} receive MagniteDirect requests without delivering anything (${((D.zeroCounts.zero / D.zeroCounts.total) * 100).toFixed(1)}% of ${nf(D.zeroCounts.total)}). They are concentrated in ${zp.map((r) => `${r[0]} (${nf(r[2])} of ${nf(r[1])})`).join(", ")}.`, "warn"],
      [es
        ? `${b("Dejaron de monetizar esta semana:")} ${b(nf(D.zeroCounts.dropped) + " publishers")} con revenue la semana pasada están en $0 (sumaban ${moneyFull(Math.round(dropRev))}), sobre todo de ${dropTop.map((x) => `${x[0]} (${x[1]})`).join(", ")}. A nivel EG: ${egStopped.map((r) => `${r[0]}${lastImp(r[0]) ? ` (última entrega ${fmtDate(lastImp(r[0]))})` : ""}`).join(" y ")}.`
        : `${b("Stopped monetizing this week:")} ${b(nf(D.zeroCounts.dropped) + " publishers")} that had revenue last week are now at $0 (they earned ${moneyFull(Math.round(dropRev))} combined), mostly from ${dropTop.map((x) => `${x[0]} (${x[1]})`).join(", ")}. At EG level: ${egStopped.map((r) => `${r[0]}${lastImp(r[0]) ? ` (last delivery ${fmtDate(lastImp(r[0]))})` : ""}`).join(" and ")}.`, "warn"]
    ];

    const auKeys = D.adUnitType.md.filter((r) => D.auDaily.md[r[0]]).map((r) => r[0]);
    const stAll = {};
    D.sourceType.md.forEach((r) => (stAll[r[0]] = { md: r, rb: null }));
    D.sourceType.rb.forEach((r) => ((stAll[r[0]] = stAll[r[0]] || { md: null }).rb = r));
    const stRows = Object.keys(stAll).map((k) => ({ k, md: stAll[k].md || [k, 0, 0, 0, 0], rb: stAll[k].rb || [k, 0, 0, 0, 0] })).sort((a, b) => b.md[1] + b.rb[1] - (a.md[1] + a.rb[1]));
    const auAll = {};
    D.adUnitType.md.forEach((r) => (auAll[r[0]] = { md: r }));
    D.adUnitType.rb.forEach((r) => ((auAll[r[0]] = auAll[r[0]] || {}).rb = r));
    const auRows = Object.keys(auAll).map((k) => ({ k, md: auAll[k].md || [k, 0, 0, 0, 0], rb: auAll[k].rb || [k, 0, 0, 0, 0] })).filter((r) => r.md[1] + r.rb[1] > 0).sort((a, b) => b.md[1] + b.rb[1] - (a.md[1] + a.rb[1]));

    const vsTable = (rows, keyLbl) => `<div class="table-wrap"><table><thead><tr><th>${keyLbl}</th><th class="r">${t("md")} ${t("prv").toLowerCase()}</th><th class="r">${t("md")} ${t("cur").toLowerCase()}</th><th class="r">${t("deltaPct")}</th><th class="r">${t("rb")} ${t("prv").toLowerCase()}</th><th class="r">${t("rb")} ${t("cur").toLowerCase()}</th><th class="r">${t("deltaPct")}</th><th class="r">${t("mdShare")}</th></tr></thead><tbody>${rows
      .map((r) => `<tr><td><strong>${esc(r.k)}</strong></td><td class="r num">${moneyFull(r.md[2])}</td><td class="r num">${moneyFull(r.md[1])}</td><td class="r">${deltaPill(r.md[1], r.md[2])}</td><td class="r num">${moneyFull(r.rb[2])}</td><td class="r num">${moneyFull(r.rb[1])}</td><td class="r">${deltaPill(r.rb[1], r.rb[2])}</td><td class="r num">${r.md[1] + r.rb[1] > 0 ? ((r.md[1] / (r.md[1] + r.rb[1])) * 100).toFixed(1) + "%" : "—"}</td></tr>`)
      .join("")}</tbody></table></div>`;

    const egVsRows = D.egVs.map((r) => ({ k: r[0] + " · " + r[1], md: [r[0], r[2], r[3]], rb: [r[0], r[4], r[5]] }));

    const newRows = D.newAccounts.map((a) => {
      const mdC = sum(C(a.md)), rbC = sum(C(a.rb)), rbP = sum(P(a.rb));
      const live = a.md.map((v, i) => [v, i]).filter((x) => x[0] > 0);
      const first = live.length ? D.dates[live[0][1]] : null;
      const last = a.md[a.md.length - 1], firstV = live.length ? live[0][0] : 0;
      const liveVals = live.map((x) => x[0]);
      const lastTwoAvg = liveVals.slice(-2).reduce((s, v) => s + v, 0) / Math.max(1, liveVals.slice(-2).length);
      let status = ["neutral", t("noRevenue")];
      if (mdC > 0) status = lastTwoAvg > firstV * 3 ? ["up", t("ramping")] : last < 100 ? ["warn", t("early")] : ["md", t("steady")];
      return { a, mdC, rbC, rbP, first, last, status };
    });

    const app = document.getElementById("app");
    app.innerHTML = `
    <header class="masthead">
      <div class="flex flex-wrap justify-between items-start gap-3">
        <div class="grid gap-1.5 min-w-0">
          <div class="eyebrow">Seedtag · Network report</div>
          <h1>${t("title")}</h1>
          <p class="muted" style="margin:0;max-width:68ch">${t("subtitle")}</p>
        </div>
        <div class="toolbar"><span class="eyebrow">${t("lang")}</span><div class="seg" role="group" aria-label="${t("lang")}"><button type="button" data-lang-btn="en" aria-pressed="${lang === "en"}">EN</button><button type="button" data-lang-btn="es" aria-pressed="${lang === "es"}">ES</button></div></div>
      </div>
      <div class="period">
        <span class="chip"><span class="dot"></span>${t("curWeek")}: <strong class="num">${fmtDate(D.cur[0])} – ${fmtDate(D.cur[1], { month: "short", day: "numeric", year: "numeric" })}</strong></span>
        <span class="chip"><span class="dot prev"></span>${t("prvWeek")}: <strong class="num">${fmtDate(D.prv[0])} – ${fmtDate(D.prv[1], { month: "short", day: "numeric", year: "numeric" })}</strong></span>
        <span class="chip">${t("generated")}: <span class="num">${fmtDate(D.generated, { month: "short", day: "numeric", year: "numeric" })}</span></span>
      </div>
    </header>`;

    document.getElementById("rail").innerHTML = `<nav aria-label="Sections">
      <span class="grp">WoW</span>
      <a href="#network">${t("navNetwork")}</a><a href="#eg-up">${t("navEgUp")}</a><a href="#eg-down">${t("navEgDown")}</a><a href="#country">${t("navCountry")}</a><a href="#source">${t("navSource")}</a><a href="#adunit">${t("navAU")}</a><a href="#movers">${t("navPubs")}</a><a href="#top50">${t("navTop")}</a><a href="#eg-zero">${t("navEgZero")}</a><a href="#zero">${t("navZero")}</a>
      <span class="grp">MD vs RB</span>
      <a href="#vs-network">${t("navVsNet")}</a><a href="#vs-eg">${t("navVsEg")}</a><a href="#vs-source">${t("navVsSt")}</a><a href="#vs-adunit">${t("navVsAu")}</a>
      <span class="grp">New</span><a href="#new">${t("navNew")}</a>
    </nav>`;

    document.getElementById("content").innerHTML = `
    <section class="summary">
      <div class="headline-card">
        <div class="eyebrow">${t("summaryEyebrow")}</div>
        <div style="display:flex;flex-wrap:wrap;align-items:baseline;gap:12px"><span class="big">${moneyFull(M.mdC)}</span>${deltaPill(M.mdC, M.mdP, true)}<span class="muted">${t("vsPrev")} ${moneyFull(M.mdP)}</span></div>
        <div class="legend-inline"><span><i class="sw md"></i>${t("curWeek")}</span><span><i class="sw prev"></i>${t("prvWeek")}</span><span class="muted">${t("heroNote")}</span></div>
        <div class="chart-box hero"><canvas id="c-hero" aria-label="Daily MagniteDirect revenue, full USD"></canvas></div>
      </div>
      <div class="headline-card">
        <div class="eyebrow">${t("takeaways")}</div>
        <ul class="takeaways">${tk.map((x) => `<li class="${x[1]}"><span>${x[0]}</span></li>`).join("")}</ul>
      </div>
    </section>

    <div class="part"><div class="eyebrow">Part 1</div><h2>${t("partA")}</h2><p class="muted" style="margin:0">${t("partAsub")}</p></div>

    <section class="panel" id="network">
      <div class="panel-head"><div><h3>${t("network")}</h3><p>${t("networkSub")}</p></div></div>
      <div class="stats">
        ${stat(t("revenue"), money(M.mdC), `${deltaPill(M.mdC, M.mdP)} <span>${t("prevShort")} ${money(M.mdP)}</span>`)}
        ${stat(t("impressions"), big(M.mdIC), `${deltaPill(M.mdIC, M.mdIP)} <span>${t("prevShort")} ${big(M.mdIP)}</span>`)}
        ${stat(t("ecpm"), "$" + M.mdEC.toFixed(2), `${deltaPill(M.mdEC, M.mdEP)} <span>${t("prevShort")} $${M.mdEP.toFixed(2)}</span>`)}
        ${stat(t("activePubs"), Math.round(M.mdPubC).toLocaleString(locale()), `${deltaPill(M.mdPubC, M.mdPubP)} <span>${t("prevShort")} ${Math.round(M.mdPubP).toLocaleString(locale())}</span>`)}
      </div>
      <div class="grid-2">
        <div><div class="chart-title">${t("dailyCurVsPrev")}</div><div class="chart-box"><canvas id="c-net-daily"></canvas></div></div>
        <div><div class="chart-title">${t("weekTotals")} · ${t("revenue")} & ${t("impressions")}</div><div class="chart-box"><canvas id="c-net-week"></canvas></div></div>
      </div>
    </section>

    <section class="panel" id="eg-up">
      <div class="panel-head"><div><h3>${t("egUp")}</h3><p>${t("egUpSub")}</p></div></div>
      <div class="chart-box tall"><canvas id="c-eg-up"></canvas></div>
      ${egTable(D.egInc)}
    </section>

    <section class="panel" id="eg-down">
      <div class="panel-head"><div><h3>${t("egDown")}</h3><p>${t("egDownSub")}</p></div></div>
      <div class="chart-box tall"><canvas id="c-eg-down"></canvas></div>
      ${egTable(D.egDec)}
    </section>

    <section class="panel" id="country">
      <div class="panel-head"><div><h3>${t("country")}</h3><p>${t("countrySub")}</p></div></div>
      <div class="grid-2">
        <div class="chart-box"><canvas id="c-country"></canvas></div>
        <div class="chart-box"><canvas id="c-country-delta"></canvas></div>
      </div>
      <div class="table-wrap"><table><thead><tr><th>#</th><th>${t("countryCol")}</th><th class="r">${t("egCount")}</th><th class="r">${t("prvWeek")}</th><th class="r">${t("curWeek")}</th><th class="r">${t("deltaUsd")}</th><th class="r">${t("deltaPct")}</th><th class="r">${t("share")}</th><th>${t("trend")}</th></tr></thead><tbody>${D.country
        .map((r, i) => `<tr><td class="rank">${i + 1}</td><td><strong>${r[0]}</strong></td><td class="r num">${r[3]}</td><td class="r num">${moneyFull(r[2])}</td><td class="r num">${moneyFull(r[1])}</td><td class="r num">${signedMoney(r[1] - r[2])}</td><td class="r">${deltaPill(r[1], r[2])}</td><td class="r num">${((r[1] / totalCountry) * 100).toFixed(1)}%</td><td class="bar-cell">${miniBar(r[1], r[2], D.country[0][1])}</td></tr>`)
        .join("")}</tbody></table></div>
    </section>

    <section class="panel" id="source">
      <div class="panel-head"><div><h3>${t("source")}</h3><p>${t("sourceSub")}</p></div></div>
      <div class="chart-box"><canvas id="c-source"></canvas></div>
      ${dimTable(D.sourceType.md.map((r) => [r[0], r[1], r[2], r[3], r[4]]), mdStC)}
    </section>

    <section class="panel" id="adunit">
      <div class="panel-head"><div><h3>${t("au")}</h3><p>${t("auSub")}</p></div></div>
      <div class="chart-box"><canvas id="c-au"></canvas></div>
      ${dimTable(D.adUnitType.md.filter((r) => r[1] + r[2] > 0).map((r) => [r[0], r[1], r[2], r[3], r[4]]), mdAuC)}
    </section>

    <section class="panel" id="movers">
      <div class="panel-head"><div><h3>${t("pubs")}</h3><p>${t("pubsSub")}</p></div>${tableControls("t-movers")}</div>
      <div class="chart-box tall"><canvas id="c-movers"></canvas></div>
      ${pubTable("t-movers", D.pubMov)}
    </section>

    <section class="panel" id="top50">
      <div class="panel-head"><div><h3>${t("topPubs")}</h3><p>${t("topPubsSub")}</p></div>${tableControls("t-top")}</div>
      <div class="chart-box tall"><canvas id="c-top"></canvas></div>
      ${pubTable("t-top", D.pubTop)}
    </section>

    <section class="panel" id="eg-zero">
      <div class="panel-head"><div><h3>${t("egZero")}</h3><p>${t("egZeroSub")}</p></div></div>
      <div class="alert-band"><span class="big-n">${D.egZeroCounts.zero}</span><span>${t("egZeroBand")(D.egZeroCounts.zero, D.egZeroCounts.total)}</span></div>
      <div class="stats">
        ${stat(t("egsWithLine"), D.egZeroCounts.total, "MagniteDirect")}
        ${stat(t("egsZero"), D.egZeroCounts.zero, `<span class="pill warn">0 imps · $0</span>`)}
        ${stat(t("egsStopped"), `<span style="color:var(--down)">${D.egZeroCounts.stopped}</span>`, `<span class="delta down">▼ −100%</span> blox, sapo`)}
        ${stat(t("egsMonet"), D.egZeroCounts.monetCur, `${deltaPill(D.egZeroCounts.monetCur, D.egZeroCounts.monetPrev)} <span>${t("prevShort")} ${D.egZeroCounts.monetPrev}</span>`)}
      </div>
      <div class="table-wrap"><table><thead><tr><th>#</th><th>${t("editorialGroup")}</th><th>${t("countryCol")}</th><th class="r">${t("publisher")}s</th><th class="r">${t("prevRev")}</th><th class="r">${t("revenue")}</th><th class="r">${t("prevImps")}</th><th class="r">${t("impressions")}</th><th class="r">${t("deltaPct")}</th><th class="r">${t("prvReq")}</th><th class="r">${t("curReq")}</th><th>${t("reqTrend")}</th><th>${t("status")}</th></tr></thead><tbody>${D.egZero
        .map((r, i) => `<tr><td class="rank">${i + 1}</td><td><strong>${esc(r[0])}</strong></td><td>${r[1]}</td><td class="r num">${r[2]}</td><td class="r num">${moneyFull(r[6])}</td><td class="r num">$0</td><td class="r num">${r[8].toLocaleString(locale())}</td><td class="r num">0</td><td class="r">${r[9] === "stopped" ? `<span class="delta down">▼ −100%</span>` : `<span class="delta flat">${t("none")}</span>`}</td><td class="r num">${r[4] ? big(r[4]) : "—"}</td><td class="r num">${big(r[3])}</td><td>${r[4] ? arrow(r[3], r[4]) + ` <span class="num muted">${fmtPct(pct(r[3], r[4]), 0)}</span>` : `<span class="pill md">${t("new")}</span>`}</td><td>${r[9] === "stopped" ? `<span class="pill down">${t("stStopped")}</span>` : `<span class="pill warn">${t("stNever")}</span>`}</td></tr>`)
        .join("")}</tbody></table></div>
      <div class="grid-2">
        <div style="display:grid;gap:6px;min-width:0"><div class="chart-title">${t("egZeroDaily")}</div><p class="muted" style="margin:0;font-size:12.5px">${t("egZeroDailySub")}</p><div class="chart-box"><canvas id="c-egzero-daily"></canvas></div></div>
        <div style="display:grid;gap:6px;min-width:0"><div class="chart-title">${t("egZeroReq")}</div><p class="muted" style="margin:0;font-size:12.5px">pi360 · blox · sapo · refinery89be · refinery89fr</p><div class="chart-box"><canvas id="c-egzero-req"></canvas></div></div>
      </div>
      <div style="display:grid;gap:6px"><h3>${t("egZeroPubsTitle")}</h3><p class="muted" style="margin:0">${t("egZeroPubsSub")}</p></div>
      <div class="chart-box tall"><canvas id="c-egzero-pubs"></canvas></div>
      <div class="table-wrap" style="max-height:420px;overflow:auto"><table><thead><tr><th>#</th><th>${t("editorialGroup")}</th><th class="r">${t("pubsOnMd")}</th><th class="r">${t("zeroPubs")}</th><th class="r">${t("zeroRate")}</th><th class="r">${t("stoppedPubs")}</th><th class="r">${t("prvWeek")}</th><th class="r">${t("curWeek")}</th><th class="r">${t("deltaPct")}</th></tr></thead><tbody>${D.egZeroPubs
        .map((r, i) => `<tr><td class="rank">${i + 1}</td><td><strong>${esc(r[0])}</strong></td><td class="r num">${r[1].toLocaleString(locale())}</td><td class="r num">${r[2].toLocaleString(locale())}</td><td class="r"><span class="pill ${r[2] / r[1] >= 0.5 ? "down" : r[2] / r[1] >= 0.2 ? "warn" : "neutral"}">${((r[2] / r[1]) * 100).toFixed(0)}%</span></td><td class="r num">${r[3] ? `<span style="color:var(--down)">${r[3]}</span>` : "0"}</td><td class="r num">${moneyFull(r[5])}</td><td class="r num">${moneyFull(r[4])}</td><td class="r">${deltaPill(r[4], r[5])}</td></tr>`)
        .join("")}</tbody></table></div>
    </section>

    <section class="panel" id="zero">
      <div class="panel-head"><div><h3>${t("zero")}</h3><p>${t("zeroSub")}</p></div></div>
      <div class="alert-band"><span class="big-n">${D.zeroCounts.zero.toLocaleString(locale())}</span><span>${t("zeroBand")(D.zeroCounts.zero, D.zeroCounts.total.toLocaleString(locale()))}</span></div>
      <div class="stats">
        ${stat(t("pubZeroLbl"), D.zeroCounts.zero.toLocaleString(locale()), t("pubZeroSub"))}
        ${stat(t("pubStoppedLbl"), `<span style="color:var(--down)">${D.zeroCounts.dropped}</span>`, `<span class="delta down">▼ −100%</span> ${t("pubStoppedSub")}`)}
        ${stat(t("lostRev"), moneyFull(droppedRev), t("lostRevSub"))}
        ${stat(t("pubsOnMd"), D.zeroCounts.total.toLocaleString(locale()), t("curWeek") + " + " + t("prvWeek").toLowerCase())}
      </div>
      <div class="grid-2">
        <div style="display:grid;gap:10px;min-width:0">
          <h3>${t("droppedTitle")} <span class="pill down">${D.zeroCounts.dropped}</span></h3>
          <p class="muted" style="margin:0">${t("droppedSub")(D.zeroCounts.dropped)}</p>
          <div class="chart-box"><canvas id="c-dropped"></canvas></div>
        </div>
        <div style="display:grid;gap:10px;min-width:0">
          <h3>${t("zeroTop")}</h3>
          <p class="muted" style="margin:0">${t("curReq")} · top 15</p>
          <div class="chart-box"><canvas id="c-zero"></canvas></div>
        </div>
      </div>
      <div class="table-wrap" style="max-height:420px;overflow:auto"><table><thead><tr><th>#</th><th>${t("publisher")}</th><th>${t("editorialGroup")}</th><th>${t("countryCol")}</th><th class="r">${t("prevRev")}</th><th class="r">${t("revenue")}</th><th class="r">${t("deltaPct")}</th><th class="r">${t("prvReq")}</th><th class="r">${t("curReq")}</th><th>${t("reqTrend")}</th></tr></thead><tbody>${D.dropped
        .map((r, i) => `<tr><td class="rank">${i + 1}</td><td><strong>${esc(r[0])}</strong></td><td class="eg-tag">${esc(r[1])}</td><td>${r[2]}</td><td class="r num">${moneyFull(r[5])}</td><td class="r num">$0</td><td class="r"><span class="delta down">▼ −100%</span></td><td class="r num">${big(r[4])}</td><td class="r num">${big(r[3])}</td><td>${arrow(r[3], r[4])} <span class="num muted">${r[4] ? fmtPct(pct(r[3], r[4]), 0) : ""}</span></td></tr>`)
        .join("")}</tbody></table></div>
      <div class="table-wrap" style="max-height:420px;overflow:auto"><table><thead><tr><th>#</th><th>${t("publisher")}</th><th>${t("editorialGroup")}</th><th>${t("countryCol")}</th><th class="r">${t("impressions")}</th><th class="r">${t("revenue")}</th><th class="r">${t("prvReq")}</th><th class="r">${t("curReq")}</th><th>${t("reqTrend")}</th><th></th></tr></thead><tbody>${D.zero
        .map((r, i) => `<tr><td class="rank">${i + 1}</td><td><strong>${esc(r[0])}</strong></td><td class="eg-tag">${esc(r[1])}</td><td>${r[2]}</td><td class="r num">0</td><td class="r num">$0</td><td class="r num">${r[4] ? big(r[4]) : "—"}</td><td class="r num">${big(r[3])}</td><td>${r[4] ? arrow(r[3], r[4]) + ` <span class="num muted">${fmtPct(pct(r[3], r[4]), 0)}</span>` : `<span class="pill md">${t("new")}</span>`}</td><td><span class="pill warn">0 imps · $0</span></td></tr>`)
        .join("")}</tbody></table></div>
    </section>

    <div class="part"><div class="eyebrow">Part 2</div><h2>${t("partB")}</h2><p class="muted" style="margin:0">${t("partBsub")}</p></div>

    <section class="panel" id="vs-network">
      <div class="panel-head"><div><h3>${t("vsNet")}</h3><p>${t("vsNetSub")}</p></div><div class="legend"><span><i style="background:var(--md)"></i>${t("md")}</span><span><i style="background:var(--rb)"></i>${t("rb")}</span></div></div>
      <div class="stats">
        ${stat(t("md"), money(M.mdC), `${deltaPill(M.mdC, M.mdP)} <span>${t("prevShort")} ${money(M.mdP)}</span>`)}
        ${stat(t("rb"), money(M.rbC), `${deltaPill(M.rbC, M.rbP)} <span>${t("prevShort")} ${money(M.rbP)}</span>`)}
        ${stat(t("combined"), money(M.mdC + M.rbC), `${deltaPill(M.mdC + M.rbC, M.mdP + M.rbP)} <span>${t("prevShort")} ${money(M.mdP + M.rbP)}</span>`)}
        ${stat(t("mdShare"), (M.shareC * 100).toFixed(1) + "%", `<span class="delta ${M.shareC >= M.shareP ? "up" : "down"}">${M.shareC >= M.shareP ? "▲" : "▼"} ${((M.shareC - M.shareP) * 100).toFixed(1)} pp</span> <span>${t("prevShort")} ${(M.shareP * 100).toFixed(1)}%</span>`)}
      </div>
      <div class="grid-2">
        <div><div class="chart-title">${t("revenue")} · ${dayLbl(curDates[0])} – ${dayLbl(curDates[6])}</div><div class="chart-box"><canvas id="c-vs-daily"></canvas></div></div>
        <div><div class="chart-title">${t("weekTotals")} · ${t("ecpm")}</div><div class="chart-box"><canvas id="c-vs-week"></canvas></div></div>
      </div>
      <div class="table-wrap"><table><thead><tr><th>${t("value")}</th>${curDates.map((d) => `<th class="r">${dayLbl(d)}</th>`).join("")}</tr></thead><tbody>
        <tr><td><strong>${t("md")}</strong></td>${C(md.rev).map((v, i) => `<td class="r num">${money(v)} ${arrow(v, P(md.rev)[i])}</td>`).join("")}</tr>
        <tr><td><strong>${t("rb")}</strong></td>${C(rb.rev).map((v, i) => `<td class="r num">${money(v)} ${arrow(v, P(rb.rev)[i])}</td>`).join("")}</tr>
        <tr><td class="muted">${t("mdShare")}</td>${C(md.rev).map((v, i) => `<td class="r num muted">${((v / (v + C(rb.rev)[i])) * 100).toFixed(1)}%</td>`).join("")}</tr>
      </tbody></table></div>
    </section>

    <section class="panel" id="vs-eg">
      <div class="panel-head"><div><h3>${t("vsEg")}</h3><p>${t("vsEgSub")}</p></div></div>
      <div class="chart-box tall"><canvas id="c-vs-eg"></canvas></div>
      ${vsTable(egVsRows, t("editorialGroup"))}
    </section>

    <section class="panel" id="vs-source">
      <div class="panel-head"><div><h3>${t("vsSt")}</h3><p>${t("vsStSub")}</p></div></div>
      <div class="chart-box"><canvas id="c-vs-st"></canvas></div>
      ${vsTable(stRows, "Source type")}
    </section>

    <section class="panel" id="vs-adunit">
      <div class="panel-head"><div><h3>${t("vsAu")}</h3><p>${t("vsAuSub")}</p></div><div class="controls"><label class="eyebrow" for="au-pick">${t("pickAu")}</label><select id="au-pick">${auKeys.map((k) => `<option value="${k}">${k}</option>`).join("")}</select></div></div>
      <div class="grid-2">
        <div><div class="chart-title">${t("weekTotals")}</div><div class="chart-box"><canvas id="c-vs-au"></canvas></div></div>
        <div><div class="chart-title" id="au-daily-title"></div><div class="chart-box"><canvas id="c-vs-au-daily"></canvas></div></div>
      </div>
      ${vsTable(auRows, "Ad unit type")}
    </section>

    <div class="part" id="new"><div class="eyebrow">Part 3</div><h2>${t("partC")}</h2><p class="muted" style="margin:0">${t("partCsub")} ${t("newSub")(fmtDate(D.dates[0], { month: "short", day: "numeric", year: "numeric" }), fmtDate(D.dates[13], { month: "short", day: "numeric", year: "numeric" }), fmtDate("2026-09-29", { month: "short", day: "numeric" }))}</p></div>

    <section class="panel">
      <div class="table-wrap"><table><thead><tr><th>${t("editorialGroup")}</th><th>ID</th><th>${t("activated")}</th><th class="r">${t("mdWeek")}</th><th class="r">${t("rbWeek")}</th><th class="r">Rubicon ${t("deltaPct")}</th><th class="r">${t("mdShare")}</th><th>${t("status")}</th></tr></thead><tbody>${newRows
        .map((n) => `<tr><td><strong>${esc(n.a.name)}</strong></td><td class="num muted" style="font-size:12px">${n.a.id}</td><td class="num">${fmtDate(n.a.activated, { month: "short", day: "numeric", year: "numeric" })}</td><td class="r num">${moneyFull(n.mdC)}</td><td class="r num">${moneyFull(n.rbC)}</td><td class="r">${deltaPill(n.rbC, n.rbP)}</td><td class="r num">${n.mdC + n.rbC > 0 ? ((n.mdC / (n.mdC + n.rbC)) * 100).toFixed(1) + "%" : "—"}</td><td><span class="pill ${n.status[0]}">${n.status[1]}</span></td></tr>`)
        .join("")}</tbody></table></div>
      <p class="muted" style="margin:0;font-size:12.5px">${t("activated")}: ${t("activatedSub")}.</p>
      <div class="legend"><span><i style="background:var(--md)"></i>${t("md")}</span><span><i style="background:var(--rb)"></i>${t("rb")}</span></div>
      <div class="acc-grid">${newRows
        .map((n, i) => `<article class="acc">
          <div class="acc-head"><div style="min-width:0"><h3 style="margin:0">${esc(n.a.name)}</h3><div class="acc-id">${n.a.id}</div></div><div style="display:flex;gap:6px;flex-wrap:wrap"><span class="pill neutral">${t("activated")}: ${fmtDate(n.a.activated, { month: "short", day: "numeric", year: "numeric" })}</span><span class="pill ${n.status[0]}">${n.status[1]}</span></div></div>
          <div class="acc-stats">
            ${stat(t("mdWeek"), money(n.mdC, 0), n.first ? `${t("activated")} ${fmtDate(n.a.activated)} · ${Math.round((Date.parse(D.generated) - Date.parse(n.a.activated)) / 864e5) + 1}d` : t("noRevenue"))}
            ${stat(t("rbWeek"), n.rbC ? money(n.rbC) : "—", n.rbC ? deltaPill(n.rbC, n.rbP) : t("rbNone"))}
            ${stat(t("mdLastDay"), money(n.last, 0), n.a.md[12] ? deltaPill(n.last, n.a.md[12]) : "")}
          </div>
          <div class="chart-box short"><canvas id="c-new-${i}"></canvas></div>
          <div class="muted" style="font-size:12px">${t("mdPubsLbl")(n.a.mdPubs)} · ${t("mdShare")}: ${n.mdC + n.rbC > 0 ? ((n.mdC / (n.mdC + n.rbC)) * 100).toFixed(1) + "%" : "—"}</div>
        </article>`)
        .join("")}</div>
    </section>

    <footer class="foot"><span>${t("notes")}</span><span>${t("notes2")}</span></footer>`;

    document.querySelectorAll("[data-lang-btn]").forEach((b) =>
      b.addEventListener("click", () => {
        lang = b.dataset.langBtn;
        try { localStorage.setItem("mdpulse-lang", lang); } catch (e) {}
        render();
      })
    );
    wireTable("t-movers");
    wireTable("t-top");
    drawCharts(auKeys, egVsRows, stRows, auRows, newRows);
  }

  function drawCharts(auKeys, egVsRows, stRows, auRows, newRows) {
    if (!window.Chart) return;
    const c = palette();
    Chart.defaults.font.family = "IBM Plex Sans, system-ui, sans-serif";
    const dayIdxLabels = curDates.map((d) => fmtDate(d, { weekday: "short" }));
    const lineDs = (label, data, color, dash, fill) => ({ label, data, borderColor: color, backgroundColor: fill || "transparent", fill: !!fill, borderWidth: 2.25, borderDash: dash || [], tension: 0.3, pointRadius: 3, pointHoverRadius: 5, pointBackgroundColor: color });
    const dateTooltipTitle = (items) => {
      const i = items[0].dataIndex;
      return `${dayLbl(curDates[i])}  vs  ${dayLbl(prvDates[i])}`;
    };

    // hero sparkline
    mk("c-hero", { type: "line", data: { labels: dayIdxLabels, datasets: [lineDs(t("curWeek"), C(md.rev), c.md, null, c.mdSoft), lineDs(t("prvWeek"), P(md.rev), c.prev, [5, 4])] },
      options: baseOpts(c, { layout: { padding: { top: 22, right: 8 } }, plugins: { legend: { display: false }, tooltip: { callbacks: { title: dateTooltipTitle } } }, scales: { y: { ticks: { callback: (v) => moneyFull(v) }, beginAtZero: true } } }),
      plugins: [{ id: "fullLabels", afterDatasetsDraw(ch) {
        const meta = ch.getDatasetMeta(0), ctx = ch.ctx;
        ctx.save(); ctx.font = "600 11px 'IBM Plex Mono', ui-monospace, monospace"; ctx.fillStyle = c.ink; ctx.textAlign = "center"; ctx.textBaseline = "bottom";
        meta.data.forEach((pt, i) => ctx.fillText(moneyFull(Math.round(ch.data.datasets[0].data[i])), pt.x, pt.y - 7));
        ctx.restore(); } }] });

    // network daily
    mk("c-net-daily", { type: "line", data: { labels: dayIdxLabels, datasets: [lineDs(t("curWeek"), C(md.rev), c.md, null, c.mdSoft), lineDs(t("prvWeek"), P(md.rev), c.prev, [5, 4])] },
      options: baseOpts(c, { plugins: { tooltip: { callbacks: { title: dateTooltipTitle } } }, scales: { y: { ticks: moneyTick, beginAtZero: true } } }) });

    // network weekly totals (revenue + impressions)
    mk("c-net-week", { type: "bar", data: { labels: [t("revenue"), t("impressions")], datasets: [
      { label: t("prvWeek"), data: [M.mdP, null], backgroundColor: c.prev, borderRadius: 4, yAxisID: "y" },
      { label: t("curWeek"), data: [M.mdC, null], backgroundColor: c.md, borderRadius: 4, yAxisID: "y" },
      { label: t("prvWeek") + " · imps", data: [null, M.mdIP], backgroundColor: c.prev, borderRadius: 4, yAxisID: "y1" },
      { label: t("curWeek") + " · imps", data: [null, M.mdIC], backgroundColor: c.mdSoft, borderColor: c.md, borderWidth: 1.5, borderRadius: 4, yAxisID: "y1" }
    ] }, options: baseOpts(c, { plugins: { legend: { labels: { filter: (it) => it.datasetIndex < 2 } }, tooltip: { mode: "nearest", intersect: true, callbacks: { label: (ctx) => ctx.dataset.yAxisID === "y1" ? ` ${ctx.dataset.label}: ${big(ctx.parsed.y)}` : ` ${ctx.dataset.label}: ${moneyFull(ctx.parsed.y)}` } } },
      scales: { x: { grid: { display: false }, stacked: false }, y: { ticks: moneyTick, beginAtZero: true }, y1: { position: "right", beginAtZero: true, grid: { display: false }, border: { display: false }, ticks: { color: c.muted, callback: (v) => big(v), font: { family: "IBM Plex Mono", size: 11 } } } } }) });

    // EG up/down
    hbarCompare("c-eg-up", D.egInc.map((r) => r[0]), D.egInc.map((r) => r[3]), D.egInc.map((r) => r[2]), c, c.up);
    hbarCompare("c-eg-down", D.egDec.map((r) => r[0]), D.egDec.map((r) => r[3]), D.egDec.map((r) => r[2]), c, c.down);

    // Country
    hbarCompare("c-country", D.country.map((r) => r[0]), D.country.map((r) => r[2]), D.country.map((r) => r[1]), c);
    const cd = D.country.map((r) => ({ k: r[0], d: r[1] - r[2] }));
    mk("c-country-delta", { type: "bar", data: { labels: cd.map((x) => x.k), datasets: [{ label: t("deltaUsd"), data: cd.map((x) => x.d), backgroundColor: cd.map((x) => (x.d >= 0 ? c.up : c.down)), borderRadius: 3 }] },
      options: baseOpts(c, { plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => ` ${t("deltaUsd")}: ${signedMoney(ctx.parsed.y)}  (${D.country[ctx.dataIndex][2] ? fmtPct(pct(D.country[ctx.dataIndex][1], D.country[ctx.dataIndex][2])) : t("new")})` } } }, scales: { x: { grid: { display: false } }, y: { ticks: moneyTick } } }) });

    // Source / AU
    const vbar = (id, rows) => mk(id, { type: "bar", data: { labels: rows.map((r) => r[0]), datasets: [
      { label: t("prvWeek"), data: rows.map((r) => r[2]), backgroundColor: c.prev, borderRadius: 3 },
      { label: t("curWeek"), data: rows.map((r) => r[1]), backgroundColor: c.md, borderRadius: 3 }
    ] }, options: baseOpts(c, { plugins: { tooltip: { callbacks: { afterBody: (items) => { const r = rows[items[0].dataIndex]; return r[2] ? `Δ ${fmtPct(pct(r[1], r[2]))}` : ""; } } } }, scales: { x: { grid: { display: false } }, y: { ticks: moneyTick, beginAtZero: true } } }) });
    vbar("c-source", D.sourceType.md);
    vbar("c-au", D.adUnitType.md.filter((r) => r[1] + r[2] > 0));

    // movers: diverging delta
    const mv = D.pubMov.slice(0, 20);
    mk("c-movers", { type: "bar", data: { labels: mv.map((r) => r[0]), datasets: [{ label: t("deltaUsd"), data: mv.map((r) => r[3] - r[4]), backgroundColor: mv.map((r) => (r[3] >= r[4] ? c.up : c.down)), borderRadius: 3 }] },
      options: baseOpts(c, { indexAxis: "y", plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => { const r = mv[ctx.dataIndex]; return [` ${t("deltaUsd")}: ${signedMoney(r[3] - r[4])}`, ` ${t("prv")}: ${moneyFull(r[4])} → ${t("cur")}: ${moneyFull(r[3])}`, ` EG: ${r[1]}`]; } } } }, scales: { x: { ticks: moneyTick }, y: { grid: { display: false }, ticks: { font: { family: "IBM Plex Sans", size: 11 } } } } }) });

    // top publishers
    const tp = D.pubTop.slice(0, 15);
    hbarCompare("c-top", tp.map((r) => r[0]), tp.map((r) => r[4]), tp.map((r) => r[3]), c);

    // dropped & zero
    const dr = D.dropped.slice(0, 15);
    hbarCompare("c-dropped", dr.map((r) => r[0]), dr.map((r) => r[5]), dr.map(() => 0), c, c.down);
    const zr = D.zero.slice(0, 15);
    mk("c-zero", { type: "bar", data: { labels: zr.map((r) => r[0]), datasets: [{ label: t("curReq"), data: zr.map((r) => r[3]), backgroundColor: c.warn, borderRadius: 3 }] },
      options: baseOpts(c, { indexAxis: "y", plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => ` ${t("requests")}: ${big(ctx.parsed.x)} · 0 imps · $0 · EG ${zr[ctx.dataIndex][1]}` } } }, scales: { x: { ticks: { callback: (v) => big(v) } }, y: { grid: { display: false }, ticks: { font: { family: "IBM Plex Sans", size: 11 } } } } }) });

    // EG zero: blox daily
    const bx = D.egZeroDaily.blox;
    mk("c-egzero-daily", { type: "bar", data: { labels: D.dates.map((d) => fmtDate(d)), datasets: [
      { type: "line", label: t("impressions"), data: bx.imps, borderColor: c.down, backgroundColor: c.down, borderWidth: 2, pointRadius: 2.5, yAxisID: "y", tension: 0.2 },
      { label: t("requests"), data: bx.reqs, backgroundColor: c.prev, borderRadius: 3, yAxisID: "y1" }
    ] }, options: baseOpts(c, { plugins: { tooltip: { callbacks: { label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString(locale())}${ctx.dataset.yAxisID === "y" ? " · $" + bx.rev[ctx.dataIndex].toFixed(2) : ""}` } } },
      scales: { x: { grid: { display: false }, ticks: { maxRotation: 0, autoSkip: true, maxTicksLimit: 7 } }, y: { beginAtZero: true, ticks: { callback: (v) => big(v) } }, y1: { position: "right", beginAtZero: true, grid: { display: false }, border: { display: false }, ticks: { color: c.muted, callback: (v) => big(v), font: { family: "IBM Plex Mono", size: 11 } } } } }) });
    mk("c-egzero-req", { type: "bar", data: { labels: D.egZero.map((r) => r[0]), datasets: [
      { label: t("prvWeek"), data: D.egZero.map((r) => r[4]), backgroundColor: c.prev, borderRadius: 3 },
      { label: t("curWeek"), data: D.egZero.map((r) => r[3]), backgroundColor: c.warn, borderRadius: 3 }
    ] }, options: baseOpts(c, { indexAxis: "y", plugins: { tooltip: { callbacks: { label: (ctx) => ` ${ctx.dataset.label}: ${big(ctx.parsed.x)} req · 0 imps · $0` } } }, scales: { x: { type: "logarithmic", ticks: { callback: (v) => ([1e4, 1e5, 1e6, 1e7, 1e8].includes(v) ? big(v) : "") } }, y: { grid: { display: false } } } }) });
    const zp = D.egZeroPubs.slice(0, 15);
    mk("c-egzero-pubs", { type: "bar", data: { labels: zp.map((r) => r[0]), datasets: [
      { label: t("zeroPubs"), data: zp.map((r) => r[2]), backgroundColor: c.warn, borderRadius: 3 },
      { label: t("stoppedPubs"), data: zp.map((r) => r[3]), backgroundColor: c.down, borderRadius: 3 }
    ] }, options: baseOpts(c, { indexAxis: "y", plugins: { tooltip: { callbacks: { label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.x.toLocaleString(locale())}`, afterBody: (items) => { const r = zp[items[0].dataIndex]; return `${r[2].toLocaleString(locale())} / ${r[1].toLocaleString(locale())} ${t("pubsOnMd")} (${((r[2] / r[1]) * 100).toFixed(0)}%)`; } } } },
      scales: { x: { beginAtZero: true }, y: { grid: { display: false } } } }) });

    // MD vs RB daily
    const shareLine = C(md.rev).map((v, i) => (v / (v + C(rb.rev)[i])) * 100);
    mk("c-vs-daily", { type: "bar", data: { labels: curDates.map((d) => fmtDate(d, { weekday: "short", day: "numeric" })), datasets: [
      { type: "line", label: t("mdShare") + " %", data: shareLine, borderColor: c.ink, backgroundColor: c.ink, borderWidth: 1.5, borderDash: [3, 3], pointRadius: 2.5, yAxisID: "y1", tension: 0.3 },
      { label: t("md"), data: C(md.rev), backgroundColor: c.md, borderRadius: 3, yAxisID: "y" },
      { label: t("rb"), data: C(rb.rev), backgroundColor: c.rb, borderRadius: 3, yAxisID: "y" }
    ] }, options: baseOpts(c, { plugins: { tooltip: { callbacks: { label: (ctx) => ctx.dataset.yAxisID === "y1" ? ` ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(1)}%` : ` ${ctx.dataset.label}: ${moneyFull(ctx.parsed.y)}` } } },
      scales: { x: { grid: { display: false } }, y: { ticks: moneyTick, beginAtZero: true }, y1: { position: "right", min: 0, max: 50, grid: { display: false }, border: { display: false }, ticks: { color: c.muted, callback: (v) => v + "%", font: { family: "IBM Plex Mono", size: 11 } } } } }) });

    mk("c-vs-week", { type: "bar", data: { labels: [t("md") + " · " + t("revenue"), t("rb") + " · " + t("revenue"), t("md") + " · eCPM", t("rb") + " · eCPM"], datasets: [
      { label: t("prvWeek"), data: [M.mdP, M.rbP, null, null], backgroundColor: c.prev, borderRadius: 3, yAxisID: "y" },
      { label: t("curWeek"), data: [M.mdC, M.rbC, null, null], backgroundColor: [c.md, c.rb], borderRadius: 3, yAxisID: "y" },
      { label: t("prvWeek") + " eCPM", data: [null, null, M.mdEP, M.rbEP], backgroundColor: c.prev, borderRadius: 3, yAxisID: "y1" },
      { label: t("curWeek") + " eCPM", data: [null, null, M.mdEC, M.rbEC], backgroundColor: [c.md, c.rb, c.md, c.rb], borderRadius: 3, yAxisID: "y1" }
    ] }, options: baseOpts(c, { plugins: { legend: { labels: { filter: (it) => it.datasetIndex < 2 } }, tooltip: { mode: "nearest", intersect: true, callbacks: { label: (ctx) => ctx.dataset.yAxisID === "y1" ? ` ${ctx.dataset.label}: $${ctx.parsed.y.toFixed(2)}` : ` ${ctx.dataset.label}: ${moneyFull(ctx.parsed.y)}` } } },
      scales: { x: { grid: { display: false }, ticks: { font: { size: 10.5 } } }, y: { ticks: moneyTick, beginAtZero: true }, y1: { position: "right", beginAtZero: true, grid: { display: false }, border: { display: false }, ticks: { color: c.muted, callback: (v) => "$" + v.toFixed(2), font: { family: "IBM Plex Mono", size: 11 } } } } }) });

    // EG vs
    const vsDs = (rows) => [
      { label: t("md") + " · " + t("prv").toLowerCase(), data: rows.map((r) => r.md[2]), backgroundColor: c.mdSoft, borderColor: c.md, borderWidth: 1, borderRadius: 3, stack: "md" },
      { label: t("md") + " · " + t("cur").toLowerCase(), data: rows.map((r) => r.md[1]), backgroundColor: c.md, borderRadius: 3, stack: "md2" },
      { label: t("rb") + " · " + t("prv").toLowerCase(), data: rows.map((r) => r.rb[2]), backgroundColor: c.rbSoft, borderColor: c.rb, borderWidth: 1, borderRadius: 3, stack: "rb" },
      { label: t("rb") + " · " + t("cur").toLowerCase(), data: rows.map((r) => r.rb[1]), backgroundColor: c.rb, borderRadius: 3, stack: "rb2" }
    ];
    mk("c-vs-eg", { type: "bar", data: { labels: egVsRows.map((r) => r.k.split(" · ")[0]), datasets: vsDs(egVsRows) }, options: baseOpts(c, { scales: { x: { grid: { display: false } }, y: { ticks: moneyTick, beginAtZero: true } } }) });
    mk("c-vs-st", { type: "bar", data: { labels: stRows.map((r) => r.k), datasets: vsDs(stRows) }, options: baseOpts(c, { scales: { x: { grid: { display: false } }, y: { ticks: moneyTick, beginAtZero: true } } }) });
    mk("c-vs-au", { type: "bar", data: { labels: auRows.map((r) => r.k), datasets: vsDs(auRows) }, options: baseOpts(c, { scales: { x: { grid: { display: false } }, y: { ticks: moneyTick, beginAtZero: true } } }) });

    // AU daily with selector
    const pick = document.getElementById("au-pick");
    let auChart = null;
    const drawAu = () => {
      const k = pick.value;
      document.getElementById("au-daily-title").textContent = `${k} · ${t("revenue")} / day`;
      const data = { labels: curDates.map((d) => fmtDate(d, { weekday: "short", day: "numeric" })), datasets: [lineDs(t("md"), D.auDaily.md[k], c.md, null, c.mdSoft), lineDs(t("rb"), D.auDaily.rb[k], c.rb)] };
      if (auChart) { auChart.data = data; auChart.update(); return; }
      auChart = new Chart(document.getElementById("c-vs-au-daily"), { type: "line", data, options: baseOpts(c, { scales: { y: { ticks: moneyTick, beginAtZero: true } } }) });
      charts.push(auChart);
    };
    pick.addEventListener("change", drawAu);
    drawAu();

    // New accounts
    newRows.forEach((n, i) => {
      mk("c-new-" + i, { type: "line", data: { labels: D.dates.map((d) => fmtDate(d)), datasets: [
        lineDs(t("md"), n.a.md, c.md, null, c.mdSoft),
        lineDs(t("rb"), n.a.rb, c.rb)
      ] }, options: baseOpts(c, { plugins: { legend: { display: false } }, elements: { point: { radius: 1.5 } }, scales: { x: { grid: { display: false }, ticks: { maxRotation: 0, autoSkip: true, maxTicksLimit: 7 } }, y: { ticks: moneyTick, beginAtZero: true } } }) });
    });
  }

  render();

  // Re-draw charts when the theme changes so their colors follow the tokens.
  const rerender = () => render();
  try { window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", rerender); } catch (e) {}
  new MutationObserver(rerender).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
})();
