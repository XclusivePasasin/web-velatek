import Link from 'next/link';
import { ArrowUpRight, Boxes, Code2, FileCheck2, Workflow, Mail, type LucideIcon } from 'lucide-react';

export const solutions: { title: string; description: string; href: string; icon: LucideIcon; label: string }[] = [
  { title: 'Odoo ERP', description: 'Conecta ventas, inventario, compras, contabilidad y operaciones en una plataforma empresarial.', href: '/soluciones/odoo', icon: Boxes, label: 'Gestión empresarial' },
  { title: 'Facturación electrónica', description: 'Integra la emisión y gestión de DTE con los procesos de tu negocio en El Salvador.', href: '/soluciones/facturacion-electronica', icon: FileCheck2, label: 'El Salvador' },
  { title: 'Software a medida', description: 'Aplicaciones diseñadas para necesidades concretas de tu operación.', href: '/soluciones/desarrollo-software', icon: Code2, label: 'Ingeniería' },
  { title: 'Google Workspace', description: 'Herramientas de correo, colaboración y productividad para tu equipo.', href: '/soluciones/google-workspace', icon: Mail, label: 'Productividad' },
  { title: 'Automatización e integraciones', description: 'Conecta plataformas y reduce tareas manuales entre tus sistemas.', href: '/soluciones/automatizacion', icon: Workflow, label: 'Integraciones' },
];

export function SolutionsGrid() {
  return <div className="service-list">{solutions.map((solution, index) => <Link className="service-row" href={solution.href} key={solution.href}>
    <span className="service-row-number">0{index + 1}</span>
    <div><span className="section-label">{solution.label}</span><h3 className="mt-2">{solution.title}</h3><p>{solution.description}</p></div>
    <ArrowUpRight size={18} aria-hidden="true"/>
  </Link>)}</div>;
}
