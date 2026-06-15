import { useState, useEffect, useRef, type ReactNode } from "react";
import { TarotCard } from "./components/TarotCard";
import { tarotCards } from "./data/portfolio";
import { AboutCard } from "./sections/AboutCard";
import { SkillsCard } from "./sections/SkillsCard";
import { ProjectsCard } from "./sections/ProjectsCard";
import { ReposCard } from "./sections/ReposCard";
import { ContactCard } from "./sections/ContactCard";
import "./App.css";

const sectionComponents: Record<string, ReactNode> = {
  about: <AboutCard />,
  skills: <SkillsCard />,
  projects: <ProjectsCard />,
  repos: <ReposCard />,
  contact: <ContactCard />,
};

type Phase = "hidden" | "appear" | "flip" | "reveal";

function Section({
  card,
  children,
}: {
  card: (typeof tarotCards)[number];
  children: ReactNode;
}) {
  const [phase, setPhase] = useState<Phase>("hidden");
  const ref = useRef<HTMLElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const visibleTop = Math.max(rect.top, 80);
    const visibleBottom = Math.min(rect.bottom, viewportHeight - 80);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    const visibleRatio = rect.height > 0 ? visibleHeight / rect.height : 0;
    const alreadyInView = visibleRatio >= 0.5;

    if (alreadyInView && !triggered.current) {
      triggered.current = true;
      setPhase("appear");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          setPhase("appear");
        }
      },
      { threshold: 0.5, rootMargin: "-80px 0px -80px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (phase === "appear") {
      const timer = setTimeout(() => setPhase("flip"), 500);
      return () => clearTimeout(timer);
    }
    if (phase === "flip") {
      const timer = setTimeout(() => setPhase("reveal"), 900);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <section
      id={card.id}
      ref={ref}
      className={`portfolio-section phase-${phase}`}
    >
      <div className="section-card-stage">
        <div className="section-card-wrapper">
          <TarotCard
            {...card}
            static
            flipped={phase === "flip" || phase === "reveal"}
          >
            <></>
          </TarotCard>
        </div>
      </div>
      <div className="section-content">
        <h2 className="section-heading">
          <span className="section-heading-arcana">{card.arcana}</span>
          <span className="section-heading-sep">—</span>
          <span className="section-heading-title">{card.title}</span>
        </h2>
        {children}
      </div>
    </section>
  );
}

function App() {
  const [activeNav, setActiveNav] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = tarotCards.map((c) => c.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        }
      },
      { threshold: 0.4, rootMargin: "-60px 0px -40% 0px" },
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="site-nav">
        <div className="nav-inner">
          <span className="nav-brand">Tarot.dev</span>
          <div className="nav-links">
            {tarotCards.map((card) => (
              <a
                key={card.id}
                href={`#${card.id}`}
                className={activeNav === card.id ? "active" : ""}
              >
                {card.arcana}
              </a>
            ))}
          </div>
          <button
            className={`nav-menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            ×
          </button>
        </div>
        <div className="mobile-menu-links">
          {tarotCards.map((card) => (
            <a
              key={card.id}
              href={`#${card.id}`}
              className={activeNav === card.id ? "active" : ""}
              onClick={closeMenu}
            >
              <span>{card.arcana}</span>
              <span className="mobile-menu-symbol">{card.symbol}</span>
            </a>
          ))}
        </div>
      </div>

      <main className="portfolio">
        {tarotCards.map((card) => (
          <Section key={card.id} card={card}>
            {sectionComponents[card.id]}
          </Section>
        ))}

        <footer className="portfolio-footer">
          <p>
            Feito com React + TypeScript + Vite · Verso das cartas em preto e
            dourado
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
