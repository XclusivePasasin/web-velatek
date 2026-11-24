import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const process = [
  { number: '01', title: 'Implementar', text: 'Configuramos Odoo según los procesos, usuarios y prioridades de tu empresa.' },
  { number: '02', title: 'Migrar', text: 'Preparamos el cambio de sistema o versión cuidando datos, operación e integraciones.' },
  { number: '03', title: 'Desarrollar', text: 'Extendemos Odoo o construimos software a medida cuando el estándar no cubre el proceso.' },
];
const benefits = ['Implementación funcional de Odoo', 'Migración planificada de datos y procesos', 'Desarrollos alineados con tu operación', 'Integración de facturación electrónica', 'Conexión con sistemas y APIs existentes', 'Acompañamiento técnico y evolución'];

export function FeatureSections() {
  return <>
    <section className="section">
      <div className="container">
        <div className="section-intro"><span className="section-label">Servicios Odoo</span><h2 className="section-heading">De la implementación a la evolución de tu ERP.</h2><p className="section-copy">Acompañamos el ciclo completo de tu plataforma: configuración, transición, personalización e integración con tus procesos empresariales.</p></div>
        <div className="process-grid">{process.map(step => <article className="process-step" key={step.number}><span className="process-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </div>
    </section>
    <section className="section section-dark">
      <div className="container benefit-layout">
        <div><span className="section-label">Odoo para tu operación</span><h2 className="section-heading">Un equipo técnico para que tu sistema siga avanzando.</h2><p className="section-copy">Resolvemos necesidades dentro de Odoo y alrededor de él: migraciones, desarrollo personalizado y conexiones con las herramientas de tu empresa.</p><Link href="/nosotros" className="mt-6 inline-flex items-center gap-2 text-sm text-[#c7a9c3]">Conoce nuestro enfoque <ArrowUpRight size={16}/></Link></div>
        <div className="benefit-list">{benefits.map(item => <div className="benefit-item" key={item}>{item}</div>)}</div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section-intro"><span className="section-label">Tecnología aplicada</span><h2 className="section-heading">Odoo en el centro. Integraciones donde aportan valor.</h2><p className="section-copy">Trabajamos con las herramientas necesarias para conectar el ERP, los datos y las aplicaciones que necesita cada proceso.</p></div>
        <div className="flex flex-wrap gap-3">{['Odoo', 'Python', 'PostgreSQL', 'XML / QWeb', 'APIs REST', 'React', 'Linux', 'Docker'].map(item => <span className="rounded-sm border border-[#544653] px-4 py-3 text-xs text-[#e0d5e0]" key={item}>{item}</span>)}</div>
      </div>
    </section>
  </>;
}
