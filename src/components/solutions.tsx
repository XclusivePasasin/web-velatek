import Link from 'next/link';
import { ArrowUpRight, Boxes, Code2, Database, FileCheck2, type LucideIcon } from 'lucide-react';

export const solutions: { title: string; description: string; href: string; icon: LucideIcon; label: string }[] = [
  { title: 'Implementación de Odoo', description: 'Configura ventas, inventario, compras, contabilidad y operaciones en un ERP conectado.', href: '/soluciones/odoo', icon: Boxes, label: 'Odoo ERP' },
  { title: 'Migraciones Odoo', description: 'Planifica el paso de versión o plataforma con atención a datos, procesos e integraciones.', href: '/soluciones/migraciones-odoo', icon: Database, label: 'Continuidad' },
  { title: 'Desarrollos a medida', description: 'Extiende Odoo y crea herramientas específicas para las reglas de tu negocio.', href: '/soluciones/desarrollo-software', icon: Code2, label: 'Desarrollo' },
  { title: 'Facturación electrónica', description: 'Integra la emisión y gestión de DTE con los procesos de tu empresa en El Salvador.', href: '/soluciones/facturacion-electronica', icon: FileCheck2, label: 'DTE' },
];

export function SolutionsGrid() {
  return <div className="service-list">{solutions.map((solution, index) => <Link className="service-row" href={solution.href} key={solution.href}>
    <span className="service-row-number">0{index + 1}</span>
    <div><span className="section-label">{solution.label}</span><h3 className="mt-2">{solution.title}</h3><p>{solution.description}</p></div>
    <ArrowUpRight size={18} aria-hidden="true"/>
  </Link>)}</div>;
}
