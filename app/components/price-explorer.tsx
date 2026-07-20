"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

import type { PriceTrack } from "../content";

type PriceExplorerCopy = {
  heading: string;
  subheading: string;
  tabsAria: string;
  currentPrice: string;
  cta: string;
  phasesHeading: string;
  phasesCopy: string;
  note: string;
};

type PriceExplorerProps = {
  copy: PriceExplorerCopy;
  requestAccessHref: string;
  tracks: PriceTrack[];
};

export function PriceExplorer({ copy, requestAccessHref, tracks }: PriceExplorerProps) {
  const trackOrder: Record<PriceTrack["id"], number> = { summit: 0, "go-see": 1, combined: 2 };
  const orderedTracks = [...tracks].sort((a, b) => trackOrder[a.id] - trackOrder[b.id]);
  const [activeId, setActiveId] = useState<PriceTrack["id"]>("summit");
  const activeTrack = tracks.find((track) => track.id === activeId) ?? tracks[0];

  return (
    <div className="price-explorer">
      <div className="price-explorer-header">
        <div>
          <h3>{copy.heading}</h3>
          <p>{copy.subheading}</p>
        </div>
        <div className="price-tabs" role="tablist" aria-label={copy.tabsAria}>
          {orderedTracks.map((track) => (
            <button
              aria-controls={`price-panel-${track.id}`}
              aria-selected={activeTrack.id === track.id}
              className={activeTrack.id === track.id ? "is-active" : undefined}
              id={`price-tab-${track.id}`}
              key={track.id}
              onClick={() => setActiveId(track.id)}
              role="tab"
              type="button"
            >
              {track.tab}
            </button>
          ))}
        </div>
      </div>

      <div
        aria-labelledby={`price-tab-${activeTrack.id}`}
        className="price-explorer-body"
        id={`price-panel-${activeTrack.id}`}
        role="tabpanel"
      >
        <div className="price-current">
          <p>{activeTrack.capacity}</p>
          <h4>{activeTrack.name}</h4>
          <div className="price-current-value">
            <span>{copy.currentPrice}</span>
            <strong>{activeTrack.phases[0].price}</strong>
          </div>
          <p className="price-description">{activeTrack.description}</p>
          <p className="price-audience">{activeTrack.audience}</p>
          <ul>
            {activeTrack.includes.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" size={15} />
                {item}
              </li>
            ))}
          </ul>
          <a href={requestAccessHref}>
            {copy.cta}
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>

        <div className="price-phases">
          <div className="price-phases-heading">
            <h4>{copy.phasesHeading}</h4>
            <p>{copy.phasesCopy}</p>
          </div>
          <ol>
            {activeTrack.phases.map((phase, index) => (
              <li className={index === 0 ? "is-current" : undefined} key={phase.name}>
                <span>0{index + 1}</span>
                <div>
                  <strong>{phase.name}</strong>
                  <p>{phase.window}</p>
                </div>
                <strong>{phase.price}</strong>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <p className="price-explorer-note">{copy.note}</p>
    </div>
  );
}
