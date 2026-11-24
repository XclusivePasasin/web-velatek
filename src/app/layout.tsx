import type { Metadata, Viewport } from 'next';
import { site } from '@/config/site';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'VELATEK | Especialistas en Odoo, migraciones y desarrollo', template: '%s | VELATEK' },
  description: 'Partner oficial de Odoo en El Salvador. Implementación y migración Odoo, desarrollos a medida y facturación electrónica para empresas.',
  openGraph: { type: 'website', locale: 'es_SV', siteName: site.name, title: 'VELATEK — Especialistas en Odoo', description: 'Implementación y migración Odoo, desarrollos a medida y facturación electrónica para empresas.' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: '#17131a', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[#714B67] focus:p-3 focus:text-white">Saltar al contenido</a><Header/><main id="contenido">{children}</main><Footer/></body></html>;
}
