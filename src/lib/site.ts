export const SITE_URL = "https://www.topvan.tur.br";

export const COMPANY = {
  name: "Topvan Transporte Executivo",
  shortName: "Topvan",
  legalName: "TOPVAN LOCADORA DE VEICULOS LTDA",
  cnpj: "23.928.576/0001-19",
  founder: "Juliano Arruda do Amaral",
  foundingYear: 2016,
  phoneDisplay: "(15) 99628-4505",
  phoneE164: "+5515996284505",
  whatsappNumber: "5515996284505",
  email: "j.topvan10@gmail.com",
  streetAddress: "Rua Vinte e Um de Abril, 06, Sala 02 - Centro",
  neighborhood: "Centro",
  city: "Piedade",
  state: "SP",
  postalCode: "18170-000",
  country: "BR",
  latitude: -23.7119,
  longitude: -47.4194,
  areaServed: [
    "Piedade - SP",
    "Sorocaba - SP",
    "Votorantim - SP",
    "Tapiraí - SP",
    "Salto de Pirapora - SP",
    "Região Metropolitana de Sorocaba",
  ],
  // Preencha com o link direto de avaliação (g.page/r/.../review) do Perfil da Empresa no Google
  googleReviewUrl: "",
  googleMapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=TopVan+Piedade+SP",
} as const;

export const IMAGES = {
  hero: "/images/hero-sprinter-topvan.jpg",
  about: "/images/sobre-juliano-topvan.jpg",
  fleet: "/images/frota-mercedes-sprinter-executiva.png",
  tourismAparecida: "/images/turismo-aparecida-do-norte.jpg",
  tourismSports: "/images/turismo-eventos-esportivos-kaikan.jpg",
  tourismWaterPark: "/images/turismo-castelo-park-aquatico.jpg",
} as const;

export const MORNING_SCHOOLS = [
  "Colégio Ser (Sorocaba)",
  "Colégio Objetivo Sorocaba",
  "Colégio Anglo Sorocaba",
  "ETEC Fernando Prestes",
  "ETEC Rubens de Faria e Souza",
  "FADI (Faculdade de Direito de Sorocaba)",
  "FEFISO (Faculdade de Educação Física)",
  "IFSP Campus Sorocaba",
] as const;

export const NIGHT_UNIVERSITIES = [
  "UNISO (Universidade de Sorocaba)",
  "FACENS (Centro Universitário Facens)",
  "UNIP Campus Sorocaba",
  "Anhanguera Sorocaba",
  "FATEC Sorocaba",
] as const;

export interface ServiceNavItem {
  href: string;
  title: string;
  shortTitle: string;
  description: string;
  badge: string;
}

export const SERVICES_NAV: ServiceNavItem[] = [
  {
    href: "/transporte-universitario-piedade-sorocaba",
    title: "Transporte Universitário Piedade ⇄ Sorocaba",
    shortTitle: "Transporte Universitário",
    description:
      "Van universitária diária no período noturno saindo de Piedade para UNISO, FACENS, UNIP, Anhanguera e FATEC Sorocaba.",
    badge: "Rota Noturna Diária",
  },
  {
    href: "/transporte-escolar-piedade-sorocaba",
    title: "Transporte Escolar Piedade ⇄ Sorocaba",
    shortTitle: "Transporte Escolar",
    description:
      "Rota matinal porta a porta de Piedade para Colégio Ser, Objetivo, Anglo, ETEC Fernando Prestes, ETEC Rubens de Faria e IFSP.",
    badge: "Período da Manhã",
  },
  {
    href: "/aluguel-de-van-turismo-piedade",
    title: "Aluguel de Van e Turismo em Piedade",
    shortTitle: "Turismo e Fretamento",
    description:
      "Fretamento de van executiva com motorista para excursões, romarias a Aparecida do Norte, parques aquáticos, litoral e passeios.",
    badge: "Viagens e Excursões",
  },
  {
    href: "/transfer-aeroportos-eventos-piedade",
    title: "Transfer Aeroportos, Casamentos e Eventos",
    shortTitle: "Aeroportos e Eventos",
    description:
      "Traslados executivos de Piedade e região para Guarulhos (GRU), Congonhas (CGH), Viracopos (VCP), shows, casamentos e empresas.",
    badge: "Executivo 24h",
  },
  {
    href: "/frota-mercedes-sprinter-executiva",
    title: "Frota Mercedes-Benz Sprinter Executiva",
    shortTitle: "Nossa Frota",
    description:
      "Van Mercedes-Benz Sprinter preta com 18 lugares em couro reclináveis, ar-condicionado, TV digital e conectividade Alexa.",
    badge: "18 Lugares Executivos",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const HOME_FAQS: FAQItem[] = [
  {
    question: "A Topvan busca o aluno na porta de casa em Piedade?",
    answer:
      "Sim! Dentro do perímetro urbano e bairros atendidos em Piedade-SP, realizamos embarque e desembarque porta a porta sempre que viável no roteiro, oferecendo mais segurança para estudantes e tranquilidade para os pais.",
  },
  {
    question: "Quais faculdades de Sorocaba a van universitária atende?",
    answer:
      "Nossa rota universitária noturna sai de Piedade e atende diretamente UNISO (Universidade de Sorocaba), FACENS, UNIP Sorocaba, Anhanguera Sorocaba e FATEC Sorocaba, com retorno organizado após o término das aulas.",
  },
  {
    question: "Vocês fazem transporte escolar no período da manhã para Sorocaba?",
    answer:
      "Sim. No período matutino, atendemos estudantes de Piedade para escolas e instituições no centro e bairros de Sorocaba, incluindo Colégio Ser, Objetivo, Anglo, ETEC Fernando Prestes, ETEC Rubens de Faria, FADI, FEFISO e IFSP.",
  },
  {
    question: "Como funciona o aluguel de van para turismo, romarias e eventos?",
    answer:
      "Você informa a data, horário de saída, destino e quantidade de passageiros (até 18 lugares) pelo WhatsApp (15) 99628-4505. Enviamos o orçamento personalizado na hora, já com motorista experiente e van executiva revisada.",
  },
  {
    question: "A Topvan faz transfer para aeroportos saindo de Piedade?",
    answer:
      "Sim. Realizamos traslados privativos e para grupos saindo de Piedade e região com destino aos aeroportos de Guarulhos (GRU), Congonhas (CGH) e Viracopos (VCP), com pontualidade e espaço amplo para bagagens.",
  },
  {
    question: "Quais os diferenciais da van da Topvan?",
    answer:
      "Operamos com Mercedes-Benz Sprinter preta 100% executiva para 18 passageiros, equipada com bancos em couro reclináveis, ar-condicionado com dutos individuais, TV digital, sistema de som integrado e conectividade Alexa.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Para transporte universitário e escolar trabalhamos com mensalidades práticas via PIX ou dinheiro. Para fretamentos de turismo, eventos e traslados, combinamos o pagamento diretamente no fechamento pelo WhatsApp.",
  },
];

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: COMPANY.name,
    alternateName: ["Topvan Piedade", "Topvan Locadora de Veículos", "TopVan"],
    legalName: COMPANY.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/TopVan.svg`,
    image: [
      `${SITE_URL}${IMAGES.hero}`,
      `${SITE_URL}${IMAGES.fleet}`,
      `${SITE_URL}${IMAGES.about}`,
    ],
    description:
      "Transporte universitário, transporte escolar, aluguel de van para turismo, transfer para aeroportos e fretamento executivo em Piedade-SP com rota diária Piedade ⇄ Sorocaba.",
    telephone: COMPANY.phoneE164,
    email: COMPANY.email,
    taxID: COMPANY.cnpj,
    foundingDate: String(COMPANY.foundingYear),
    founder: {
      "@type": "Person",
      name: COMPANY.founder,
    },
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.state,
      postalCode: COMPANY.postalCode,
      addressCountry: COMPANY.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.latitude,
      longitude: COMPANY.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Piedade", addressRegion: "SP", addressCountry: "BR" },
      { "@type": "City", name: "Sorocaba", addressRegion: "SP", addressCountry: "BR" },
      { "@type": "City", name: "Votorantim", addressRegion: "SP", addressCountry: "BR" },
      { "@type": "City", name: "Tapiraí", addressRegion: "SP", addressCountry: "BR" },
      { "@type": "City", name: "Salto de Pirapora", addressRegion: "SP", addressCountry: "BR" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phoneE164,
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Transporte e Fretamento de Vans",
      itemListElement: SERVICES_NAV.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `${SITE_URL}${service.href}`,
        },
      })),
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Topvan Piedade",
    description:
      "Transporte universitário, escolar e aluguel de vans executivas em Piedade e Sorocaba-SP.",
    inLanguage: "pt-BR",
    publisher: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function getFaqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getServiceSchema(params: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    serviceType: params.serviceType,
    url: `${SITE_URL}${params.path}`,
    provider: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
    areaServed: (params.areaServed ?? ["Piedade - SP", "Sorocaba - SP"]).map(
      (area) => ({
        "@type": "Place",
        name: area,
      })
    ),
  };
}

export function getArticleSchema(params: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${params.path}`,
    },
    image: `${SITE_URL}${params.image}`,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    inLanguage: "pt-BR",
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: SITE_URL,
    },
    publisher: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
  };
}
