import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div><Link className="flex items-center gap-3 text-[14px] font-bold tracking-[.16em]" href="/"><span className="brand-mark">V</span>VELATEK</Link><p className="mt-5 max-w-sm text-xs leading-7 text-[#aeb8ac]">Tecnología empresarial, implementación de Odoo y desarrollo de soluciones para empresas en El Salvador.</p></div>
      <div><p className="footer-title">Explora</p><div className="footer-links"><Link href="/soluciones">Soluciones</Link><Link href="/nosotros">Nosotros</Link><Link href="/contacto">Contacto</Link></div></div>
      <div><p className="footer-title">Hablemos de tu operación</p><Link href="/contacto" className="mt-4 inline-flex items-center gap-2 text-xs text-[#b5ca96]">Solicitar una asesoría <ArrowUpRight size={15}/></Link></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} VELATEK. Todos los derechos reservados.</span><span>Partner oficial de Odoo</span></div>
  </footer>;
}
