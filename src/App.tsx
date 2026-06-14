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
  return (
    <main className="portfolio">
      <header className="portfolio-header">
        <h1 className="portfolio-title">Tarot do Desenvolvedor</h1>
        <p className="portfolio-subtitle">
          Clique nas cartas para revelar cada capítulo da minha jornada como
          desenvolvedor.
        </p>
      </header>

      <section className="cards-table">
        {tarotCards.map((card) => (
          <TarotCard key={card.id} {...card}>
            {sectionComponents[card.id]}
          </TarotCard>
        ))}
      </section>

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
