import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Code2, Compass, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = { title: 'Nosotros', description: 'Conoce el enfoque de ingeniería de software y soluciones empresariales de VELATEK en El Salvador.' };

const principles = [
  { icon: Compass, title: 'Entender la operación', text: 'Partimos de los procesos y objetivos del negocio antes de recomendar una herramienta.' },
  { icon: Code2, title: 'Ingeniería aplicada', text: 'Diseñamos soluciones mantenibles, integradas y adaptadas a necesidades concretas.' },
  { icon: ShieldCheck, title: 'Continuidad y confianza', text: 'Consideramos seguridad, soporte y evolución desde el inicio de cada proyecto.' },
];

export default function About() {
  return <section className="page-hero"><div className="container">
    <span className="eyebrow">Sobre VELATEK</span>
    <h1 className="hero-title max-w-5xl">La tecnología funciona mejor cuando <em>entiende tu negocio.</em></h1>
    <p className="hero-description max-w-3xl">Somos una empresa tecnológica enfocada en implementar Odoo y construir soluciones de software para los retos reales de las empresas. Combinamos conocimiento de procesos, ingeniería e integración para que la tecnología sea útil en el trabajo cotidiano.</p>
    <div className="about-band mt-16"><p className="about-statement">“Sistemas claros. Procesos conectados. Tecnología que acompaña el crecimiento.”</p><div className="grid gap-7 sm:grid-cols-3 lg:grid-cols-1">{principles.map(item => <article className="flex gap-4 border-b border-[#344238] pb-5" key={item.title}><item.icon className="shrink-0 text-[#b5ca96]" size={22}/><div><h2 className="text-sm font-semibold">{item.title}</h2><p className="mt-2 text-xs leading-6 text-[#b2bcb0]">{item.text}</p></div></article>)}</div></div>
    <Link href="/contacto" className="button-primary mt-10">Conversemos <ArrowUpRight size={16}/></Link>
  </div></section>;
}
