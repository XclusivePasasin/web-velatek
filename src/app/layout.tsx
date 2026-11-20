import type { Metadata, Viewport } from 'next';
import { site } from '@/config/site';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'VELATEK | Tecnología que impulsa tu negocio', template: '%s | VELATEK' },
  description: site.description,
  openGraph: { type: 'website', locale: 'es_SV', siteName: site.name, title: 'VELATEK — Soluciones tecnológicas empresariales', description: site.description },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: '#080b09', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-lime-300 focus:p-3 focus:text-black">Saltar al contenido</a><Header /><main id="contenido">{children}</main><Footer /></body></html>;
}
