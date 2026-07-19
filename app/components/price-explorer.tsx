"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

const requestAccessHref =
  "mailto:hola@torrenegra.com?subject=Torrenegra%20AI%20Summit%202026";

const priceTracks = [
  {
    id: "summit",
    tab: "Summit",
    name: "Summit",
    capacity: "Hasta 50 participantes",
    audience: "Founders, CEOs y líderes de SMBs, startups, scaleups, gobierno y corporativos.",
    description:
      "Un día de conversaciones, casos y relaciones para entender qué ya funciona y qué conviene hacer ahora.",
    includes: ["Acceso al Summit", "Alimentos y bebidas", "Transporte grupal a Napa opcional"],
    phases: [
      { name: "Preventa inicial", window: "Hasta el 1 de agosto", price: "$899" },
      { name: "Acceso anticipado", window: "2–31 de agosto", price: "$1,100" },
      { name: "Venta general", window: "1–20 de septiembre", price: "$1,250" },
      { name: "Últimos lugares", window: "Desde el 21 de septiembre", price: "$1,400" },
    ],
  },
  {
    id: "go-see",
    tab: "Go & See",
    name: "Executive Go & See",
    capacity: "Máximo 20 ejecutivos",
    audience: "Corporate VPs, managers y C-levels responsables de transformar una organización existente.",
    description:
      "Una experiencia ejecutiva para observar compañías, conversar con sus líderes y contrastar decisiones en contexto.",
    includes: ["Visitas y conversaciones privadas", "Dos noches de hospedaje", "Transporte local"],
    phases: [
      { name: "Preventa inicial", window: "Hasta el 1 de agosto", price: "$5,000" },
      { name: "Acceso anticipado", window: "2–31 de agosto", price: "$6,000" },
      { name: "Venta general", window: "1–20 de septiembre", price: "$6,750" },
      { name: "Últimos lugares", window: "Desde el 21 de septiembre", price: "$7,500" },
    ],
  },
  {
    id: "combined",
    tab: "Ambas",
    name: "Summit + Go & See",
    capacity: "Máximo 5 accesos combinados",
    audience: "Líderes que quieren participar en el Summit y llevar la experiencia a un nivel ejecutivo.",
    description:
      "Las dos experiencias con un precio preferente, intros relevantes y una sesión personalizada de 60 minutos.",
    includes: ["Summit y Go & See", "Intros relevantes", "Sesión personalizada de 60 minutos"],
    phases: [
      { name: "Preventa inicial", window: "Hasta el 1 de agosto", price: "$5,750" },
      { name: "Acceso anticipado", window: "2–31 de agosto", price: "$6,750" },
      { name: "Venta general", window: "1–20 de septiembre", price: "$7,500" },
      { name: "Últimos lugares", window: "Desde el 21 de septiembre", price: "$8,300" },
    ],
  },
] as const;

export function PriceExplorer() {
  const [activeId, setActiveId] = useState<(typeof priceTracks)[number]["id"]>("summit");
  const activeTrack = priceTracks.find((track) => track.id === activeId) ?? priceTracks[0];

  return (
    <div className="price-explorer">
      <div className="price-explorer-header">
        <div>
          <h3>Selecciona tu experiencia</h3>
          <p>El precio cambia por fecha y disponibilidad.</p>
        </div>
        <div className="price-tabs" role="tablist" aria-label="Tipo de acceso">
          {priceTracks.map((track) => (
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
            <span>Precio actual</span>
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
            Solicitar acceso
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>

        <div className="price-phases">
          <div className="price-phases-heading">
            <h4>Cómo sube el precio</h4>
            <p>Cada fase cierra en la fecha indicada o cuando se agotan sus lugares.</p>
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

      <p className="price-explorer-note">
        Precios por persona antes de impuestos. Los vuelos no están incluidos.
      </p>
    </div>
  );
}
