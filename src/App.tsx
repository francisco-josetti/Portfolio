import { useState, useEffect } from "react";
import { TarotCard } from "./components/TarotCard";
import { tarotCards } from "./data/portfolio";
import { AboutCard } from "./sections/AboutCard";
import { SkillsCard } from "./sections/SkillsCard";
import { ProjectsCard } from "./sections/ProjectsCard";
import { ReposCard } from "./sections/ReposCard";
import { ContactCard } from "./sections/ContactCard";
import "./App.css";

const sectionComponents: Record<string, React.ReactNode> = {
  about: <AboutCard />,
  skills: <SkillsCard />,
  projects: <ProjectsCard />,
  repos: <ReposCard />,
  contact: <ContactCard />,
};

function App() {
  const [dealt, setDealt] = useState(false);
  const [isDealing, setIsDealing] = useState(false);

  const dealCards = () => {
    setDealt(false);
    setIsDealing(true);
    // Pequeno delay para reiniciar a animação quando já estiverem distribuídas
    requestAnimationFrame(() => {
      setTimeout(() => {
        setDealt(true);
        setIsDealing(false);
      }, 80);
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDealt(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="portfolio">
      <header className="portfolio-header">
        <h1 className="portfolio-title">Tarot do Desenvolvedor</h1>
        <p className="portfolio-subtitle">
          Clique nas cartas para revelar cada capítulo da minha jornada como
          desenvolvedor.
        </p>
      </header>

      <section className={`cards-table ${dealt ? "dealt" : ""}`}>
        {tarotCards.map((card, index) => (
          <div
            key={card.id}
            className="card-wrapper"
            style={{ "--card-index": index } as React.CSSProperties}
          >
            <TarotCard {...card}>
              {sectionComponents[card.id]}
            </TarotCard>
          </div>
        ))}
      </section>

      <div className="deal-controls">
        <button
          type="button"
          className="deal-button"
          onClick={dealCards}
          disabled={isDealing}
        >
          {dealt ? "Tirar novamente" : "Tirar as cartas"}
        </button>
      </div>

      <footer className="portfolio-footer">
        <p>
          Feito com React + TypeScript + Vite · Verso das cartas em preto e
          dourado
        </p>
      </footer>
    </main>
  );
}

export default App;
