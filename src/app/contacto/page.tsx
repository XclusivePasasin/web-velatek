import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageSquareText } from 'lucide-react';

export const metadata: Metadata = { title: 'Contacto', description: 'Conversa con VELATEK sobre Odoo, facturación electrónica, automatización o desarrollo de software.' };

export default function Contact() {
  return <section className="page-hero min-h-[72vh]"><div className="container grid items-start gap-14 lg:grid-cols-2">
    <div><span className="eyebrow">Hablemos</span><h1 className="hero-title">Conversemos sobre <em>tu próximo proyecto.</em></h1><p className="hero-description">Cuéntanos qué necesita tu empresa. Podemos explorar cómo conectar procesos, implementar Odoo o construir una solución a medida.</p><div className="mt-8 flex items-center gap-3 text-sm text-[#d0d8cc]"><MessageSquareText className="text-[#b5ca96]" size={21}/> Asesoría comercial y técnica</div></div>
    <div className="border border-[#465346] bg-[#17221a] p-7 sm:p-9"><span className="section-label">Contacto VELATEK</span><h2 className="mt-4 font-serif text-3xl">Tu consulta, con claridad.</h2><p className="mt-4 text-sm leading-7 text-[#b2bcb0]">El canal de envío seguro está pendiente de configuración. Esta página no recoge ni transmite datos personales por ahora.</p><div className="contact-assurance">Para habilitar el contacto, VELATEK debe conectar un correo o formulario corporativo verificado. No se han publicado datos de contacto sin confirmar.</div><Link href="/soluciones" className="mt-7 inline-flex items-center gap-2 text-sm text-[#b5ca96]">Explorar soluciones <ArrowRight size={16}/></Link></div>
  </div></section>;
}
