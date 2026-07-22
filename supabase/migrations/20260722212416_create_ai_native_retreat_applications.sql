create table if not exists public.ai_native_retreat_applications (
  id uuid primary key default gen_random_uuid(),
  submitted_at timestamptz not null default timezone('utc', now()),
  locale text not null check (locale in ('es', 'en')),
  source text not null default 'becoming-ai-native-retreat-2026'
    check (source = 'becoming-ai-native-retreat-2026'),
  full_name text not null
    check (length(trim(full_name)) between 2 and 120),
  business_email text not null
    check (
      length(trim(business_email)) between 5 and 254
      and business_email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
    ),
  company text not null
    check (length(trim(company)) between 2 and 180),
  role text not null
    check (length(trim(role)) between 2 and 160),
  profile_url text not null default ''
    check (length(profile_url) <= 500),
  payment_readiness text not null
    check (
      payment_readiness in (
        'organization',
        'self',
        'internal-approval',
        'evaluating'
      )
    ),
  target_outcome text not null
    check (length(trim(target_outcome)) between 24 and 1200),
  attendance_acknowledged boolean not null
    check (attendance_acknowledged),
  status text not null default 'new'
    check (status in ('new', 'reviewing', 'accepted', 'waitlist', 'declined')),
  source_url text not null default ''
    check (length(source_url) <= 1000),
  referrer text not null default ''
    check (length(referrer) <= 1000),
  utm_source text not null default ''
    check (length(utm_source) <= 1000),
  utm_medium text not null default ''
    check (length(utm_medium) <= 1000),
  utm_campaign text not null default ''
    check (length(utm_campaign) <= 1000),
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists ai_native_retreat_applications_submitted_at_idx
  on public.ai_native_retreat_applications (submitted_at desc);

create index if not exists ai_native_retreat_applications_business_email_idx
  on public.ai_native_retreat_applications (lower(business_email));

alter table public.ai_native_retreat_applications enable row level security;

revoke all on table public.ai_native_retreat_applications from anon, authenticated;
grant select, insert, update, delete
  on table public.ai_native_retreat_applications
  to service_role;
