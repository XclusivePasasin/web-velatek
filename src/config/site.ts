export const site = {
  name: 'VELATEK',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://velatek.net',
  description: 'Implementación Odoo ERP, facturación electrónica, desarrollo de software y soluciones tecnológicas para empresas en El Salvador.',
  navigation: [
    { label: 'Inicio', href: '/' },
    { label: 'Soluciones', href: '/soluciones' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Contacto', href: '/contacto' },
  ],
} as const;
