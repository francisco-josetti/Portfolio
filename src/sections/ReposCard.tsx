import { repos, featuredProjects } from "../data/portfolio";

const featuredNames = new Set(featuredProjects.map((p) => p.name));
const otherRepos = repos.filter((r) => !featuredNames.has(r.name));

export function ReposCard() {
  return (
    <div className="repos-section">
      <p className="repos-intro">
        Explore os {repos.length} repositórios públicos do meu GitHub.
      </p>
      <div className="repos-list">
        {otherRepos.slice(0, 8).map((repo) => (
          <a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-item"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="repo-name">{repo.name}</span>
            <span className="repo-lang">{repo.language}</span>
          </a>
        ))}
      </div>
      <a
        href="https://github.com/francisco-josetti?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
        onClick={(e) => e.stopPropagation()}
      >
        Ver todos os repositórios →
      </a>
    </div>
  );
}
