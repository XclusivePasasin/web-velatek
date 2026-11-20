import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
const paths=['','/soluciones','/soluciones/odoo','/soluciones/facturacion-electronica','/soluciones/desarrollo-software','/soluciones/google-workspace','/soluciones/automatizacion','/nosotros','/contacto'];
export default function sitemap():MetadataRoute.Sitemap{return paths.map(p=>({url:`${site.url}${p}`,changeFrequency:'monthly',priority:p===''?1:.7}));}
