import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageSquareText } from 'lucide-react';

export const metadata: Metadata = { title: 'Contacto', description: 'Conversa con VELATEK sobre implementación y migración Odoo, desarrollo a medida o facturación electrónica.' };

export default function Contact() {
  return <section className="page-hero min-h-[72vh]"><div className="container grid items-start gap-14 lg:grid-cols-2">
    <div><span className="eyebrow">Hablemos de Odoo</span><h1 className="hero-title">¿Qué necesita avanzar <em>tu empresa?</em></h1><p className="hero-description">Conversemos sobre una implementación, una migración Odoo, un desarrollo a medida o la integración de facturación electrónica.</p><div className="mt-8 flex items-center gap-3 text-sm text-[#303a31]"><MessageSquareText className="text-[#286f2c]" size={21}/> Asesoría comercial y técnica</div></div>
    <div className="border border-[#dce4da] bg-white p-7 sm:p-9"><span className="section-label">Contacto VELATEK</span><h2 className="mt-4 font-serif text-3xl">Cuéntanos sobre tu proyecto.</h2><p className="mt-4 text-sm leading-7 text-[#586158]">El canal de envío seguro está pendiente de configuración. Esta página no recoge ni transmite datos personales por ahora.</p><div className="contact-assurance">Para habilitar el contacto, VELATEK debe conectar un correo o formulario corporativo verificado. No se publican datos de contacto sin confirmar.</div><Link href="/soluciones" className="mt-7 inline-flex items-center gap-2 text-sm text-[#286f2c]">Ver especialidades <ArrowRight size={16}/></Link></div>
  </div></section>;
}
