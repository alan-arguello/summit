# Torrenegra AI Summit

Landing page en Next.js para el Summit y Executive Go & See de Torrenegra & Co durante SF Tech Week 2026.

## Desarrollo

```bash
npm install
npm run dev
```

## Vercel

Vercel detecta Next.js y usa la configuración incluida. Al conectar un dominio propio, define:

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

Esta URL se usa para canonicals, `hreflang`, sitemap, robots y datos estructurados. Si no se define, el proyecto utiliza automáticamente `VERCEL_PROJECT_PRODUCTION_URL`.
