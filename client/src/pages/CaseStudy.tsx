/* Máquina consciente: dossier de investigación, capas de evidencia y lectura editorial; nunca una ficha comercial genérica. */
import { ArrowLeft, ArrowUpRight, ChevronRight, CircleDot, Github, ShieldCheck } from "lucide-react";
import { useRoute } from "wouter";

const caseStudies = {
  "nexus-data": {
    index: "01",
    title: "NEXUS DATA",
    category: "PUBLIC PROCUREMENT INTELLIGENCE / v0.4",
    strapline: "Una lectura operativa de fuentes públicas que no confunde historia con oportunidad.",
    tension: "Las fuentes públicas usaban estructuras, monedas y tipos de registro distintos. Un shortlist comercial podía mezclar adjudicaciones históricas con oportunidades abiertas sin un modelo de procedencia claro.",
    system: "Un extractor configurable por YAML que conecta fuentes oficiales, normaliza registros, separa tipo de señal y moneda, registra calidad por fuente y produce una capa de priorización explicable. El sistema incorpora SQLite, CSV/JSON, CLI, panel Streamlit y distribución reproducible.",
    evidence: [
      ["SOURCES", "USAspending, Contracts Finder V2 y City of Chicago Open Data"],
      ["ACCEPTANCE RUN", "60 registros procesados; 10 oportunidades abiertas accionables"],
      ["QUALITY GATE", "12 pruebas superadas; Ruff, Bandit y pip-audit sin hallazgos"],
      ["COMPLIANCE", "Sin scraping HTML, CAPTCHA ni configuraciones bajo 2 s por dominio"],
    ],
    boundary: "Es un prototipo demostrable de inteligencia de contratación. No se presenta como un SaaS multi-tenant, un sistema legal de elegibilidad ni una predicción de adjudicación.",
    field: "DATA SYSTEMS / PROCUREMENT / TRACEABILITY",
  },
  lumaquote: {
    index: "02",
    title: "LumaQuote",
    category: "COMMERCIAL OPERATING SYSTEM / TYPESCRIPT",
    strapline: "Un sistema comercial que convierte presupuestos variables en documentos claros, consistentes y trazables.",
    tension: "Los presupuestos para fotografía suelen vivir entre cálculo, conversación, versiones y presentación. La operación necesitaba mantener cada uno de esos estados sin fragmentar el trabajo ni exponer datos de clientes.",
    system: "Una aplicación para clientes, presupuestos, líneas de servicio, descuentos, IVA, estados, notas, historial, vistas imprimibles y exportación ZIP. El flujo usa autenticación, aislamiento por cuenta, transacciones, claves foráneas, restricciones de unicidad e índices de consulta.",
    evidence: [
      ["OPERATIONS", "Clientes, presupuestos, impuestos, estados, notas y documentos imprimibles"],
      ["DATA INTEGRITY", "Transacciones de creación/edición, relaciones de propiedad e índices"],
      ["QUALITY GATE", "9 pruebas Vitest superadas; TypeScript sin errores y build de producción"],
      ["OUTPUT", "HTML saneado y exportación ZIP con nombre de archivo controlado"],
    ],
    boundary: "La versión documentada no envía correos, no procesa pagos y no incorpora aún aceptación electrónica ni enlaces públicos revocables.",
    field: "PRODUCT OPERATIONS / DOCUMENT SYSTEMS / INTEGRITY",
  },
  cassandra: {
    index: "03",
    title: "Cassandra Belentani Complex",
    category: "EDITORIAL PLATFORM / TYPESCRIPT",
    strapline: "Un archivo de lectura y una sala de publicación para que una idea conserve autoría, ritmo y trazabilidad.",
    tension: "Un conjunto de materiales e ideas debía convertirse en una experiencia pública de lectura sin reducirse a un blog lineal ni simular publicaciones en nombre del autor.",
    system: "Portada editorial, archivo con filtros, 13 ensayos iniciales, rutas de lectura, progreso de lectura y estudio protegido para crear, editar, mantener en borrador y publicar artículos persistentes. El modelo contempla slug único, estado, tiempos de lectura y fecha de publicación.",
    evidence: [
      ["EDITORIAL ARCHIVE", "13 ensayos iniciales, filtros por categoría y rutas de lectura"],
      ["AUTHOR STUDIO", "Borrador, edición y publicación desde una sesión protegida"],
      ["ACCESSIBILITY", "Validación móvil, objetivos táctiles claros y reducción de movimiento respetada"],
      ["INPUT SAFETY", "Validación de slugs, límites de tamaño y URLs de portada web"],
    ],
    boundary: "Las portadas se gestionan mediante URL externa. La carga directa a almacenamiento y el SEO de renderizado en servidor pertenecen a una siguiente iteración.",
    field: "EDITORIAL SYSTEMS / AUTHORSHIP / CULTURAL MEMORY",
  },
} as const;

type CaseKey = keyof typeof caseStudies;

function MachineMark() {
  return <span aria-hidden="true" className="relative inline-block h-9 w-9 shrink-0"><span className="absolute left-[28%] top-[7%] h-[46%] w-[46%] rotate-[-28deg] rounded-[55%_45%_55%_45%] border border-[#8df7e2] bg-[#11211e] shadow-[0_0_18px_rgba(141,247,226,.45)]" /><span className="absolute bottom-[12%] left-[6%] h-[46%] w-[46%] rotate-[38deg] rounded-[45%_55%_45%_55%] border border-white/55 bg-[#0b1413]" /><span className="absolute bottom-[10%] right-[6%] h-[46%] w-[46%] rotate-[-8deg] rounded-[55%_45%_55%_45%] border border-[#8df7e2]/80 bg-[#152825]" /><span className="absolute left-1/2 top-1/2 h-[19%] w-[19%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#050505] ring-1 ring-[#8df7e2]/80" /></span>;
}

function CaseArtifact({ index }: { index: string }) {
  const core = index === "01" ? "rounded-full" : index === "02" ? "rotate-45 rounded-[24%]" : "rounded-[48%_52%_38%_62%]";
  return <div role="img" aria-label="Artefacto abstracto de sistema" className="relative min-h-[360px] overflow-hidden border border-white/15 bg-[radial-gradient(circle_at_50%_48%,rgba(141,247,226,.18),transparent_18%),linear-gradient(120deg,#06100e,#050505_53%,#111816)] sm:min-h-[520px]"><div className="absolute inset-0 opacity-[.12] [background-image:linear-gradient(rgba(141,247,226,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(141,247,226,.7)_1px,transparent_1px)] [background-size:44px_44px]" /><div className={`absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 border border-[#8df7e2]/75 bg-[#08100f] shadow-[0_0_80px_rgba(141,247,226,.3)] ${core}`} /><div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" /><div className="absolute left-1/2 top-1/2 h-[1px] w-[115%] -translate-x-1/2 -translate-y-1/2 rotate-[-28deg] bg-gradient-to-r from-transparent via-[#8df7e2] to-transparent" /><div className="absolute left-1/2 top-1/2 h-[1px] w-[95%] -translate-x-1/2 -translate-y-1/2 rotate-[34deg] bg-gradient-to-r from-transparent via-white/35 to-transparent" /><span className="absolute bottom-5 left-5 font-mono text-[9px] tracking-[.18em] text-[#8df7e2]">ARTIFACT / {index} / NON-REPRESENTATIONAL</span></div>;
}

export default function CaseStudy() {
  const [, params] = useRoute("/case/:slug");
  const caseKey = params?.slug as CaseKey;
  const study = caseStudies[caseKey];

  if (!study) {
    return <main className="min-h-screen bg-[#050505] px-6 py-24 text-white"><a href="/" className="font-mono text-xs text-[#8df7e2]">← VOLVER AL ARCHIVO</a><p className="display-font mt-16 text-5xl">Dossier no encontrado.</p></main>;
  }

  return <div className="min-h-screen bg-[#050505] text-[#f1f4f2]">
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl"><div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 lg:px-8"><a href="/" className="flex items-center gap-3" aria-label="Volver a BELENTANI"><MachineMark /><span className="display-font text-xs font-semibold tracking-[.2em]">BELENTANI</span><span className="font-mono text-[9px] text-[#8df7e2]">/ DOSSIER {study.index}</span></a><a href="/#archive" className="flex items-center gap-2 font-mono text-[10px] tracking-[.16em] text-[#8df7e2]"><ArrowLeft size={14} /> ARCHIVE</a></div></header>
    <main>
      <section className="relative overflow-hidden border-b border-white/10"><div className="absolute inset-0 opacity-[.12] [background-image:radial-gradient(#8df7e2_1px,transparent_1px)] [background-size:30px_30px]" /><div className="relative mx-auto grid max-w-[1600px] gap-12 px-5 py-20 lg:grid-cols-[.72fr_1.28fr] lg:px-8 lg:py-28"><div className="flex flex-col justify-between"><div><p className="font-mono text-[10px] tracking-[.2em] text-[#8df7e2]">CASE STUDY / {study.index} OF 03</p><p className="mt-8 font-mono text-[10px] leading-6 tracking-[.14em] text-white/40">{study.category}</p></div><p className="mt-16 max-w-xs font-mono text-xs leading-7 text-white/45">Este dossier expone el sistema y su evidencia de trabajo. No revela repositorios privados, datos de clientes, credenciales ni activos no autorizados.</p></div><div><h1 className="display-font max-w-4xl text-[clamp(3.7rem,8vw,8.5rem)] leading-[.83] tracking-[-.08em]">{study.title}</h1><p className="mt-10 max-w-2xl text-xl leading-8 text-white/65 sm:text-2xl">{study.strapline}</p></div></div></section>

      <section className="mx-auto max-w-[1600px] border-x border-white/10"><div className="grid gap-12 border-b border-white/10 px-5 py-16 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:py-24"><CaseArtifact index={study.index} /><div className="flex flex-col justify-between"><div><p className="font-mono text-[10px] tracking-[.2em] text-[#8df7e2]">01 / TENSION</p><p className="display-font mt-7 max-w-2xl text-4xl leading-[.98] tracking-[-.055em] text-white sm:text-5xl">{study.tension}</p></div><div className="mt-16 border-t border-white/15 pt-6"><p className="font-mono text-[10px] tracking-[.2em] text-[#8df7e2]">02 / DELIVERED SYSTEM</p><p className="mt-5 max-w-2xl font-mono text-sm leading-8 text-white/55">{study.system}</p></div></div></div>

        <section className="grid border-b border-white/10 lg:grid-cols-[31%_69%]"><aside className="border-b border-white/10 bg-[#090c0c] p-5 lg:border-b-0 lg:border-r lg:p-8"><p className="font-mono text-[10px] tracking-[.2em] text-[#8df7e2]">03 / EVIDENCE</p><h2 className="display-font mt-6 text-4xl leading-[.95] tracking-[-.06em]">No promesas.<br /><span className="text-white/35">Controles.</span></h2><p className="mt-7 max-w-xs font-mono text-[11px] leading-6 text-white/45">Cada señal se apoya en documentación técnica, auditorías o pruebas de aceptación. Los límites se mantienen visibles.</p></aside><div className="grid sm:grid-cols-2">{study.evidence.map(([label, detail], index) => <article key={label} className="min-h-56 border-b border-white/10 p-6 last:border-b-0 sm:border-b sm:[&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-child(odd)]:border-r"><div className="flex items-center justify-between"><span className="font-mono text-[9px] tracking-[.18em] text-[#8df7e2]">0{index + 1}</span><CircleDot size={14} className="text-white/35" /></div><p className="mt-12 font-mono text-[10px] tracking-[.16em] text-white/35">{label}</p><p className="mt-4 max-w-sm font-mono text-sm leading-7 text-white/65">{detail}</p></article>)}</div></section>

        <section className="grid gap-12 px-5 py-16 lg:grid-cols-[31%_69%] lg:px-8 lg:py-24"><div><p className="font-mono text-[10px] tracking-[.2em] text-[#8df7e2]">04 / BOUNDARY</p><ShieldCheck className="mt-8 text-[#8df7e2]" size={29} /></div><div><p className="display-font max-w-3xl text-4xl leading-[.98] tracking-[-.06em] text-white sm:text-5xl">El límite es parte del sistema, no una nota al pie.</p><p className="mt-9 max-w-3xl font-mono text-sm leading-8 text-white/55">{study.boundary}</p><div className="mt-12 flex flex-wrap gap-4"><a href="/" className="inline-flex items-center gap-3 border border-white/20 px-5 py-4 font-mono text-[10px] tracking-[.16em] text-white/70 transition-colors hover:border-[#8df7e2] hover:text-[#8df7e2]"><ArrowLeft size={14} /> VOLVER AL ARCHIVO</a><a href="https://github.com/belentani7" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-[#8df7e2]/50 px-5 py-4 font-mono text-[10px] tracking-[.16em] text-[#8df7e2] transition-colors hover:bg-[#8df7e2] hover:text-[#06100e]"><Github size={14} /> GITHUB PROFILE <ArrowUpRight size={13} /></a></div></div></section>
      </section>
    </main>
    <footer className="border-t border-white/10 px-5 py-6 font-mono text-[9px] tracking-[.14em] text-white/30 lg:px-8"><div className="mx-auto flex max-w-[1600px] items-center justify-between"><span>© 2026 BELENTANI / CONSCIOUS MACHINE</span><span className="hidden sm:block">{study.field}</span></div></footer>
  </div>;
}
