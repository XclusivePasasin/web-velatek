import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Code2, Compass, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = { title: 'Nosotros', description: 'Conoce el enfoque de VELATEK en implementación y migración Odoo, desarrollo a medida y facturación electrónica.' };

const principles = [
  { icon: Compass, title: 'Entender la operación', text: 'Partimos de los procesos y objetivos del negocio para planificar la implementación o migración.' },
  { icon: Code2, title: 'Ingeniería aplicada', text: 'Desarrollamos extensiones e integraciones mantenibles que responden a necesidades concretas.' },
  { icon: ShieldCheck, title: 'Continuidad y confianza', text: 'Consideramos los datos, la operación y la evolución del sistema en cada proyecto.' },
];

export default function About() {
  return <section className="page-hero"><div className="container">
    <span className="eyebrow">Odoo y tecnología empresarial</span>
    <h1 className="hero-title max-w-5xl">Acompañamos la evolución de <em>tu sistema.</em></h1>
    <p className="hero-description max-w-3xl">VELATEK es una empresa tecnológica enfocada en Odoo, migraciones, desarrollos a medida y facturación electrónica. Unimos conocimiento de procesos e ingeniería para que las soluciones se ajusten a la realidad de cada empresa.</p>
    <div className="about-band mt-16"><p className="about-statement">Implementar. Migrar. Desarrollar. Integrar. Con Odoo como base de una operación conectada.</p><div className="grid gap-7 sm:grid-cols-3 lg:grid-cols-1">{principles.map(item => <article className="flex gap-4 border-b border-[#dce4da] pb-5" key={item.title}><item.icon className="shrink-0 text-[#286f2c]" size={22}/><div><h2 className="text-sm font-semibold">{item.title}</h2><p className="mt-2 text-xs leading-6 text-[#586158]">{item.text}</p></div></article>)}</div></div>
    <Link href="/contacto" className="button-primary mt-10">Conversemos sobre Odoo <ArrowUpRight size={16}/></Link>
  </div></section>;
}
