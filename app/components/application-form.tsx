"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";

import type { Locale } from "../content";

export type ApplicationFormCopy = {
  title: string;
  intro: string;
  fields: {
    name: string;
    email: string;
    organization: string;
    role: string;
    linkedin: string;
    linkedinHint: string;
    outcome: string;
    outcomePlaceholder: string;
    payment: string;
    paymentPlaceholder: string;
    paymentOptions: readonly {
      value: string;
      label: string;
    }[];
  };
  attendance: string;
  privacy: string;
  submit: string;
  submitting: string;
  success: string;
  error: string;
};

type ApplicationFormProps = {
  copy: ApplicationFormCopy;
  locale: Locale;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

function fieldValue(data: FormData, key: string) {
  const value = data.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function ApplicationForm({ copy, locale }: ApplicationFormProps) {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    if (fieldValue(data, "website")) {
      setStatus("success");
      return;
    }

    const query = new URLSearchParams(window.location.search);

    setStatus("submitting");

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          fullName: fieldValue(data, "name"),
          businessEmail: fieldValue(data, "email"),
          company: fieldValue(data, "organization"),
          role: fieldValue(data, "role"),
          profileUrl: fieldValue(data, "linkedin"),
          paymentReadiness: fieldValue(data, "payment"),
          targetOutcome: fieldValue(data, "outcome"),
          attendanceAcknowledged: data.get("attendance") === "on",
          website: fieldValue(data, "website"),
          sourceUrl: window.location.href,
          referrer: document.referrer,
          utmSource: query.get("utm_source") ?? "",
          utmMedium: query.get("utm_medium") ?? "",
          utmCampaign: query.get("utm_campaign") ?? "",
        }),
      });

      if (!response.ok) {
        throw new Error("Application request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="application-form" onSubmit={handleSubmit}>
      <div className="application-form-heading">
        <h3>{copy.title}</h3>
        <p>{copy.intro}</p>
      </div>

      <div className="application-fields">
        <label>
          <span>{copy.fields.name}</span>
          <input autoComplete="name" name="name" required type="text" />
        </label>

        <label>
          <span>{copy.fields.email}</span>
          <input autoComplete="email" name="email" required type="email" />
        </label>

        <label>
          <span>{copy.fields.organization}</span>
          <input autoComplete="organization" name="organization" required type="text" />
        </label>

        <label>
          <span>{copy.fields.role}</span>
          <input autoComplete="organization-title" name="role" required type="text" />
        </label>

        <label>
          <span>{copy.fields.linkedin}</span>
          <input
            aria-describedby="linkedin-hint"
            autoComplete="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/"
            type="url"
          />
          <small id="linkedin-hint">{copy.fields.linkedinHint}</small>
        </label>

        <label>
          <span>{copy.fields.payment}</span>
          <select defaultValue="" name="payment" required>
            <option disabled value="">
              {copy.fields.paymentPlaceholder}
            </option>
            {copy.fields.paymentOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="application-field-wide">
          <span>{copy.fields.outcome}</span>
          <textarea
            maxLength={480}
            minLength={24}
            name="outcome"
            placeholder={copy.fields.outcomePlaceholder}
            required
            rows={4}
          />
        </label>

        <input
          aria-hidden="true"
          autoComplete="off"
          className="application-honeypot"
          name="website"
          tabIndex={-1}
          type="text"
        />
      </div>

      <label className="application-confirmation">
        <input name="attendance" required type="checkbox" />
        <span>{copy.attendance}</span>
      </label>

      <div className="application-submit-row">
        <button disabled={status === "submitting"} type="submit">
          {status === "submitting" ? copy.submitting : copy.submit}
          {status === "submitting" ? (
            <LoaderCircle aria-hidden="true" className="application-spinner" size={17} />
          ) : (
            <ArrowUpRight aria-hidden="true" size={17} />
          )}
        </button>
        <p>{copy.privacy}</p>
      </div>

      <p
        aria-live="polite"
        className={`application-status${status === "error" ? " is-error" : ""}`}
      >
        {status === "success" ? copy.success : null}
        {status === "error" ? copy.error : null}
      </p>
    </form>
  );
}
