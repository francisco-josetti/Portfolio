import { skills, languageCounts } from "../data/portfolio";

export function SkillsCard() {
  const languageEntries = Object.entries(languageCounts).sort((a, b) => b[1] - a[1]);

  return (
    <div className="skills-section">
      <div className="skills-languages">
        <h4>Linguagens no GitHub</h4>
        <div className="language-chips">
          {languageEntries.map(([lang, count]) => (
            <span key={lang} className="language-chip">
              {lang} <strong>{count}</strong>
            </span>
          ))}
        </div>
      </div>
      <div className="skills-list">
        <h4>Competências</h4>
        {skills.map((skill) => (
          <div key={skill.name} className="skill-row">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
