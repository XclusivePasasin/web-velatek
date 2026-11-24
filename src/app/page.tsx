import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { SolutionsGrid } from '@/components/solutions';
import { FeatureSections } from '@/components/feature-sections';
import { OdooAppExplorer } from '@/components/odoo-app-explorer';

export default function Home() {
  return <>
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Partner oficial de Odoo · El Salvador</span>
          <h1 className="hero-title">Odoo y tecnología para hacer avanzar <em>tu empresa.</em></h1>
          <p className="hero-description">Implementamos y migramos Odoo, desarrollamos soluciones a medida e integramos facturación electrónica para conectar la operación de tu negocio.</p>
          <div className="hero-actions">
            <Link className="button-primary" href="/contacto">Solicitar una asesoría <ArrowUpRight size={17}/></Link>
            <Link className="button-secondary" href="/soluciones">Conocer soluciones <ArrowRight size={16}/></Link>
          </div>
          <div className="hero-proof"><span><i/> Implementación y migración Odoo</span><span><i/> Desarrollos a medida</span><span><i/> Facturación electrónica</span></div>
        </div>
        <OdooAppExplorer/>
      </div>
    </section>
    <section className="section section-dark">
      <div className="container service-layout">
        <div className="service-lead">
          <span className="section-label">Especialistas en Odoo</span>
          <h2 className="section-heading">Un ERP que se adapta a tu forma de operar.</h2>
          <p className="section-copy">Acompañamos cada etapa: desde la implementación inicial y la migración de datos hasta las extensiones e integraciones que necesita tu empresa.</p>
        </div>
        <SolutionsGrid/>
      </div>
    </section>
    <FeatureSections/>
    <section className="section">
      <div className="container contact-band">
        <div><h2>Conversemos sobre tu proyecto Odoo.</h2><p>Cuéntanos si buscas implementar, migrar, desarrollar una función a medida o integrar facturación electrónica.</p></div>
        <Link href="/contacto" className="button-primary">Hablemos <ArrowRight size={16}/></Link>
      </div>
    </section>
  </>;
}
