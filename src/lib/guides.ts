import { IMAGES } from "@/lib/site";

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuidePost {
  slug: string;
  badge: string;
  title: string;
  shortTitle: string;
  description: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  relatedServiceHref: string;
  relatedServiceLabel: string;
  sections: GuideSection[];
}

export const GUIDES: GuidePost[] = [
  {
    slug: "auxilio-transporte-universitario-piedade",
    badge: "Guia do Estudante • Piedade-SP",
    title:
      "Auxílio Transporte Universitário em Piedade-SP: Como Funciona e Como Planejar Sua Rota para Sorocaba",
    shortTitle: "Auxílio Transporte Universitário em Piedade-SP",
    description:
      "Entenda como funciona o Auxílio-Transporte Universitário da Prefeitura de Piedade-SP, prazos semestrais de cadastro e como garantir vaga em van executiva para Sorocaba.",
    excerpt:
      "Saiba quem pode solicitar o benefício estudantil da Prefeitura de Piedade e por que reservar sua vaga na van com antecedência garante tranquilidade nas aulas.",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    readingTime: "4 min de leitura",
    image: IMAGES.hero,
    imageAlt:
      "Van executiva Mercedes Sprinter preta da Topvan atendendo estudantes universitários de Piedade para Sorocaba",
    relatedServiceHref: "/transporte-universitario-piedade-sorocaba",
    relatedServiceLabel: "Conhecer o Transporte Universitário Piedade ⇄ Sorocaba",
    sections: [
      {
        heading: "O que é o Auxílio-Transporte Universitário de Piedade",
        paragraphs: [
          "Todos os semestres, estudantes residentes em Piedade-SP que cursam ensino técnico ou superior presencial em municípios vizinhos — principalmente Sorocaba, Votorantim e região — buscam informações sobre o programa de Auxílio-Transporte Universitário disponibilizado pela Prefeitura de Piedade.",
          "Gerenciado por meio da Secretaria de Educação, Cultura, Esporte e Lazer, o benefício tem como objetivo ajudar nas despesas de deslocamento diário dos alunos conforme critérios previstos em edital oficial e faixas de renda familiar.",
        ],
      },
      {
        heading: "Prazos comuns de inscrição e onde confirmar os editais",
        paragraphs: [
          "As inscrições costumam abrir semestralmente no início de cada período letivo (geralmente entre janeiro/fevereiro para o 1º semestre e julho/agosto para o 2º semestre).",
          "Como datas, formulários e documentação exigida podem mudar a cada edital, é fundamental acompanhar diretamente os canais oficiais da Prefeitura de Piedade ou consultar presencialmente a Secretaria de Educação (Rua Rui Barbosa, 30, Centro).",
        ],
        bullets: [
          "Separe com antecedência comprovante de matrícula atualizado na faculdade ou curso técnico.",
          "Tenha em mãos comprovante de residência em Piedade-SP e documentos pessoais.",
          "Confira no site oficial piedade.sp.gov.br a publicação do edital vigente e a lista de contemplados.",
        ],
      },
      {
        heading: "Por que muitos universitários preferem van fretada porta a porta",
        paragraphs: [
          "Mesmo contando com apoio financeiro ou custeando o trajeto por conta própria, quem estuda em Sorocaba sabe que depender apenas de ônibus intermunicipal até a rodoviária e depois pegar transporte urbano encarece o tempo de viagem — especialmente na volta das aulas noturnas.",
          "Com o transporte universitário da Topvan, a van busca o aluno em Piedade e deixa diretamente nas principais instituições de Sorocaba (UNISO, FACENS, UNIP, Anhanguera e FATEC), garantindo retorno seguro logo após o encerramento das aulas.",
        ],
        bullets: [
          "Embarque e desembarque organizados em Piedade, evitando longas esperas noturnas.",
          "Trajeto confortável em Mercedes-Benz Sprinter executiva com ar-condicionado e bancos em couro reclináveis.",
          "Vagas limitadas por turno: o ideal é consultar disponibilidade antes do início do semestre letivo.",
        ],
      },
    ],
  },
  {
    slug: "como-escolher-van-universitaria-piedade-sorocaba",
    badge: "Segurança & Rotas • Piedade ⇄ Sorocaba",
    title:
      "Como Escolher Van Universitária e Escolar de Piedade para Sorocaba com Segurança",
    shortTitle: "Como Escolher Van Universitária Piedade ⇄ Sorocaba",
    description:
      "Checklist prático para pais e estudantes de Piedade-SP avaliarem pontualidade, frota, embarque porta a porta e conforto antes de fechar o transporte diário.",
    excerpt:
      "Vai estudar em Sorocaba de manhã ou à noite? Veja os critérios essenciais para escolher uma van confiável e viajar com segurança o ano inteiro.",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    readingTime: "5 min de leitura",
    image: IMAGES.fleet,
    imageAlt:
      "Interior e padrão executivo da van Mercedes-Benz Sprinter preta da Topvan em Piedade-SP",
    relatedServiceHref: "/transporte-escolar-piedade-sorocaba",
    relatedServiceLabel: "Ver Rota Escolar Diurna para Escolas de Sorocaba",
    sections: [
      {
        heading: "1. Experiência na rodovia e tradição da empresa em Piedade",
        paragraphs: [
          "O trajeto diário entre Piedade e Sorocaba exige conhecimento real das condições da estrada, horários de pico e logística de retorno. Optar por uma empresa estabelecida na cidade faz toda a diferença para pais e alunos.",
          "A Topvan atua desde 2016 em Piedade-SP, somando mais de uma década de experiência do fundador Juliano Arruda do Amaral no transporte de passageiros, com empresa formalizada (CNPJ 23.928.576/0001-19) e frota própria revisada.",
        ],
      },
      {
        heading: "2. Atendimento exato à sua escola ou faculdade",
        paragraphs: [
          "Antes de fechar qualquer vaga, confirme se o itinerário atende o campus e o turno em que você estuda sem improvisos ou atrasos na primeira aula.",
        ],
        bullets: [
          "Período da Manhã (Escolas no Centro e região de Sorocaba): Colégio Ser, Objetivo, Anglo, ETEC Fernando Prestes, ETEC Rubens de Faria, FADI, FEFISO e IFSP Sorocaba.",
          "Período da Noite (Universidades em Sorocaba): UNISO, FACENS, UNIP, Anhanguera e FATEC.",
        ],
      },
      {
        heading: "3. Embarque porta a porta e conforto na viagem diária",
        paragraphs: [
          "Passar cerca de uma hora por trecho todos os dias impacta diretamente o rendimento nos estudos. Vans pequenas ou sem manutenção tornam a rotina cansativa.",
          "Na Topvan, você viaja em Mercedes Sprinter executiva de 18 lugares com bancos de couro reclináveis, ar-condicionado completo, TV digital, som integrado e embarque porta a porta em Piedade sempre que possível na rota.",
        ],
      },
    ],
  },
  {
    slug: "destinos-excursao-aluguel-van-piedade",
    badge: "Turismo & Fretamento • Piedade-SP",
    title:
      "Aluguel de Van em Piedade-SP: Principais Destinos para Excursões, Romarias e Viagens em Grupo",
    shortTitle: "Destinos para Excursão e Aluguel de Van em Piedade",
    description:
      "Confira os destinos mais procurados para fretamento de van executiva saindo de Piedade-SP: Aparecida do Norte, parques aquáticos, litoral, eventos e aeroportos.",
    excerpt:
      "Reuniu a família, a igreja, a empresa ou a equipe esportiva? Conheça os roteiros favoritos para fretar uma van de 18 lugares saindo de Piedade.",
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    readingTime: "4 min de leitura",
    image: IMAGES.tourismAparecida,
    imageAlt:
      "Viagem de turismo e romaria com a Topvan saindo de Piedade-SP para Aparecida do Norte",
    relatedServiceHref: "/aluguel-de-van-turismo-piedade",
    relatedServiceLabel: "Solicitar Orçamento para Turismo e Fretamento",
    sections: [
      {
        heading: "Por que fretar uma van executiva em vez de ir em vários carros",
        paragraphs: [
          "Quando um grupo de 10 a 18 pessoas viaja junto em carros separados, os custos de combustível, pedágio, estacionamento e o desgaste de dirigir na volta se multiplicam.",
          "Com o aluguel de van com motorista da Topvan em Piedade, todo o grupo sai junto, aproveita a viagem com ar-condicionado, bancos reclináveis e música via Alexa, e volta com total segurança.",
        ],
      },
      {
        heading: "Destinos mais procurados saindo de Piedade-SP",
        paragraphs: [
          "Nossa van executiva atende roteiros bate-volta e viagens de fim de semana em todo o estado de São Paulo e regiões próximas:",
        ],
        bullets: [
          "Turismo Religioso e Romarias: Santuário Nacional de Aparecida do Norte, Canção Nova e encontros de igrejas.",
          "Parques Aquáticos e Lazer em Família: Castelo Park Aquático (Cesário Lange), Thermas dos Laranjais, Wet'n Wild e Hopi Hari.",
          "Litoral Paulista e Praias: Bate-volta ou fim de semana para Santos, Guarujá, Praia Grande, Ubatuba e Litoral Norte.",
          "Eventos Esportivos, Culturais e Corporativos: Transporte de equipes (como atletas de Piedade), feiras em São Paulo, Holambra e casamentos.",
          "Transfer para Aeroportos: Guarulhos (GRU), Congonhas (CGH) e Viracopos (VCP) com espaço para malas.",
        ],
      },
      {
        heading: "Como pedir um orçamento rápido de fretamento",
        paragraphs: [
          "Para receber o valor exato da sua viagem, basta enviar pelo WhatsApp (15) 99628-4505 o destino, a data e horário previstos de ida e volta e o número aproximado de passageiros.",
        ],
      },
    ],
  },
];

export function getGuideBySlug(slug: string): GuidePost | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}
