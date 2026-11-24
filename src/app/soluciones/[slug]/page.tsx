import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { solutions } from '@/components/solutions';

const details: Record<string, { heading: string; intro: string; points: string[] }> = {
  odoo: { heading: 'Implementa Odoo alrededor de tu operación.', intro: 'Configuramos Odoo para conectar departamentos, simplificar el trabajo diario y dar visibilidad a la información de tu empresa.', points: ['Análisis de procesos y alcance', 'Configuración de aplicaciones Odoo', 'Acompañamiento de implementación', 'Integraciones y personalización'] },
  'migraciones-odoo': { heading: 'Migra Odoo con una transición planificada.', intro: 'Preparamos el cambio de versión o plataforma atendiendo datos, personalizaciones, integraciones y continuidad operativa.', points: ['Revisión de módulos y desarrollos actuales', 'Plan de migración de datos', 'Adecuación de personalizaciones', 'Validación de procesos e integraciones'] },
  'facturacion-electronica': { heading: 'Facturación electrónica integrada con Odoo.', intro: 'Integramos flujos de emisión y gestión de Documentos Tributarios Electrónicos con los procesos empresariales en El Salvador.', points: ['Conexión con procesos de venta', 'Generación y gestión de documentos', 'Seguimiento de estados y respuestas', 'Flujos alineados a la operación'] },
  'desarrollo-software': { heading: 'Desarrollos a medida sobre Odoo y más.', intro: 'Extendemos funcionalidades de Odoo y construimos aplicaciones que resuelven necesidades específicas de tu empresa.', points: ['Módulos y extensiones Odoo', 'Automatización de reglas de negocio', 'Portales e interfaces web', 'Integraciones mediante API'] },
};

export function generateStaticParams() { return Object.keys(details).map(slug => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find(item => item.href.endsWith('/' + slug));
  return { title: solution?.title || 'Soluciones Odoo', description: solution?.description };
}

export default async function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const detail = details[slug];
  const solution = solutions.find(item => item.href.endsWith('/' + slug));
  if (!detail || !solution) notFound();
  return <section className="page-hero"><div className="container">
    <Link href="/soluciones" className="mb-10 inline-flex items-center gap-2 text-sm text-[#c2b8c3] hover:text-white"><ArrowLeft size={16}/> Volver a especialidades</Link>
    <div className="grid items-start gap-12 lg:grid-cols-2">
      <div><span className="eyebrow">{solution.label}</span><h1 className="hero-title !text-[clamp(2.8rem,5.4vw,5.2rem)]">{detail.heading}</h1><p className="hero-description">{detail.intro}</p><Link href="/contacto" className="button-primary mt-8">Solicitar asesoría <ArrowUpRight size={16}/></Link></div>
      <div className="border border-[#544653] bg-[#211b24] p-7 sm:p-9"><span className="section-label">Alcance posible</span><h2 className="mt-4 font-serif text-2xl">Una solución para tu operación</h2><ul className="mt-7 space-y-4">{detail.points.map(point => <li className="flex items-start gap-3 text-sm leading-6 text-[#e0d5e0]" key={point}><CheckCircle2 className="mt-1 shrink-0 text-[#3b9a9d]" size={17}/>{point}</li>)}</ul></div>
    </div>
  </div></section>;
}
