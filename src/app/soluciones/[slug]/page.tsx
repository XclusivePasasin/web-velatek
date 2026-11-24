import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { solutions } from '@/components/solutions';

const details: Record<string, { heading: string; intro: string; points: string[] }> = {
  odoo: { heading: 'Tu operación en una plataforma conectada.', intro: 'Implementamos soluciones Odoo para conectar departamentos, simplificar el trabajo diario y dar visibilidad a la información de tu empresa.', points: ['Ventas y CRM', 'Inventario y compras', 'Contabilidad y procesos administrativos', 'Integraciones y personalización'] },
  'facturacion-electronica': { heading: 'Facturación electrónica conectada a tu negocio.', intro: 'Diseñamos e integramos flujos de emisión y gestión de Documentos Tributarios Electrónicos para operaciones en El Salvador, según el alcance técnico y normativo aplicable.', points: ['Integración con procesos de ventas', 'Generación y gestión de documentos', 'Seguimiento de estados y respuestas', 'Flujos adaptados a tu operación'] },
  'desarrollo-software': { heading: 'Software construido para tu forma de trabajar.', intro: 'Creamos aplicaciones y servicios que resuelven retos reales y se integran con los sistemas que ya utiliza tu empresa.', points: ['Aplicaciones empresariales', 'Portales y plataformas web', 'Integraciones mediante API', 'Mantenimiento y evolución'] },
  'google-workspace': { heading: 'Un equipo más conectado y productivo.', intro: 'Acompañamos a las empresas en la configuración y adopción de herramientas de colaboración, correo corporativo y productividad.', points: ['Configuración de correo corporativo', 'Migración y administración', 'Seguridad y buenas prácticas', 'Soporte a usuarios'] },
  automatizacion: { heading: 'Menos tareas repetitivas. Más tiempo para crecer.', intro: 'Conectamos plataformas y procesos para reducir trabajo manual, mejorar la trazabilidad y facilitar decisiones.', points: ['Integración de sistemas', 'Automatización de procesos', 'Sincronización de información', 'Monitoreo y mejora continua'] },
};

export function generateStaticParams() {
  return Object.keys(details).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find(item => item.href.endsWith('/' + slug));
  return { title: solution?.title || 'Soluciones', description: solution?.description };
}

export default async function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const detail = details[slug];
  const solution = solutions.find(item => item.href.endsWith('/' + slug));
  if (!detail || !solution) notFound();

  return <section className="page-hero"><div className="container">
    <Link href="/soluciones" className="mb-10 inline-flex items-center gap-2 text-sm text-[#b2bcb0] hover:text-white"><ArrowLeft size={16}/> Volver a soluciones</Link>
    <div className="grid items-start gap-12 lg:grid-cols-2">
      <div><span className="eyebrow">{solution.label}</span><h1 className="hero-title !text-[clamp(2.8rem,5.4vw,5.2rem)]">{detail.heading}</h1><p className="hero-description">{detail.intro}</p><Link href="/contacto" className="button-primary mt-8">Solicitar asesoría <ArrowUpRight size={16}/></Link></div>
      <div className="border border-[#465346] bg-[#17221a] p-7 sm:p-9"><span className="section-label">Alcance posible</span><h2 className="mt-4 font-serif text-2xl">Una solución para tu operación</h2><ul className="mt-7 space-y-4">{detail.points.map(point => <li className="flex items-start gap-3 text-sm leading-6 text-[#d0d8cc]" key={point}><CheckCircle2 className="mt-1 shrink-0 text-[#b5ca96]" size={17}/>{point}</li>)}</ul></div>
    </div>
  </div></section>;
}
