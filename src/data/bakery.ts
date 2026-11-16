export type ProductCategory =
  | "Todos"
  | "Pastelaria Conventual"
  | "Bolos de Festa"
  | "Padaria"
  | "Salgados";

export interface BakeryProduct {
  id: string;
  name: string;
  category: Exclude<ProductCategory, "Todos">;
  badge: string;
  price: string;
  unit: string;
  image: string;
  description: string;
  ingredients: string;
  allergens: string[];
  dailyBatchTime: string;
}

export const VITRINA_FEATURED: BakeryProduct[] = [
  {
    id: "pastel-nata",
    name: "Pastel de Nata da Serra",
    category: "Pastelaria Conventual",
    badge: "FORNADA 06H30",
    price: "1,40 €",
    unit: "unidade",
    image: "/images/pastel-nata.jpg",
    description:
      "Massa folhada estaladiça laminada à mão com manteiga dos Açores e creme de nata com raspa de limão e canela.",
    ingredients: "Farinha T55, manteiga sem sal, gemas frescas, nata, açúcar, limão e pau de canela.",
    allergens: ["Glúten", "Ovos", "Laticínios"],
    dailyBatchTime: "Fornadas a cada 45 min a partir das 06h30",
  },
  {
    id: "travesseiro-amendoa",
    name: "Travesseiro de Amêndoa & Ovos",
    category: "Pastelaria Conventual",
    badge: "CONVENTUAL",
    price: "2,20 €",
    unit: "unidade",
    image: "/images/travesseiro-amendoa.jpg",
    description:
      "Folhado leve polvilhado com açúcar fino, recheado com creme rico de amêndoa torrada do Algarve e ovos moles.",
    ingredients: "Massa folhada de manteiga, amêndoa moída, gemas, açúcar em ponto de pérola.",
    allergens: ["Glúten", "Ovos", "Laticínios", "Frutos de Casca Rija"],
    dailyBatchTime: "07h00 e 15h00",
  },
  {
    id: "croissant-brioche",
    name: "Croissant Brioche Folhado",
    category: "Padaria",
    badge: "MANTEIGA PURA",
    price: "1,90 €",
    unit: "unidade",
    image: "/images/croissant-brioche.jpg",
    description:
      "Receita portuguesa de massa brioche folhada com fermentação lenta de 18 horas e brilho de calda de açúcar.",
    ingredients: "Farinha de força, manteiga, leite gordo, ovos caseiros, fermento de padeiro.",
    allergens: ["Glúten", "Ovos", "Laticínios"],
    dailyBatchTime: "06h30 e 11h00",
  },
  {
    id: "queijada-requeijao",
    name: "Queijada de Requeijão & Canela",
    category: "Pastelaria Conventual",
    badge: "TRADICIONAL",
    price: "1,80 €",
    unit: "unidade",
    image: "/images/queijada-requeijao.jpg",
    description:
      "Queijada húmida de forno de pedra feita com requeijão de ovelha fresco e um toque suave de canela do Ceilão.",
    ingredients: "Requeijão fresco, ovos inteiros, açúcar amarelo, farinha de trigo, canela.",
    allergens: ["Glúten", "Ovos", "Laticínios"],
    dailyBatchTime: "07h30",
  },
];

export const FRESH_PRODUCTS: BakeryProduct[] = [
  {
    id: "bolo-frutos-vermelhos",
    name: "Bolo Folhado de Frutos Vermelhos",
    category: "Bolos de Festa",
    badge: "FESTA · 24H",
    price: "24,00 €",
    unit: "kg",
    image: "/images/bolo-aniversario.jpg",
    description:
      "Camadas alternadas de massa folhada caramelizada, creme diplomata de baunilha natural e frutos vermelhos frescos da época.",
    ingredients: "Massa folhada, nata fresca, baunilha de Madagáscar, morangos, framboesas e mirtilos.",
    allergens: ["Glúten", "Ovos", "Laticínios"],
    dailyBatchTime: "Disponível à fatia ou por encomenda em 24h",
  },
  {
    id: "tarte-maca-reineta",
    name: "Tarte Rústica de Maçã Reineta",
    category: "Pastelaria Conventual",
    badge: "CONVENTUAL",
    price: "19,50 €",
    unit: "inteira (8 fatias)",
    image: "/images/tarte-maca.jpg",
    description:
      "Base quebrada de manteiga recheada com maçã reineta de Alcobaça assada lentamente com canela e doce de ovos.",
    ingredients: "Maçã reineta, massa areada de manteiga, açúcar mascavado, canela, ovos.",
    allergens: ["Glúten", "Ovos", "Laticínios"],
    dailyBatchTime: "08h00 e 16h00",
  },
  {
    id: "pao-alentejano-lenha",
    name: "Pão Rústico de Massa Mãe",
    category: "Padaria",
    badge: "FORNO 06H30",
    price: "3,40 €",
    unit: "unidade (800g)",
    image: "/images/pao-rustico.jpg",
    description:
      "Fermentação natural de 24 horas com a nossa massa mãe de 1988. Côdea estaladiça enfarinhada e miolo alveolar húmido.",
    ingredients: "Farinha de trigo moída em pedra, farinha de centeio, água filtrada, sal marinho de Tavira.",
    allergens: ["Glúten"],
    dailyBatchTime: "06h30, 10h30 e 17h00",
  },
  {
    id: "bolo-chocolate-serra",
    name: "Bolo Húmido de Cacau 70%",
    category: "Bolos de Festa",
    badge: "FESTA · 24H",
    price: "23,00 €",
    unit: "kg",
    image: "/images/bolo-chocolate.jpg",
    description:
      "Pão-de-ló de cacau negro com ganache sedosa de chocolate 70% e praliné crocante de avelã torrada.",
    ingredients: "Chocolate negro 70%, cacau em pó, ovos, manteiga, avelãs tostadas.",
    allergens: ["Glúten", "Ovos", "Laticínios", "Frutos de Casca Rija"],
    dailyBatchTime: "À fatia todo o dia ou inteiro em 24h",
  },
  {
    id: "empada-galinha-folhada",
    name: "Empada Folhada de Galinha do Campo",
    category: "Salgados",
    badge: "SALGADO",
    price: "2,40 €",
    unit: "unidade",
    image: "/images/empada-folhada.jpg",
    description:
      "Recheio estufado em vinho branco, salsa e limão envolvido em massa quebrada fina que se desfaz na boca.",
    ingredients: "Peito de galinha desfiado, cebola, vinho branco, salsa, massa quebrada de banha e manteiga.",
    allergens: ["Glúten", "Ovos", "Laticínios"],
    dailyBatchTime: "10h00 e 12h30",
  },
];

export const PARTY_CAKE_STEPS = [
  {
    step: "01",
    title: "Escolha a Massa & o Recheio",
    description:
      "Selecione entre pão-de-ló tradicional húmido, massa folhada caramelizada, chocolate 70% ou amêndoa com doce de ovos conventual.",
  },
  {
    step: "02",
    title: "Decoração & Mensagem",
    description:
      "Personalize com frutos vermelhos frescos, fios de ovos, merengue tostado ou placa de chocolate negro caligrafada à mão.",
  },
  {
    step: "03",
    title: "Levante na Loja ou Receba em Lisboa",
    description:
      "Encomende até às 18h00 e levante no dia seguinte no balcão de Campo de Ourique ou agende entrega refrigerada na Grande Lisboa.",
  },
];

export const PARTY_SPECIALTIES = [
  {
    id: "imperial",
    name: "Bolo Folhado Imperial",
    description: "Folhado fino, doce de ovos caseiro, chantilly fresco e amêndoa laminada.",
    icon: "CakeSlice" as const,
  },
  {
    id: "ovar",
    name: "Pão-de-Ló de Ovar Tradicional",
    description: "Cozido em forma forrada a papel pardo com interior cremoso de gema.",
    icon: "Sparkles" as const,
  },
  {
    id: "tarte-maca",
    name: "Tarte de Maçã & Canela",
    description: "Maçã reineta caramelizada sobre massa areada de manteiga pura.",
    icon: "Wheat" as const,
  },
  {
    id: "miniaturas",
    name: "Tabuleiro de Miniaturas (24 un.)",
    description: "Sortido de pastéis de nata, queijadas, jesuítas e cornucópias de ovos moles.",
    icon: "Gift" as const,
  },
];

export interface FaqItem {
  id: string;
  category: "Encomendas de Bolos" | "Alergénios & Ingredientes" | "Levantamento & Entregas" | "Eventos & Catering";
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "prazo-bolo",
    category: "Encomendas de Bolos",
    question: "Com quanta antecedência devo encomendar um bolo de aniversário?",
    answer:
      "Para os nossos bolos clássicos (Folhado de Doce de Ovos, Chocolate 70%, Frutos Vermelhos e Pão-de-Ló), basta encomendar até às 18h00 para levantar no dia seguinte (24 horas). Para bolos de casamento, batizado com vários andares ou decoração modelada especial, recomendamos 5 dias úteis.",
  },
  {
    id: "peso-pessoas",
    category: "Encomendas de Bolos",
    question: "Que peso de bolo devo escolher consoante o número de convidados?",
    answer:
      "Calculamos cerca de 120 g a 150 g por pessoa. Um bolo de 1 kg serve 8 a 10 fatias; 1,5 kg serve 12 a 15 pessoas; 2 kg serve 16 a 20 pessoas; e 3 kg serve 25 a 30 pessoas. No nosso simulador em Visitar & Encomendar pode ajustar o peso exato.",
  },
  {
    id: "mensagem-placa",
    category: "Encomendas de Bolos",
    question: "A placa de chocolate com o nome e idade tem custo adicional?",
    answer:
      "Não. A placa de chocolate negro ou branco caligrafada à mão pelos nossos pasteleiros está incluída gratuitamente em todas as encomendas de bolos inteiros a partir de 1 kg.",
  },
  {
    id: "alergenios",
    category: "Alergénios & Ingredientes",
    question: "Têm opções sem glúten ou sem lactose?",
    answer:
      "Produzimos diariamente o nosso Bolo de Amêndoa Algarvia e Toucinho do Céu sem farinha de trigo na receita. Contudo, como o nosso obrador trabalha continuamente com farinha de trigo, não podemos garantir ausência total de vestígios cruzados para doença celíaca severa.",
  },
  {
    id: "conservacao",
    category: "Alergénios & Ingredientes",
    question: "Como devo conservar um bolo com doce de ovos ou chantilly fresco?",
    answer:
      "Os bolos com recheio de nata ou ovos moles devem permanecer refrigerados entre 2 ºC e 5 ºC até 30 minutos antes de servir. Os nossos pastéis de nata e folhados secos mantêm-se estaladiços à temperatura ambiente até 24 horas (nunca no frigorífico).",
  },
  {
    id: "levantamento-horario",
    category: "Levantamento & Entregas",
    question: "A partir de que horas posso levantar a minha encomenda na loja?",
    answer:
      "O balcão de Campo de Ourique abre às 06h30 com a primeira fornada já pronta. As encomendas de bolos de aniversário ficam disponíveis a partir das 08h30, ou mais cedo se combinado previamente.",
  },
  {
    id: "entregas-lisboa",
    category: "Levantamento & Entregas",
    question: "Fazem entregas ao domicílio em Lisboa? Qual a taxa?",
    answer:
      "Sim, realizamos entregas próprias em viatura refrigerada em toda a cidade de Lisboa (Campo de Ourique, Amoreiras, Estrela, Avenidas Novas, Príncipe Real e Parque das Nações) com taxa fixa de 6,50 €. Entregas gratuitas para encomendas acima de 65 €.",
  },
  {
    id: "catering-empresas",
    category: "Eventos & Catering",
    question: "Fornecem tabuleiros de pastelaria e salgados para empresas e batizados?",
    answer:
      "Sim. Preparamos caixas de 24 ou 48 miniaturas conventuais, empadas de galinha, rissóis de camarão e folhados de salsicha para reuniões, lançamentos e festas familiares, com faturação empresarial disponível.",
  },
];

export const STORES = [
  {
    id: "campo-ourique",
    name: "Casa-Mãe · Campo de Ourique",
    badge: "FORNO PRÓPRIO & OBRADOR",
    address: "Rua Ferreira Borges, 118",
    postal: "1350-134 Lisboa",
    hours: "Todos os dias · 06h30 às 20h00",
    phone: "+351 213 884 920",
    notes: "Primeira fornada às 06h30. Levantamento prioritário de encomendas ao balcão.",
  },
  {
    id: "avenidas-novas",
    name: "Loja · Avenidas Novas",
    badge: "ESPLANADA & SALÃO DE CHÁ",
    address: "Av. Defensores de Chaves, 42B",
    postal: "1000-118 Lisboa",
    hours: "Seg–Sáb · 07h30 às 19h30 · Dom · 08h00 às 14h00",
    phone: "+351 213 541 208",
    notes: "Abastecida três vezes por dia diretamente do nosso forno de Campo de Ourique.",
  },
];
