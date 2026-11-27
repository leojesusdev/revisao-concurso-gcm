/**
 * SIMULADO DE NOÇÕES DE DIREITO CONSTITUCIONAL — PORTAL DE ESTUDOS GCM SALVADOR 2026
 * - Quantidade de questões baseada na prova oficial GCM Salvador 2019 (5 questões: Q46 a Q50).
 * - Critérios de aprovação baseados exclusivamente no Edital nº 002/2026.
 * - Navegação compartilhada sincronizada com a configuração de links do portal.
 */

/* ==========================================================================
   1. CONFIGURAÇÃO DA NAVEGAÇÃO COMPARTILHADA
   ========================================================================== */
const disciplineLinks = {
  portugues: "lingua-portuguesa.html",
  raciocinioLogico: "raciocinio-logico.html",
  informatica: "",
  direitoConstitucional: "direito-constitucional.html",
  direitoPenal: "",
  administracao: "",
  conhecimentosAtuacao: "",
  legislacao: "",
  leiOrganica: ""
};

const disciplineLabels = {
  portugues: "Língua Portuguesa",
  raciocinioLogico: "Raciocínio Lógico-Matemático",
  informatica: "Informática",
  direitoConstitucional: "Noções de Direito Constitucional",
  direitoPenal: "Noções de Direito Penal e Direito Processual Penal",
  administracao: "Noções de Administração e Políticas Públicas",
  conhecimentosAtuacao: "Conhecimentos na Área de Atuação",
  legislacao: "Legislação",
  leiOrganica: "Lei Orgânica do Município de Salvador"
};

/* ==========================================================================
   2. BANCO DE 5 QUESTÕES + REVISÃO TEÓRICA + CORREÇÃO FUNDAMENTADA
   Espelha as 5 questões de Direito Constitucional (46 a 50) da prova FGV 2019.
   ========================================================================== */
const questionsData = [
  {
    id: 1,
    topic: 'Remédios Constitucionais (Art. 5º, CF/88)',
    reviewTitle: 'Qual remédio constitucional protege cada direito?',
    reviewConcept:
      'Os <strong>remédios constitucionais</strong> são garantias processuais previstas no Art. 5º da Constituição Federal de 1988 para proteger direitos fundamentais contra ilegalidades ou omissões do Poder Público. Nas provas da FGV, o segredo é identificar exatamente qual direito foi violado no caso concreto.',
    reviewArticle:
      'Art. 5º, LXVIII a LXXIII, CF/88 — HC (locomoção), HD (dados pessoais), MS (direito líquido e certo residual), MI (omissão normativa) e Ação Popular (patrimônio público/moralidade).',
    reviewRules: [
      '<strong>Habeas Corpus (LXVIII):</strong> protege a liberdade de locomoção (ir e vir).',
      '<strong>Habeas Data (LXXII):</strong> assegura o acesso ou a <em>retificação de informações relativas à pessoa do impetrante</em> em bancos de dados governamentais ou de caráter público.',
      '<strong>Mandado de Segurança (LXIX):</strong> protege direito líquido e certo <em>não amparado</em> por Habeas Corpus ou Habeas Data (caráter residual/subsidiário).',
      '<strong>Mandado de Injunção (LXXI):</strong> cabe quando falta norma regulamentadora que inviabilize o exercício de direitos constitucionais.'
    ],
    reviewTip:
      'Antes de marcar Mandado de Segurança em uma questão, pergunte-se: o caso envolve liberdade de locomoção (HC) ou acesso/correção de dados pessoais em registro público (HD)? Só use o MS se a resposta for NÃO.',
    reviewAlert:
      'Erro comum: confundir recusa administrativa de certidão para defesa de direitos (que cabe Mandado de Segurança) com acesso/retificação de dados pessoais do próprio impetrante em banco de dados público (que exige Habeas Data).',
    contextHtml:
      'Patrícia, cidadã residente em Salvador, descobriu que determinado órgão da Administração Pública Municipal mantinha, em banco de dados de caráter público, informações incorretas a respeito de seu próprio histórico cadastral, recusando-se formalmente a efetuar a retificação após pedido administrativo.<br><br>Desejando ingressar com a ação constitucional específica para retificar seus registros pessoais naquele cadastro público, Patrícia consultou seu advogado.',
    prompt:
      'À luz da sistemática constitucional, é correto afirmar que a ação cabível nesse caso é o(a)',
    options: {
      A: 'Mandado de Segurança.',
      B: 'Mandado de Injunção.',
      C: 'Habeas Data.',
      D: 'Ação Popular.',
      E: 'Habeas Corpus.'
    },
    correct: 'C',
    wrongFeedback: {
      A: 'O Mandado de Segurança (Art. 5º, LXIX) tem caráter residual e não se aplica quando o direito líquido e certo for amparado por Habeas Corpus ou Habeas Data.',
      B: 'O Mandado de Injunção (Art. 5º, LXXI) destina-se a suprir a ausência de norma regulamentadora que torne inviável o exercício de direito constitucional, o que não ocorre aqui.',
      D: 'A Ação Popular (Art. 5º, LXXIII) visa anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente ou ao patrimônio histórico e cultural, não à correção de dados pessoais.',
      E: 'O Habeas Corpus (Art. 5º, LXVIII) tutela exclusivamente a liberdade de locomoção diante de violência ou coação ilegal.'
    },
    correctExplanation:
      '<strong>Base constitucional (Art. 5º, LXXII, "b", CF/88):</strong> O <em>Habeas Data</em> será concedido tanto para assegurar o conhecimento de informações relativas à pessoa do impetrante em registros ou bancos de dados de entidades governamentais ou de caráter público, quanto para a <strong>retificação de dados</strong>, quando não se prefira fazê-lo por processo sigiloso, judicial ou administrativo.<br>Como houve recusa administrativa na retificação de dados pessoais da impetrante em banco de dados público, a via específica e cabível é o <strong>Habeas Data</strong> (rejeitando-se o Mandado de Segurança justamente por sua natureza subsidiária).'
  },
  {
    id: 2,
    topic: 'Direitos e Garantias Individuais: Inviolabilidade de Domicílio',
    reviewTitle: 'Quando é permitido entrar na casa sem consentimento do morador?',
    reviewConcept:
      'A Constituição garante a proteção da intimidade e da moradia ao declarar que a <strong>casa é asilo inviolável</strong> do indivíduo. Porém, nenhum direito fundamental é absoluto: o próprio Art. 5º, inciso XI, lista taxativamente as quatro exceções em que se admite o ingresso sem autorização do morador.',
    reviewArticle:
      'Art. 5º, XI, CF/88 — "a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial."',
    reviewRules: [
      '<strong>A qualquer hora (dia ou noite), sem mandado judicial:</strong> (1) flagrante delito; (2) desastre (ex.: incêndio, desabamento); (3) para prestar socorro.',
      '<strong>Somente durante o dia:</strong> cumprimento de <em>determinação judicial</em> (mandado de busca/prisão).',
      '<strong>Conceito amplo de "casa":</strong> abrange não só a residência habitual, mas também quarto de hotel ocupado ou espaço profissional fechado ao público.'
    ],
    reviewTip:
      'Separe sempre em dois grupos na hora da prova: <strong>Ordem judicial = só durante o dia</strong>; <strong>Flagrante, desastre ou socorro = qualquer horário</strong>.',
    reviewAlert:
      'Armadilha clássica da FGV: dizer que "à noite ninguém pode entrar na casa sem consentimento, em nenhuma hipótese", ou que "autoridade policial/prefeito pode expedir ordem de entrada". Ordem de entrada sem urgência só pode vir de juiz, e apenas durante o dia.',
    contextHtml:
      'Durante patrulhamento noturno de rotina em bairro de Salvador, às 23h, moradores acionaram uma equipe da Guarda Civil Municipal informando que um incêndio havia começado no interior de uma residência fechada, com risco imediato para um idoso desacordado.<br><br>Diante da urgência comprovada, e sem consentimento prévio do morador ou mandado judicial, os guardas ingressaram no imóvel para resgatar a vítima.',
    prompt:
      'À luz da sistemática afeta aos direitos e garantias constitucionais, a entrada no domicílio naquele instante',
    options: {
      A: 'violou garantia constitucional, pois somente determinação judicial permite o ingresso sem consentimento, em qualquer horário.',
      B: 'violou garantia constitucional, uma vez que ocorreu no período noturno, quando nenhuma exceção autoriza a entrada forçada.',
      C: 'é constitucionalmente admitida, por configurar situação de desastre ou prestação de socorro, independentemente do horário.',
      D: 'somente seria válida se houvesse autorização prévia do Prefeito Municipal ou do Delegado de Polícia.',
      E: 'exigiria que a equipe aguardasse o amanhecer do dia para ingressar sem mandado judicial.'
    },
    correct: 'C',
    wrongFeedback: {
      A: 'Além da determinação judicial (que só se cumpre durante o dia), o Art. 5º, XI autoriza expressamente a entrada sem consentimento em flagrante delito, desastre ou para prestar socorro.',
      B: 'O período noturno restringe apenas o cumprimento de ordem judicial. Flagrante delito, desastre e prestação de socorro autorizam o ingresso a qualquer hora do dia ou da noite.',
      D: 'Nem o Prefeito nem o Delegado de Polícia possuem reserva de jurisdição para autorizar entrada domiciliar fora das hipóteses constitucionais de urgência.',
      E: 'Aguardar o amanhecer aplica-se apenas ao cumprimento de ordem judicial fora do horário diurno, jamais a uma emergência de incêndio e socorro à vida.'
    },
    correctExplanation:
      '<strong>Base constitucional (Art. 5º, XI, CF/88):</strong> Embora a casa seja asilo inviolável, a Constituição ressalva expressamente os casos de <strong>flagrante delito, desastre ou prestação de socorro</strong> (que podem ocorrer a qualquer hora, inclusive à noite), limitando ao período diurno apenas a entrada por determinação judicial.<br>No caso concreto, às 23h, havia simultaneamente situação de desastre (incêndio) e necessidade de prestar socorro (idoso em risco), tornando o ingresso plenamente constitucional.'
  },
  {
    id: 3,
    topic: 'Administração Pública na CF/88 (Concurso e Cargo em Comissão)',
    reviewTitle: 'Regra do concurso público e exceção dos cargos em comissão',
    reviewConcept:
      'O Art. 37 da Constituição estabelece as normas gerais da Administração Pública direta e indireta de todos os entes (União, Estados, DF e Municípios). Para garantir igualdade de oportunidades (impessoalidade) e eficiência, a <strong>investidura em cargo ou emprego público depende de concurso público</strong>, com exceção expressa para os cargos em comissão.',
    reviewArticle:
      'Art. 37, II e V, CF/88 — Concurso público de provas ou de provas e títulos; ressalva para cargos em comissão de livre nomeação e exoneração (apenas direção, chefia e assessoramento).',
    reviewRules: [
      '<strong>Regra geral (Art. 37, II):</strong> cargo efetivo ou emprego público exige prévia aprovação em concurso público de <em>provas</em> ou de <em>provas e títulos</em>.',
      '<strong>Exceção (Art. 37, II e V):</strong> cargos em comissão, declarados em lei de livre nomeação e exoneração, destinam-se <strong>apenas às atribuições de direção, chefia e assessoramento</strong>.',
      '<strong>Validade do concurso (Art. 37, III):</strong> prazo de até 2 anos, prorrogável uma vez, por igual período.'
    ],
    reviewTip:
      'Guarde a dupla: cargo efetivo = concurso público; cargo em comissão = livre nomeação/exoneração, mas restrito a direção, chefia e assessoramento (nunca para funções operacionais comuns).',
    reviewAlert:
      'Cuidado com generalizações absolutistas ("todo e qualquer cargo exige concurso" ou "cargo em comissão pode ser criado para qualquer atividade permanente"): ambas violam o Art. 37, II e V da CF/88.',
    contextHtml:
      'Roberto, gestor público municipal recém-empossado, solicitou à sua assessoria jurídica orientação sobre os critérios constitucionais exigidos para preencher novos cargos efetivos criados por lei na estrutura administrativa do Município, bem como cargos em comissão destinados à chefia e ao assessoramento.',
    prompt:
      'Sobre a situação apresentada, à luz da sistemática constitucional, assinale a afirmativa correta.',
    options: {
      A: 'A investidura em qualquer cargo público municipal, inclusive em cargo em comissão, depende sempre de aprovação prévia em concurso público.',
      B: 'A investidura em cargo efetivo depende de aprovação prévia em concurso público de provas ou de provas e títulos, ressalvadas as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração.',
      C: 'A investidura em cargo efetivo pode ser substituída por simples análise curricular, caso haja autorização expressa do Prefeito Municipal.',
      D: 'Os cargos em comissão podem ser livremente criados para desempenhar qualquer função operacional comum e permanente, sem vínculo com direção, chefia ou assessoramento.',
      E: 'O prazo de validade do concurso público é de até dois anos, vedada qualquer prorrogação pela Administração Pública.'
    },
    correct: 'B',
    wrongFeedback: {
      A: 'Os cargos em comissão são justamente a ressalva prevista no Art. 37, II da CF/88, dispensando concurso público por serem de livre nomeação e exoneração.',
      C: 'O Art. 37, II exige concurso público de provas ou de provas e títulos (não apenas análise de títulos/currículo isolada) para cargos efetivos, salvo contratação temporária excepcional de interesse público.',
      D: 'Pelo Art. 37, V da CF/88, os cargos em comissão destinam-se exclusivamente às atribuições de direção, chefia e assessoramento, sendo inconstitucional criá-los para tarefas meramente burocráticas ou operacionais comuns.',
      E: 'O Art. 37, III permite expressamente que o prazo de validade (de até 2 anos) seja prorrogado <strong>uma vez, por igual período</strong>.'
    },
    correctExplanation:
      '<strong>Base constitucional (Art. 37, II e V, CF/88):</strong> O inciso II determina que a investidura em cargo ou emprego público depende de aprovação prévia em <strong>concurso público de provas ou de provas e títulos</strong>, ressalvando expressamente as nomeações para <strong>cargo em comissão declarado em lei de livre nomeação e exoneração</strong>.<br>Além disso, conforme o inciso V, tais cargos em comissão destinam-se exclusivamente a funções de direção, chefia e assessoramento, enquanto o prazo de validade do concurso (inciso III) é de até 2 anos, prorrogável uma vez por igual período.'
  },
  {
    id: 4,
    topic: 'Servidores Públicos: Acumulação de Cargos (Art. 37, XVI)',
    reviewTitle: 'Quando é lícito acumular dois cargos públicos remunerados?',
    reviewConcept:
      'A regra constitucional é a <strong>proibição de acumular cargos públicos remunerados</strong>. A Constituição só abre exceção para três combinações específicas — e, mesmo assim, exige sempre <strong>compatibilidade de horários</strong> e respeito ao teto remuneratório.',
    reviewArticle:
      'Art. 37, XVI, CF/88 — Permitida apenas (com horários compatíveis): a) 2 de professor; b) 1 de professor + 1 técnico ou científico; c) 2 privativos de profissionais de saúde com profissões regulamentadas.',
    reviewRules: [
      '<strong>Professor + Professor (alínea "a"):</strong> permitido.',
      '<strong>Professor + Técnico ou Científico (alínea "b"):</strong> permitido. <em>Atenção:</em> cargo técnico/científico é aquele que exige conhecimento específico técnico ou habilitação legal própria (não um cargo puramente administrativo/burocrático de nível médio comum).',
      '<strong>Saúde + Saúde (alínea "c"):</strong> dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas (ex.: dois médicos, dois enfermeiros).'
    ],
    reviewTip:
      'Identifique primeiro qual é o cargo que o servidor <strong>já ocupa</strong> no enunciado. Se já é <strong>técnico</strong>, só pode cumular com <strong>professor</strong> (como na prova de 2019). Se já é <strong>professor</strong>, pode cumular com <strong>outro de professor OU um técnico/científico</strong>!',
    reviewAlert:
      'Erro comum: esquecer a alínea "b" quando o enunciado parte do cargo de professor e marcar que ele "só pode acumular com outro cargo de professor". Professor acumula com professor OU com técnico/científico!',
    contextHtml:
      'Helena, servidora pública ocupante do cargo efetivo de professora da rede pública municipal de Salvador, pretende realizar um novo concurso público para passar a ocupar dois cargos públicos de provimento efetivo remunerados, havendo plena compatibilidade de horários.',
    prompt:
      'À luz da sistemática constitucional, assinale a afirmativa correta.',
    options: {
      A: 'Helena não pode acumular dois cargos públicos efetivos em nenhuma hipótese, mesmo havendo compatibilidade de horários.',
      B: 'Helena pode acumular seu cargo de professora com qualquer outro cargo público efetivo, bastando haver compatibilidade de horários.',
      C: 'Helena somente pode vir a ocupar outro cargo de professor, sendo vedada a acumulação com cargo técnico ou científico.',
      D: 'Helena pode vir a ocupar outro cargo de professor ou um cargo técnico ou científico, observada a compatibilidade de horários.',
      E: 'Helena somente pode vir a ocupar um cargo privativo de profissional de saúde, por se tratar de área essencial.'
    },
    correct: 'D',
    wrongFeedback: {
      A: 'Embora a regra geral seja a vedação, o Art. 37, XVI traz exceções expressas quando há compatibilidade de horários — e professor está contemplado em duas delas.',
      B: 'A compatibilidade de horários não basta sozinha: é necessário que os dois cargos estejam dentro das três hipóteses taxativas do Art. 37, XVI (não caberia, por exemplo, acumular professor com agente administrativo comum não técnico).',
      C: 'Você esqueceu a alínea "b" do Art. 37, XVI, que admite expressamente a acumulação de um cargo de professor com outro técnico ou científico.',
      E: 'A alínea "c" refere-se à acumulação de <em>dois</em> cargos privativos de profissionais de saúde com profissões regulamentadas, não à combinação entre professor e profissional de saúde (salvo se o cargo de saúde se enquadrar como técnico/científico, não sendo a única opção nem a regra específica de saúde).'
    },
    correctExplanation:
      '<strong>Base constitucional (Art. 37, XVI, "a" e "b", CF/88):</strong> Havendo compatibilidade de horários (e observado o teto constitucional do inciso XI), é lícita a acumulação de:<br>• <strong>dois cargos de professor</strong> (alínea "a"); ou<br>• <strong>um cargo de professor com outro técnico ou científico</strong> (alínea "b").<br>Como Helena já ocupa cargo efetivo de professora, ela pode acumular tanto com outro cargo de professor quanto com um cargo técnico ou científico.'
  },
  {
    id: 5,
    topic: 'Segurança Pública e Guardas Municipais (Art. 144, CF/88)',
    reviewTitle: 'Papel constitucional das Guardas Municipais vs. Polícia Judiciária',
    reviewConcept:
      'O Art. 144 da Constituição organiza os órgãos de segurança pública e trata especificamente das Guardas Municipais em seu <strong>§ 8º</strong>. A prova da FGV cobra com muita frequência os limites constitucionais entre a atuação municipal e as funções investigativas reservadas às polícias judiciárias.',
    reviewArticle:
      'Art. 144, § 8º, CF/88 — "Os Municípios poderão constituir guardas municipais destinadas à proteção de seus bens, serviços e instalações, conforme dispuser a lei."',
    reviewRules: [
      '<strong>Faculdade do Município:</strong> a Constituição usa a expressão <em>"poderão constituir"</em> — é uma faculdade do ente municipal, e não uma imposição constitucional obrigatória.',
      '<strong>Destinação constitucional (§ 8º):</strong> proteção de <em>bens, serviços e instalações municipais</em>, na forma da lei (regulamentada nacionalmente pelo Estatuto Geral, Lei nº 13.022/2014).',
      '<strong>Polícia Judiciária (§§ 1º e 4º):</strong> apurar infrações penais e presidir inquéritos policiais (polícia judiciária) incumbe às <strong>Polícias Civis</strong> (Estados/DF) e à <strong>Polícia Federal</strong> (União) — a Guarda Municipal não preside inquérito policial.'
    ],
    reviewTip:
      'Em questões constitucionais sobre a GCM, memorize dois pilares literais do Art. 144: (1) Municípios <strong>poderão</strong> criar guardas municipais para proteger seus bens, serviços e instalações; (2) Guarda Municipal <strong>não exerce polícia judiciária nem preside investigação criminal</strong>.',
    reviewAlert:
      'Atenção para não confundir prisão em flagrante (permitida a qualquer do povo e dever de agentes públicos diante do crime acontecendo, encaminhando o preso ao Delegado) com função de <em>polícia judiciária / instauração de inquérito</em>, que é vedada à Guarda Municipal.',
    contextHtml:
      'Determinada Câmara Municipal discutia projeto de lei autorizando o Município a instituir sua Guarda Municipal, pretendendo atribuir-lhe constitucionalmente, além da proteção de bens, serviços e instalações municipais, a competência exclusiva para presidir inquéritos policiais e exercer funções de polícia judiciária nos crimes ocorridos no território do Município.',
    prompt:
      'À luz da sistemática constitucional sobre Segurança Pública, é correto afirmar que',
    options: {
      A: 'a instituição de guardas municipais pelos Municípios é obrigatória pela Constituição, devendo exercer funções de polícia judiciária estadual.',
      B: 'os Municípios não podem constituir guardas municipais, pois a segurança pública é competência exclusiva da União e dos Estados.',
      C: 'os Municípios podem constituir guardas municipais destinadas à proteção de seus bens, serviços e instalações, conforme dispuser a lei, não lhes cabendo presidir inquéritos ou exercer função de polícia judiciária.',
      D: 'a Guarda Municipal substitui automaticamente a Polícia Civil nos municípios que não possuem delegacia, assumindo a presidência dos inquéritos.',
      E: 'a atribuição de função de polícia judiciária à Guarda Municipal depende apenas de decreto expedido pelo Prefeito Municipal.'
    },
    correct: 'C',
    wrongFeedback: {
      A: 'O Art. 144, § 8º afirma que os Municípios <em>"poderão constituir"</em> (faculdade, não obrigação), e não atribui função de polícia judiciária à Guarda Municipal.',
      B: 'O Art. 144, § 8º autoriza expressamente os Municípios a constituírem guardas municipais para proteção de seus bens, serviços e instalações.',
      D: 'Nos termos do Art. 144, § 4º, às Polícias Civis (dirigidas por delegados de polícia de carreira) incumbem as funções de polícia judiciária e apuração de infrações penais, sem substituição pela Guarda Municipal.',
      E: 'Nem lei municipal nem decreto do Prefeito podem transferir à Guarda Municipal competência de polícia judiciária que a Constituição atribuiu às Polícias Civis e à Polícia Federal.'
    },
    correctExplanation:
      '<strong>Base constitucional (Art. 144, §§ 1º, 4º e 8º, CF/88):</strong> Segundo o § 8º, os Municípios <strong>poderão constituir guardas municipais</strong> destinadas à proteção de seus bens, serviços e instalações, conforme dispuser a lei.<br>Por outro lado, a função de polícia judiciária e a apuração de infrações penais mediante inquérito competem à Polícia Federal (§ 1º, IV) e às Polícias Civis (§ 4º), razão pela qual lei ou ato municipal não pode atribuir função de polícia judiciária ou presidência de inquérito à Guarda Municipal.'
  }
];

const TOTAL_QUESTIONS = questionsData.length; // 5 questões (espêlho de Q46–Q50 da prova de 2019)

/* ==========================================================================
   3. CRITÉRIOS OFICIAIS DO EDITAL Nº 002/2026
   ========================================================================== */
const EDITAL_2026 = {
  totalQuestoesProva: 70,
  questoesModulo2: 42,
  questoesBlocoConstitucionalCivil2026: 10,
  minimoModulo1: 14,
  minimoModulo2: 21,
  minimoTotal: 35,
  corteTafTotal: 500
};

/* ==========================================================================
   4. ESTADO DO SIMULADO
   ========================================================================== */
const state = {
  currentIndex: 0,
  answers: new Array(TOTAL_QUESTIONS).fill(null),
  elapsedSeconds: 0,
  timerInterval: null,
  isCompleted: false,
  viewingSummary: false
};

/* ==========================================================================
   5. INICIALIZAÇÃO
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Referências da navegação compartilhada
  const dropdownBtn = document.getElementById('desktop-disciplines-btn');
  const dropdownPanel = document.getElementById('desktop-disciplines-panel');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const snackbar = document.getElementById('portal-snackbar');
  const snackbarMessage = document.getElementById('snackbar-message');
  const snackbarClose = document.getElementById('snackbar-close');
  let snackbarTimer = null;

  // Referências do simulado
  const timerEl = document.getElementById('sim-timer');
  const timerStateEl = document.getElementById('sim-timer-state');
  const btnResetRequestEl = document.getElementById('btn-reset-request');

  const statAnsweredEl = document.getElementById('stat-answered');
  const statCorrectEl = document.getElementById('stat-correct');
  const statWrongEl = document.getElementById('stat-wrong');
  const statAccuracyEl = document.getElementById('stat-accuracy');
  const statRemainingEl = document.getElementById('stat-remaining');

  const stepperCounterEl = document.getElementById('stepper-counter');
  const stepperTopicEl = document.getElementById('stepper-topic');
  const stepperDotsEl = document.getElementById('stepper-dots');

  const activeFlowEl = document.getElementById('active-question-flow');
  const reviewHeadingEl = document.getElementById('review-heading');
  const reviewBodyEl = document.getElementById('review-body');
  const questionHeadingEl = document.getElementById('question-heading');
  const questionContextEl = document.getElementById('question-context');
  const questionPromptEl = document.getElementById('question-prompt');
  const questionFormEl = document.getElementById('question-form');
  const optionsListEl = document.getElementById('options-list');
  const btnSubmitEl = document.getElementById('btn-submit-answer');
  const actionHintEl = document.getElementById('action-hint');

  const feedbackCardEl = document.getElementById('feedback-card');
  const feedbackIconEl = document.getElementById('feedback-icon');
  const feedbackStatusTitleEl = document.getElementById('feedback-status-title');
  const feedbackStatusSubEl = document.getElementById('feedback-status-sub');
  const feedbackExplanationEl = document.getElementById('feedback-explanation');
  const btnNextEl = document.getElementById('btn-next-question');

  const summarySectionEl = document.getElementById('summary-section');
  const summaryMetricsGridEl = document.getElementById('summary-metrics-grid');
  const summaryEditalBoxEl = document.getElementById('summary-edital-box');
  const summaryStrengthsEl = document.getElementById('summary-strengths');
  const summaryWeaknessesEl = document.getElementById('summary-weaknesses');
  const btnSummaryReviewEl = document.getElementById('btn-summary-review-questions');
  const btnSummaryResetEl = document.getElementById('btn-summary-reset');

  const approvalOverallPillEl = document.getElementById('approval-overall-pill');
  const approvalStatusTextEl = document.getElementById('approval-status-text');
  const benchPercentBadgeEl = document.getElementById('bench-percent-badge');
  const benchPercentFillEl = document.getElementById('bench-percent-fill');
  const benchPercentNoteEl = document.getElementById('bench-percent-note');
  const benchM2BadgeEl = document.getElementById('bench-m2-badge');
  const benchM2FillEl = document.getElementById('bench-m2-fill');
  const benchTotalMissingEl = document.getElementById('bench-total-missing');

  const resetModalEl = document.getElementById('reset-modal');
  const btnResetCancelEl = document.getElementById('btn-reset-cancel');
  const btnResetConfirmEl = document.getElementById('btn-reset-confirm');

  /* ------------------------------------------------------------------------
     A. NAVEGAÇÃO COMPARTILHADA (mesmo padrão da HOME)
     ------------------------------------------------------------------------ */
  function showSnackbar(message) {
    if (!snackbar || !snackbarMessage) return;
    snackbarMessage.textContent = message;
    snackbar.hidden = false;
    if (snackbarTimer) clearTimeout(snackbarTimer);
    snackbarTimer = setTimeout(() => {
      snackbar.hidden = true;
    }, 5000);
  }

  if (snackbarClose && snackbar) {
    snackbarClose.addEventListener('click', () => {
      snackbar.hidden = true;
      if (snackbarTimer) clearTimeout(snackbarTimer);
    });
  }

  function closeDesktopDropdown() {
    if (!dropdownBtn || !dropdownPanel) return;
    dropdownBtn.setAttribute('aria-expanded', 'false');
    dropdownPanel.hidden = true;
  }

  function closeMobileDrawer() {
    if (!mobileMenuBtn || !mobileDrawer) return;
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.setAttribute('aria-label', 'Abrir menu de navegação');
    mobileDrawer.hidden = true;
  }

  function closeAllMenus() {
    closeDesktopDropdown();
    closeMobileDrawer();
  }

  function configureDisciplineNavigation() {
    document.querySelectorAll('[data-discipline]').forEach((element) => {
      const key = element.getAttribute('data-discipline');
      const url = (disciplineLinks[key] || '').trim();
      const label = disciplineLabels[key] || 'Disciplina';

      if (url) {
        element.setAttribute('href', url);
        element.removeAttribute('aria-disabled');
        element.classList.remove('is-pending');
        if (key === 'direitoConstitucional') {
          element.setAttribute('aria-current', 'page');
        }

        let pill = element.querySelector('.nav-status-pill');
        if (!pill) {
          pill = document.createElement('span');
          element.appendChild(pill);
        }
        pill.className = 'nav-status-pill ready';
        pill.textContent = key === 'direitoConstitucional' ? 'Atual' : 'Abrir';
      } else {
        element.removeAttribute('href');
        element.setAttribute('role', 'link');
        element.setAttribute('tabindex', '0');
        element.setAttribute('aria-disabled', 'true');
        element.classList.add('is-pending');

        let pill = element.querySelector('.nav-status-pill');
        if (!pill) {
          pill = document.createElement('span');
          element.appendChild(pill);
        }
        pill.className = 'nav-status-pill pending';
        pill.textContent = 'Pendente';

        const handlePending = (event) => {
          event.preventDefault();
          closeAllMenus();
          showSnackbar(
            `A página independente de "${label}" ainda não foi vinculada no portal.`
          );
        };

        element.addEventListener('click', handlePending);
        element.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handlePending(event);
          }
        });
      }
    });
  }

  if (dropdownBtn && dropdownPanel) {
    dropdownBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = dropdownBtn.getAttribute('aria-expanded') === 'true';
      dropdownBtn.setAttribute('aria-expanded', String(!isOpen));
      dropdownPanel.hidden = isOpen;
    });

    dropdownPanel.querySelectorAll('[data-close-dropdown]').forEach((link) => {
      link.addEventListener('click', closeDesktopDropdown);
    });
  }

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', String(!isOpen));
      mobileMenuBtn.setAttribute(
        'aria-label',
        isOpen ? 'Abrir menu de navegação' : 'Fechar menu de navegação'
      );
      mobileDrawer.hidden = isOpen;
    });

    mobileDrawer.querySelectorAll('a[href]').forEach((link) => {
      link.addEventListener('click', closeMobileDrawer);
    });
  }

  document.addEventListener('click', (event) => {
    if (
      dropdownPanel &&
      !dropdownPanel.hidden &&
      !dropdownPanel.contains(event.target) &&
      event.target !== dropdownBtn &&
      !dropdownBtn.contains(event.target)
    ) {
      closeDesktopDropdown();
    }
  });

  /* ------------------------------------------------------------------------
     B. CRONÔMETRO
     ------------------------------------------------------------------------ */
  function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');
    if (hours > 0) {
      return `${String(hours).padStart(2, '0')}:${mm}:${ss}`;
    }
    return `${mm}:${ss}`;
  }

  function updateTimerDisplay() {
    timerEl.textContent = formatTime(state.elapsedSeconds);
    if (state.isCompleted) {
      timerStateEl.textContent = 'Concluído';
      timerStateEl.classList.add('is-stopped');
    } else {
      timerStateEl.textContent = 'Em andamento';
      timerStateEl.classList.remove('is-stopped');
    }
  }

  function startTimer() {
    stopTimer();
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
      state.elapsedSeconds += 1;
      updateTimerDisplay();
    }, 1000);
  }

  function stopTimer() {
    if (state.timerInterval !== null) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
    updateTimerDisplay();
  }

  /* ------------------------------------------------------------------------
     C. MONITOR DE DESEMPENHO E PAINEL DE APROVAÇÃO (EDITAL 2026)
     ------------------------------------------------------------------------ */
  function getMetrics() {
    const answered = state.answers.filter(Boolean).length;
    const correct = state.answers.filter((item) => item && item.isCorrect).length;
    const wrong = answered - correct;
    const remaining = TOTAL_QUESTIONS - answered;
    const accuracy = answered > 0 ? (correct / answered) * 100 : 0;
    return { answered, correct, wrong, remaining, accuracy };
  }

  function updateMonitorAndApproval() {
    const { answered, correct, wrong, remaining, accuracy } = getMetrics();

    statAnsweredEl.textContent = String(answered);
    statCorrectEl.textContent = String(correct);
    statWrongEl.textContent = String(wrong);
    statAccuracyEl.textContent = `${accuracy.toFixed(1).replace('.', ',')}%`;
    statRemainingEl.textContent = String(remaining);

    // 1. Referência proporcional de 50% (em 5 questões: 50% = 2,5 -> mínimo inteiro de 3 acertos = 60%)
    const proportionalTarget = Math.ceil(TOTAL_QUESTIONS * 0.5); // 3
    const proportionalPct = Math.min(100, (correct / proportionalTarget) * 100);
    benchPercentFillEl.style.width = `${proportionalPct.toFixed(0)}%`;

    if (correct >= proportionalTarget) {
      benchPercentBadgeEl.textContent = `Atingida (${correct}/${proportionalTarget})`;
      benchPercentBadgeEl.className = 'benchmark-badge is-met';
      benchPercentFillEl.classList.add('is-met');
      benchPercentNoteEl.textContent = `Você atingiu ${correct} acertos (${((correct / TOTAL_QUESTIONS) * 100).toFixed(1).replace('.', ',')}% do simulado), superando a marca proporcional mínima de 50% (3 de 5 questões).`;
    } else {
      const missingProp = proportionalTarget - correct;
      benchPercentBadgeEl.textContent = `Faltam ${missingProp} (${correct}/${proportionalTarget})`;
      benchPercentBadgeEl.className = answered > 0 ? 'benchmark-badge is-below' : 'benchmark-badge';
      benchPercentFillEl.classList.remove('is-met');
      benchPercentNoteEl.textContent = `O Edital 2026 exige 50% em cada módulo. Em 5 questões (50% = 2,5), faltam ${missingProp} acerto(s) para alcançar 3 acertos (60%).`;
    }

    // 2. Critério numérico do Módulo II no Edital 2026 (21 acertos em 42 questões)
    const m2Pct = Math.min(100, (correct / EDITAL_2026.minimoModulo2) * 100);
    benchM2FillEl.style.width = `${m2Pct.toFixed(0)}%`;

    const missingM2 = Math.max(0, EDITAL_2026.minimoModulo2 - correct);
    benchM2BadgeEl.textContent = `Faltam ${missingM2} pts no Módulo II`;
    benchM2BadgeEl.className = answered > 0 ? 'benchmark-badge is-below' : 'benchmark-badge';

    // 3. Critério total (35 acertos em 70 questões)
    const missingTotal = Math.max(0, EDITAL_2026.minimoTotal - correct);
    benchTotalMissingEl.textContent = `faltam ao menos ${missingTotal} acertos nas demais questões da prova de 70 itens`;

    // Status geral sempre transparente quanto à limitação de escopo
    if (answered === 0) {
      approvalOverallPillEl.textContent = 'Dados insuficientes para aprovação geral';
      approvalStatusTextEl.innerHTML =
        'Este simulado avalia apenas <strong>Noções de Direito Constitucional (5 questões)</strong>. No Edital nº 002/2026, a aprovação na Prova Objetiva depende do desempenho cumulativo em <strong>todos os módulos (70 questões)</strong>.';
    } else if (state.isCompleted) {
      approvalOverallPillEl.textContent =
        correct >= proportionalTarget
          ? 'Bom desempenho parcial · Dados insuficientes p/ aprovação geral'
          : 'Abaixo da referência de 50% · Dados insuficientes p/ aprovação geral';
      approvalStatusTextEl.innerHTML =
        `Você concluiu Noções de Direito Constitucional com <strong>${correct} de ${TOTAL_QUESTIONS} acertos (${accuracy.toFixed(1).replace('.', ',')}%)</strong>. Como o Edital 2026 exige mínimos cumulativos no Módulo I (14/28), Módulo II (21/42) e Total (35/70), não é possível declarar aprovação no concurso apenas com esta disciplina.`;
    } else {
      approvalOverallPillEl.textContent = 'Dados insuficientes para aprovação geral';
      approvalStatusTextEl.innerHTML =
        `Desempenho parcial em Direito Constitucional: <strong>${correct} acerto(s)</strong> em ${answered} respondida(s). A aprovação oficial depende também de Direito Civil, demais disciplinas do Módulo II e todo o Módulo I no Edital 2026.`;
    }
  }

  /* ------------------------------------------------------------------------
     D. RENDERIZAÇÃO DO STEPPER, REVISÃO, QUESTÃO E CORREÇÃO
     ------------------------------------------------------------------------ */
  function getHighestAccessibleIndex() {
    const firstUnanswered = state.answers.findIndex((item) => item === null);
    return firstUnanswered === -1 ? TOTAL_QUESTIONS - 1 : firstUnanswered;
  }

  function renderStepper() {
    const q = questionsData[state.currentIndex];
    stepperCounterEl.textContent = `Questão ${state.currentIndex + 1} de ${TOTAL_QUESTIONS}`;
    stepperTopicEl.textContent = `Tema: ${q.topic}`;

    const maxUnlocked = getHighestAccessibleIndex();
    stepperDotsEl.innerHTML = '';

    questionsData.forEach((_, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'step-dot';
      btn.textContent = String(idx + 1);
      btn.setAttribute('aria-label', `Ir para questão ${idx + 1}`);

      const answer = state.answers[idx];
      if (idx === state.currentIndex && !state.viewingSummary) {
        btn.classList.add('is-current');
        btn.setAttribute('aria-current', 'step');
      }
      if (answer) {
        btn.classList.add(answer.isCorrect ? 'is-correct' : 'is-wrong');
      }

      if (idx > maxUnlocked) {
        btn.disabled = true;
      } else {
        btn.addEventListener('click', () => {
          state.viewingSummary = false;
          state.currentIndex = idx;
          renderCurrentView();
        });
      }

      stepperDotsEl.appendChild(btn);
    });
  }

  function renderReview(question) {
    reviewHeadingEl.textContent = question.reviewTitle;

    const rulesHtml = question.reviewRules
      .map((rule) => `<li>${rule}</li>`)
      .join('');

    const articleHtml = question.reviewArticle
      ? `<div class="review-article-box"><strong>Referência constitucional:</strong> ${question.reviewArticle}</div>`
      : '';

    reviewBodyEl.innerHTML = `
      <p class="review-concept">${question.reviewConcept}</p>
      ${articleHtml}
      <div class="review-rules-box">
        <p class="review-rules-title">Pontos-chave para lembrar:</p>
        <ul class="review-rules-list">${rulesHtml}</ul>
      </div>
      <div class="review-tips-grid">
        <div class="review-tip-box review-tip-fgv">
          <strong>Dica de prova (FGV):</strong> ${question.reviewTip}
        </div>
        <div class="review-tip-box review-tip-alert">
          <strong>Alerta de erro comum:</strong> ${question.reviewAlert}
        </div>
      </div>
    `;
  }

  function renderQuestionAndFeedback(question) {
    const savedAnswer = state.answers[state.currentIndex];
    questionHeadingEl.textContent = `Questão ${question.id} de ${TOTAL_QUESTIONS}`;

    if (question.contextHtml) {
      questionContextEl.innerHTML = question.contextHtml;
      questionContextEl.hidden = false;
    } else {
      questionContextEl.innerHTML = '';
      questionContextEl.hidden = true;
    }

    questionPromptEl.textContent = question.prompt;
    optionsListEl.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D', 'E'];
    letters.forEach((letter) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'option-item';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'sim-option';
      input.id = `option-${question.id}-${letter}`;
      input.value = letter;
      input.className = 'option-radio';

      const label = document.createElement('label');
      label.setAttribute('for', input.id);
      label.className = 'option-label';

      const letterSpan = document.createElement('span');
      letterSpan.className = 'option-letter';
      letterSpan.textContent = letter;

      const textSpan = document.createElement('span');
      textSpan.className = 'option-text';
      textSpan.textContent = question.options[letter];

      label.appendChild(letterSpan);
      label.appendChild(textSpan);

      if (savedAnswer) {
        input.disabled = true;
        itemDiv.classList.add('is-locked');
        if (savedAnswer.selected === letter) {
          input.checked = true;
        }
        if (letter === question.correct) {
          itemDiv.classList.add('is-correct');
          const tag = document.createElement('span');
          tag.className = 'option-status-tag';
          tag.textContent = 'Correta';
          label.appendChild(tag);
        } else if (savedAnswer.selected === letter && !savedAnswer.isCorrect) {
          itemDiv.classList.add('is-wrong');
          const tag = document.createElement('span');
          tag.className = 'option-status-tag';
          tag.textContent = 'Sua resposta';
          label.appendChild(tag);
        }
      } else {
        input.addEventListener('change', () => {
          btnSubmitEl.disabled = false;
          actionHintEl.textContent = `Alternativa ${letter} selecionada. Clique para corrigir.`;
        });
      }

      itemDiv.appendChild(input);
      itemDiv.appendChild(label);
      optionsListEl.appendChild(itemDiv);
    });

    if (savedAnswer) {
      btnSubmitEl.disabled = true;
      btnSubmitEl.hidden = true;
      actionHintEl.textContent = 'Questão corrigida e registrada neste simulado (alteração bloqueada).';
      renderFeedback(question, savedAnswer);
    } else {
      btnSubmitEl.hidden = false;
      btnSubmitEl.disabled = true;
      actionHintEl.textContent = 'Selecione uma alternativa (A a E) para corrigir.';
      feedbackCardEl.hidden = true;
    }
  }

  function renderFeedback(question, answer) {
    feedbackCardEl.hidden = false;
    feedbackCardEl.classList.remove('is-correct', 'is-wrong');
    feedbackCardEl.classList.add(answer.isCorrect ? 'is-correct' : 'is-wrong');

    if (answer.isCorrect) {
      feedbackIconEl.innerHTML =
        '<svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>';
      feedbackStatusTitleEl.textContent = 'Resposta correta!';
      feedbackStatusSubEl.textContent = `Você marcou a alternativa ${answer.selected} (${question.correct} é o gabarito).`;
      feedbackExplanationEl.innerHTML = `
        <div class="feedback-correct-why">
          <strong>Comentário constitucional:</strong>
          <div>${question.correctExplanation}</div>
        </div>
      `;
    } else {
      feedbackIconEl.innerHTML =
        '<svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>';
      feedbackStatusTitleEl.textContent = 'Resposta incorreta';
      feedbackStatusSubEl.textContent = `Você selecionou a alternativa ${answer.selected}, mas a alternativa correta é a ${question.correct}.`;
      const wrongReason = question.wrongFeedback[answer.selected] || '';
      feedbackExplanationEl.innerHTML = `
        <div class="feedback-wrong-why">
          <strong>Por que a alternativa ${answer.selected} está errada:</strong> ${wrongReason}
        </div>
        <div class="feedback-correct-why">
          <strong>Explicação correta passo a passo (alternativa ${question.correct}):</strong>
          <div>${question.correctExplanation}</div>
        </div>
      `;
    }

    const allAnswered = state.answers.every(Boolean);
    if (state.currentIndex === TOTAL_QUESTIONS - 1 || allAnswered) {
      btnNextEl.textContent = 'Concluir e ver resumo final';
    } else {
      btnNextEl.textContent = `Avançar para a questão ${state.currentIndex + 2}`;
    }
  }

  function renderSummary() {
    const { correct, wrong, accuracy } = getMetrics();
    const totalTimeFormatted = formatTime(state.elapsedSeconds);
    const proportionalTarget = Math.ceil(TOTAL_QUESTIONS * 0.5); // 3 acertos (60%)

    summaryMetricsGridEl.innerHTML = `
      <div class="summary-metric-box">
        <span class="summary-metric-label">Total de questões</span>
        <strong class="summary-metric-val">${TOTAL_QUESTIONS}</strong>
      </div>
      <div class="summary-metric-box">
        <span class="summary-metric-label">Acertos</span>
        <strong class="summary-metric-val" style="color: var(--md-success);">${correct}</strong>
      </div>
      <div class="summary-metric-box">
        <span class="summary-metric-label">Erros</span>
        <strong class="summary-metric-val" style="color: var(--md-error);">${wrong}</strong>
      </div>
      <div class="summary-metric-box">
        <span class="summary-metric-label">Aproveitamento</span>
        <strong class="summary-metric-val">${accuracy.toFixed(1).replace('.', ',')}%</strong>
      </div>
      <div class="summary-metric-box">
        <span class="summary-metric-label">Tempo total utilizado</span>
        <strong class="summary-metric-val">${totalTimeFormatted}</strong>
      </div>
      <div class="summary-metric-box">
        <span class="summary-metric-label">Referência ≥ 50% (Edital 2026)</span>
        <strong class="summary-metric-val">${correct >= proportionalTarget ? 'Atingida' : 'Abaixo'}</strong>
      </div>
    `;

    const missingM2 = Math.max(0, EDITAL_2026.minimoModulo2 - correct);
    const missingTotal = Math.max(0, EDITAL_2026.minimoTotal - correct);

    summaryEditalBoxEl.innerHTML = `
      <p><strong>Comparação com os critérios oficiais do Edital nº 002/2026:</strong></p>
      <p>
        • <strong>Desempenho em Noções de Direito Constitucional:</strong> ${correct} de ${TOTAL_QUESTIONS} questões (${accuracy.toFixed(1).replace('.', ',')}%). ${
          correct >= proportionalTarget
            ? 'Você alcançou ou superou a referência mínima de 50% neste simulado (ao menos 3 de 5 questões).'
            : `Faltaram ${proportionalTarget - correct} acerto(s) para igualar ou superar 50% neste simulado (mínimo de 3 acertos).`
        }<br>
        • <strong>Critérios eliminatórios oficiais (Edital 2026):</strong> o edital exige mínimo cumulativo de <strong>14 acertos no Módulo I</strong> (28 questões), <strong>21 acertos no Módulo II</strong> (42 questões, onde Constitucional divide um bloco de 10 questões com Direito Civil) e <strong>35 acertos no total</strong> (70 questões).<br>
        • <strong>Limitação de escopo:</strong> ainda faltam ao menos <strong>${missingM2} acertos</strong> nas demais questões do Módulo II para completar os 21 pontos mínimos das específicas, e ao menos <strong>${missingTotal} acertos</strong> no restante da prova para alcançar o piso de 35 pontos — além da nota de corte classificatória para os <strong>500 convocados ao TAF</strong>.
      </p>
    `;

    const strengths = [];
    const weaknesses = [];

    questionsData.forEach((q, idx) => {
      const ans = state.answers[idx];
      if (ans && ans.isCorrect) {
        strengths.push(`<li>Q${q.id} — ${q.topic}</li>`);
      } else {
        weaknesses.push(`<li>Q${q.id} — ${q.topic}</li>`);
      }
    });

    summaryStrengthsEl.innerHTML =
      strengths.length > 0
        ? strengths.join('')
        : '<li>Nenhum acerto registrado nesta tentativa. Releia a revisão teórica e os comentários constitucionais desde a Questão 1.</li>';

    summaryWeaknessesEl.innerHTML =
      weaknesses.length > 0
        ? weaknesses.join('')
        : '<li>Excelente desempenho! Você acertou todas as questões de Noções de Direito Constitucional deste simulado.</li>';
  }

  function renderCurrentView() {
    renderStepper();
    updateMonitorAndApproval();

    if (state.viewingSummary) {
      activeFlowEl.hidden = true;
      summarySectionEl.hidden = false;
      renderSummary();
    } else {
      summarySectionEl.hidden = true;
      activeFlowEl.hidden = false;
      const q = questionsData[state.currentIndex];
      renderReview(q);
      renderQuestionAndFeedback(q);
    }
  }

  /* ------------------------------------------------------------------------
     E. EVENTOS DE SUBMISSÃO, AVANÇO E REINICIALIZAÇÃO
     ------------------------------------------------------------------------ */
  questionFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    if (state.answers[state.currentIndex] !== null) return;

    const checked = questionFormEl.querySelector('input[name="sim-option"]:checked');
    if (!checked) return;

    const selected = checked.value;
    const question = questionsData[state.currentIndex];
    const isCorrect = selected === question.correct;

    state.answers[state.currentIndex] = { selected, isCorrect };

    if (state.answers.every(Boolean)) {
      state.isCompleted = true;
      stopTimer();
    }

    renderCurrentView();
    feedbackCardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  btnNextEl.addEventListener('click', () => {
    const allAnswered = state.answers.every(Boolean);
    if (state.currentIndex === TOTAL_QUESTIONS - 1 || allAnswered) {
      state.isCompleted = true;
      stopTimer();
      state.viewingSummary = true;
      renderCurrentView();
      summarySectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      state.currentIndex += 1;
      state.viewingSummary = false;
      renderCurrentView();
      document.getElementById('review-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  btnSummaryReviewEl.addEventListener('click', () => {
    state.viewingSummary = false;
    state.currentIndex = 0;
    renderCurrentView();
    document.getElementById('review-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  let lastFocusedBeforeModal = null;

  function openResetModal() {
    lastFocusedBeforeModal = document.activeElement;
    resetModalEl.hidden = false;
    btnResetCancelEl.focus();
  }

  function closeResetModal() {
    resetModalEl.hidden = true;
    if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === 'function') {
      lastFocusedBeforeModal.focus();
    }
  }

  function resetSimulation() {
    state.currentIndex = 0;
    state.answers = new Array(TOTAL_QUESTIONS).fill(null);
    state.elapsedSeconds = 0;
    state.isCompleted = false;
    state.viewingSummary = false;

    closeResetModal();
    startTimer();
    renderCurrentView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  btnResetRequestEl.addEventListener('click', openResetModal);
  btnSummaryResetEl.addEventListener('click', openResetModal);
  btnResetCancelEl.addEventListener('click', closeResetModal);
  btnResetConfirmEl.addEventListener('click', resetSimulation);

  resetModalEl.addEventListener('click', (event) => {
    if (event.target === resetModalEl) {
      closeResetModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAllMenus();
      if (!resetModalEl.hidden) {
        closeResetModal();
      }
    }
  });

  /* ------------------------------------------------------------------------
     F. INICIALIZAÇÃO DA PÁGINA
     ------------------------------------------------------------------------ */
  configureDisciplineNavigation();
  startTimer();
  renderCurrentView();
});
