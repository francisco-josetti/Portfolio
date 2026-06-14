import { useState, type ReactNode } from "react";
import { CardBack } from "./CardBack";

export interface TarotCardProps {
  id: string;
  arcana: string;
  number: string;
  title: string;
  symbol: string;
  color?: string;
  children: ReactNode;
  defaultFlipped?: boolean;
}

export function TarotCard({
  arcana,
  number,
  title,
  symbol,
  children,
  defaultFlipped = false,
}: TarotCardProps) {
  const [flipped, setFlipped] = useState(defaultFlipped);

  return (
    <div
      className={`tarot-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      aria-label={flipped ? `Virar carta ${title}` : `Revelar carta ${title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
    >
      <div className="card-inner">
        <CardBack arcana={arcana} number={number} symbol={symbol} />
        <div className="card-face card-front">
          <div className="card-front-header">
            <span className="card-front-number">{number}</span>
            <span className="card-front-arcana">{arcana}</span>
          </div>
          <div className="card-front-content">{children}</div>
          <div className="card-front-footer">
            <span className="card-front-title">{title}</span>
            <span className="card-front-symbol">{symbol}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
