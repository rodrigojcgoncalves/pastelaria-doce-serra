# DESIGN.md — Sistema de Design & Identidade de Marca
## **Pastelaria Doce Serra** · *Pastelaria Tradicional, Confeitaria & Forno Próprio (Lisboa, desde 1988)*

> **Documento Mestre de Design System (Passo 1)**
> Fusão sistemática das referências visuais `refs/ref.jpg`, `refs/ref1.jpg`, `refs/ref2.jpg` e `refs/ref3.jpg` estruturada segundo as metodologias **`brand`** (Voz, Posicionamento e Diretrizes Visuais), **`design-system`** (Arquitetura de Tokens em 3 Camadas: *Primitive → Semantic → Component*) e **`ui-ux-pro-max`** (Acessibilidade WCAG AA, Hierarquia Editorial, Touch Targets e Micro-interações).

---

## 1. Síntese Visual das 4 Referências (`refs/`)

| Referência | Elementos Extraídos e Fundidos | Adaptação para a **Pastelaria Doce Serra** |
| :--- | :--- | :--- |
| **`ref.jpg`** *(Panella)* | Composição de Hero centrada sobre fotografia escura e rica de pães artesanais; botão inferior de scroll circular embutido na transição de secção; faixa de mapa de localização antes do rodapé escuro. | **Substituição obrigatória da fonte cursiva barata ("brush script")** por **`Fraunces`** (serifada artesanal de alto contraste e curvas orgânicas, evocando letreiros históricos de confeitaria portuguesa). |
| **`ref1.jpg`** *(Бублики за Рублики)* | Secção de apresentação sobre fundo creme claro com fotografia real do interior/balcão à esquerda + coluna de texto à direita com título ladeado por pontos (`• A NOSSA PASTELARIA •`) e botão caramelo; faixa horizontal final de CTA sobre fotografia de fornada. | Elevação da paleta de laranja saturado para **Caramelo Tostado / Ovos Moles (`#C88A4B`)** sobre fundo **Creme Farinha (`#FAF6F0`)**, mantendo a simetria editorial acolhedora e o selo de tradição familiar. |
| **`ref2.jpg`** *(Bakery Sweet Theme)* | **Header duplo elegante** (Topbar informativa + Navbar transparente integrada no Hero com CTA contornado); **Bloco "All Products"** (texto + foto vertical grande à direita + 4 mini-cartões quadrados com badge de preço no topo direito); **Bloco escuro "Fresh Products"** (filtros à direita + 5 cartões verticais com etiqueta superior e botão `+` no canto inferior direito); **Bloco "01, 02, 03"** com linha pontilhada e marcadores quadrados dourados. | Tradução integral da cadência para a montra portuguesa: *"Da Nossa Vitrina"*, *"Fornadas & Especialidades Frescas"* (com filtro interativo entre Pastelaria Conventual, Bolos de Festa, Padaria e Salgados) e *"Bolos por Encomenda para Festas"* (`01`, `02`, `03` + grelha de 4 especialidades com ícones finos e cartão de catálogo). |
| **`ref3.jpg`** *(Iskra Delikatese)* | Fotografia de pastelaria fina e bolos de festa com brilho de vitrina; secção intermédia atmosférica com citação do mestre pasteleiro sobre fundo escuro desfocado; bloco de **Contacto + Formulário** lado a lado sobre mapa largo com pin personalizado da casa. | Inspiração direta para a secção de nota do Mestre Pasteleiro em `Cormorant Garamond Italic`, para a vitrina de bolos de cerimónia e para a composição da página `/contactos` e rodapé com mapa de Lisboa (Campo de Ourique / Avenidas Novas). |

---

## 2. Identidade de Marca & Voz (`brand`)

### 2.1. Posicionamento e Herança
- **Nome Oficial:** Pastelaria Doce Serra
- **Assinatura:** *Pastelaria Tradicional, Confeitaria & Forno Próprio · Lisboa, desde 1988*
- **Promessa de Valor:** Forno aceso todos os dias às **06h30**, manteiga pura na massa folhada, ovos frescos de casca na doçaria conventual e bolos de aniversário personalizados entregues ou prontos a levantar em **24 horas**.

### 2.2. Matriz de Voz & Tom Editorial (Português de Portugal — `pt-PT`)

| Atributo de Voz | O Que Somos | O Que Nunca Somos | Exemplo de Copy |
| :--- | :--- | :--- | :--- |
| **Acolhedor & Familiar** | Recebemos cada cliente como vizinho de bairro ao balcão de mármore. | Frios, corporativos ou com jargão de *fast-food* industrial. | *"O primeiro tabuleiro de pastéis de nata sai do forno às 06h30, ainda a estalar."* |
| **Artesanal & Conhecedor** | Explicamos o ponto de açúcar, a fermentação lenta e a folha de manteiga. | Genéricos ou vagos ("produtos de qualidade"). | *"Massa folhada laminada à mão com três voltas duplas e manteiga dos Açores."* |
| **Claro & Prestativo** | Facilitamos a encomenda de bolos de festa em 3 passos simples e transparentes. | Burocráticos ou confusos nos prazos e preços. | *"Encomende até às 18h00 e levante o seu bolo fresco no dia seguinte."* |

### 2.3. Termos Proibidos vs. Vocabulário da Casa
- **Proibido usar (Português do Brasil ou Jargão Industrial):** *Cardápio, vitrine, xícara, chantilly industrial, delivery expresso, sobremesas gourmet, fabricação*.
- **Vocabulário Oficial (`pt-PT`):** *Montra / Vitrina, Carta de Bolos, Chávena, Fornada, Fabrico Próprio, Doçaria Conventual, Massa Folhada, Ovos Moles, Pastel de Nata, Bolo-Rei, Pão de Deus, Encomenda com 24h*.

---

## 3. Sistema Tipográfico Distintivo (`next/font/google`)

> [!IMPORTANT]
> **Regra Absoluta:** É estritamente proibido o uso de fontes cursivas estilo *brush/script* baratas (como na `ref.jpg`). Toda a expressividade artesanal provém do contraste entre **`Fraunces`**, **`Plus Jakarta Sans`** e **`Cormorant Garamond` (Italic)**.

### 3.1. Par Tipográfico + Subtítulo Editorial

| Função | Fonte (`next/font/google`) | Pesos & Estilos | Variável CSS | Caráter & Aplicação |
| :--- | :--- | :--- | :--- | :--- |
| **Display & Títulos (`H1–H3`)** | **`Fraunces`** | `400`, `500`, `600`, `700` (Normal & Italic) | `--font-fraunces` | Serifada *old-style* contemporânea com toque orgânico ("wonky/soft" subtil). Evoca os letreiros dourados das pastelarias históricas da Baixa e Campo de Ourique. |
| **Corpo & Interface (`Body`, `Nav`, `Buttons`)** | **`Plus Jakarta Sans`** | `400`, `500`, `600`, `700` | `--font-jakarta` | Sans-serif geométrica humanista de leitura cristalina em tamanhos pequenos (preços, tabelas de alergénios, filtros, formulários e topbar). |
| **Subtítulos & Notas do Mestre (`Accent`)** | **`Cormorant Garamond`** | `500 Italic`, `600 Italic` | `--font-cormorant` | Usada **exclusivamente em itálico** para epígrafes acima dos títulos, notas manuscritas de receita e citações do Mestre Pasteleiro. |

### 3.2. Escala Tipográfica Responsiva

| Token / Elemento | Fonte | Peso | Desktop (`lg+`) | Mobile (`base`) | Line-Height | Letter-Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (`H1`)** | `Fraunces` | `600` | `4.25rem` (`68px`) | `2.5rem` (`40px`) | `1.08` | `-0.02em` |
| **Section Title (`H2`)** | `Fraunces` | `500` | `2.75rem` (`44px`) | `2rem` (`32px`) | `1.15` | `-0.015em` |
| **Editorial Framed Title (`• H2 •`)** | `Fraunces` | `600` | `1.875rem` (`30px`) | `1.5rem` (`24px`) | `1.2` | `0.04em` (Uppercase) |
| **Step Number (`01`, `02`, `03`)** | `Fraunces` | `400` | `3.5rem` (`56px`) | `2.75rem` (`44px`) | `1.0` | `-0.03em` |
| **Card Title (`H3`)** | `Fraunces` | `500` | `1.375rem` (`22px`) | `1.25rem` (`20px`) | `1.25` | `-0.01em` |
| **Master Baker Note (`Subtitle`)** | `Cormorant Garamond` | `500 Italic` | `1.375rem` (`22px`) | `1.125rem` (`18px`) | `1.45` | `0.01em` |
| **Section Eyebrow (`OUR SHOP`)** | `Plus Jakarta Sans` | `600` | `0.75rem` (`12px`) | `0.75rem` (`12px`) | `1.4` | `0.22em` (Uppercase) |
| **Body Large** | `Plus Jakarta Sans` | `400` | `1.125rem` (`18px`) | `1rem` (`16px`) | `1.7` | `0em` |
| **Body Base** | `Plus Jakarta Sans` | `400` | `0.9375rem` (`15px`) | `0.9375rem` (`15px`) | `1.65` | `0em` |
| **Topbar & Badges** | `Plus Jakarta Sans` | `600` | `0.75rem` (`12px`) | `0.75rem` (`12px`) | `1.2` | `0.12em` (Uppercase) |

---

## 4. Arquitetura de Design Tokens em 3 Camadas (`design-system`)

Seguindo rigorosamente a arquitetura **Primitive → Semantic → Component**, nenhum componente utiliza valores hexadecimais avulsos fora do sistema de tokens.

### Camada 1: Primitive Tokens (Valores Brutos da Matéria-Prima)

| Token Primitivo | Valor Hex / CSS | Inspiração Sensorial Portuguesa |
| :--- | :--- | :--- |
| `--color-caramel-100` | `#F7EBDD` | Creme de pasteleiro claro |
| `--color-caramel-200` | `#EDD3B6` | Amêndoa torrada suave |
| `--color-caramel-300` | `#DDB07D` | Dourado de gema e calda de açúcar |
| `--color-caramel-400` | `#C88A4B` | **Caramelo Dourado Principal** (Crosta de Bolo & Ovos Moles) |
| `--color-caramel-500` | `#B37436` | Caramelo tostado de forno (Hover) |
| `--color-caramel-600` | `#965C24` | Canela e melaço escuro |
| `--color-flour-50` | `#FFFFFF` | Açúcar em pó puro |
| `--color-flour-100` | `#FAF6F0` | **Creme Farinha Trigo** (Fundo editorial principal) |
| `--color-flour-200` | `#F3ECE1` | Linho de tabuleiro de pão |
| `--color-flour-300` | `#E6DEC8` | Pedra de lioz lisboeta (Bordas e divisórias subtis) |
| `--color-oven-950` | `#110C09` | Carvão de forno a lenha (Rodapé profundo) |
| `--color-oven-900` | `#1E1612` | **Cacau & Forno Escuro** (Fundo secção *Fornadas Frescas* e texto principal) |
| `--color-oven-800` | `#2A1F1A` | Café expresso de balcão (Cartões escuros) |
| `--color-oven-600` | `#59453B` | Castanho noz moscada (Texto secundário) |
| `--color-oven-500` | `#7A6357` | Trigo integral suave (Legendas e metadados) |

### Camada 2: Semantic Tokens (Propósito & Contraste WCAG AA)

| Token Semântico | Referência Primitiva | Função no Sistema & Rácio de Contraste |
| :--- | :--- | :--- |
| `--bg-page-light` | `var(--color-flour-100)` (`#FAF6F0`) | Fundo base acolhedor (substitui o branco clínico `#FFF`). |
| `--bg-surface-elevated` | `var(--color-flour-50)` (`#FFFFFF`) | Superfície de cartões editoriais, caixas de encomenda e formulários. |
| `--bg-surface-warm` | `var(--color-flour-200)` (`#F3ECE1`) | Secções alternadas suaves (FAQ, história familiar, testemunhos). |
| `--bg-section-dark` | `var(--color-oven-900)` (`#1E1612`) | Fundo rico e texturado da secção *Fornadas & Especialidades Frescas* e Hero. |
| `--text-primary-on-light` | `var(--color-oven-900)` (`#1E1612`) | Texto principal sobre `#FAF6F0` — **Contraste 15.4:1 (WCAG AAA)**. |
| `--text-secondary-on-light`| `var(--color-oven-600)` (`#59453B`) | Parágrafos editoriais longos — **Contraste 7.6:1 (WCAG AAA)**. |
| `--text-primary-on-dark` | `var(--color-flour-100)` (`#FAF6F0`) | Títulos e textos principais sobre fundo escuro `#1E1612` — **15.4:1**. |
| `--brand-accent-primary` | `var(--color-caramel-400)` (`#C88A4B`) | Botões principais, etiquetas de preço, marcadores `01–03` e destaques. |
| `--brand-accent-hover` | `var(--color-caramel-500)` (`#B37436`) | Estado hover/active de elementos interativos caramelo. |
| `--border-light-subtle` | `var(--color-flour-300)` (`#E6DEC8`) | Filetes clássicos de confeitaria, linhas pontilhadas e bordas de input. |
| `--border-gold-accent` | `rgba(200, 138, 75, 0.45)` | Molduras duplas interiores em cartões de destaque e botão CTA da navbar. |

### Camada 3: Component Tokens (Mapeamento Direto às Secções das `refs/`)

| Componente | Token de Componente | Valor / Referência Semântica | Comportamento Visual |
| :--- | :--- | :--- | :--- |
| **1. Topbar Fina (`ref2.jpg`)** | `--topbar-bg`<br>`--topbar-text`<br>`--topbar-accent` | `rgba(20, 14, 11, 0.92)`<br>`var(--color-flour-300)`<br>`var(--color-caramel-300)` | Altura `40px`, texto `11px` uppercase espaçado, ícones finos Lucide (`Flame`, `Phone`, `Clock`, `Instagram`). |
| **2. Navbar sobre Hero (`ref2.jpg`)** | `--navbar-bg-overlay`<br>`--navbar-link-active`<br>`--navbar-cta-border` | `rgba(30, 22, 18, 0.55)`<br>`var(--brand-accent-primary)`<br>`var(--brand-accent-primary)` | Sublinhado dourado na página ativa; botão `Encomendar Bolo` com moldura fina `1px solid #C88A4B` que preenche no hover. |
| **3. Hero & Scroll Cue (`ref.jpg` + `ref2.jpg`)** | `--hero-overlay`<br>`--hero-cta-bg`<br>`--hero-scroll-btn-bg` | `radial-gradient(...)`<br>`var(--brand-accent-primary)`<br>`var(--bg-page-light)` | Botão central `#C88A4B`; meio-círculo creme `#FAF6F0` na base do Hero com seta suave animada (`ChevronDown`). |
| **4. Secção "A Nossa Pastelaria" (`ref1.jpg`)** | `--about-dot-color`<br>`--about-title-color`<br>`--about-photo-frame` | `var(--brand-accent-primary)`<br>`var(--text-primary-on-light)`<br>`var(--shadow-elevated)` | Título `• A NOSSA PASTELARIA •` alinhado à esquerda da coluna direita; foto real do balcão à esquerda. |
| **5. Bloco "Da Nossa Vitrina" (`ref2.jpg`)** | `--vitrina-price-badge-bg`<br>`--vitrina-card-size`<br>`--vitrina-tall-aspect` | `var(--brand-accent-primary)`<br>`aspect-square`<br>`aspect-[4/5]` | Etiqueta de preço retangular dourada (`1,40 €`) no canto superior direito de cada um dos 4 mini-cartões quadrados. |
| **6. Bloco "Fornadas Frescas" (`ref2.jpg`)** | `--fresh-section-bg`<br>`--fresh-card-plus-bg`<br>`--fresh-badge-bg` | `var(--bg-section-dark)`<br>`var(--brand-accent-primary)`<br>`rgba(17, 12, 9, 0.82)` | Grelha de 5 colunas verticais (`aspect-[3/4]`), etiqueta escura no topo direito (`CONVENTUAL`) e botão `+` (`28x28px` visual / `44x44px` área de toque) em baixo à direita. |
| **7. Bloco "Passos 01, 02, 03" (`ref2.jpg`)** | `--step-line-style`<br>`--step-square-border`<br>`--step-number-font` | `1px dashed var(--border-light-subtle)`<br>`2px solid var(--brand-accent-primary)`<br>`var(--font-fraunces)` | Linha pontilhada horizontal atravessando as 3 colunas, quadrado branco com borda dourada `14x14px` centrado no topo de cada passo. |

---

## 5. Anatomia Detalhada dos Componentes & Secções

### 5.1. Header Duplo Elegante (`ref2.jpg`)
- **Topbar Fina Superior (`h-10`):**
  - **Esquerda:** Indicador de forno vivo (`🔥 Forno aceso às 06h30 · Campo de Ourique, Lisboa`) + links rápidos discretos (`Alergénios`, `Catálogo PDF`).
  - **Direita:** `📞 +351 213 884 920` · `🎂 Encomendas de Bolos em 24h` · link Instagram `@doceserralisboa`.
- **Navbar Principal Integrada sobre o Hero (`h-20`):**
  - **Esquerda:** Logótipo tipográfico artesanal **`DOCE SERRA`** em `Fraunces` com fita dourada inferior `CONFEITARIA · 1988` (inspirado no emblema em fita da `ref2.jpg`).
  - **Centro:** Links das 4 rotas reais + âncora de montra: `Início` (`/`), `Sobre Nós` (`/sobre-nos`), `Montra & Bolos` (`/#vitrina`), `Perguntas Frequentes` (`/faqs`), `Visitar & Encomendar` (`/contactos`).
  - **Direita:** Botão contornado `ENCOMENDAR BOLO` (`border border-[#C88A4B] px-5 py-2.5 text-xs tracking-widest uppercase hover:bg-[#C88A4B]`) + ícone de cesto/seleção rápida de encomenda com contador.

### 5.2. Hero Minimalista e Acolhedor (`ref.jpg` + `ref1.jpg` + `ref2.jpg`)
- **Fundo:** Fotografia escura, rica e contrastada de pastelaria e padaria tradicional portuguesa sobre mesa rústica e tabuleiros de forno, com vinheta escura (`rgba(17, 12, 9, 0.62)`) garantindo leitura perfeita.
- **Composição Central:**
  - Subtítulo superior em `Plus Jakarta Sans` (`tracking-[0.28em] uppercase text-xs text-[#DDB07D]`): `• FABRICO PRÓPRIO EM LISBOA DESDE 1988 •` com pequena estrela dourada central (como na `ref2.jpg`).
  - Título central imponente em `Fraunces` (`text-4xl md:text-6xl lg:text-[68px] text-[#FAF6F0]`): **"A Arte do Forno & da Doçaria Portuguesa"** com nota poética em `Cormorant Garamond Italic`.
  - Subtítulo curto: *"Pastéis de nata a estalar, doçaria conventual de gema fresca e bolos de festa feitos à mão todos os dias."*
  - Botão central caramelo (`#C88A4B`): `VER MONTRA & HORÁRIOS` + link secundário subtil `Encomendar Bolo de Festa →`.
  - **Indicador de Scroll (`ref.jpg`):** Cúpula circular creme (`w-14 h-14 rounded-full bg-[#FAF6F0]`) posicionada exatamente na fronteira inferior do Hero, com ícone `ChevronDown` em `#1E1612`.

### 5.3. Apresentação / Mensagem da Casa (`ref1.jpg`)
- **Fundo:** Creme farinha (`#FAF6F0`).
- **Grelha 12 Colunas (`lg:grid-cols-12 gap-12 items-center`):**
  - **Esquerda (6 cols):** Fotografia real e luminosa do interior da pastelaria, vitrina de bolos e mestre pasteleiro, com moldura subtil e selo discreto *"38 Anos de Tradição Familiar"*.
  - **Direita (6 cols):**
    - Título ladeado por pontos dourados: `• A NOSSA PASTELARIA •` (`Fraunces` uppercase).
    - Dois parágrafos editoriais calorosos contando a história da família Serra desde 1988 em Campo de Ourique, o respeito pelo fermento natural (massa mãe de 1988) e a recusa de pré-misturas industriais.
    - Botão retangular caramelo (`#C88A4B`): `CONHECER A NOSSA HISTÓRIA` (liga a `/sobre-nos`).

### 5.4. Bloco 1: "Da Nossa Vitrina" (*All Products* da `ref2.jpg`)
- **Estrutura Fiel à `ref2.jpg`:**
  - **Topo Esquerdo:** Eyebrow `MONTRA DIÁRIA`, título `Da Nossa Vitrina` em `Fraunces`, texto em **2 colunas editoriais lado a lado** (exatamente como os dois blocos de texto sob *All Products* na `ref2.jpg`) e botão caramelo `VER CARTA COMPLETA`.
  - **Direita (Fotografia Vertical Grande):** Imagem alta (`aspect-[4/5]`) de bolos em campânula de vidro e tabuleiros de pastelaria fina, sobrepondo-se verticalmente à secção com botão central circular transparente (`Play / Ver Fabrico Matinal`).
  - **Base Esquerda/Centro (Fila de 4 Mini-Cartões Quadrados):**
    1. **Pastel de Nata da Serra** — Badge topo direito `1,40 €`
    2. **Travesseiro de Amêndoa & Ovos** — Badge topo direito `2,20 €`
    3. **Croissant Brioche Folhado** — Badge topo direito `1,90 €`
    4. **Queijada de Requeijão & Canela** — Badge topo direito `1,80 €`

### 5.5. Bloco 2: "Fornadas & Especialidades Frescas" (*Fresh Products* da `ref2.jpg`)
- **Fundo:** Cacau/Forno Escuro (`#1E1612`) com textura fotográfica atmosférica subtil a baixa opacidade no topo.
- **Cabeçalho da Secção:**
  - **Esquerda:** Eyebrow `ACABADOS DE SAIR DO FORNO` + Título `Fornadas & Especialidades Frescas` em `Fraunces` creme.
  - **Direita (Filtro Rápido Interativo):** Abas em uppercase (`TODOS`, `PASTELARIA CONVENTUAL`, `BOLOS DE FESTA`, `PADARIA`, `SALGADOS`) com sublinhado dourado na aba ativa.
- **Grelha de 5 Cartões Verticais Fotográficos (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5`):**
  - Cada cartão possui fotografia vertical de alto impacto, **etiqueta escura no canto superior direito** (`CONVENTUAL`, `FESTA`, `FORNO`, `SALGADO`), nome do produto em baixo à esquerda e **botão quadrado `+` (`#C88A4B`)** no canto inferior direito que abre modal/drawer rápido de detalhes ou pré-encomenda.

### 5.6. Bloco 3: "Bolos por Encomenda para Festas" (`01, 02, 03` da `ref2.jpg`)
- **Topo Centrado:** Eyebrow `PERSONALIZAÇÃO ARTESANAL` + Título `Bolos por Encomenda para Festas`.
- **Linha Horizontal de 3 Passos (`01`, `02`, `03`):**
  - Linha pontilhada horizontal (`border-t border-dashed border-[#D2C5AE]`) unindo as 3 colunas, com um **marcador quadrado branco de borda dourada (`w-3.5 h-3.5 border-2 border-[#C88A4B] bg-[#FAF6F0]`)** centrado sobre a linha em cada coluna:
    - **`01` · Escolha a Massa & o Recheio:** Pão-de-ló húmido, massa folhada crocante, chocolate negro 70% ou amêndoa com ovos moles.
    - **`02` · Decoração & Mensagem:** Frutos vermelhos frescos, fios de ovos, merengue tostado ou placa de chocolate caligrafada à mão.
    - **`03` · Levante na Loja ou Receba em Lisboa:** Pronto em 24h no nosso balcão de Campo de Ourique ou entregue refrigerado na sua morada.
- **Sub-bloco Inferior da `ref2.jpg` (Cartão de Catálogo + 4 Especialidades com Ícones):**
  - **Coluna 1:** Cartão fotográfico escuro *"Guia de Bolos de Festa & Batizado — Descarregar Catálogo de Pesos e Doses"*.
  - **Colunas 2 e 3 (Grelha 2×2 com ícones lineares artesanais):**
    - *Bolo Folhado Imperial* (Massa folhada, doce de ovos e chantilly fresco)
    - *Tarte rústica de Maçã Reineta* (Maçã de Alcobaça e canela)
    - *Pão de Ló de Ovar Tradicional* (Cozido em papel pardo, interior cremoso)
    - *Sortido de Miniaturas Conventuais* (Tabuleiros de 24 ou 48 unidades para festas)

### 5.7. Faixa Final CTA (`ref1.jpg`) + Mapa de Lisboa & Rodapé (`ref.jpg` + `ref3.jpg`)
- **Banner Horizontal de Encomenda Rápida (`ref1.jpg`):** Fotografia escura de pão e bolos acabados de cozer com título à esquerda (`"Encomende o seu Bolo ou Pão Quente para Amanhã"`), subtítulo (`"Entregas em toda a cidade de Lisboa ou levantamento prioritário sem fila às 06h30"`) e botão caramelo à direita (`FAZER ENCOMENDA`).
- **Mapa Estilizado de Lisboa (`ref.jpg` + `ref3.jpg`):** Faixa de mapa em tons creme/sépia centrada em **Campo de Ourique & Avenidas Novas**, com etiqueta emoldurada `• AS NOSSAS LOJAS EM LISBOA •` e pin personalizado da **Pastelaria Doce Serra**.
- **Rodapé Clássico Escuro (`#110C09`):** Logótipo artesanal, navegação rápida, horários da primeira e última fornada, contactos diretos e redes sociais.

---

## 6. Arquitetura Multi-Página (4 Rotas Reais Next.js App Router)

| Rota | Nome na Navegação | Conteúdo & Secções Exclusivas |
| :--- | :--- | :--- |
| **`/`** | **Início** | Header Duplo + Hero Minimalista com Scroll Cue + Secção `• A NOSSA PASTELARIA •` + Bloco 1 (*Da Nossa Vitrina*) + Bloco 2 (*Fornadas & Especialidades Frescas* com filtro interativo) + Bloco 3 (*Passos 01, 02, 03* + Catálogo) + Citação do Mestre Pasteleiro (`ref3.jpg`) + Banner CTA (`ref1.jpg`) + Mapa de Lisboa & Rodapé. |
| **`/sobre-nos`** | **Sobre Nós** | Hero de página interna + Cronologia da Família Serra desde 1988 + O Segredo da Massa Folhada de Manteiga e do Doce de Ovos + Galeria do Fabrico Próprio (04h00 às 06h30) + Equipa de Mestres Pasteleiros + Valores da Casa. |
| **`/faqs`** | **Perguntas Frequentes** | Hero de página interna + Filtro de categorias de dúvidas (Encomendas 24h, Alergénios & Sem Glúten, Cálculo de Peso por Convidado, Conservação & Transporte, Entregas em Lisboa e Pagamentos) + Acordeão interativo + Tabela visual de Doses/Pesos de Bolos. |
| **`/contactos`** | **Visitar & Encomendar** | Hero de página interna + **Simulador & Formulário Completo de Encomenda de Bolo** (escolha de bolo, peso/n.º de pessoas, recheio, mensagem na placa, data/hora de levantamento ou entrega) + Contactos diretos das lojas (Campo de Ourique & Avenidas Novas) + Mapa interativo detalhado de Lisboa (`ref3.jpg`). |

---

## 7. Regras de Qualidade UI/UX (`ui-ux-pro-max`)

1. **Acessibilidade (Prioridade 1):**
   - Rácio de contraste mínimo de `4.5:1` em todos os textos e badges; textos em botões `#C88A4B` usam branco puro `#FFFFFF` com peso `600` e sombra subtil ou texto `#140E0B` de alto contraste quando sobre fundos claros `#DDB07D`.
   - Navegação completa por teclado (`focus-visible:ring-2 focus-visible:ring-[#C88A4B] focus-visible:ring-offset-2`).
2. **Touch Targets & Interação (Prioridade 2):**
   - Todos os botões de filtro, setas e botões `+` nos cartões da secção *Fornadas Frescas* possuem área clicável mínima de `44×44px`.
3. **Performance & Imagens (Prioridade 3):**
   - Imagens otimizadas com proporções explícitas (`aspect-square`, `aspect-[4/5]`, `aspect-[3/4]`) para eliminar *Cumulative Layout Shift* (`CLS < 0.1`).
   - Curadoria exclusiva de fotografias reais de pastelaria artesanal, croissants folhados, bolos de festa, tartes e pão rústico (sem imagens genéricas ou artificiais).
