import { profile } from "../data/portfolio";

export function AboutCard() {
  return (
    <div className="about-section">
      <img
        src={profile.avatar}
        alt={`Foto de ${profile.name}`}
        className="about-avatar"
      />
      <h3 className="about-name">{profile.name}</h3>
      <p className="about-bio">{profile.bio}</p>
      <div className="about-stats">
        <div className="stat">
          <span className="stat-value">{profile.public_repos}</span>
          <span className="stat-label">Repositórios</span>
        </div>
        <div className="stat">
          <span className="stat-value">{profile.followers}</span>
          <span className="stat-label">Seguidores</span>
        </div>
        <div className="stat">
          <span className="stat-value">{profile.following}</span>
          <span className="stat-label">Seguindo</span>
        </div>
      </div>
      <a
        href={profile.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
        onClick={(e) => e.stopPropagation()}
      >
        Ver GitHub →
      </a>
    </div>
  );
}
