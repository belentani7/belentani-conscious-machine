/* Máquina consciente: interfaz de exploración persistente; el contenido se descubre en cápsulas, no en una secuencia de flyer. */
import { FormEvent, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Github, Menu, Minus, Plus, Send, X } from "lucide-react";

const assets = {
  hero: "/manus-storage/belentani-conscious-hero_80371b89.png",
  orbit: "/manus-storage/belentani-capsule-orbit-repair_5fec7a40.png",
  signal: "/manus-storage/belentani-conscious-signal_17ed669a.png",
};

const projects = [
  {
    id: "01",
    slug: "nexus-data",
    name: "NEXUS DATA",
    category: "PUBLIC PROCUREMENT INTELLIGENCE / v0.4",
    hypothesis: "Convertir tres APIs públicas en un mapa útil de oportunidades y adjudicaciones sin confundir una señal histórica con una oportunidad abierta.",
    tags: ["DATA PIPELINES", "EXPLAINABLE SCORING", "COMPLIANCE"],
    note: "Prueba de aceptación: 60 registros procesados; 10 oportunidades abiertas accionables de Contracts Finder V2.",
    challenge: "Las fuentes públicas tenían estructuras, monedas y tipos de registro distintos; las adjudicaciones históricas podían contaminar un shortlist comercial.",
    system: "Extractor YAML, normalización, deduplicación, scoring explicable, SQLite, CSV/JSON, panel Streamlit, CLI y distribuciones reproducibles.",
    evidence: "Fuentes verificadas: repositorio GitHub y manifiesto/auditoría de Drive. 12 pruebas superadas; Ruff y Bandit sin hallazgos; pip-audit sin vulnerabilidades conocidas. Límite: prototipo demostrable, no SaaS multi-tenant.",
  },
  {
    id: "02",
    slug: "lumaquote",
    name: "LumaQuote",
    category: "COMMERCIAL OPERATING SYSTEM / TYPESCRIPT",
    hypothesis: "Hacer que fotógrafos y estudios conviertan presupuestos personalizados en documentos consistentes, entregables y trazables.",
    tags: ["PRODUCT SYSTEM", "DOCUMENT EXPORT", "DATA INTEGRITY"],
    note: "Gestión de clientes, presupuestos, impuestos, estados, notas, impresión y exportación ZIP bajo aislamiento por cuenta.",
    challenge: "La operación comercial necesitaba resolver cálculo, trazabilidad, presentación y seguridad de datos sin fragmentar el flujo de trabajo.",
    system: "Clientes, líneas de presupuesto, descuentos, IVA, historial, notas privadas, documentos imprimibles y ZIP; Manus OAuth y base de datos transaccional.",
    evidence: "Fuentes verificadas: repositorio GitHub y README/auditoría de entrega en Drive. 9 pruebas Vitest superadas, TypeScript sin errores y compilación de producción. Límite: sin pagos, correo ni aceptación electrónica todavía.",
  },
  {
    id: "03",
    slug: "cassandra",
    name: "Cassandra Belentani Complex",
    category: "EDITORIAL PLATFORM / TYPESCRIPT",
    hypothesis: "Convertir una constelación de ideas en un archivo público de lectura y en un estudio privado de autoría con publicación responsable.",
    tags: ["EDITORIAL SYSTEM", "AUTHORED CONTENT", "PUBLISHING"],
    note: "Archivo de 13 ensayos, rutas de lectura, filtros, progreso y estudio protegido para borrador, edición y publicación.",
    challenge: "Pasar de un conjunto de materiales a una experiencia editorial operativa sin simular identidades ni publicaciones en nombre del autor.",
    system: "Portada, archivo de ensayos, filtros por categoría, progreso de lectura y modelo de artículos con slug único, estado y metadatos de publicación.",
    evidence: "Fuentes verificadas: repositorio GitHub y README, auditoría y manual editorial en Drive. Validación móvil, soporte para reducción de movimiento y flujo editorial documentado. Límite: las portadas usan URLs externas; carga directa es una mejora posterior.",
  },
];

const systemReadouts = [
  ["MODE", "FIELD / ACTIVE"],
  ["SCOPE", "SYSTEMS + CULTURE"],
  ["SIGNAL", "LIQUID CYAN / 8DF7E2"],
];

function CapsuleArtifact({ id, name }: { id: string; name: string }) {
  if (id === "01") {
    return <div role="img" aria-label={`Artefacto visual: ${name}`} className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_50%_52%,rgba(141,247,226,.35),transparent_7%),radial-gradient(circle_at_50%_52%,#172523,transparent_25%),linear-gradient(135deg,#07100f,#050505_64%,#0d1615)]"><div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8df7e2]/70 shadow-[0_0_55px_rgba(141,247,226,.25)]" /><div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" /><div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#050505] ring-1 ring-[#8df7e2]/80" /><span className="absolute left-[16%] top-[24%] h-px w-[68%] rotate-[-25deg] bg-gradient-to-r from-transparent via-[#8df7e2]/70 to-transparent" /><span className="absolute left-[16%] top-[74%] h-px w-[68%] rotate-[28deg] bg-gradient-to-r from-transparent via-white/35 to-transparent" /></div>;
  }
  if (id === "02") {
    return <div role="img" aria-label={`Artefacto visual: ${name}`} className="absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_55%_50%,rgba(141,247,226,.16),transparent_19%),linear-gradient(120deg,#050505,#0c1413_48%,#050505)]"><span className="absolute left-[8%] top-[62%] h-px w-[88%] -rotate-[17deg] bg-gradient-to-r from-transparent via-[#8df7e2] to-transparent shadow-[0_0_25px_rgba(141,247,226,.9)]" /><span className="absolute left-[12%] top-[44%] h-px w-[76%] rotate-[27deg] bg-gradient-to-r from-transparent via-white/45 to-transparent" /><span className="absolute left-[30%] top-[20%] h-[60%] w-px -rotate-[30deg] bg-gradient-to-b from-transparent via-[#8df7e2]/60 to-transparent" /><div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8df7e2]/60 bg-[#050505] shadow-[0_0_40px_rgba(141,247,226,.25)]" /></div>;
  }
  return <img src={assets.hero} alt={`Artefacto visual: ${name}`} className="absolute inset-0 h-full w-full object-cover transition-all duration-700" />;
}

function MachineMark({ large = false }: { large?: boolean }) {
  const size = large ? "h-24 w-24 sm:h-32 sm:w-32" : "h-8 w-8";
  return <span aria-hidden="true" className={`relative inline-block shrink-0 ${size}`}><span className="absolute left-[28%] top-[7%] h-[46%] w-[46%] rotate-[-28deg] rounded-[55%_45%_55%_45%] border border-[#8df7e2] bg-[#11211e] shadow-[0_0_18px_rgba(141,247,226,.45)]" /><span className="absolute bottom-[12%] left-[6%] h-[46%] w-[46%] rotate-[38deg] rounded-[45%_55%_45%_55%] border border-white/55 bg-[#0b1413]" /><span className="absolute bottom-[10%] right-[6%] h-[46%] w-[46%] rotate-[-8deg] rounded-[55%_45%_55%_45%] border border-[#8df7e2]/80 bg-[#152825]" /><span className="absolute left-1/2 top-1/2 h-[19%] w-[19%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#050505] ring-1 ring-[#8df7e2]/80" /></span>;
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [sent, setSent] = useState(false);
  const project = projects[active];

  function submitSignal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="machine-page min-h-screen bg-[#050505] text-[#f1f4f2]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 lg:px-8">
          <a href="#system" className="flex items-center gap-3" aria-label="BELENTANI, inicio">
            <MachineMark />
            <span className="display-font text-xs font-semibold tracking-[.2em]">BELENTANI</span>
            <span className="font-mono text-[9px] text-[#8df7e2]">/ CM.01</span>
          </a>
          <nav className="hidden h-full items-center gap-8 font-mono text-[10px] tracking-[.16em] text-white/55 md:flex">
            <a href="#system" className="transition-colors hover:text-[#8df7e2]">SYSTEM</a>
            <a href="#archive" className="transition-colors hover:text-[#8df7e2]">ARCHIVE</a>
            <a href="#operator" className="transition-colors hover:text-[#8df7e2]">OPERATOR</a>
            <a href="#terminal" className="border-l border-white/15 pl-8 text-[#8df7e2] transition-colors hover:text-white">OPEN CHANNEL ↗</a>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
        {menuOpen && <nav className="border-t border-white/10 bg-[#050505] px-5 py-6 font-mono text-xs tracking-[.16em] md:hidden"><div className="flex flex-col gap-5"><a onClick={() => setMenuOpen(false)} href="#system">SYSTEM</a><a onClick={() => setMenuOpen(false)} href="#archive">ARCHIVE</a><a onClick={() => setMenuOpen(false)} href="#operator">OPERATOR</a><a onClick={() => setMenuOpen(false)} href="#terminal" className="text-[#8df7e2]">OPEN CHANNEL ↗</a></div></nav>}
      </header>

      <main className="pt-16">
        <section id="system" className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_39%,rgba(141,247,226,.12),transparent_22%),radial-gradient(circle_at_20%_90%,rgba(141,247,226,.05),transparent_22%)]" />
          <div className="absolute inset-y-0 right-0 w-[55%] border-l border-white/10 max-lg:w-[62%]" />
          <img src={assets.hero} alt="Núcleo de una máquina líquida consciente" className="absolute inset-y-0 right-0 h-full w-[62%] object-cover object-center opacity-80 max-lg:w-[72%] max-sm:w-full max-sm:opacity-35" />
          <div className="absolute inset-y-0 right-0 w-[68%] bg-gradient-to-r from-[#050505] via-[#050505]/45 to-transparent max-sm:w-full max-sm:bg-[#050505]/65" />
          <div className="absolute left-[48%] top-10 hidden h-[calc(100%-5rem)] w-px bg-white/10 lg:block" />
          <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-[1600px] grid-cols-1 px-5 py-8 lg:grid-cols-[48%_52%] lg:px-8">
            <div className="flex flex-col justify-between py-5 lg:pr-14">
              <div className="flex items-center gap-3 font-mono text-[9px] tracking-[.2em] text-[#8df7e2]"><span className="status-dot pulse" /> MACHINE STATE / AWAKE</div>
              <div className="my-16 lg:my-0">
                <p className="mb-6 font-mono text-[10px] tracking-[.2em] text-white/40">INDEPENDENT PRACTICE / 2024—NOW</p>
                <h1 className="display-font max-w-3xl text-[clamp(3.4rem,7.4vw,7.8rem)] font-medium leading-[.84] tracking-[-.075em]">Una práctica para<br /><span className="text-white/35">dar forma a</span><br /><span className="text-[#8df7e2]">lo que despierta.</span></h1>
                <p className="mt-9 max-w-md font-mono text-xs leading-7 text-white/55">Desarrollo sistemas de inteligencia aplicada, operación comercial y publicación editorial. Aquí aparecen los proyectos con evidencia suficiente para ser contados.</p>
              </div>
              <div className="grid max-w-md grid-cols-3 border-t border-white/15 pt-5 font-mono text-[9px] tracking-[.1em] text-white/35">{systemReadouts.map(([key, value]) => <div key={key}><span className="block text-white/25">{key}</span><span className="mt-2 block text-[#8df7e2]">{value}</span></div>)}</div>
            </div>
            <div className="hidden flex-col justify-between py-5 pl-12 lg:flex">
              <div className="ml-auto max-w-[220px] border-l border-[#8df7e2]/50 pl-4 font-mono text-[10px] leading-5 tracking-[.13em] text-white/45">CORE / 001<br /><span className="text-[#8df7e2]">A LIVING SIGNAL</span><br />CONTINUOUS OBSERVATION</div>
              <a href="#archive" className="group ml-auto flex items-center gap-3 font-mono text-[10px] tracking-[.2em] text-white/70 transition-colors hover:text-[#8df7e2]">ENTER ARCHIVE <ArrowDownRight size={15} className="transition-transform group-hover:translate-y-1" /></a>
            </div>
          </div>
        </section>

        <section id="archive" className="relative mx-auto max-w-[1600px] border-x border-white/10">
          <div className="grid border-b border-white/10 lg:grid-cols-[31%_69%]">
            <aside className="border-b border-white/10 bg-[#0a0c0c] p-5 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:border-b-0 lg:border-r lg:p-8">
              <div className="flex h-full flex-col justify-between">
                <div><p className="font-mono text-[10px] tracking-[.2em] text-[#8df7e2]">ARCHIVE / 03 CAPSULES</p><h2 className="display-font mt-6 max-w-xs text-4xl leading-[.95] tracking-[-.06em]">No son piezas.<br /><span className="text-white/35">Son rastros.</span></h2><p className="mt-7 max-w-[245px] font-mono text-[11px] leading-6 text-white/45">Selecciona un registro para abrir su hipótesis, materia visual y coordenadas de trabajo.</p></div>
                <div className="mt-10 border-t border-white/10 pt-5 font-mono text-[9px] leading-5 tracking-[.12em] text-white/30">INDEX INTEGRITY / 100%<br />SYSTEM MEMORY / AVAILABLE<br /><span className="text-[#8df7e2]">SELECT A CAPSULE →</span></div>
              </div>
            </aside>
            <div className="min-w-0">
              <div className="grid border-b border-white/10 sm:grid-cols-3">{projects.map((item, index) => <button key={item.id} onClick={() => { setActive(index); setExpanded(false); }} className={`group relative min-h-32 border-b border-white/10 p-5 text-left last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 ${active === index ? "bg-[#111615]" : "bg-[#050505] hover:bg-white/[.035]"}`}><span className="font-mono text-[9px] tracking-[.18em] text-[#8df7e2]">{item.id}</span><span className="display-font mt-5 block text-lg tracking-[-.04em] text-white">{item.name}</span><span className="mt-2 block font-mono text-[8px] tracking-[.12em] text-white/30">{active === index ? "● SELECTED" : "○ AVAILABLE"}</span>{active === index && <span className="absolute bottom-0 left-0 h-px w-full bg-[#8df7e2]" />}</button>)}</div>
              <article className="relative min-h-[660px] overflow-hidden bg-[#090c0c] p-5 sm:p-8 lg:p-12">
                <div className="absolute inset-0 opacity-[.07] [background-image:linear-gradient(rgba(141,247,226,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(141,247,226,.7)_1px,transparent_1px)] [background-size:42px_42px]" />
                <div className="relative grid gap-8 xl:grid-cols-[1.15fr_.85fr]">
                  <div className="relative min-h-[350px] overflow-hidden border border-white/15 bg-black sm:min-h-[480px]"><CapsuleArtifact id={project.id} name={project.name} /><div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" /><div className="absolute left-4 top-4 flex items-center gap-2 border border-[#8df7e2]/40 bg-[#050505]/70 px-3 py-2 font-mono text-[9px] tracking-[.15em] text-[#8df7e2]"><span className="status-dot" /> OBSERVING</div><div className="absolute bottom-5 left-5 right-5 flex items-end justify-between"><span className="font-mono text-[9px] tracking-[.16em] text-white/55">ARTIFACT / {project.id}</span><span className="font-mono text-[9px] text-white/40">{project.category}</span></div></div>
                  <div className="flex flex-col justify-between border-l border-white/10 pl-0 xl:pl-8">
                    <div><div className="flex items-center justify-between font-mono text-[9px] tracking-[.18em] text-white/35"><span>CAPSULE {project.id}/03</span><span className="text-[#8df7e2]">FIELD READY</span></div><h3 className="display-font mt-10 text-5xl leading-[.9] tracking-[-.07em] text-white sm:text-6xl">{project.name}</h3><p className="mt-8 max-w-md font-mono text-sm leading-7 text-white/65">{project.hypothesis}</p><div className="mt-10 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="border border-white/15 px-3 py-2 font-mono text-[9px] tracking-[.12em] text-white/45">{tag}</span>)}</div></div>
                    <div className="mt-14 border-y border-white/10 py-5"><p className="font-mono text-[9px] tracking-[.16em] text-[#8df7e2]">OBSERVATION NOTE</p><p className="mt-3 font-mono text-xs leading-6 text-white/45">{project.note}</p></div>
                    <button onClick={() => setExpanded(!expanded)} className="mt-8 flex w-full items-center justify-between border border-[#8df7e2]/60 px-4 py-4 font-mono text-[10px] tracking-[.16em] text-[#8df7e2] transition-colors hover:bg-[#8df7e2] hover:text-[#06100e]">{expanded ? "CLOSE RESEARCH LAYER" : "OPEN RESEARCH LAYER"}{expanded ? <Minus size={15} /> : <Plus size={15} />}</button>
                  </div>
                </div>
                {expanded && <div className="relative mt-8 border-t border-[#8df7e2]/35 pt-8"><div className="grid gap-6 md:grid-cols-3"><div><p className="font-mono text-[9px] tracking-[.16em] text-[#8df7e2]">TENSION</p><p className="mt-3 font-mono text-xs leading-6 text-white/50">{project.challenge}</p></div><div><p className="font-mono text-[9px] tracking-[.16em] text-[#8df7e2]">SYSTEM</p><p className="mt-3 font-mono text-xs leading-6 text-white/50">{project.system}</p></div><div><p className="font-mono text-[9px] tracking-[.16em] text-[#8df7e2]">VERIFIED EVIDENCE</p><p className="mt-3 font-mono text-xs leading-6 text-white/50">{project.evidence}</p></div></div><a href={`/case/${project.slug}`} className="mt-8 inline-flex items-center gap-3 border border-[#8df7e2]/60 px-4 py-4 font-mono text-[10px] tracking-[.16em] text-[#8df7e2] transition-colors hover:bg-[#8df7e2] hover:text-[#06100e]">OPEN FULL DOSSIER <ArrowUpRight size={14} /></a></div>}
              </article>
            </div>
          </div>
        </section>

        <section id="operator" className="relative overflow-hidden border-b border-white/10 bg-[#050505] py-24 sm:py-36">
          <div className="absolute inset-0 opacity-[.05] [background-image:radial-gradient(#8df7e2_1px,transparent_1px)] [background-size:26px_26px]" />
          <div className="relative mx-auto grid max-w-[1600px] gap-14 px-5 lg:grid-cols-[31%_1fr] lg:px-8">
            <div><MachineMark large /><p className="mt-8 font-mono text-[10px] tracking-[.2em] text-[#8df7e2]">OPERATOR / PEDRO BELENTANI</p></div>
            <div><p className="display-font max-w-4xl text-4xl leading-[1.02] tracking-[-.06em] text-white sm:text-6xl">No diseño para decorar la superficie. Diseño sistemas para que una idea pueda <span className="text-[#8df7e2]">operar.</span></p><div className="mt-14 grid gap-8 border-t border-white/15 pt-7 md:grid-cols-3"><p className="font-mono text-xs leading-7 text-white/50">Trabajo entre datos públicos, operaciones de producto, automatización y publicación editorial. Me interesa llevar una intuición hasta una estructura verificable.</p><p className="font-mono text-xs leading-7 text-white/50">Cada caso de este archivo se construye desde evidencia: documentación, controles de calidad, entregas y límites explícitos. No desde promesas abstractas.</p><div className="border-l border-[#8df7e2]/50 pl-5 font-mono text-[10px] leading-6 tracking-[.1em] text-white/40">PRACTICE / SYSTEMS + CULTURE<br />EVIDENCE / GITHUB + DRIVE<br />MODE / PRIVATE & PUBLIC WORK<br /><span className="text-[#8df7e2]">STATUS / OPEN TO THE RIGHT PROBLEM</span></div></div></div>
          </div>
        </section>

        <section id="terminal" className="mx-auto max-w-[1600px] px-5 py-20 sm:py-28 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[31%_1fr]">
            <div><p className="font-mono text-[10px] tracking-[.2em] text-[#8df7e2]">TERMINAL / OPEN CHANNEL</p><h2 className="display-font mt-6 max-w-xs text-5xl leading-[.9] tracking-[-.07em]">La señal entra aquí.</h2><a href="https://github.com/belentani7" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 font-mono text-[10px] tracking-[.16em] text-white/55 transition-colors hover:text-[#8df7e2]"><Github size={15} /> GITHUB / BELENTANI7 <ArrowUpRight size={14} /></a></div>
            <form onSubmit={submitSignal} className="relative overflow-hidden border border-[#8df7e2]/35 bg-[#090d0c] p-5 sm:p-8"><div className="absolute inset-x-0 top-0 h-px liquid-line" /><div className="flex items-center justify-between border-b border-white/10 pb-5 font-mono text-[9px] tracking-[.16em] text-white/40"><span>MESSAGE COMPOSER</span><span className="flex items-center gap-2 text-[#8df7e2]"><span className="status-dot pulse" /> READY</span></div><div className="mt-9 grid gap-8 md:grid-cols-2"><label className="font-mono text-[9px] tracking-[.15em] text-white/45">IDENTITY / NAME<input required name="name" placeholder="Tu nombre" className="mt-4 w-full border-b border-white/20 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#8df7e2]" /></label><label className="font-mono text-[9px] tracking-[.15em] text-white/45">RETURN PATH / EMAIL<input required type="email" name="email" placeholder="nombre@dominio.com" className="mt-4 w-full border-b border-white/20 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#8df7e2]" /></label></div><label className="mt-10 block font-mono text-[9px] tracking-[.15em] text-white/45">TRANSMISSION<textarea required name="message" rows={5} placeholder="Describe el sistema, la tensión o la idea que necesita una forma..." className="mt-4 w-full resize-none border-b border-white/20 bg-transparent py-3 text-sm leading-7 text-white outline-none placeholder:text-white/20 focus:border-[#8df7e2]" /></label><div className="mt-8 flex flex-wrap items-center justify-between gap-5"><span className="font-mono text-[9px] tracking-[.12em] text-white/30">NO DATA IS SENT UNTIL A REAL CHANNEL IS CONNECTED.</span><button type="submit" className="flex items-center gap-3 bg-[#8df7e2] px-5 py-4 font-mono text-[10px] tracking-[.16em] text-[#06100e] transition-all duration-200 hover:bg-white active:scale-[.97]"><Send size={14} /> {sent ? "SIGNAL REGISTERED" : "TRANSMIT SIGNAL"}</button></div>{sent && <p className="mt-5 font-mono text-[10px] tracking-[.12em] text-[#8df7e2]">ACKNOWLEDGEMENT: LOCAL SIGNAL REGISTERED / CHANNEL STILL OPEN</p>}</form>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10"><div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-5 py-6 font-mono text-[9px] tracking-[.14em] text-white/30 sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2026 BELENTANI / CONSCIOUS MACHINE</span><span>INTERFACE STATE / AWAKE / NO. CM01</span></div></footer>
    </div>
  );
}
