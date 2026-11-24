import type { Metadata } from 'next';
import { SolutionsGrid } from '@/components/solutions';

export const metadata: Metadata = { title: 'Odoo, migraciones y desarrollo a medida', description: 'Implementación y migración Odoo, desarrollos a medida y facturación electrónica en El Salvador.' };

export default function SolutionsPage() {
  return <section className="page-hero min-h-[75vh]"><div className="container">
    <span className="section-label">Especialidades</span>
    <h1 className="section-heading max-w-3xl">Odoo preparado para las necesidades de tu empresa.</h1>
    <p className="section-copy max-w-2xl">Implementamos y migramos Odoo, extendemos sus funcionalidades con desarrollos a medida e integramos facturación electrónica en tus procesos.</p>
    <div className="mt-12 max-w-4xl"><SolutionsGrid/></div>
  </div></section>;
}
