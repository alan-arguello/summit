"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import type { EventContent, Locale } from "../content";

type AdoptionBenchmarkProps = {
  content: EventContent["research"];
  locale: Locale;
};

export function AdoptionBenchmark({ content, locale }: AdoptionBenchmarkProps) {
  const [selectedLevel, setSelectedLevel] = useState(1);
  const selectedStage =
    content.stages.find((stage) => stage.level === selectedLevel) ??
    content.stages[0];

  const formatPercentage = (value: number) =>
    new Intl.NumberFormat(locale === "es" ? "es-CO" : "en-US", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value);

  return (
    <section className="benchmark-section" id="benchmark">
      <div className="benchmark-layout section-shell">
        <div className="benchmark-copy">
          <h2>{content.title}</h2>
          <p>{content.copy}</p>
          <a href={content.sourceHref} target="_blank" rel="noreferrer">
            {content.sourceLabel}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="benchmark-explorer">
          <p className="benchmark-label">{content.distributionLabel}</p>
          <div className="benchmark-distribution" aria-hidden="true">
            {content.stages.map((stage) => (
              <span
                key={stage.level}
                style={{
                  backgroundColor: stage.color,
                  width: `${stage.percentage}%`,
                }}
              />
            ))}
          </div>

          <div className="benchmark-stage-tabs" role="group" aria-label={content.distributionLabel}>
            {content.stages.map((stage) => (
              <button
                className={selectedLevel === stage.level ? "is-active" : undefined}
                key={stage.level}
                type="button"
                onClick={() => setSelectedLevel(stage.level)}
                aria-pressed={selectedLevel === stage.level}
              >
                <span>0{stage.level}</span>
                <strong>{stage.shortLabel}</strong>
                <small>{formatPercentage(stage.percentage)}%</small>
              </button>
            ))}
          </div>

          {selectedStage ? (
            <div className="benchmark-detail" aria-live="polite">
              <div>
                <span>{formatPercentage(selectedStage.percentage)}%</span>
                <h3>{selectedStage.title}</h3>
              </div>
              <dl>
                <div>
                  <dt>{content.evidenceLabel}</dt>
                  <dd>{selectedStage.evidence}</dd>
                </div>
                <div>
                  <dt>{content.nextMoveLabel}</dt>
                  <dd>{selectedStage.nextMove}</dd>
                </div>
              </dl>
            </div>
          ) : null}

          <p className="benchmark-focus">{content.focus}</p>
          <p className="benchmark-note">{content.note}</p>
        </div>
      </div>
    </section>
  );
}
