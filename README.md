# Tarot do Desenvolvedor

Portfólio interativo em forma de cartas de tarot, construído com **React**, **TypeScript** e **Vite**.

Cada carta representa uma seção do portfólio — sobre mim, habilidades, projetos em destaque, repositórios e contato. Ao carregar a página, as cartas são "tiradas" na mesa com uma animação escalonada. Clique em qualquer carta para virá-la e revelar o conteúdo.

![Verso das cartas em preto e dourado](./public/favicon.svg)

## Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)

## Funcionalidades

- Design sombrio com verso das cartas em **preto e dourado**.
- Animação de distribuição das cartas ao carregar a página.
- Efeito 3D de flip ao clicar nas cartas.
- Dados do GitHub integrados (perfil, repositórios e linguagens).
- Layout responsivo.

## Como executar

```bash
# Clone o repositório
git clone https://github.com/francisco-josetti/Portfolio.git

# Entre na pasta
cd Portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## Scripts disponíveis

| Comando         | Descrição                          |
|-----------------|------------------------------------|
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Visualiza a versão de produção localmente |
| `npm run lint`  | Executa o ESLint                   |

## Estrutura do projeto

```
Portfolio/
├── public/               # Assets estáticos
├── src/
│   ├── components/       # Componentes reutilizáveis (TarotCard, CardBack)
│   ├── data/             # Dados do portfólio e do GitHub
│   ├── sections/         # Conteúdo de cada carta
│   ├── App.tsx           # Aplicação principal
│   ├── App.css           # Estilos específicos
│   ├── index.css         # Design system global
│   └── main.tsx          # Ponto de entrada
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Autor

**Francisco Josetti Vieira de Sousa**

- GitHub: [@francisco-josetti](https://github.com/francisco-josetti)
- Portfólio: [francisco-josetti.github.io/Portfolio/](https://francisco-josetti.github.io/Portfolio/)

---

Feito com 💜 e um toque de magia.
