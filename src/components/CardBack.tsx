interface CardBackProps {
  arcana?: string;
  number?: string;
  symbol?: string;
}

export function CardBack({ arcana = "", number = "", symbol = "✦" }: CardBackProps) {
  return (
    <div className="card-face card-back">
      <div className="card-back-border">
        <div className="card-back-inner">
          <div className="card-back-corner top-left">{symbol}</div>
          <div className="card-back-corner top-right">{symbol}</div>
          <div className="card-back-center">
            <div className="card-back-ornament">
              <span className="card-back-symbol">{symbol}</span>
            </div>
            {(arcana || number) && (
              <div className="card-back-meta">
                {number && <span className="card-back-number">{number}</span>}
                {arcana && <span className="card-back-arcana">{arcana}</span>}
              </div>
            )}
          </div>
          <div className="card-back-corner bottom-left">{symbol}</div>
          <div className="card-back-corner bottom-right">{symbol}</div>
        </div>
      </div>
    </div>
  );
}
