import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const process = [
  { number: '01', title: 'Entender', text: 'Revisamos cómo trabaja tu equipo y dónde se pierde tiempo o visibilidad.' },
  { number: '02', title: 'Diseñar', text: 'Definimos procesos y herramientas de acuerdo con tus objetivos y prioridades.' },
  { number: '03', title: 'Acompañar', text: 'Implementamos, integramos y damos continuidad a la solución.' },
];
const benefits = ['Procesos más claros y trazables', 'Información conectada entre áreas', 'Tecnología preparada para evolucionar', 'Acompañamiento técnico especializado', 'Integración con sistemas existentes', 'Automatización de tareas repetitivas'];

export function FeatureSections() {
  return <>
    <section className="section">
      <div className="container">
        <div className="section-intro"><span className="section-label">Cómo trabajamos</span><h2 className="section-heading">Primero entendemos el proceso. Después elegimos la tecnología.</h2><p className="section-copy">Cada empresa tiene una operación distinta. La solución debe adaptarse al contexto, cuidar la información y facilitar el trabajo de las personas.</p></div>
        <div className="process-grid">{process.map(step => <article className="process-step" key={step.number}><span className="process-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </div>
    </section>
    <section className="section section-dark">
      <div className="container benefit-layout">
        <div><span className="section-label">Un socio tecnológico</span><h2 className="section-heading">Soluciones que cuidan la continuidad de tu negocio.</h2><p className="section-copy">Desde una integración puntual hasta una plataforma empresarial: construimos con foco en mantenibilidad, seguridad y crecimiento.</p><Link href="/nosotros" className="mt-6 inline-flex items-center gap-2 text-sm text-[#b5ca96]">Conoce VELATEK <ArrowUpRight size={16}/></Link></div>
        <div className="benefit-list">{benefits.map(item => <div className="benefit-item" key={item}>{item}</div>)}</div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section-intro"><span className="section-label">Tecnología aplicada</span><h2 className="section-heading">Un ecosistema pensado para integrarse.</h2><p className="section-copy">Seleccionamos tecnologías según el problema, la operación y la capacidad de evolución que necesita cada proyecto.</p></div>
        <div className="flex flex-wrap gap-3">{['Odoo', 'Python', 'PostgreSQL', 'React', 'TypeScript', 'APIs REST', 'Linux', 'Docker'].map(item => <span className="rounded-sm border border-[#465346] px-4 py-3 text-xs text-[#d2dacf]" key={item}>{item}</span>)}</div>
      </div>
    </section>
  </>;
}
