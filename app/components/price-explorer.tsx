import { ArrowUpRight, Check } from "lucide-react";

import type { PricingPhase } from "../content";

type PriceExplorerCopy = {
  heading: string;
  subheading: string;
  currentLabel: string;
  cta: string;
  phasesHeading: string;
  phasesCopy: string;
  includedTitle: string;
  included: readonly string[];
  note: string;
};

type PriceExplorerProps = {
  copy: PriceExplorerCopy;
  requestAccessHref: string;
  phases: readonly PricingPhase[];
};

export function PriceExplorer({
  copy,
  requestAccessHref,
  phases,
}: PriceExplorerProps) {
  return (
    <div className="price-explorer">
      <div className="price-overview">
        <div className="price-overview-copy">
          <h3>{copy.heading}</h3>
          <p>{copy.subheading}</p>
        </div>

        <div className="current-price">
          <span>{copy.currentLabel}</span>
          <strong>USD {phases[0].price}</strong>
          <a href={requestAccessHref}>
            {copy.cta}
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>

        <div className="price-includes">
          <h4>{copy.includedTitle}</h4>
          <ul>
            {copy.included.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" size={15} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="price-phases">
        <div className="price-phases-heading">
          <h4>{copy.phasesHeading}</h4>
          <p>{copy.phasesCopy}</p>
        </div>
        <ol>
          {phases.map((phase, index) => (
            <li className={index === 0 ? "is-current" : undefined} key={phase.name}>
              <span>0{index + 1}</span>
              <div>
                <strong>{phase.name}</strong>
                <p>{phase.availability}</p>
              </div>
              <strong>USD {phase.price}</strong>
            </li>
          ))}
        </ol>
      </div>

      <p className="price-explorer-note">{copy.note}</p>
    </div>
  );
}
