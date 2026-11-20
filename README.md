# VELATEK — Sitio corporativo

Web corporativa desarrollada con Next.js App Router, React, TypeScript y Tailwind CSS 4. Diseño propio de tonos negros y verde manzana, inspirado en la claridad y calidad de interfaces de software premium.

## Desarrollo

Requisitos: Node.js 20+ y npm.

```bash
npm install
npm run dev
```

Abrir http://localhost:3000.

## Pruebas y compilación

```bash
npm run typecheck
npm run lint
npm run build
npm audit
```

No se han ejecutado estas pruebas todavía. Antes de integrar a la rama principal, generar y subir un lockfile después de instalar dependencias y verificar las versiones de seguridad.

## Configuración y producción

Copiar `.env.example` a `.env.local` para configurar la URL pública. Verificar que el dominio real tenga HTTPS antes del despliegue.

La CSP inicial incorpora `unsafe-inline` por compatibilidad de renderización; **no es una política estricta**. Revisar en entorno de producción y endurecer mediante nonces/hashes soportados, además de verificar que no bloquee recursos necesarios. Las cabeceras de seguridad deben probarse en producción, incluyendo HSTS y su impacto en subdominios.

**Contacto:** la página no incluye un formulario operativo y comunica expresamente que falta conectar un proveedor de correo. No hay captura de datos personales ni envío simulado. Antes de activar el formulario, integrar validación de servidor, rate limiting persistente, controles de spam, privacidad y entrega mediante un proveedor autenticado.

## Estructura

- `src/app/`: páginas, layout, sitemap y robots.
- `src/components/`: navegación, tarjetas, panel conceptual y footer.
- `src/config/`: configuración del sitio.
- `src/app/globals.css`: design system y estilos base.

Las visualizaciones y gráficos presentados son conceptuales: no deben interpretarse como métricas de clientes reales. No se han inventado certificaciones ni testimonios.

## Próximos pasos

- Instalar y auditar dependencias.
- Ejecutar build, lint, comprobación de tipos y pruebas responsive.
- Sustituir identidad tipográfica provisional por el logotipo oficial.
- Implementar integración segura del contacto con correo verificado.
- Completar aviso de privacidad y condiciones legales con textos aprobados.
- Integrar CI y despliegue antes de fusionar a `main`.
