import type { Metadata, Viewport } from 'next';
import { site } from '@/config/site';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'VELATEK | Tecnología empresarial y Odoo en El Salvador', template: '%s | VELATEK' },
  description: 'Partner oficial de Odoo en El Salvador. Implementación ERP, facturación electrónica, automatización, integraciones y desarrollo de software para empresas.',
  openGraph: { type: 'website', locale: 'es_SV', siteName: site.name, title: 'VELATEK — Tecnología que conecta tu empresa', description: site.description },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: '#101711', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[#b5ca96] focus:p-3 focus:text-black">Saltar al contenido</a><Header/><main id="contenido">{children}</main><Footer/></body></html>;
}
