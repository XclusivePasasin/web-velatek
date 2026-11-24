import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { SolutionsGrid } from '@/components/solutions';

export const metadata: Metadata = { title: 'Soluciones empresariales', description: 'Odoo ERP, facturación electrónica, software a medida, Google Workspace y automatización para empresas en El Salvador.' };

export default function SolutionsPage() {
  return <section className="page-hero min-h-[75vh]"><div className="container">
    <span className="section-label">Nuestras soluciones</span>
    <h1 className="section-heading max-w-3xl">Tecnología que se adapta a cómo trabaja tu empresa.</h1>
    <p className="section-copy max-w-2xl">Desde la gestión integral de operaciones hasta aplicaciones desarrolladas a medida: conectamos procesos, personas y herramientas para resolver necesidades reales.</p>
    <div className="mt-12 max-w-4xl"><SolutionsGrid/></div>
  </div></section>;
}
