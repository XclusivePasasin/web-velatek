import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { SolutionsGrid } from '@/components/solutions';
export const metadata:Metadata={title:'Soluciones empresariales',description:'Explora soluciones empresariales VELATEK: Odoo ERP, facturación electrónica, desarrollo de software, Google Workspace y automatización.'};
export default function SolutionsPage(){return <section className="ambient section min-h-[75vh]"><div className="container"><SectionHeading eyebrow="Nuestras soluciones" title={<>Herramientas que hacen <span className="text-lime-300">avanzar tu empresa.</span></>} description="Desde la gestión integral de operaciones hasta aplicaciones desarrolladas a medida: tecnología diseñada para tus necesidades."/><SolutionsGrid/></div></section>}
