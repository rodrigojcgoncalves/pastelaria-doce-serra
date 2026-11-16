# Pastelaria Doce Serra

Website institucional e montra digital da Pastelaria Doce Serra, casa de pastelaria tradicional portuguesa, confeitaria e forno próprio em Lisboa desde 1988.

## Stack Tecnológica

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilos:** Tailwind CSS
- **Ícones:** Lucide React
- **Tipografia:** Fraunces, Plus Jakarta Sans e Cormorant Garamond (via `next/font/google`)

## Estrutura de Páginas

- `/` (`src/app/page.tsx`): Página inicial com apresentação da casa, montra diária, fornadas frescas filtráveis por categoria, passos de encomenda de bolos para festas e mapa das lojas em Lisboa.
- `/sobre-nos` (`src/app/sobre-nos/page.tsx`): História da família Serra desde 1988, processo de fabrico próprio no obrador e compromissos de frescura.
- `/faqs` (`src/app/faqs/page.tsx`): Perguntas frequentes organizadas por categoria (encomendas em 24h, alergénios, levantamento, entregas e catering) e guia de pesos por número de convidados.
- `/contactos` (`src/app/contactos/page.tsx`): Simulador interativo de encomenda de bolos de aniversário, moradas e horários das lojas em Campo de Ourique e Avenidas Novas, e mapa de localização.

## Sistema de Design

A arquitetura visual, paleta cromática e hierarquia tipográfica estão documentadas em `DESIGN.md` e aplicadas em três camadas de tokens CSS em `src/app/globals.css`.

## Instalação e Execução

1. Instalar as dependências:

```bash
npm install
```

2. Iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts Disponíveis

- `npm run dev`: Inicia o ambiente de desenvolvimento.
- `npm run build`: Gera a compilação otimizada de produção.
- `npm run start`: Inicia o servidor em modo de produção após o build.
- `npm run lint`: Executa a verificação de linting do Next.js.
