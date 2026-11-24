import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { SolutionsGrid } from '@/components/solutions';
import { FeatureSections } from '@/components/feature-sections';

function WorkflowVisual() {
  const steps = [
    ['01', 'Ventas', 'Pedidos y clientes', 'CAPTURA'],
    ['02', 'Operación', 'Inventario y compras', 'GESTIONA'],
    ['03', 'Administración', 'Contabilidad y DTE', 'CONTROLA'],
  ];
  return <div className="workflow-visual" role="img" aria-label="Esquema conceptual de procesos empresariales conectados">
    <div className="workflow-caption"><span>Una operación conectada</span><small>Esquema conceptual</small></div>
    <div className="workflow-list">{steps.map(([number, name, detail, tag]) => <div className="workflow-row" key={number}>
      <span className="workflow-index">{number}</span><div><div className="workflow-name">{name}</div><div className="workflow-detail">{detail}</div></div><span className="workflow-tag">{tag}</span>
    </div>)}</div>
    <div className="workflow-note"><Check size={14} aria-hidden="true"/> Odoo · Integraciones · Procesos a medida</div>
  </div>;
}

export default function Home() {
  return <>
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Partner oficial de Odoo · El Salvador</span>
          <h1 className="hero-title">Tecnología que conecta y hace avanzar <em>tu empresa.</em></h1>
          <p className="hero-description">Implementamos Odoo, integramos tus sistemas y desarrollamos software para que los procesos de tu negocio trabajen en conjunto.</p>
          <div className="hero-actions">
            <Link className="button-primary" href="/contacto">Solicitar una asesoría <ArrowUpRight size={17}/></Link>
            <Link className="button-secondary" href="/soluciones">Conocer soluciones <ArrowRight size={16}/></Link>
          </div>
          <div className="hero-proof"><span><i/> Odoo empresarial</span><span><i/> Automatización</span><span><i/> Desarrollo e integraciones</span></div>
        </div>
        <WorkflowVisual/>
      </div>
    </section>
    <section className="section section-dark">
      <div className="container service-layout">
        <div className="service-lead">
          <span className="section-label">Qué hacemos</span>
          <h2 className="section-heading">Tecnología con sentido para el trabajo real.</h2>
          <p className="section-copy">Alineamos herramientas, información y procesos con las necesidades de cada empresa.</p>
        </div>
        <SolutionsGrid/>
      </div>
    </section>
    <FeatureSections/>
    <section className="section">
      <div className="container contact-band">
        <div><h2>Conversemos sobre lo que tu empresa necesita.</h2><p>Cuéntanos el reto operativo o tecnológico que quieres resolver y exploremos el siguiente paso.</p></div>
        <Link href="/contacto" className="button-primary">Hablemos <ArrowRight size={16}/></Link>
      </div>
    </section>
  </>;
}
