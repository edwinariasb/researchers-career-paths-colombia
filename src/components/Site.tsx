import Link from "next/link";
import { flows, messages, stateColors, summary, typologies, type Lang } from "@/data/site";

const stateLabel = { sp: "SP", nr: "NR", jun: "JUN", assoc: "ASSO", senior: "SEN", emeritus: "EM" } as const;

function SectionTitle({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return <div className="section-title">{kicker && <div className="kicker">{kicker}</div>}<h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>;
}

function Sequence({ states }: { states: string[] }) {
  return <div className="sequence">{states.map((s, i) => <div key={i} className="state" title={stateLabel[s as keyof typeof stateLabel]} style={{ background: stateColors[s] }}><span>{stateLabel[s as keyof typeof stateLabel]}</span></div>)}</div>;
}

export default function Site({ lang }: { lang: Lang }) {
  const m = messages[lang];
  const numbers = [summary.researchers, summary.uniquePatterns, summary.trajectoryTypes, summary.stock2025];
  const seqRows = [
    ["jun", "jun", "assoc", "assoc", "senior", "senior", "senior"],
    ["nr", "jun", "nr", "jun", "assoc", "nr", "assoc"],
    ["sp", "sp", "sp", "nr", "nr", "jun", "assoc"],
  ];

  return <>
    <header className="topbar">
      <div className="wrap nav-inner">
        <a className="brand" href="#top"><span className="brand-mark">⟋⟍</span><span>Researcher trajectories</span></a>
        <nav className="navlinks">
          <a href="#project">{m.nav.project}</a><a href="#trajectories">{m.nav.trajectories}</a><a href="#results">{m.nav.results}</a><a href="#methods">{m.nav.methods}</a><a href="#policy">{m.nav.policy}</a>
        </nav>
        <div className="lang-switch">{(["en","es","fr"] as Lang[]).map(x => <Link key={x} className={x===lang?"active":""} href={`/${x}`}>{x.toUpperCase()}</Link>)}</div>
      </div>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-lines" aria-hidden="true">{[0,1,2,3,4,5].map(i => <span key={i} style={{ top: `${18+i*11}%`, animationDelay: `${i*0.4}s` }} />)}</div>
        <div className="wrap hero-grid">
          <div className="hero-copy"><div className="eyebrow">{m.hero.eyebrow}</div><h1>{m.hero.title}</h1><div className="hero-subtitle">{m.hero.subtitle}</div><p>{m.hero.body}</p><div className="hero-actions"><a className="btn primary" href="#trajectories">{m.hero.primary}</a><a className="btn ghost" href="#methods">{m.hero.secondary}</a></div></div>
          <div className="hero-sequences" aria-label="Example scientific career sequences">
            <div className="axis">{summary.rounds.map(y=><span key={y}>{y}</span>)}</div>
            {seqRows.map((row, i)=><Sequence key={i} states={row} />)}
            <div className="legend">{Object.entries(stateColors).slice(0,6).map(([k,c])=><span key={k}><i style={{background:c}} />{stateLabel[k as keyof typeof stateLabel]}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="project" className="section wrap">
        <SectionTitle title={m.overview.title} subtitle={m.overview.subtitle} />
        <div className="stats">{numbers.map((n,i)=><div className="stat" key={i}><strong>{n.toLocaleString(lang === "en" ? "en-US" : lang === "es" ? "es-ES" : "fr-FR")}</strong><span>{m.overview.cards[i]}</span></div>)}</div>
        <div className="funnel"><div><b>38,472</b><span>{m.overview.cards[0]}</span></div><em>→</em><div><b>7</b><span>2013 · 2014 · 2015 · 2017 · 2019 · 2022 · 2025</span></div><em>→</em><div><b>2,532</b><span>{m.overview.cards[1]}</span></div><em>→</em><div><b>5</b><span>{m.overview.cards[2]}</span></div></div>
      </section>

      <section id="trajectories" className="section alt">
        <div className="wrap"><SectionTitle title={m.panel.title} subtitle={m.panel.body} />
          <div className="timeline-axis">{summary.rounds.map(y=><span key={y}>{y}</span>)}</div>
          <div className="trajectory-table">
            {[m.panel.rowA,m.panel.rowB,m.panel.rowC].map((label,i)=><div className="trajectory-row" key={label}><div className="trajectory-label">{label}</div><Sequence states={seqRows[i]} /></div>)}
          </div>
        </div>
      </section>

      <section id="methods" className="section wrap">
        <SectionTitle title={m.methods.title} subtitle={m.methods.subtitle} />
        <div className="pipeline">{m.methods.steps.map((s,i)=><div className="pipe" key={s[0]}><div className="pipe-num">0{i+1}</div><h3>{s[0]}</h3><p>{s[1]}</p>{i<m.methods.steps.length-1 && <span className="arrow">→</span>}</div>)}</div>
      </section>

      <section className="section dark-section">
        <div className="wrap"><SectionTitle title={m.states.title} subtitle={m.states.subtitle} />
          <div className="state-network">
            <div className="node sp">SP</div><div className="connector">→</div><div className="node nr">NR</div><div className="connector">→</div><div className="node jun">JUN</div><div className="connector">→</div><div className="node assoc">ASSO</div><div className="connector">→</div><div className="node senior">SEN</div>
          </div>
          <div className="chips">{m.states.chips.map(x=><span key={x}>{x}</span>)}</div>
        </div>
      </section>

      <section className="section wrap">
        <SectionTitle title={m.stockflow.title} />
        <div className="stockflow-grid">
          <article><div className="mini-label">01</div><h3>{m.stockflow.leftTitle}</h3><p>{m.stockflow.leftText}</p><div className="dot-chart">{[7,9,12,16].map((n,i)=><div key={i}><span>{[2013,2015,2019,2025][i]}</span><div>{Array.from({length:n}).map((_,j)=><i key={j}/>)}</div></div>)}</div></article>
          <article><div className="mini-label">02</div><h3>{m.stockflow.rightTitle}</h3><p>{m.stockflow.rightText}</p><div className="flow-center"><span>+ {m.flows.entry}</span><b>RECOGNISED</b><span>− {m.flows.exit}</span><small>↺ {m.flows.reentry}</small></div></article>
        </div>
        <div className="punchline">{m.stockflow.punch}</div>
      </section>

      <section id="results" className="section alt">
        <div className="wrap"><SectionTitle title={m.flows.title} subtitle={m.flows.subtitle} />
          <div className="flow-cards">{flows.map(f=><div className="flow-card" key={f.period}><h3>{f.period}</h3><div className="flow-row"><span>{m.flows.entry}</span><b>+{f.entry.toLocaleString()}</b></div><div className="flow-row"><span>{m.flows.reentry}</span><b>+{f.reentry.toLocaleString()}</b></div><div className="flow-row"><span>{m.flows.exit}</span><b className="negative">−{f.exit.toLocaleString()}</b></div><div className="flow-net"><span>{m.flows.net}</span><strong>+{f.net.toLocaleString()}</strong></div></div>)}</div>
          <div className="caveat">ⓘ {m.flows.caveat}</div>
        </div>
      </section>

      <section className="section wrap">
        <SectionTitle title={m.typologies.title} subtitle={m.typologies.subtitle} />
        <div className="typology-list">{typologies.map(t=><div className="typology" key={t.key}><div className="typo-meta"><strong>{t.pct}%</strong><span>{m.typologies.names[t.key as keyof typeof m.typologies.names]}</span></div><Sequence states={t.band}/></div>)}</div>
        <div className="highlight-grid"><div><strong>34.1%</strong><span>{m.typologies.exit.replace("34.1% ", "")}</span></div><div><strong>22.2%</strong><span>{m.typologies.reentry.replace("22.2% ", "")}</span></div></div>
      </section>

      <section className="section capacity-section">
        <div className="wrap"><SectionTitle title={m.dimensions.title} subtitle={m.dimensions.subtitle} />
          <div className="capacity-wheel"><div className="researcher-core">RESEARCHER</div>{m.dimensions.labels.map((x,i)=><div key={x} className={`capacity-item c${i+1}`}>{x}</div>)}</div>
        </div>
      </section>

      <section id="policy" className="section wrap">
        <SectionTitle title={m.policy.title} />
        <div className="policy-grid">{m.policy.items.map((x,i)=><article key={x[0]}><div className="policy-icon">0{i+1}</div><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div>
      </section>

      <section id="poster" className="section poster-section">
        <div className="wrap poster-grid"><div><SectionTitle title={m.poster.title} subtitle={m.poster.body} /><a className="btn primary disabled" href="#">{m.poster.button}</a></div><div className="poster-placeholder"><div className="poster-mini"><span>OECD</span><b>BLUE SKY<br/>FORUM 2026</b><small>Poster preview</small></div></div></div>
      </section>
    </main>

    <footer><div className="wrap footer-inner"><span>{m.footer}</span><span>Universidad Nacional de Colombia · UGA INP ENSIMAG</span></div></footer>
  </>;
}
