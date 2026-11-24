import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div><Link className="wordmark" href="/">VELATEK</Link><p className="mt-5 max-w-sm text-xs leading-7 text-[#b7abb8]">Implementación y migración de Odoo, desarrollos a medida y facturación electrónica para empresas.</p></div>
      <div><p className="footer-title">Especialidades</p><div className="footer-links"><Link href="/soluciones/odoo">Implementación Odoo</Link><Link href="/soluciones/migraciones-odoo">Migraciones Odoo</Link><Link href="/soluciones/desarrollo-software">Desarrollo a medida</Link><Link href="/soluciones/facturacion-electronica">Facturación electrónica</Link></div></div>
      <div><p className="footer-title">¿Tienes un proyecto Odoo?</p><Link href="/contacto" className="mt-4 inline-flex items-center gap-2 text-xs text-[#d5b7d0]">Solicitar una asesoría <ArrowUpRight size={15}/></Link></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} VELATEK. Todos los derechos reservados.</span><span>Partner oficial de Odoo</span></div>
  </footer>;
}
