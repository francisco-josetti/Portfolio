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
  flipped?: boolean;
  onSelect?: (id: string) => void;
  selected?: boolean;
  static?: boolean;
}

export function TarotCard({
  id,
  arcana,
  number,
  title,
  symbol,
  children,
  defaultFlipped = false,
  flipped: controlledFlipped,
  onSelect,
  selected = false,
  static: isStatic = false,
}: TarotCardProps) {
  const [internalFlipped, setInternalFlipped] = useState(defaultFlipped);
  const isFlipped =
    controlledFlipped !== undefined
      ? controlledFlipped
      : selected || internalFlipped;

  const handleClick = () => {
    if (isStatic) return;
    if (onSelect) {
      onSelect(id);
    } else if (controlledFlipped === undefined) {
      setInternalFlipped((f) => !f);
    }
  };

  return (
    <div
      className={`tarot-card ${isFlipped ? "flipped" : ""} ${selected ? "selected" : ""} ${isStatic ? "static" : ""}`}
      onClick={handleClick}
      role="button"
      tabIndex={isStatic ? -1 : 0}
      aria-label={isFlipped ? `Virar carta ${title}` : `Revelar carta ${title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
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
