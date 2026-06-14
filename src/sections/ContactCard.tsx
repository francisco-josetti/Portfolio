import { profile } from "../data/portfolio";

export function ContactCard() {
  return (
    <div className="contact-section">
      <p className="contact-text">
        Quer tirar uma carta do baralho da colaboração? Entre em contato pelos
        canais abaixo.
      </p>
      <div className="contact-links">
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link github"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="contact-icon">⌘</span>
          <span>GitHub</span>
        </a>
        <a
          href={profile.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link portfolio"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="contact-icon">✦</span>
          <span>Portfólio</span>
        </a>
        <a
          href={`https://github.com/${profile.login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link email"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="contact-icon">✉</span>
          <span>Mensagem</span>
        </a>
      </div>
    </div>
  );
}
