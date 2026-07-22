import { NextResponse, type NextRequest } from "next/server";

import { createSupabaseAdminClient } from "@/app/lib/supabase-admin";

const SOURCE = "becoming-ai-native-retreat-2026";
const MAX_BODY_BYTES = 20_000;
const PAYMENT_OPTIONS = new Set([
  "organization",
  "self",
  "internal-approval",
  "evaluating",
]);

type ApplicationPayload = {
  locale?: unknown;
  fullName?: unknown;
  businessEmail?: unknown;
  company?: unknown;
  role?: unknown;
  profileUrl?: unknown;
  paymentReadiness?: unknown;
  targetOutcome?: unknown;
  attendanceAcknowledged?: unknown;
  website?: unknown;
  sourceUrl?: unknown;
  referrer?: unknown;
  utmSource?: unknown;
  utmMedium?: unknown;
  utmCampaign?: unknown;
};

function value(input: unknown) {
  return typeof input === "string" ? input.trim() : "";
}

function within(input: string, minimum: number, maximum: number) {
  return input.length >= minimum && input.length <= maximum;
}

function isWorkEmail(input: string) {
  return (
    within(input, 5, 254) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(input)
  );
}

function isLinkedInUrl(input: string) {
  if (!input) {
    return true;
  }

  try {
    const url = new URL(input);
    return (
      url.protocol === "https:" &&
      (url.hostname === "linkedin.com" || url.hostname.endsWith(".linkedin.com")) &&
      input.length <= 500
    );
  } catch {
    return false;
  }
}

function optionalTrackingValue(input: unknown) {
  return value(input).slice(0, 1_000);
}

function noStoreJson(body: object, status: number) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (contentLength > MAX_BODY_BYTES) {
    return noStoreJson({ ok: false }, 413);
  }

  let input: ApplicationPayload;

  try {
    input = (await request.json()) as ApplicationPayload;
  } catch {
    return noStoreJson({ ok: false }, 400);
  }

  if (value(input.website)) {
    return noStoreJson({ ok: true }, 201);
  }

  const locale = value(input.locale);
  const fullName = value(input.fullName);
  const businessEmail = value(input.businessEmail).toLowerCase();
  const company = value(input.company);
  const role = value(input.role);
  const profileUrl = value(input.profileUrl);
  const paymentReadiness = value(input.paymentReadiness);
  const targetOutcome = value(input.targetOutcome);

  const isValid =
    (locale === "es" || locale === "en") &&
    within(fullName, 2, 120) &&
    isWorkEmail(businessEmail) &&
    within(company, 2, 180) &&
    within(role, 2, 160) &&
    isLinkedInUrl(profileUrl) &&
    PAYMENT_OPTIONS.has(paymentReadiness) &&
    within(targetOutcome, 24, 1_200) &&
    input.attendanceAcknowledged === true;

  if (!isValid) {
    return noStoreJson({ ok: false }, 400);
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { error } = await supabase.from("ai_native_retreat_applications").insert({
      locale,
      source: SOURCE,
      full_name: fullName,
      business_email: businessEmail,
      company,
      role,
      profile_url: profileUrl,
      payment_readiness: paymentReadiness,
      target_outcome: targetOutcome,
      attendance_acknowledged: true,
      source_url: optionalTrackingValue(input.sourceUrl),
      referrer: optionalTrackingValue(input.referrer),
      utm_source: optionalTrackingValue(input.utmSource),
      utm_medium: optionalTrackingValue(input.utmMedium),
      utm_campaign: optionalTrackingValue(input.utmCampaign),
    });

    if (error) {
      console.error("Retreat application insert failed", {
        code: error.code,
        message: error.message,
      });
      return noStoreJson({ ok: false }, 500);
    }
  } catch (error) {
    console.error(
      "Retreat application persistence is unavailable",
      error instanceof Error ? error.message : "Unknown error",
    );
    return noStoreJson({ ok: false }, 503);
  }

  return noStoreJson({ ok: true }, 201);
}
