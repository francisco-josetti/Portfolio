export interface Repo {
  name: string;
  description: string | null;
  html_url: string;
  language: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface Profile {
  name: string;
  login: string;
  avatar: string;
  bio: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  blog: string;
}

export const profile: Profile = {
  name: "Francisco Josetti Vieira de Sousa",
  login: "francisco-josetti",
  avatar: "https://avatars.githubusercontent.com/u/235409912?v=4",
  bio: "Software Engineering Student | HTML · CSS · JavaScript · TypeScript · React · Python · Go",
  html_url: "https://github.com/francisco-josetti",
  public_repos: 19,
  followers: 9,
  following: 10,
  blog: "https://francisco-josetti.github.io/Portfolio/",
};

export const languageCounts: Record<string, number> = {
  HTML: 7,
  CSS: 3,
  JavaScript: 2,
  Go: 2,
  TypeScript: 1,
  Python: 1,
  Outros: 1,
};

export const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 70 },
  { name: "TypeScript", level: 60 },
  { name: "React / Next.js", level: 60 },
  { name: "Python", level: 50 },
  { name: "Go", level: 45 },
  { name: "Flask", level: 40 },
  { name: "Git & GitHub", level: 75 },
];

export const featuredProjects: Repo[] = [
  {
    name: "Violet-Market",
    description:
      "Uma evolução do DinoShop, agora com Supabase para o back-end e React com Next.js no front.",
    html_url: "https://github.com/francisco-josetti/Violet-Market",
    language: "TypeScript",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-06-12T23:54:13Z",
  },
  {
    name: "DinoShop",
    description:
      "A personal project of a market-place called DinoShop, created with the aim of improve my programming skills.",
    html_url: "https://github.com/francisco-josetti/DinoShop",
    language: "CSS",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-02-12T05:06:59Z",
  },
  {
    name: "Portfolio",
    description: "Meu próprio portfólio para exibir meus projetos e mostrar meu contato.",
    html_url: "https://github.com/francisco-josetti/Portfolio",
    language: "CSS",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-03-10T04:29:29Z",
  },
  {
    name: "Todo-list",
    description: "A todo list built in Go to learn the language.",
    html_url: "https://github.com/francisco-josetti/Todo-list",
    language: "Go",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-02-22T08:25:34Z",
  },
];

export const repos: Repo[] = [
  {
    name: "Violet-Market",
    description:
      "Uma evolução do DinoShop, agora com supabase para o back-end e react com nextjs no front.",
    html_url: "https://github.com/francisco-josetti/Violet-Market",
    language: "TypeScript",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-06-12T23:54:13Z",
  },
  {
    name: "flags",
    description: null,
    html_url: "https://github.com/francisco-josetti/flags",
    language: "JavaScript",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-04-14T01:41:46Z",
  },
  {
    name: "Classes-Js",
    description: null,
    html_url: "https://github.com/francisco-josetti/Classes-Js",
    language: "JavaScript",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-03-31T21:29:06Z",
  },
  {
    name: "Portfolio",
    description: "Meu próprio portfólio para exibir meus projetos e mostrar meu contato.",
    html_url: "https://github.com/francisco-josetti/Portfolio",
    language: "CSS",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-03-10T04:29:29Z",
  },
  {
    name: "Todo-list",
    description: "A todo list buit in go to learn the language.",
    html_url: "https://github.com/francisco-josetti/Todo-list",
    language: "Go",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-02-22T08:25:34Z",
  },
  {
    name: "Resolu-o-de-desafios-de-programa-o-em-go",
    description:
      "Mostro resoluções de alguns desafios de programação, como: twosum, multiplos de 3 ou 5, etc.",
    html_url: "https://github.com/francisco-josetti/Resolu-o-de-desafios-de-programa-o-em-go",
    language: "Go",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-02-18T22:23:49Z",
  },
  {
    name: "DinoShop",
    description:
      "A personal project of a market-place called DinoShop, created with the aim of improve my programming skills.",
    html_url: "https://github.com/francisco-josetti/DinoShop",
    language: "CSS",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-02-12T05:06:59Z",
  },
  {
    name: "exemplo-blueprint",
    description: "Atividade de Pweb",
    html_url: "https://github.com/francisco-josetti/exemplo-blueprint",
    language: "HTML",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-12-17T20:23:48Z",
  },
  {
    name: "carrinho-flask",
    description: "Atividade de Pweb",
    html_url: "https://github.com/francisco-josetti/carrinho-flask",
    language: "HTML",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-12-12T15:27:39Z",
  },
  {
    name: "atividade-flask",
    description: "Minha atividade com Flask",
    html_url: "https://github.com/francisco-josetti/atividade-flask",
    language: "HTML",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-12-04T04:38:37Z",
  },
  {
    name: "pratica-git-web",
    description: "Prática de Git e GitHub - Programação Web 1",
    html_url: "https://github.com/francisco-josetti/pratica-git-web",
    language: "HTML",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-11-28T20:07:47Z",
  },
  {
    name: "css-animations",
    description: "a repo that contains a website with a lot of animations, but definetly not responsive.",
    html_url: "https://github.com/francisco-josetti/css-animations",
    language: "HTML",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-11-26T00:40:01Z",
  },
  {
    name: "beecrowd_1094",
    description: "Beecrowd exercise 1094 resolution",
    html_url: "https://github.com/francisco-josetti/beecrowd_1094",
    language: "Python",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-11-05T03:27:07Z",
  },
  {
    name: "mobile-first",
    description: "Primeiro projeto feito pensando primeiramente no mobile",
    html_url: "https://github.com/francisco-josetti/mobile-first",
    language: "CSS",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-11-01T18:23:34Z",
  },
  {
    name: "Blog-pessoal",
    description: "Blog pessoal feito apenas para computador com possibilidade de troca para o tema escuro.",
    html_url: "https://github.com/francisco-josetti/Blog-pessoal",
    language: "HTML",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-10-10T13:47:12Z",
  },
  {
    name: "Tabela-Adapt-vel",
    description: "Uma tabela de horários com estilo CSS que pode ser vista tanto para computadores, quanto para celulares",
    html_url: "https://github.com/francisco-josetti/Tabela-Adapt-vel",
    language: "HTML",
    topics: [],
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2025-10-02T14:24:25Z",
  },
];

export const tarotCards = [
  {
    id: "about",
    arcana: "O MAGO",
    number: "I",
    title: "Sobre Mim",
    symbol: "✦",
    color: "#c9a227",
  },
  {
    id: "skills",
    arcana: "A ESTRELA",
    number: "XVII",
    title: "Habilidades",
    symbol: "✶",
    color: "#e8c547",
  },
  {
    id: "projects",
    arcana: "O SOL",
    number: "XIX",
    title: "Destaques",
    symbol: "☉",
    color: "#f4d03f",
  },
  {
    id: "repos",
    arcana: "O MUNDO",
    number: "XXI",
    title: "Repositórios",
    symbol: "🜨",
    color: "#d4af37",
  },
  {
    id: "contact",
    arcana: "A LUA",
    number: "XVIII",
    title: "Contato",
    symbol: "☽",
    color: "#b8860b",
  },
];
