import { profile, languageCounts, featuredProjects, repos } from "../data/portfolio";

export function MagoFront() {
  return (
    <div className="cf cf-mago">
      <span className="cf-mago-numeral">I</span>
      <span className="cf-mago-name">{profile.login}</span>
      <span className="cf-mago-bio">{profile.bio}</span>
      <div className="cf-mago-stats">
        <span className="cf-mago-stat">
          <span className="cf-mago-sym">✦</span>
          <span className="cf-mago-val">{profile.public_repos}</span>
        </span>
        <span className="cf-mago-stat">
          <span className="cf-mago-sym">✦</span>
          <span className="cf-mago-val">{profile.followers}</span>
        </span>
        <span className="cf-mago-stat">
          <span className="cf-mago-sym">✦</span>
          <span className="cf-mago-val">{profile.following}</span>
        </span>
      </div>
    </div>
  );
}

export function EstrelaFront() {
  const top3 = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
  const maxCount = top3[0][1];
  const positions = [
    { x: 90, y: 24 },
    { x: 30, y: 96 },
    { x: 150, y: 72 },
  ];

  return (
    <div className="cf cf-estrela">
      <svg className="cf-estrela-svg" viewBox="0 0 180 120" fill="none">
        <line x1="90" y1="24" x2="30" y2="96" stroke="#d4af37" strokeWidth="1" opacity="0.35" />
        <line x1="90" y1="24" x2="150" y2="72" stroke="#d4af37" strokeWidth="1" opacity="0.35" />
        <line x1="30" y1="96" x2="150" y2="72" stroke="#d4af37" strokeWidth="1" opacity="0.35" />
        {top3.map(([lang, count], i) => (
          <g key={lang}>
            <circle cx={positions[i].x} cy={positions[i].y} r="5" fill="#e8c547" />
            <circle cx={positions[i].x} cy={positions[i].y} r="8" fill="none" stroke="#d4af37" strokeWidth="0.5" opacity="0.5" />
            <text x={positions[i].x} y={positions[i].y + 20} textAnchor="middle" fill="#f4e4a6" fontSize="9" fontFamily="Cinzel, serif">
              {lang}
            </text>
            <text x={positions[i].x} y={positions[i].y - 10} textAnchor="middle" fill="#e8c547" fontSize="8" fontFamily="Cinzel, serif">
              {Math.round((count / maxCount) * 100)}%
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function SolFront() {
  const topProjects = featuredProjects.slice(0, 3);

  return (
    <div className="cf cf-sol">
      {topProjects.map((project) => (
        <div key={project.name} className="cf-sol-item">
          <span className="cf-sol-sym">☉</span>
          <span className="cf-sol-name">{project.name}</span>
          <span className="cf-sol-lang">{project.language}</span>
        </div>
      ))}
    </div>
  );
}

export function MundoFront() {
  const topRepos = repos.slice(0, 4);

  return (
    <div className="cf cf-mundo">
      <span className="cf-mundo-total">{repos.length}</span>
      <span className="cf-mundo-label">repositórios</span>
      <div className="cf-mundo-list">
        {topRepos.map((repo) => (
          <span key={repo.name} className="cf-mundo-repo">{repo.name}</span>
        ))}
      </div>
    </div>
  );
}

export function LuaFront() {
  return (
    <div className="cf cf-lua">
      <div className="cf-lua-item">
        <span className="cf-lua-phase">🌑</span>
        <span className="cf-lua-label">E-mail</span>
      </div>
      <div className="cf-lua-item">
        <span className="cf-lua-phase">🌒</span>
        <span className="cf-lua-label">GitHub</span>
      </div>
      <div className="cf-lua-item">
        <span className="cf-lua-phase">🌓</span>
        <span className="cf-lua-label">LinkedIn</span>
      </div>
      <div className="cf-lua-item">
        <span className="cf-lua-phase">🌕</span>
        <span className="cf-lua-label">WhatsApp</span>
      </div>
    </div>
  );
}