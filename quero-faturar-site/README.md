# Quero Faturar — Landing Page

Landing page de pré-lançamento da Lívia, a inteligência artificial da Quero
Faturar para emissão de notas fiscais pelo WhatsApp.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Wouter (roteamento)

## Rodar localmente

```bash
npm install
npm run dev
```

A página fica disponível em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

O build vai para a pasta `dist/`.

## Deploy no Vercel

1. Suba este repositório no GitHub.
2. No painel do Vercel, clique em **New Project** e importe o repositório.
3. O Vercel detecta o Vite automaticamente. Confirme as configurações:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Clique em **Deploy**.

O arquivo `vercel.json` já está configurado para que rotas internas
(como `/politica-de-privacidade`) funcionem corretamente em SPA.

## Estrutura

```
quero-faturar-site/
├── public/              # Favicon e imagem do Open Graph
├── src/
│   ├── assets/lp/       # Fatias da landing page (01.jpg → 08.jpg)
│   ├── pages/
│   │   ├── Home.tsx     # Landing page principal
│   │   ├── Privacy.tsx  # Política de privacidade
│   │   └── NotFound.tsx # Página 404
│   ├── App.tsx          # Rotas
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos globais
├── index.html
├── vercel.json
└── vite.config.ts
```

## Como editar o link do grupo VIP

O número de WhatsApp usado em todos os botões está em `src/pages/Home.tsx`,
no topo do arquivo:

```ts
const WHATSAPP_URL = "https://wa.me/556135670042";
```

Para usar um link de grupo (ex.: `https://chat.whatsapp.com/XXXXX`), basta
trocar essa constante.
