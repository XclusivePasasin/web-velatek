import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Bot, Check, ChevronRight, GitBranch, ShieldCheck, Sparkles } from 'lucide-react';
import { ProductPreview } from '@/components/product-preview';
import { SolutionsGrid } from '@/components/solutions';
import { SectionHeading } from '@/components/section-heading';
import { FeatureSections } from '@/components/feature-sections';
import { Reveal } from '@/components/reveal';

export default function Home(){
return <>
<section className="ambient grid-pattern relative overflow-hidden pb-24 pt-24 text-center sm:pt-32">
  <div className="container relative">
    <span className="eyebrow">Ingeniería · Odoo · Automatización</span>
    <h1 className="hero-title gradient-text mx-auto mt-8 max-w-6xl">Tecnología que<br/><span className="text-[#72C261]">mueve tu empresa.</span></h1>
    <p className="text-muted mx-auto mt-8 max-w-2xl text-base leading-8 sm:text-lg">Diseñamos sistemas empresariales, automatizaciones y software a medida para que tu operación sea más clara, conectada y escalable.</p>
    <div className="mt-9 flex flex-wrap items-center justify-center gap-3"><Link className="button-primary" href="/soluciones">Explorar soluciones <ArrowUpRight size={18}/></Link><Link className="button-ghost" href="/contacto">Hablar con VELATEK <ArrowRight size={17}/></Link></div>
    <div className="mx-auto mt-14 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[#7f8b81]"><span className="flex items-center gap-2"><Check size={15} className="text-[#72C261]"/> Odoo y ERP</span><span className="flex items-center gap-2"><Check size={15} className="text-[#72C261]"/> Facturación electrónica</span><span className="flex items-center gap-2"><Check size={15} className="text-[#72C261]"/> Software e integraciones</span></div>
    <ProductPreview/>
  </div>
</section>
<div className="rule"/>
<FeatureSections/>
<div className="rule"/>
<section className="section container">
  <Reveal>
    <SectionHeading eyebrow="Plataforma empresarial" title={<>Una arquitectura para <span className="text-[#72C261]">toda tu operación.</span></>} description="Desde el primer contacto hasta la contabilidad: conectamos los procesos que tu equipo necesita para trabajar mejor."/>
    <SolutionsGrid/>
  </Reveal>
</section>
<section className="section border-y border-white/10 bg-[#090d0a]">
  <Reveal>
    <div className="container grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">
      <div><span className="eyebrow">IA y automatizaciones</span><h2 className="section-heading mt-6">La automatización trabaja <span className="text-[#72C261]">junto a tu equipo.</span></h2><p className="text-muted mt-6 max-w-md leading-8">Conectamos reglas, datos y asistentes para quitar trabajo repetitivo de los procesos sin convertir tu operación en una caja negra.</p><Link href="/soluciones/automatizacion" className="mt-8 inline-flex items-center gap-2 text-sm text-[#72C261]">Explorar automatización <ChevronRight size={16}/></Link></div>
      <div className="panel relative min-h-[360px] overflow-hidden p-5 sm:p-7"><div className="absolute inset-0 showcase-glow"/><div className="relative grid gap-3 md:grid-cols-2">
        {[['Entrada','Solicitud de cliente',GitBranch],['Contexto','Pedido + inventario',Sparkles],['Decisión','Regla de negocio',ShieldCheck],['Acción','Actualizar Odoo',Bot]].map(([label,text,Icon],i)=>{const I=Icon as typeof Bot;return <div key={label as string} className="card-hover rounded-2xl border border-white/10 bg-[#0b100c]/90 p-5"><div className="flex items-center justify-between"><span className="text-[10px] uppercase tracking-[.15em] text-[#657168]">{label as string}</span><I size={17} className="text-[#72C261]"/></div><p className="mt-8 text-sm font-semibold text-[#d4ddd5]">{text as string}</p><div className="mt-3 h-px bg-gradient-to-r from-[#72C261]/40 to-transparent"/></div>})}
      </div></div>
    </div>
  </Reveal>
</section>
<section className="section container">
  <Reveal>
    <div className="grid gap-4 md:grid-cols-2">
      <div className="panel p-8 sm:p-10"><span className="eyebrow">Build · Review · Ship</span><h2 className="section-heading mt-6 !text-[clamp(2rem,4vw,3.25rem)]">Construimos con criterio de <span className="text-[#72C261]">software.</span></h2><p className="text-muted mt-5 max-w-md leading-8">Código legible, procesos documentados y una arquitectura pensada para evolucionar con tu empresa.</p><div className="mt-9 rounded-xl border border-white/10 bg-[#090d0a] p-5 font-mono text-[11px] leading-6 text-[#89968c]"><div><span className="text-[#72C261]">+</span> venta.confirmar()</div><div><span className="text-[#72C261]">+</span> inventario.reservar()</div><div><span className="text-[#72C261]">+</span> factura.generar_dte()</div><div><span className="text-[#72C261]">✓</span> flujo completado</div></div></div>
      <div className="rounded-2xl border border-[#dbe5ff]/10 bg-gradient-to-br from-[#121923] to-[#0c1015] p-8 sm:p-10"><span className="text-[11px] font-semibold uppercase tracking-[.16em] text-[#aab8cf]">Casos de uso</span><h3 className="mt-6 text-3xl font-semibold tracking-[-.04em]">Menos trabajo manual. Más control.</h3><div className="mt-10 space-y-5">{['Centralizar ventas e inventario','Automatizar facturación y documentos','Conectar sistemas mediante API','Crear herramientas internas a medida'].map((x,i)=><div key={x} className="flex items-center gap-4 border-b border-white/10 pb-5 text-sm text-[#bec9d8]"><span className="text-xs text-[#72C261]">0{i+1}</span>{x}</div>)}</div></div>
    </div>
  </Reveal>
</section>
<section className="section border-y border-white/10 bg-[#090d0a]">
  <Reveal>
    <div className="container text-center"><span className="eyebrow">Una relación de largo plazo</span><h2 className="section-heading mx-auto mt-6 max-w-4xl">La tecnología no termina cuando <span className="text-[#72C261]">se publica.</span></h2><p className="text-muted mx-auto mt-6 max-w-2xl leading-8">Acompañamos la evolución de tus procesos, desde la implementación hasta las siguientes mejoras.</p><div className="mx-auto mt-12 grid max-w-4xl gap-3 text-left md:grid-cols-3">{[['01','Entender','Procesos y objetivos'],['02','Implementar','Solución y adopción'],['03','Evolucionar','Mejora continua']].map(([n,t,d])=><div key={n} className="panel p-6"><span className="text-xs text-[#72C261]">{n}</span><h3 className="mt-8 text-lg font-semibold">{t}</h3><p className="text-muted mt-2 text-sm">{d}</p></div>)}</div></div>
  </Reveal>
</section>
<section className="section container">
  <Reveal>
    <div className="panel relative overflow-hidden px-6 py-20 text-center sm:px-14 sm:py-28"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(114,194,97,.12),transparent_60%)]"/><div className="relative"><span className="eyebrow">Siguiente paso</span><h2 className="section-heading mx-auto mt-6 max-w-3xl">Construyamos algo que haga avanzar tu empresa.</h2><p className="text-muted mx-auto mt-6 max-w-xl leading-8">Cuéntanos qué quieres mejorar y diseñemos juntos el siguiente paso.</p><Link className="button-primary mt-9" href="/contacto">Hablemos de tu proyecto <ArrowUpRight size={18}/></Link></div></div>
  </Reveal>
</section>
</>
}
