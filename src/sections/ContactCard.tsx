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
          href="mailto:franciscojosetti@gmail.com"
          className="contact-link email"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="contact-icon">✉</span>
          <span>E-mail</span>
        </a>
        <a
          href="https://www.linkedin.com/in/fjosetti/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link linkedin"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="contact-icon">in</span>
          <span>LinkedIn</span>
        </a>
        <a
          href="https://wa.me/5568992026093"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link whatsapp"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="contact-icon">✆</span>
          <span>WhatsApp</span>
        </a>
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
      </div>
    </div>
  );
}
