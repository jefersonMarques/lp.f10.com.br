export type LandingPageVariant = 'control' | 'a' | 'b';

export type LandingPage = {
  slug: string;
  productName: string;
  testName: string;
  variant: LandingPageVariant;
  theme: {
    accent: string;
    background: string;
  };
  meta: {
    title: string;
    description: string;
  };
  hero: {
    image: string;
    alt: string;
    accessibleTitle: string;
    videoUrl: string;
  };
  conversion: {
    primaryLabel: string;
    primaryHref: string;
    formTitle: string;
    formCopy: string;
    microcopy: string;
  };
  sections: {
    pain: string;
    promise: string;
    benefits: Array<{ title: string; copy: string }>;
    proof: Array<{ title: string; copy: string }>;
    process: Array<{ title: string; copy: string }>;
    objections: Array<{ title: string; copy: string }>;
  };
};

type LandingPageInput = Omit<LandingPage, 'slug'>;

const whatsappBaseUrl = 'https://wa.me/5541992943443';

const buildWhatsappUrl = (message: string) => `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;

const createPage = (slug: string, page: LandingPageInput): LandingPage => ({
  slug,
  ...page
});

const financeiroA: LandingPageInput = {
  productName: 'Financeiro F10',
  testName: 'financeiro-first-fold-video',
  variant: 'a',
  theme: {
    accent: '#c65c2d',
    background: '#f4f0ea'
  },
  meta: {
    title: 'Financeiro escolar F10 | Mensalidades, PIX, boletos e fluxo de caixa',
    description: 'Landing page de campanha para o módulo financeiro escolar F10.'
  },
  hero: {
    image: '/media/hero-financeiro-a.webp',
    alt: 'Arte mobile first do Financeiro F10 com chamada para vídeo de demonstração.',
    accessibleTitle: 'Controle financeiro escolar sem planilhas paralelas.',
    videoUrl: ''
  },
  conversion: {
    primaryLabel: 'Quero ver o financeiro funcionando',
    primaryHref: buildWhatsappUrl('Quero ver uma demonstração do Financeiro F10.'),
    formTitle: 'Receba uma demonstração focada no financeiro da sua escola',
    formCopy: 'Informe os dados principais para o time comercial entender o cenário e montar uma apresentação objetiva.',
    microcopy: 'Sem compromisso. Atendimento pelo time comercial F10.'
  },
  sections: {
    pain: 'A escola recebe por boleto, PIX, cartão, caixa e acordo manual, mas a gestão perde previsibilidade quando tudo fica espalhado.',
    promise: 'O Financeiro F10 centraliza contratos, cobranças, recebimentos, contas a pagar, fluxo de caixa e indicadores em um único painel.',
    benefits: [
      { title: 'Cobrança ligada ao contrato', copy: 'Parcelas, vencimentos e histórico financeiro partem do contrato do aluno, reduzindo conferência manual.' },
      { title: 'PIX, boleto e caixa no fluxo', copy: 'A equipe acompanha recebimentos por canais diferentes sem perder a visão da situação do aluno.' },
      { title: 'Menos inadimplência invisível', copy: 'A rotina mostra o que venceu, o que foi pago e o que precisa de ação rápida.' }
    ],
    proof: [
      { title: '+500 redes e escolas', copy: 'A F10 apresenta base de redes e escolas atendidas no próprio site institucional.' },
      { title: 'Ecossistema integrado', copy: 'Financeiro conversa com comercial, pedagógico, portal, app e indicadores.' },
      { title: 'Operação educacional', copy: 'A solução é pensada para cursos livres, escolas de idiomas, franquias e multiunidades.' }
    ],
    process: [
      { title: 'Diagnóstico rápido', copy: 'Entender volume de alunos, formas de recebimento e gargalos de cobrança.' },
      { title: 'Demonstração guiada', copy: 'Mostrar mensalidades, cobrança, caixa, contas a pagar e relatórios no mesmo fluxo.' },
      { title: 'Próximo passo comercial', copy: 'Definir plano, implantação e prioridade de uso para a realidade da escola.' }
    ],
    objections: [
      { title: 'Já uso planilha', copy: 'A planilha pode continuar como apoio, mas a rotina principal precisa gerar histórico e rastreabilidade.' },
      { title: 'Minha equipe é pequena', copy: 'O ganho tende a aparecer justamente quando poucas pessoas precisam controlar muitas cobranças.' },
      { title: 'Tenho vários meios de pagamento', copy: 'A landing conduz para a demonstração do fluxo integrado de boleto, PIX, caixa e cartão.' }
    ]
  }
};

const financeiroB: LandingPageInput = {
  ...financeiroA,
  variant: 'b',
  theme: {
    accent: '#32748e',
    background: '#eef3f2'
  },
  hero: {
    ...financeiroA.hero,
    image: '/media/hero-financeiro-b.webp',
    accessibleTitle: 'Receba melhor com menos retrabalho no financeiro escolar.'
  },
  sections: {
    ...financeiroA.sections,
    pain: 'O problema não é apenas cobrar. É saber, todos os dias, quem pagou, quem atrasou e onde o caixa da escola está vazando.',
    promise: 'O Financeiro F10 organiza a operação para a escola ganhar clareza antes que a inadimplência vire urgência.'
  }
};

const pedagogicoA: LandingPageInput = {
  productName: 'Pedagógico F10',
  testName: 'pedagogico-first-fold-video',
  variant: 'a',
  theme: {
    accent: '#5f57b6',
    background: '#f1eff8'
  },
  meta: {
    title: 'Pedagógico F10 | Cursos, turmas, presença e jornada do aluno',
    description: 'Landing page de campanha para o módulo pedagógico F10.'
  },
  hero: {
    image: '/media/hero-pedagogico-a.webp',
    alt: 'Arte mobile first do Pedagógico F10 com chamada para vídeo de demonstração.',
    accessibleTitle: 'Organize cursos, turmas, presença e certificados em uma única jornada.',
    videoUrl: ''
  },
  conversion: {
    primaryLabel: 'Quero ver o pedagógico funcionando',
    primaryHref: buildWhatsappUrl('Quero ver uma demonstração do Pedagógico F10.'),
    formTitle: 'Veja como organizar a rotina pedagógica no F10',
    formCopy: 'A demonstração mostra turma, presença, jornada do aluno, EAD, app e certificado no mesmo fluxo.',
    microcopy: 'Demonstração objetiva para coordenação, secretaria e direção.'
  },
  sections: {
    pain: 'Quando secretaria, professor, EAD e aplicativo trabalham separados, a escola perde histórico, contexto e velocidade para agir.',
    promise: 'O Pedagógico F10 conecta matrícula, cursos, turmas, pauta, conteúdos, jornada do aluno, app e certificado em um fluxo único.',
    benefits: [
      { title: 'Turmas e cursos organizados', copy: 'Cursos, planos, documentos, turmas e contratos conversam desde a matrícula.' },
      { title: 'Presença no celular', copy: 'A pauta pode sair do papel e ir para o app do professor, com registro mais rápido.' },
      { title: 'Jornada do aluno visível', copy: 'Coordenação identifica faltosos, desistentes, atividades extras e alunos fora do ciclo natural.' }
    ],
    proof: [
      { title: 'App, portal e AVA', copy: 'O ecossistema conecta sala física, ambiente virtual e comunicação com aluno.' },
      { title: 'Certificados e conclusão', copy: 'Critérios, modelos e emissão ficam dentro da rotina acadêmica.' },
      { title: 'Menos sistemas paralelos', copy: 'A proposta é reduzir planilha, diário em papel e retrabalho entre setores.' }
    ],
    process: [
      { title: 'Mapear a rotina', copy: 'Entender como a escola cria turmas, registra presença e acompanha avanço.' },
      { title: 'Mostrar a jornada', copy: 'Apresentar pauta, conteúdos, app do professor, portal e indicadores pedagógicos.' },
      { title: 'Definir implantação', copy: 'Priorizar o fluxo que gera ganho operacional mais rápido.' }
    ],
    objections: [
      { title: 'Professor não gosta de sistema', copy: 'A demonstração precisa mostrar poucos cliques e uso direto no celular.' },
      { title: 'Já tenho EAD', copy: 'O foco é integrar EAD, app, secretaria e acompanhamento, não trocar tudo sem critério.' },
      { title: 'Minha escola é curso livre', copy: 'A estrutura foi pensada justamente para cursos livres, idiomas, técnicos e franquias.' }
    ]
  }
};

const vendasA: LandingPageInput = {
  productName: 'CRM Escolar F10',
  testName: 'vendas-first-fold-video',
  variant: 'a',
  theme: {
    accent: '#dc7a26',
    background: '#f5efe7'
  },
  meta: {
    title: 'CRM Escolar F10 | WhatsApp, leads, tarefas e matrículas',
    description: 'Landing page de campanha para vendas, CRM escolar e captação F10.'
  },
  hero: {
    image: '/media/hero-vendas-a.webp',
    alt: 'Arte mobile first do CRM Escolar F10 com chamada para vídeo de demonstração.',
    accessibleTitle: 'Transforme leads em matrículas com processo comercial escolar.',
    videoUrl: ''
  },
  conversion: {
    primaryLabel: 'Quero ver o CRM funcionando',
    primaryHref: buildWhatsappUrl('Quero ver uma demonstração do CRM Escolar F10.'),
    formTitle: 'Veja como organizar captação e matrículas no F10',
    formCopy: 'A demonstração mostra leads, WhatsApp, tarefas, funil e rotina comercial em uma visão única.',
    microcopy: 'Ideal para escolas que não querem perder lead por falta de acompanhamento.'
  },
  sections: {
    pain: 'Lead frio quase sempre é falta de velocidade, contexto e próxima ação clara para o time comercial.',
    promise: 'O CRM Escolar F10 centraliza leads, WhatsApp, tarefas, histórico, funil e alertas para a equipe vender com disciplina.',
    benefits: [
      { title: 'WhatsApp no processo', copy: 'Conversas deixam de ficar soltas e passam a compor o histórico do lead.' },
      { title: 'Funil visível', copy: 'A gestão acompanha etapas, retornos, visitas, propostas e matrículas fechadas.' },
      { title: 'Tarefas e alertas', copy: 'O vendedor sabe quem atender, quando retornar e qual próxima ação executar.' }
    ],
    proof: [
      { title: 'Histórico centralizado', copy: 'A troca de atendente não quebra o contexto da matrícula.' },
      { title: 'Multiusuário', copy: 'O atendimento pode ser acompanhado por setor e gestão, conforme permissões.' },
      { title: 'Foco educacional', copy: 'A lógica comercial foi escrita para escolas, cursos e franquias educacionais.' }
    ],
    process: [
      { title: 'Lead entra', copy: 'Origem, responsável e dados iniciais ficam organizados desde o primeiro contato.' },
      { title: 'Etapa define ação', copy: 'O funil orienta ligação, WhatsApp, visita, proposta ou matrícula.' },
      { title: 'Gestão acompanha', copy: 'Direção visualiza volume, gargalos e execução sem depender de relato manual.' }
    ],
    objections: [
      { title: 'Já uso WhatsApp', copy: 'A diferença é transformar WhatsApp em operação rastreável, não apenas conversa.' },
      { title: 'Tenho poucos vendedores', copy: 'Quanto menor a equipe, mais caro é perder lead por esquecimento.' },
      { title: 'Uso planilha de leads', copy: 'A planilha registra dados; o CRM organiza ação, histórico e cadência.' }
    ]
  }
};

export const landingPages: Record<string, LandingPage> = {
  financeiro: createPage('financeiro', financeiroA),
  'financeiro-a': createPage('financeiro-a', financeiroA),
  'financeiro-b': createPage('financeiro-b', financeiroB),
  pedagogico: createPage('pedagogico', pedagogicoA),
  'pedagogico-a': createPage('pedagogico-a', pedagogicoA),
  vendas: createPage('vendas', vendasA),
  'vendas-a': createPage('vendas-a', vendasA),
  comercial: createPage('comercial', vendasA)
};

export const getLandingPage = (slug: string) => landingPages[slug] ?? null;

export const getLandingPageSlugs = () => Object.keys(landingPages);
