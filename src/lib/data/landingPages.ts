export type LandingPageVariant = 'control' | 'a' | 'b';

export type LandingIconName = 'target' | 'message' | 'funnel' | 'task' | 'chart' | 'userPlus' | 'zap' | 'school' | 'importFile';

export type LandingSectionItem = {
  title: string;
  copy: string;
  icon?: LandingIconName;
};

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
    benefits: LandingSectionItem[];
    proof: LandingSectionItem[];
    process: LandingSectionItem[];
    objections: LandingSectionItem[];
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
  testName: 'financeiro-funcionalidades-diretas',
  variant: 'a',
  theme: {
    accent: '#EA6D0B',
    background: '#f5f1eb'
  },
  meta: {
    title: 'Financeiro F10 | Cobrança automática por WhatsApp, PIX, cartão e indicadores',
    description: 'Landing page de campanha para o Financeiro F10.'
  },
  hero: {
    image: '/media/hero-financeiro-a.webp',
    alt: 'Arte mobile first do Financeiro F10 com foco em cobrança automática, PIX, cartão e indicadores.',
    accessibleTitle: 'Cobrança automática por WhatsApp, PIX, cartão e indicadores financeiros para escolas.',
    videoUrl: ''
  },
  conversion: {
    primaryLabel: 'Ver vídeo do financeiro',
    primaryHref: buildWhatsappUrl('Quero ver o Financeiro F10 com cobrança automática por WhatsApp, PIX, cartão e indicadores.'),
    formTitle: 'Financeiro escolar sem cobrança perdida',
    formCopy: 'Veja cobrança automática, recebimentos e indicadores em uma demonstração direta.',
    microcopy: 'Foco em cobrança, recebimento e visão financeira da escola.'
  },
  sections: {
    pain: 'Cobrança manual atrasa recebimento.',
    promise: 'O Financeiro F10 automatiza lembretes, centraliza pagamentos e mostra os números que importam.',
    benefits: [
      { title: 'WhatsApp automático', copy: 'Mensagens de cobrança e lembretes para reduzir esquecimento e retrabalho.' },
      { title: 'PIX e cartão', copy: 'Recebimentos por meios modernos, com acompanhamento dentro da rotina financeira.' },
      { title: 'Indicadores claros', copy: 'Inadimplência, previsão de caixa e recebimentos em painéis objetivos.' }
    ],
    proof: [
      { title: 'Tudo no contrato', copy: 'Parcelas, vencimentos e histórico financeiro partem da matrícula do aluno.' },
      { title: 'Menos planilha', copy: 'A rotina fica registrada, rastreável e pronta para conferência.' },
      { title: 'Visão da gestão', copy: 'Direção acompanha situação financeira sem depender de relatório manual.' }
    ],
    process: [
      { title: 'Configura cobrança', copy: 'Define contrato, parcelas, vencimentos e canais de pagamento.' },
      { title: 'Automatiza contato', copy: 'Aciona lembretes e cobranças pelo fluxo definido pela escola.' },
      { title: 'Acompanha resultado', copy: 'Analisa inadimplência, recebimentos e caixa com indicadores.' }
    ],
    objections: [
      { title: 'Já cobro pelo WhatsApp', copy: 'A diferença é tirar a cobrança da memória da equipe e colocar no processo.' },
      { title: 'Já tenho banco ou gateway', copy: 'A landing deve mostrar a rotina da escola, não apenas o meio de pagamento.' },
      { title: 'Quero algo simples', copy: 'O foco desta campanha é cobrança, recebimento e indicadores. Sem dispersão.' }
    ]
  }
};

const financeiroB: LandingPageInput = {
  ...financeiroA,
  variant: 'b',
  theme: {
    accent: '#000A57',
    background: '#eef1f7'
  },
  hero: {
    ...financeiroA.hero,
    image: '/media/hero-financeiro-b.webp',
    accessibleTitle: 'Indicadores financeiros para saber quem pagou, quem atrasou e quanto entra no caixa.'
  },
  conversion: {
    ...financeiroA.conversion,
    primaryLabel: 'Ver indicadores financeiros',
    primaryHref: buildWhatsappUrl('Quero ver os indicadores financeiros do F10 para acompanhar cobrança, PIX, cartão e inadimplência.'),
    formTitle: 'Veja o financeiro da escola em números',
    formCopy: 'Demonstração rápida dos indicadores de cobrança, recebimento, inadimplência e caixa.'
  },
  sections: {
    ...financeiroA.sections,
    pain: 'Sem indicador, a cobrança vira achismo.',
    promise: 'O Financeiro F10 mostra quem pagou, quem atrasou, quanto entrou e onde agir primeiro.',
    benefits: [
      { title: 'Inadimplência visível', copy: 'Identifique atrasos sem esperar fechamento manual.' },
      { title: 'Recebimentos por canal', copy: 'Acompanhe PIX, cartão, boleto e caixa com mais clareza.' },
      { title: 'Previsão de caixa', copy: 'Veja entradas previstas e realizadas para decidir com mais segurança.' }
    ]
  }
};

const captacaoA: LandingPageInput = {
  productName: 'Captação de Alunos F10',
  testName: 'captacao-funcionalidades-diretas',
  variant: 'a',
  theme: {
    accent: '#EA6D0B',
    background: '#f6f1ea'
  },
  meta: {
    title: 'Captação de Alunos F10 | Leads, WhatsApp, CRM e matrículas',
    description: 'Landing page de campanha para captação de alunos com F10.'
  },
  hero: {
    image: '/media/hero-vendas-a.webp',
    alt: 'Arte mobile first da Captação de Alunos F10 com foco em leads, WhatsApp, CRM e matrículas.',
    accessibleTitle: 'Captação de alunos com leads, WhatsApp, CRM, funil e matrículas no mesmo processo.',
    videoUrl: ''
  },
  conversion: {
    primaryLabel: 'Ver captação funcionando',
    primaryHref: buildWhatsappUrl('Quero ver a Captação de Alunos F10 com leads, WhatsApp, CRM, funil, importação de planilhas e matrículas.'),
    formTitle: 'Pare de perder leads de novos alunos',
    formCopy: 'Veja como importar bases, organizar atendimento, WhatsApp, tarefas e matrículas em uma demonstração direta.',
    microcopy: 'Foco em gerar, importar, atender e converter interessados em alunos matriculados.'
  },
  sections: {
    pain: 'Lead sem resposta vira matrícula perdida.',
    promise: 'A Captação F10 transforma campanha, planilhas, outros sistemas, WhatsApp, funil, tarefas e matrícula em uma operação comercial única.',
    benefits: [
      { title: 'Leads no CRM', copy: 'Origem, responsável, etapa e histórico entram no mesmo lugar.', icon: 'target' },
      { title: 'Importação de bases', copy: 'Traga leads de planilhas e outros sistemas para continuar o atendimento sem começar do zero.', icon: 'importFile' },
      { title: 'WhatsApp no funil', copy: 'O atendimento sai do celular isolado e vira processo comercial.', icon: 'message' },
      { title: 'Matrícula mais rápida', copy: 'Contato, proposta e matrícula avançam sem retrabalho entre setores.', icon: 'userPlus' }
    ],
    proof: [
      { title: 'Base antiga aproveitada', copy: 'Leads parados em planilhas podem entrar no funil com origem, etapa e responsável.', icon: 'importFile' },
      { title: 'Campanha rastreável', copy: 'A escola sabe qual canal gera lead e qual lead vira matrícula.', icon: 'chart' },
      { title: 'Próxima ação clara', copy: 'Tarefas e retornos reduzem esquecimento e lead parado.', icon: 'task' },
      { title: 'Funil visível', copy: 'Gestão acompanha volume, etapa, gargalo e conversão.', icon: 'funnel' }
    ],
    process: [
      { title: 'Base entra', copy: 'Importe leads de planilhas ou de outros sistemas para centralizar a operação.', icon: 'importFile' },
      { title: 'Lead chega', copy: 'A origem e o interesse ficam registrados automaticamente no processo.', icon: 'target' },
      { title: 'Time atende', copy: 'WhatsApp, tarefas e etapa indicam o próximo movimento comercial.', icon: 'zap' },
      { title: 'Matrícula fecha', copy: 'O histórico acompanha o aluno até o fechamento da matrícula.', icon: 'school' }
    ],
    objections: [
      { title: 'Tenho tudo em planilha', copy: 'A planilha vira ponto de partida: importa, organiza e começa a atender com processo.', icon: 'importFile' },
      { title: 'Já recebo leads no WhatsApp', copy: 'Receber lead não é processo. A diferença é controlar atendimento e retorno.', icon: 'message' },
      { title: 'Minha equipe é pequena', copy: 'Equipe pequena precisa de cadência para não perder oportunidade.', icon: 'task' },
      { title: 'Quero vender mais agora', copy: 'O foco desta campanha é velocidade de atendimento e conversão.', icon: 'zap' }
    ]
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
  'captacao-a': createPage('captacao-a', captacaoA),
  pedagogico: createPage('pedagogico', pedagogicoA),
  'pedagogico-a': createPage('pedagogico-a', pedagogicoA),
  vendas: createPage('vendas', vendasA),
  'vendas-a': createPage('vendas-a', vendasA),
  comercial: createPage('comercial', vendasA)
};

export const getLandingPage = (slug: string) => landingPages[slug] ?? null;

export const getLandingPageSlugs = () => Object.keys(landingPages);
