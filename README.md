# Becoming AI Native Retreat

Bilingual Next.js website for Torrenegra & Co's private AI working retreat in Napa Valley on October 5-6, 2026.

## Local development

```bash
npm run dev
```

## Production build

```bash
npm run build
```

## Deployment

The project is configured for Vercel. Set these environment variables in every deployment environment:

- `NEXT_PUBLIC_SITE_URL`: production domain used by canonical URLs, the sitemap and structured data.
- `SUPABASE_URL`: the same Supabase project URL used by Consulting Website.
- `SUPABASE_SECRET_KEY`: a server-only secret key for that Supabase project. Never expose it with a `NEXT_PUBLIC_` prefix.

The application form writes to `public.ai_native_retreat_applications`. Its migration is stored in `supabase/migrations` and the table is protected with RLS; only the server-side Supabase role receives table privileges.
