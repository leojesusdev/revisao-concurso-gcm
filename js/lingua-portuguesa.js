/**
 * SIMULADO DE LÍNGUA PORTUGUESA — PORTAL DE ESTUDOS GCM SALVADOR 2026
 * - Quantidade de questões baseada na prova oficial GCM Salvador 2019 (14 questões).
 * - Critérios de aprovação baseados exclusivamente no Edital nº 002/2026.
 * - Navegação compartilhada sincronizada com a configuração centralizada de links.
 */

/* ==========================================================================
   1. CONFIGURAÇÃO DA NAVEGAÇÃO COMPARTILHADA
   ========================================================================== */
const disciplineLinks = {
  portugues: "pages/lingua-portuguesa.html",
  raciocinioLogico: "pages/raciocinio-logico.html",
  informatica: "",
  direitoConstitucional: "pages/direito-constitucional.html",
  direitoPenal: "",
  administracao: "",
  conhecimentosAtuacao: "",
  legislacao: "",
  leiOrganica: ""
};

const disciplineLabels = {
  portugues: "lingua-portuguesa.html",
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
   2. BANCO DE 14 QUESTÕES + REVISÃO TEÓRICA + CORREÇÃO COMENTADA
   Espelha os 14 itens e o estilo da prova de Língua Portuguesa (FGV 2019).
   ========================================================================== */
const questionsData = [
  {
    id: 1,
    topic: 'Emprego da partícula "se" e concordância verbal',
    reviewTitle: 'Partícula "se": voz passiva sintética x indeterminação do sujeito',
    reviewConcept:
      'A banca FGV cobra com frequência a reescritura de frases para torná-las genéricas com a partícula "se". O segredo está em observar a transitividade do verbo para decidir se o verbo vai para o plural ou fica obrigatoriamente no singular.',
    reviewRules: [
      '<strong>Verbo Transitivo Direto (VTD) + "se":</strong> o "se" é partícula apassivadora e o termo seguinte sem preposição é o <strong>sujeito paciente</strong>. Portanto, o verbo concorda com ele: <em>"Respeitam-se as normas"</em> (= As normas são respeitadas).',
      '<strong>Verbo Transitivo Indireto (VTI), Intransitivo (VI) ou de Ligação (VL) + "se":</strong> o "se" é índice de indeterminação do sujeito. O verbo fica <strong>sempre na 3ª pessoa do singular</strong>: <em>"Precisa-se de guardas"</em>, <em>"Confia-se nas equipes"</em>.'
    ],
    reviewTip: 'Passe a frase para a voz passiva analítica ("é/são + particípio"): se fizer sentido, há sujeito paciente e o verbo concorda com ele.',
    reviewAlert: 'Erro clássico: deixar no singular um VTD com sujeito no plural, como em "Comete-se erros" (o correto é "Cometem-se erros").',
    context: null,
    prompt:
      'Nas opções a seguir, a primeira oração foi reescrita de modo a dar-se a ela um caráter genérico, com a utilização da partícula se. Assinale a opção em que isso foi feito de forma gramaticalmente incorreta.',
    options: {
      A: 'Muitas pessoas viram o incidente. / Viu-se o incidente.',
      B: 'Os moradores precisam de segurança. / Precisa-se de segurança.',
      C: 'Todos confiam nas instituições públicas. / Confia-se nas instituições públicas.',
      D: 'Vários agentes fiscalizam as praças municipais. / Fiscalizam-se as praças municipais.',
      E: 'Alguns motoristas ignoram as placas de trânsito. / Ignora-se as placas de trânsito.'
    },
    correct: 'E',
    wrongFeedback: {
      A: 'A alternativa A está gramaticalmente correta: "ver" é VTD e o sujeito paciente "o incidente" está no singular, logo "Viu-se o incidente" concorda perfeitamente.',
      B: 'A alternativa B está correta: "precisar de" é VTI com preposição, então o "se" indetermina o sujeito e o verbo permanece corretamente na 3ª pessoa do singular ("Precisa-se").',
      C: 'A alternativa C está correta: "confiar em" é VTI, exigindo verbo obrigatoriamente na 3ª pessoa do singular ("Confia-se nas instituições públicas").',
      D: 'A alternativa D está correta: "fiscalizar" é VTD e "as praças municipais" é sujeito paciente no plural, levando corretamente o verbo ao plural ("Fiscalizam-se").'
    },
    correctExplanation:
      'Na alternativa E, o verbo "ignorar" é transitivo direto (quem ignora, ignora algo). O termo "as placas de trânsito" atua como sujeito paciente na voz passiva sintética e está no plural ("As placas de trânsito são ignoradas"). Assim, o verbo deve concordar no plural: "Ignoram-se as placas de trânsito", tornando "Ignora-se as placas" gramaticalmente incorreta.'
  },
  {
    id: 2,
    topic: 'Leitura de manchete e modalização verbal',
    reviewTitle: 'Valor dos tempos verbais e precisão em manchetes jornalísticas',
    reviewConcept:
      'Manchetes resumem fatos ou projeções em poucas palavras. A FGV avalia se o candidato distingue entre o que é afirmado como certeza absoluta, o que aparece como possibilidade/hipótese e o que é número aproximado.',
    reviewRules: [
      '<strong>Futuro do pretérito (-ria):</strong> expressa hipótese, possibilidade ou consequência dependente de uma condição (ex.: <em>"reduziria"</em> = poderia reduzir, não garante que reduzirá).',
      '<strong>Expressões aproximativas:</strong> termos como <em>"cerca de"</em>, <em>"aproximadamente"</em> e <em>"em torno de"</em> indicam estimativa, nunca precisão exata.',
      '<strong>Fidelidade textual:</strong> não extrapole porcentagens parciais para totalidades ("reduziria 28%" não significa "acabaria com o problema").'
    ],
    reviewTip: 'Ao ler uma manchete na prova, verifique sempre os verbos no futuro do pretérito e os advérbios/locuções de aproximação.',
    reviewAlert: 'Cuidado com alternativas que transformam uma estimativa ou hipótese em fato definitivo ou culpam alguém não citado no texto.',
    context: {
      paragraphs: [
        '<strong>Iluminação reforçada na orla reduziria em 28% os furtos noturnos</strong>',
        '<em>Cerca de 120 ocorrências mensais poderiam ser evitadas na região.</em>'
      ],
      source: 'Manchete simulada no padrão jornalístico.'
    },
    prompt: 'Sobre os componentes do texto dessa manchete, assinale a afirmativa correta.',
    options: {
      A: 'Se a orla recebesse iluminação reforçada, os furtos noturnos seriam totalmente eliminados.',
      B: 'A expressão "cerca de" indica com exatidão matemática a quantidade de ocorrências evitadas.',
      C: 'A forma verbal "reduziria" expressa uma possibilidade condicionada, e não uma certeza absoluta.',
      D: 'Em todo o texto há a identificação direta dos responsáveis pelos furtos na orla.',
      E: 'A principal crítica da manchete dirige-se ao comportamento dos frequentadores da região.'
    },
    correct: 'C',
    wrongFeedback: {
      A: 'Incorreta: o texto menciona redução de 28%, não eliminação total (100%) dos furtos.',
      B: 'Incorreta: "cerca de" expressa valor aproximado (estimativa), exatamente o oposto de exatidão matemática.',
      D: 'Incorreta: a manchete não identifica autores ou responsáveis pelos delitos.',
      E: 'Incorreta: não há qualquer crítica aos frequentadores; o foco é o impacto potencial da iluminação.'
    },
    correctExplanation:
      'A forma verbal "reduziria" está no futuro do pretérito do indicativo, tempo verbal empregado justamente para indicar uma hipótese ou possibilidade condicionada à adoção do reforço na iluminação, confirmada no subtítulo por "poderiam ser evitadas".'
  },
  {
    id: 3,
    topic: 'Função sintática de termos preposicionados',
    reviewTitle: 'Objeto indireto x Complemento nominal x Sujeito',
    reviewConcept:
      'Em questões de sintaxe, a FGV costuma destacar termos iniciados por preposição e perguntar quais desempenham a mesma função sintática. É essencial identificar a que palavra o termo se liga (verbo ou nome).',
    reviewRules: [
      '<strong>Objeto Indireto (OI):</strong> completa o sentido de um <strong>verbo</strong> transitivo indireto com preposição obrigatória. Exemplo: <em>"obedecer <u>ao estatuto</u>"</em>, <em>"depender <u>de planejamento</u>"</em>.',
      '<strong>Complemento Nominal (CN):</strong> completa o sentido de um <strong>substantivo abstrato, adjetivo ou advérbio</strong> com preposição, geralmente indicando o alvo/paciente da ação. Exemplo: <em>"proteção <u>ao patrimônio</u>"</em>.',
      '<strong>Sujeito:</strong> termo sem preposição com o qual o verbo concorda (ex.: <em>"<u>Os agentes</u> obedecem..."</em>).'
    ],
    reviewTip: 'Pergunte primeiro: o termo preposicionado completa um VERBO ou um NOME (substantivo/adjetivo/advérbio)? Essa pergunta já separa OI de CN.',
    reviewAlert: 'Dois termos com a mesma preposição (como "ao regulamento" e "ao patrimônio") podem ter funções diferentes se um se ligar a verbo e o outro a substantivo.',
    context: {
      paragraphs: [
        '“Os agentes obedecem ao regulamento, porque a proteção ao patrimônio depende de vigilância constante.”'
      ],
      source: null
    },
    prompt: 'Assinale a opção que indica os termos que, nesse segmento do texto, desempenham a mesma função sintática.',
    options: {
      A: 'ao regulamento / ao patrimônio',
      B: 'ao regulamento / de vigilância constante',
      C: 'Os agentes / ao patrimônio',
      D: 'a proteção / de vigilância constante',
      E: 'ao patrimônio / de vigilância constante'
    },
    correct: 'B',
    wrongFeedback: {
      A: 'Incorreta: "ao regulamento" completa o verbo "obedecem" (Objeto Indireto), enquanto "ao patrimônio" completa o substantivo abstrato "proteção" (Complemento Nominal).',
      C: 'Incorreta: "Os agentes" é o sujeito de "obedecem", enquanto "ao patrimônio" é Complemento Nominal de "proteção".',
      D: 'Incorreta: "a proteção" é o núcleo do sujeito de "depende", enquanto "de vigilância constante" é Objeto Indireto.',
      E: 'Incorreta: "ao patrimônio" é Complemento Nominal (liga-se ao nome "proteção"), enquanto "de vigilância constante" é Objeto Indireto (liga-se ao verbo "depende").'
    },
    correctExplanation:
      'Tanto "ao regulamento" (complemento do verbo transitivo indireto "obedecem") quanto "de vigilância constante" (complemento do verbo transitivo indireto "depende") completam diretamente o sentido de verbos por meio de preposição obrigatória. Portanto, ambos exercem a função sintática de Objeto Indireto.'
  },
  {
    id: 4,
    topic: 'Interpretação literal e inferência textual',
    reviewTitle: 'Leitura precisa: identificando paráfrases fiéis no texto',
    reviewConcept:
      'Nas questões de "Segundo o texto...", a resposta correta quase sempre reescreve uma ideia do parágrafo usando sinônimos (paráfrase), enquanto as incorretas invertem relações ou exageram o sentido.',
    reviewRules: [
      '<strong>Paráfrase fiel:</strong> mantém o mesmo sentido lógico com palavras diferentes (ex.: <em>"fortalece a confiança mútua"</em> = <em>"favorece o vínculo de confiança"</em>).',
      '<strong>Armadilha da inversão:</strong> troca quem pratica a ação por quem a recebe.',
      '<strong>Armadilha da generalização:</strong> insere termos absolutos inexistentes no texto (<em>"obriga"</em>, <em>"elimina"</em>, <em>"dispensa"</em>).'
    ],
    reviewTip: 'Sublinhe no texto a frase correspondente a cada alternativa e confira se o sujeito e o alcance da afirmação permanecem os mesmos.',
    reviewAlert: 'Nunca marque uma opção só porque parece "bonita" ou verdadeira no mundo real; ela precisa estar sustentada pelo texto.',
    context: {
      paragraphs: [
        '“A atuação preventiva nas praças e escolas aproxima os agentes públicos da população, permitindo identificar demandas locais antes que se transformem em conflitos graves. Quando essa presença é contínua e dialogada, cria-se um ambiente mais seguro e colaborativo para toda a comunidade.”'
      ],
      source: 'Texto adaptado para treinamento.'
    },
    prompt: 'Segundo o texto, a atuação preventiva',
    options: {
      A: 'elimina definitivamente todos os conflitos nas escolas e praças.',
      B: 'obriga os moradores a assumirem as tarefas de vigilância pública.',
      C: 'torna desnecessário o diálogo entre agentes públicos e moradores.',
      D: 'contribui para perceber problemas locais antes de seu agravamento.',
      E: 'dificulta a colaboração comunitária quando ocorre de forma contínua.'
    },
    correct: 'D',
    wrongFeedback: {
      A: 'Incorreta: o texto fala em identificar demandas antes que se tornem conflitos graves, não em "eliminar definitivamente todos os conflitos".',
      B: 'Incorreta: o texto não fala em obrigação imposta aos moradores.',
      C: 'Incorreta: o texto afirma justamente o contrário, valorizando a presença "dialogada".',
      E: 'Incorreta: há inversão de sentido; o texto diz que a presença contínua cria um ambiente mais colaborativo, e não o dificulta.'
    },
    correctExplanation:
      'A alternativa D parafraseia fielmente a passagem "permitindo identificar demandas locais antes que se transformem em conflitos graves" ao afirmar que a atuação preventiva ajuda a perceber problemas locais antes de seu agravamento.'
  },
  {
    id: 5,
    topic: 'Relações lógico-semânticas entre segmentos',
    reviewTitle: 'Causa x Consequência, Condição, Tempo e Proporção',
    reviewConcept:
      'Reconhecer o nexo lógico entre duas partes de um texto é fundamental na FGV. O mesmo conectivo pode variar de sentido conforme o contexto, por isso vale analisar a relação de sentido entre as ideias.',
    reviewRules: [
      '<strong>Causa e consequência:</strong> o primeiro fato provoca/motiva o segundo (<em>"Diante de...", "Como...", "Por causa de..."</em> -> efeito).',
      '<strong>Condição:</strong> o primeiro fato é requisito hipotético para o segundo (<em>"Se...", "Caso..."</em>).',
      '<strong>Proporcionalidade:</strong> dois fatos crescem ou diminuem juntos (<em>"Quanto mais... mais..."</em>, <em>"À medida que..."</em>).',
      '<strong>Simultaneidade temporal:</strong> dois eventos ocorrem ao mesmo tempo.'
    ],
    reviewTip: 'Pergunte: "O segmento 1 foi o motivo para acontecer o segmento 2?" Se sim, trata-se de relação de causa e consequência.',
    reviewAlert: 'Não confunda causa/consequência (fato ocorrido que gera outro) com condição (hipótese que pode ou não ocorrer).',
    context: {
      paragraphs: [
        '“<u>Diante do aumento da circulação de pedestres no centro histórico durante o verão</u>, <u>a coordenação ampliou as rondas preventivas na região</u>.”'
      ],
      source: null
    },
    prompt: 'A relação lógica entre os dois segmentos sublinhados é a de',
    options: {
      A: 'comparação desproporcional.',
      B: 'causa e consequência.',
      C: 'finalidade e oposição.',
      D: 'condição hipotética.',
      E: 'restrição temporal.'
    },
    correct: 'B',
    wrongFeedback: {
      A: 'Incorreta: não há comparação entre graus ou elementos diferentes.',
      C: 'Incorreta: não há ideia de contraste/oposição nem de objetivo final entre os segmentos.',
      D: 'Incorreta: ambos os segmentos tratam de fatos dados como ocorridos ("ampliou"), não de uma hipótese condicional.',
      E: 'Incorreta: o primeiro segmento funciona como motivação/razão ("diante do aumento"), e não como mera limitação de tempo.'
    },
    correctExplanation:
      'A locução "Diante do" introduz o motivo/razão (causa: o aumento da circulação de pedestres), que levou ao efeito/ação tomada pela coordenação (consequência: a ampliação das rondas preventivas).'
  },
  {
    id: 6,
    topic: 'Identificação de ideia incompatível ("à exceção de")',
    reviewTitle: 'Questões de exceção em textos argumentativos',
    reviewConcept:
      'Quando o enunciado traz expressões como "à exceção de um" ou "exceto", quatro alternativas estão alinhadas à linha argumentativa do texto e apenas uma a contradiz.',
    reviewRules: [
      'Identifique a tese central do texto (o que o autor defende e o que ele rejeita).',
      'Marque ao lado de cada alternativa <strong>(C)</strong> se compatível com o texto ou <strong>(I)</strong> se incompatível.',
      'A alternativa isolada (1 incompatível entre 4 compatíveis) é o gabarito.'
    ],
    reviewTip: 'Atenção redobrada ao advérbio "não": a FGV frequentemente pega uma frase verdadeira do texto e insere ou retira um "não" para criar a exceção.',
    reviewAlert: 'Se você achar que duas alternativas estão certas, releia o comando: provavelmente a questão pede a EXCEÇÃO!',
    context: {
      paragraphs: [
        '“A preservação do espaço público depende tanto da atuação firme e legal dos agentes municipais quanto do engajamento cívico da população. O diálogo respeitoso com os cidadãos fortalece a legitimidade do serviço público e evita que pequenos desentendimentos evoluam para conflitos maiores.”'
      ],
      source: 'Texto adaptado para treinamento.'
    },
    prompt: 'Esse trecho apresenta ideias coerentes com uma atuação cidadã e preventiva, à exceção de uma. Assinale-a.',
    options: {
      A: 'A proteção do espaço público envolve a ação legal dos agentes municipais.',
      B: 'A participação da sociedade colabora para a conservação dos bens comuns.',
      C: 'O trato respeitoso amplia a legitimidade do trabalho dos servidores.',
      D: 'O diálogo com o cidadão deve ser evitado por estimular conflitos maiores.',
      E: 'A mediação respeitosa ajuda a conter o agravamento de divergências.'
    },
    correct: 'D',
    wrongFeedback: {
      A: 'Incorreta: afirmação compatível com "atuação firme e legal dos agentes municipais".',
      B: 'Incorreta: afirmação compatível com "engajamento cívico da população".',
      C: 'Incorreta: afirmação compatível com "fortalece a legitimidade do serviço público".',
      E: 'Incorreta: afirmação compatível com "evita que pequenos desentendimentos evoluam para conflitos maiores".'
    },
    correctExplanation:
      'O texto defende exatamente o oposto do que diz a alternativa D: o diálogo respeitoso fortalece a legitimidade e evita que pequenos desentendimentos evoluam para conflitos maiores, e não deve ser evitado.'
  },
  {
    id: 7,
    topic: 'Argumentação: argumentos favoráveis x desfavoráveis',
    reviewTitle: 'Classificação de argumentos em temas polêmicos',
    reviewConcept:
      'A FGV costuma apresentar um debate atual (sem texto-base) e pedir que o candidato identifique qual alternativa apresenta um argumento favorável ou desfavorável à tese.',
    reviewRules: [
      '<strong>Argumento favorável:</strong> aponta benefícios, eficiência, proteção ou alinhamento positivo decorrente da medida.',
      '<strong>Argumento desfavorável:</strong> aponta riscos, falhas estruturais, custos excessivos, violações ou efeitos colaterais negativos da medida.',
      'Fique atento ao enunciado: avalie o valor lógico do argumento para a tese perguntada, independentemente de sua opinião pessoal.'
    ],
    reviewTip: 'Pergunte para cada opção: "Quem defende a medida usaria essa frase, ou quem a critica?" Isso resolve a questão rapidamente.',
    reviewAlert: 'Não confunda "constatação de um problema existente antes da medida" (usado a favor da mudança) com "risco causado ou agravado pela própria medida".',
    context: null,
    prompt:
      'Um dos debates frequentes nas cidades brasileiras envolve a ampliação do videomonitoramento automatizado em praças e vias públicas. Assinale a opção que apresenta um argumento que pode ser considerado desfavorável a essa ampliação.',
    options: {
      A: 'As câmeras auxiliam na resposta rápida das equipes em situações de emergência.',
      B: 'A coleta contínua de imagens pode gerar riscos à privacidade se não houver rígido controle de dados.',
      C: 'O monitoramento visível tende a inibir ações de vandalismo contra o patrimônio municipal.',
      D: 'Grande parte dos comerciantes locais apoia a instalação de câmeras no entorno de praças.',
      E: 'Diversas capitais já utilizam centrais integradas de monitoramento com bons resultados operacionais.'
    },
    correct: 'B',
    wrongFeedback: {
      A: 'Incorreta: agilizar a resposta a emergências é um benefício, logo, argumento favorável à ampliação.',
      C: 'Incorreta: inibir vandalismo contra o patrimônio é um efeito positivo, sendo argumento favorável.',
      D: 'Incorreta: o apoio de comerciantes é usado como argumento favorável à adoção da medida.',
      E: 'Incorreta: citar experiências bem-sucedidas de outras capitais funciona como argumento favorável.'
    },
    correctExplanation:
      'A alternativa B aponta uma preocupação e um risco potencial da medida (exposição da privacidade dos cidadãos caso falte controle rigoroso dos dados), caracterizando-se claramente como um argumento desfavorável ou de ressalva à ampliação irrestrita.'
  },
  {
    id: 8,
    topic: 'Causa e consequência x Concessão',
    reviewTitle: 'Reconhecendo relações causais e conectivos concessivos',
    reviewConcept:
      'Em questões de coesão, a FGV testa se o candidato diferencia causa/consequência de concessão (quebra de expectativa).',
    reviewRules: [
      '<strong>Expressões de causa e consequência:</strong> <em>em virtude de</em>, <em>em função de</em>, <em>devido a</em>, <em>por causa de</em>, verbos como <em>gerar</em>, <em>provocar</em>, <em>resultar de</em>.',
      '<strong>Expressões de concessão (NÃO são causa):</strong> <em>apesar de</em>, <em>embora</em>, <em>conquanto</em>, <em>mesmo com</em>. Indicam que um fato ocorreu contrariando o esperado para aquela circunstância.'
    ],
    reviewTip: 'Na frase concessiva, você consegue substituir o conectivo por "embora" ou "mesmo assim": "Apesar da chuva, fomos" = "Choveu, mas mesmo assim fomos".',
    reviewAlert: 'Preste atenção à direção da frase com "resulta de" (efeito <- causa) e "gera" (causa -> efeito): ambas expressam relação causal!',
    context: null,
    prompt: 'Assinale a opção que indica a frase em que não ocorre a relação de causa e consequência.',
    options: {
      A: 'Apesar da chuva intensa, o evento comunitário na praça transcorreu sem incidentes.',
      B: 'Em virtude da sinalização precária, o trânsito ficou lento na avenida principal.',
      C: 'Muitos motoristas alteraram o trajeto em função das obras na via litorânea.',
      D: 'A falta de manutenção preventiva gera falhas frequentes nos equipamentos.',
      E: 'O desgaste nas relações comunitárias resulta, muitas vezes, da ausência de diálogo.'
    },
    correct: 'A',
    wrongFeedback: {
      B: 'Incorreta: "Em virtude da sinalização precária" indica a causa da lentidão no trânsito (consequência).',
      C: 'Incorreta: "em função das obras" indica a causa que levou os motoristas a alterarem o trajeto.',
      D: 'Incorreta: o verbo "gera" estabelece relação direta entre causa (falta de manutenção) e consequência (falhas frequentes).',
      E: 'Incorreta: "resulta de" liga a consequência (desgaste) à sua causa (ausência de diálogo).'
    },
    correctExplanation:
      'Na alternativa A, a locução prepositiva "Apesar de" estabelece relação de concessão (quebra de expectativa): embora houvesse chuva intensa — que normalmente prejudicaria um evento aberto —, o evento ocorreu sem incidentes. Não há, portanto, relação de causa e consequência.'
  },
  {
    id: 9,
    topic: 'Comparação de manchetes: público-alvo e recursos expressivos',
    reviewTitle: 'Leitura comparativa de manchetes jornalísticas',
    reviewConcept:
      'Ao comparar duas manchetes lado a lado, a FGV observa escolhas de vocabulário, uso de siglas, sentido figurado de verbos, grau de gravidade dos fatos e conhecimentos prévios exigidos do leitor.',
    reviewRules: [
      '<strong>Público iniciado:</strong> manchetes que usam termos ou siglas específicas sem explicá-las (como <em>Libertadores</em>, <em>rebaixamento</em>, <em>VAR</em>, <em>CTB</em>) pressupõem leitores familiarizados com o tema.',
      '<strong>Linguagem conotativa:</strong> verbos como <em>cair</em> (= ser derrotado), <em>afundar</em> ou <em>tropeçar</em> têm sentido figurado, não literal.',
      '<strong>Equivalência x diferença:</strong> compare o peso real das consequências descritas em cada manchete antes de afirmar que são equivalentes.'
    ],
    reviewTip: 'Verifique primeiro o que as duas manchetes têm em comum (ex.: jargão do tema) e desconfie de afirmações sobre "erro de sigla" ou "parcialidade" sem prova textual.',
    reviewAlert: 'Um time perder chance de título/vaga não tem a mesma gravidade esportiva que complicar-se contra o rebaixamento; observe as nuances!',
    context: {
      paragraphs: [
        '<strong>Manchete 1:</strong> Bahia cai para o Atlético-MG e vê mais distante a vaga no G-6',
        '<strong>Manchete 2:</strong> Vitória tropeça diante do Athletico-PR e se aproxima do Z-4'
      ],
      source: 'Manchetes esportivas adaptadas para treinamento.'
    },
    prompt: 'Sobre essas duas manchetes, assinale a opção que apresenta a afirmativa correta.',
    options: {
      A: 'A compreensão plena dos textos dirige-se aos leitores familiarizados com o vocabulário do futebol.',
      B: 'Os verbos "cair" e "tropeçar" foram empregados exclusivamente em seu sentido literal (denotativo).',
      C: 'As consequências esportivas apresentadas para os dois clubes são idênticas em gravidade.',
      D: 'O jornal demonstra parcialidade explícita ao elogiar o desempenho de uma das equipes baianas.',
      E: 'As siglas representativas dos estados de Minas Gerais e Paraná estão grafadas incorretamente.'
    },
    correct: 'A',
    wrongFeedback: {
      B: 'Incorreta: "cair" e "tropeçar" significam "ser derrotado" / "perder pontos", configurando sentido figurado (conotativo), não queda física literal.',
      C: 'Incorreta: perder distância do G-6 (zona de classificação) e aproximar-se do Z-4 (zona de rebaixamento) são situações de gravidade distinta.',
      D: 'Incorreta: nenhuma das manchetes elogia ou toma partido pelos clubes; ambas relatam resultados negativos.',
      E: 'Incorreta: MG (Minas Gerais) e PR (Paraná) são as siglas oficiais corretas.'
    },
    correctExplanation:
      'Expressões como "vaga no G-6", "Z-4", "cai para" e "tropeça diante de" não são explicadas nas manchetes, pois pressupõem que o leitor já conhece as regras e a terminologia do campeonato brasileiro de futebol.'
  },
  {
    id: 10,
    topic: 'Linguagem figurada (conotativa) x Linguagem literal (denotativa)',
    reviewTitle: 'Denotação e Conotação em manchetes',
    reviewConcept:
      'Denotação é o uso das palavras em seu sentido próprio, objetivo, dicionarizado. Conotação é o uso figurado, simbólico ou metafórico, muito comum em manchetes para chamar atenção.',
    reviewRules: [
      '<strong>Denotação (literal):</strong> <em>"Agentes recuperam bicicletas furtadas e devolvem aos donos"</em> — cada palavra vale exatamente pelo que designa na realidade.',
      '<strong>Conotação (figurada):</strong> expressões idiomáticas e metáforas como <em>"passar em branco"</em> (sem medalhas), <em>"jogo pesado"</em> (disputa dura), <em>"braço de ferro"</em> (disputa de força), <em>"no olho do furacão"</em> (no centro da crise).'
    ],
    reviewTip: 'Procure a única frase em que nenhum termo ou expressão foi usado em sentido metafórico, exagerado ou idiomático.',
    reviewAlert: 'Às vezes a metáfora está em apenas uma expressão curta dentro de uma frase policial ou esportiva (ex.: "usam reféns como escudo" ou "jogo pesado").',
    context: null,
    prompt: 'A respeito das manchetes transcritas a seguir, assinale a que não utiliza linguagem figurada.',
    options: {
      A: '“Atendimento em posto central passa em branco no primeiro dia de campanha.”',
      B: '“Motoristas enfrentam ‘braço de ferro’ em cruzamento congestionado do centro.”',
      C: '“Guarda Municipal recupera bicicletas furtadas e as devolve aos proprietários no Comércio.”',
      D: '“Secretaria entra no olho do furacão após atraso na entrega de uniformes.”',
      E: '“Equipes recebem carta branca para reorganizar o fluxo de visitantes na festa.”'
    },
    correct: 'C',
    wrongFeedback: {
      A: 'Incorreta: "passar em branco" é expressão figurada para indicar ausência de resultados ou movimento.',
      B: 'Incorreta: "braço de ferro" é metáfora usada para disputa intensa ou impasse.',
      D: 'Incorreta: "no olho do furacão" é linguagem figurada para estar no centro de uma crise ou polêmica.',
      E: 'Incorreta: "carta branca" é expressão idiomática/figurada que significa plena liberdade de ação.'
    },
    correctExplanation:
      'Na alternativa C, todas as palavras ("Guarda Municipal", "recupera", "bicicletas furtadas", "devolve", "proprietários", "Comércio") são empregadas em seu sentido literal e objetivo, sem metáforas ou expressões idiomáticas.'
  },
  {
    id: 11,
    topic: 'Análise semântica e pragmática de manchete',
    reviewTitle: 'Aspas, coloquialismo, implícitos e opinatividade em manchetes',
    reviewConcept:
      'Mesmo parecendo curtas e informativas, muitas manchetes trazem marcas de opinião (verbos valorativos), uso de gírias/regionalismos entre aspas e ideias implícitas (pressupostos).',
    reviewRules: [
      '<strong>Aspas em vocábulos:</strong> indicam gíria, termo regional, estrangeirismo, ironia ou sentido diferente do usual.',
      '<strong>Verbos valorativos:</strong> escolhas como <em>"roubam"</em>, <em>"tiram o sossego"</em> ou <em>"invadem"</em> expressam avaliação negativa e quebram a neutralidade.',
      '<strong>Implícito/pressuposto:</strong> dizer que algo "tira o sossego" pressupõe que os moradores tinham ou têm direito a esse sossego.'
    ],
    reviewTip: 'Em enunciados que pedem a afirmativa INCORRETA, desconfie quando uma opção disser que uma manchete carregada de termos avaliativos é "totalmente neutra e não opinativa".',
    reviewAlert: 'Não confunda "registro informal/coloquial" com "erro gramatical": gírias e termos populares podem aparecer intencionalmente entre aspas no jornalismo.',
    context: {
      paragraphs: [
        '“‘Paredões’ tiram o sossego de moradores em bairros da capital.”'
      ],
      source: 'Manchete adaptada no estilo jornalístico soteropolitano.'
    },
    prompt: 'Sobre os componentes dessa manchete, assinale a afirmativa incorreta.',
    options: {
      A: 'A expressão "tiram o sossego" evidencia uma visão crítica e negativa sobre o fato noticiado.',
      B: 'O vocábulo "paredões" revela presença de linguagem coloquial e regional na manchete.',
      C: 'A mensagem traz implícita a ideia de que os moradores têm direito à tranquilidade.',
      D: 'O termo "paredões" aparece entre aspas para sinalizar um sentido específico, distinto do literal.',
      E: 'A manchete foi redigida de forma estritamente neutra e não opinativa, sem nenhum juízo de valor.'
    },
    correct: 'E',
    wrongFeedback: {
      A: 'Esta afirmativa está correta: "tirar o sossego" julga negativamente a perturbação sonora, logo não é o item incorreto.',
      B: 'Esta afirmativa está correta: "paredões" (para designar grandes equipamentos de som automotivo) é marca de coloquialidade regional.',
      C: 'Esta afirmativa está correta: só se "tira o sossego" de quem o possui ou tem direito a ele.',
      D: 'Esta afirmativa está correta: as aspas delimitam o uso especial do termo, diferente de "parede grande".'
    },
    correctExplanation:
      'A afirmativa E é a incorreta (gabarito). Longe de ser estritamente neutra, a manchete adota um tom opinativo ao utilizar a expressão valorativa "tiram o sossego", atribuindo carga negativa ao comportamento retratado.'
  },
  {
    id: 12,
    topic: 'Tipologia de argumentos',
    reviewTitle: 'Como identificar o tipo de argumento em um texto',
    reviewConcept:
      'Argumentar é sustentar um ponto de vista por meio de razões. A FGV cobra com frequência o reconhecimento da estratégia argumentativa usada em um período curto.',
    reviewRules: [
      '<strong>Argumento causal:</strong> fundamenta a tese mostrando uma relação de causa e efeito (<em>"é urgente, pois isso reduz..."</em> ou <em>"porque favorece..."</em>).',
      '<strong>Argumento de autoridade:</strong> apoia-se na fala de especialista, instituição científica ou jurista renomado.',
      '<strong>Argumento narrativo / exemplificativo:</strong> conta uma história particular ou cita um caso concreto ocorrido.',
      '<strong>Argumento comparativo:</strong> confronta duas realidades, épocas ou lugares distintos.'
    ],
    reviewTip: 'Observe o conectivo explicativo ("pois", "porque", "já que") e verifique o que vem depois dele: é uma relação de causa/efeito, uma citação de especialista, um relato ou uma comparação?',
    reviewAlert: 'Não confunda argumento causal (que explica causas e efeitos objetivos) com argumento de autoridade (que cita uma fonte especialista para validar a tese).',
    context: {
      paragraphs: [
        '“A ampliação da iluminação nos parques municipais é indispensável, pois a baixa visibilidade noturna favorece a ocorrência de delitos e afasta as famílias dos espaços de lazer.”'
      ],
      source: null
    },
    prompt: 'Nesse caso, a opinião expressa está apoiada principalmente em um argumento',
    options: {
      A: 'causal.',
      B: 'narrativo.',
      C: 'de autoridade.',
      D: 'comparativo.',
      E: 'de consenso popular.'
    },
    correct: 'A',
    wrongFeedback: {
      B: 'Incorreta: não há narração de um episódio específico com personagens, tempo e lugar.',
      C: 'Incorreta: nenhum especialista, pesquisador ou instituição é citado como fonte de autoridade.',
      D: 'Incorreta: o texto não compara parques diferentes nem períodos históricos distintos.',
      E: 'Incorreta: não há referência a pesquisas de opinião ou à maioria da população.'
    },
    correctExplanation:
      'Após apresentar a tese ("A ampliação da iluminação nos parques municipais é indispensável"), o texto introduz com "pois" duas consequências diretas causadas pela falta de luz ("favorece a ocorrência de delitos" e "afasta as famílias"). Trata-se, portanto, de um argumento causal.'
  },
  {
    id: 13,
    topic: 'Modalização: certeza x possibilidade',
    reviewTitle: 'Expressões de certeza absoluta x expressões de possibilidade',
    reviewConcept:
      'Na escrita formal e jornalística, escolhemos palavras específicas para mostrar nosso grau de comprometimento com o que dizemos: se estamos certos ou se apenas levantamos uma hipótese.',
    reviewRules: [
      '<strong>Marcadores de possibilidade/probabilidade:</strong> <em>deve (fazer)</em>, <em>pode</em>, <em>é provável que</em>, <em>provavelmente</em>, <em>possivelmente</em>, <em>existe a possibilidade de</em>.',
      '<strong>Marcadores de certeza:</strong> <em>sabe-se que</em>, <em>é certo que</em>, <em>comprovadamente</em>, verbo no presente ou futuro categórico sem atenuadores (<em>"reduz"</em>, <em>"é o maior"</em>).'
    ],
    reviewTip: 'Teste cada frase retirando o advérbio ou locução inicial: se houver "provavelmente", "deve", "possibilidade" ou "provável", há dúvida/hipótese; se houver "sabe-se que" ou afirmação categórica, há certeza.',
    reviewAlert: 'Atenção ao verbo "dever" em construções como "O bairro deve receber obras": aqui, "deve" não indica obrigação moral, e sim probabilidade ("provavelmente receberá").',
    context: null,
    prompt: 'Quando procuramos evitar afirmações categóricas, empregamos expressões de possibilidade. Assinale a opção que, ao contrário, expressa certeza.',
    options: {
      A: 'O projeto deve ampliar o atendimento nos bairros periféricos até o próximo semestre.',
      B: 'É muito provável que o fluxo de visitantes aumente durante o verão soteropolitano.',
      C: 'Sabe-se que a atuação preventiva reduz os índices de conflito no entorno escolar.',
      D: 'A corporação, possivelmente, receberá novos equipamentos de proteção individual.',
      E: 'Existe a possibilidade de o prazo para entrega de documentos ser prorrogado.'
    },
    correct: 'C',
    wrongFeedback: {
      A: 'Incorreta: "deve ampliar" tem valor epistêmico de probabilidade/expectativa, não de certeza absoluta.',
      B: 'Incorreta: "É muito provável que" indica alta chance, mas não certeza.',
      D: 'Incorreta: o advérbio "possivelmente" marca explicitamente possibilidade/incerteza.',
      E: 'Incorreta: "Existe a possibilidade de" expressa apenas hipótese eventual.'
    },
    correctExplanation:
      'A construção "Sabe-se que..." somada ao verbo no presente do indicativo ("reduz") apresenta o conteúdo como um conhecimento estabelecido e verdadeiro, expressando certeza, ao contrário das demais opções marcadas por probabilidade ou possibilidade.'
  },
  {
    id: 14,
    topic: 'Campo semântico e rede lexical',
    reviewTitle: 'Identificando palavras de um mesmo campo semântico',
    reviewConcept:
      'Campo semântico é o conjunto de palavras ou expressões que se associam por pertencerem a uma mesma área de sentido ou tema dentro de um texto (por exemplo, religião, guerra, construção, direito).',
    reviewRules: [
      'Leia o trecho identificando a <strong>metáfora ou tema dominante</strong> que conecta várias palavras.',
      'Observe a lista de opções: quatro termos pertencerão diretamente àquele mesmo universo lexical (ainda que em sentido figurado) e um termo ficará fora dele.'
    ],
    reviewTip: 'Agrupe mentalmente as palavras por "família de assunto" (ex.: alicerce, pilar, muro, cimento -> construção/arquitetura). A expressão que não pertence ao grupo é a exceção.',
    reviewAlert: 'As palavras do campo semântico não precisam ter o mesmo radical (como pedra/pedreiro); basta que se relacionem pelo significado (como fé/doutrina/crença ou alicerce/pilar/ponte).',
    context: {
      paragraphs: [
        '“A convivência urbana saudável não surge por acaso; ela exige alicerces sólidos construídos no dia a dia. Quando o poder público e os cidadãos se dispõem a erguer pontes de respeito mútuo, consolidam os pilares da cidadania e fortalecem toda a estrutura social, por meio do diálogo permanente entre as pessoas.”'
      ],
      source: 'Texto adaptado para treinamento.'
    },
    prompt:
      'As opções a seguir apresentam palavras e expressões associadas ao campo semântico da construção e arquitetura, à exceção de uma. Assinale-a.',
    options: {
      A: 'alicerces sólidos',
      B: 'erguer pontes',
      C: 'pilares da cidadania',
      D: 'estrutura social',
      E: 'diálogo permanente'
    },
    correct: 'E',
    wrongFeedback: {
      A: 'Incorreta: "alicerces sólidos" remete diretamente à base de uma construção civil (campo da construção/arquitetura).',
      B: 'Incorreta: "erguer pontes" emprega vocabulário de engenharia/construção em sentido metafórico.',
      C: 'Incorreta: "pilares" é elemento estrutural arquitetônico usado metaforicamente no texto.',
      D: 'Incorreta: "estrutura" também integra o campo semântico de edificação e arquitetura.'
    },
    correctExplanation:
      'Embora todo o trecho use metáforas ligadas à construção ("alicerces", "erguer pontes", "pilares", "estrutura"), a expressão "diálogo permanente" pertence ao campo semântico da comunicação e das relações humanas, não ao da construção/arquitetura.'
  }
];

/* ==========================================================================
   3. CONSTANTES DO EDITAL 2026 (USO EXCLUSIVO PARA O PAINEL DE APROVAÇÃO)
   ========================================================================== */
const EDITAL_2026 = {
  totalProva: 70,
  totalModulo1: 28,
  totalModulo2: 42,
  portuguesEm2026: 10,
  minimoModulo1: 14, // 50% de 28
  minimoModulo2: 21, // 50% de 42
  minimoTotal: 35,   // 50% de 70
  corteTafTotal: 500
};

/* ==========================================================================
   4. ESTADO DO SIMULADO E CONTROLADORES
   ========================================================================== */
const TOTAL_QUESTIONS = questionsData.length; // 14 questões (ref. 2019)

const state = {
  currentIndex: 0,
  answers: new Array(TOTAL_QUESTIONS).fill(null), // { selected: 'A', isCorrect: true }
  elapsedSeconds: 0,
  timerInterval: null,
  isCompleted: false,
  viewingSummary: false
};

document.addEventListener('DOMContentLoaded', () => {
  // Elementos de navegação compartilhada e snackbar
  const snackbar = document.getElementById('portal-snackbar');
  const snackbarMessage = document.getElementById('snackbar-message');
  const snackbarClose = document.getElementById('snackbar-close');
  const dropdownBtn = document.getElementById('desktop-disciplines-btn');
  const dropdownPanel = document.getElementById('desktop-disciplines-panel');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');

  // Elementos do simulado
  const timerEl = document.getElementById('sim-timer');
  const timerStateEl = document.getElementById('sim-timer-state');

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
  const optionsListEl = document.getElementById('options-list');
  const questionFormEl = document.getElementById('question-form');
  const btnSubmitEl = document.getElementById('btn-submit-answer');
  const actionHintEl = document.getElementById('action-hint');

  const feedbackCardEl = document.getElementById('feedback-card');
  const feedbackIconEl = document.getElementById('feedback-icon');
  const feedbackStatusTitleEl = document.getElementById('feedback-status-title');
  const feedbackStatusSubEl = document.getElementById('feedback-status-sub');
  const feedbackExplanationEl = document.getElementById('feedback-explanation');
  const btnNextEl = document.getElementById('btn-next-question');

  // Painel de aprovação (Edital 2026)
  const approvalOverallPillEl = document.getElementById('approval-overall-pill');
  const approvalStatusTextEl = document.getElementById('approval-status-text');
  const benchPercentBadgeEl = document.getElementById('bench-percent-badge');
  const benchPercentFillEl = document.getElementById('bench-percent-fill');
  const benchPercentNoteEl = document.getElementById('bench-percent-note');
  const benchM1BadgeEl = document.getElementById('bench-m1-badge');
  const benchM1FillEl = document.getElementById('bench-m1-fill');
  const benchTotalMissingEl = document.getElementById('bench-total-missing');

  // Resumo final
  const summarySectionEl = document.getElementById('summary-section');
  const summaryMetricsGridEl = document.getElementById('summary-metrics-grid');
  const summaryEditalBoxEl = document.getElementById('summary-edital-box');
  const summaryStrengthsEl = document.getElementById('summary-strengths');
  const summaryWeaknessesEl = document.getElementById('summary-weaknesses');
  const btnSummaryReviewEl = document.getElementById('btn-summary-review-questions');
  const btnSummaryResetEl = document.getElementById('btn-summary-reset');

  // Reinicialização e modal
  const btnResetRequestEl = document.getElementById('btn-reset-request');
  const resetModalEl = document.getElementById('reset-modal');
  const btnResetCancelEl = document.getElementById('btn-reset-cancel');
  const btnResetConfirmEl = document.getElementById('btn-reset-confirm');

  let snackbarTimer = null;

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
        if (key === 'portugues') {
          element.setAttribute('aria-current', 'page');
        }

        let pill = element.querySelector('.nav-status-pill');
        if (!pill) {
          pill = document.createElement('span');
          element.appendChild(pill);
        }
        pill.className = 'nav-status-pill ready';
        pill.textContent = key === 'portugues' ? 'Atual' : 'Abrir';
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

    // 1. Referência proporcional de 50% (7 acertos em 14 questões)
    const proportionalTarget = Math.ceil(TOTAL_QUESTIONS * 0.5); // 7
    const proportionalPct = Math.min(100, (correct / proportionalTarget) * 100);
    benchPercentFillEl.style.width = `${proportionalPct.toFixed(0)}%`;

    if (correct >= proportionalTarget) {
      benchPercentBadgeEl.textContent = `Atingida (${correct}/${proportionalTarget})`;
      benchPercentBadgeEl.className = 'benchmark-badge is-met';
      benchPercentFillEl.classList.add('is-met');
      benchPercentNoteEl.textContent = `Você atingiu ${correct} acertos (${((correct / TOTAL_QUESTIONS) * 100).toFixed(1).replace('.', ',')}% do simulado), superando a referência proporcional de 50% (7 acertos).`;
    } else {
      const missingProp = proportionalTarget - correct;
      benchPercentBadgeEl.textContent = `Faltam ${missingProp} (${correct}/${proportionalTarget})`;
      benchPercentBadgeEl.className = answered > 0 ? 'benchmark-badge is-below' : 'benchmark-badge';
      benchPercentFillEl.classList.remove('is-met');
      benchPercentNoteEl.textContent = `O Edital 2026 exige 50% em cada módulo. Neste simulado de 14 questões, faltam ${missingProp} acerto(s) para alcançar 7 acertos (50%).`;
    }

    // 2. Critério numérico do Módulo I no Edital 2026 (14 acertos em 28 questões)
    const m1Pct = Math.min(100, (correct / EDITAL_2026.minimoModulo1) * 100);
    benchM1FillEl.style.width = `${m1Pct.toFixed(0)}%`;

    if (correct >= EDITAL_2026.minimoModulo1) {
      benchM1BadgeEl.textContent = `14/14 pts (ref.)`;
      benchM1BadgeEl.className = 'benchmark-badge is-met';
      benchM1FillEl.classList.add('is-met');
    } else {
      const missingM1 = EDITAL_2026.minimoModulo1 - correct;
      benchM1BadgeEl.textContent = `Faltam ${missingM1} pts`;
      benchM1BadgeEl.className = answered > 0 ? 'benchmark-badge is-below' : 'benchmark-badge';
      benchM1FillEl.classList.remove('is-met');
    }

    // 3. Critério total (35 acertos em 70 questões)
    // Considerando que Língua Portuguesa tem no máximo 10 questões em 2026,
    // ou no máximo os pontos já obtidos aqui como referência parcial:
    const capped2026Points = Math.min(correct, EDITAL_2026.portuguesEm2026);
    const missingTotal = Math.max(0, EDITAL_2026.minimoTotal - capped2026Points);
    benchTotalMissingEl.textContent = `faltam ao menos ${missingTotal} acertos nas demais questões da prova de 70 itens (considerando limite de 10 questões de Português em 2026)`;

    // Status geral sempre transparente quanto à limitação de escopo
    if (answered === 0) {
      approvalOverallPillEl.textContent = 'Dados insuficientes para aprovação geral';
      approvalStatusTextEl.innerHTML =
        'Este simulado avalia apenas <strong>Língua Portuguesa</strong>. No Edital nº 002/2026, a aprovação na Prova Objetiva depende do desempenho cumulativo em <strong>todos os módulos (70 questões)</strong>.';
    } else if (state.isCompleted) {
      approvalOverallPillEl.textContent =
        correct >= proportionalTarget
          ? 'Bom desempenho parcial · Dados insuficientes p/ aprovação geral'
          : 'Abaixo da referência de 50% · Dados insuficientes p/ aprovação geral';
      approvalStatusTextEl.innerHTML =
        `Você fechou Língua Portuguesa com <strong>${correct} de ${TOTAL_QUESTIONS} acertos (${accuracy.toFixed(1).replace('.', ',')}%)</strong>. Como o Edital 2026 exige mínimos cumulativos no Módulo I (14/28), Módulo II (21/42) e Total (35/70), não é possível declarar aprovação no concurso apenas com esta disciplina.`;
    } else {
      approvalOverallPillEl.textContent = 'Dados insuficientes para aprovação geral';
      approvalStatusTextEl.innerHTML =
        `Desempenho parcial em Língua Portuguesa: <strong>${correct} acerto(s)</strong> em ${answered} respondida(s). A aprovação oficial depende também de Raciocínio Lógico, Informática e todo o Módulo II no Edital 2026.`;
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

    reviewBodyEl.innerHTML = `
      <p class="review-concept">${question.reviewConcept}</p>
      <div class="review-rules-box">
        <p class="review-rules-title">Pontos essenciais para resolver a questão:</p>
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

    if (question.context && Array.isArray(question.context.paragraphs)) {
      const paragraphsHtml = question.context.paragraphs
        .map((p) => `<p>${p}</p>`)
        .join('');
      const sourceHtml = question.context.source
        ? `<span class="question-context-source">${question.context.source}</span>`
        : '';
      questionContextEl.innerHTML = `${paragraphsHtml}${sourceHtml}`;
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
          <strong>Resolução comentada:</strong> ${question.correctExplanation}
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
          <strong>Resolução correta (alternativa ${question.correct}):</strong> ${question.correctExplanation}
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
    const proportionalTarget = Math.ceil(TOTAL_QUESTIONS * 0.5);

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
        <span class="summary-metric-label">Referência 50% (Edital 2026)</span>
        <strong class="summary-metric-val">${correct >= proportionalTarget ? 'Atingida' : 'Abaixo'}</strong>
      </div>
    `;

    const capped2026 = Math.min(correct, EDITAL_2026.portuguesEm2026);
    const missingTotal = Math.max(0, EDITAL_2026.minimoTotal - capped2026);

    summaryEditalBoxEl.innerHTML = `
      <p><strong>Comparação com os critérios oficiais do Edital nº 002/2026:</strong></p>
      <p>
        • <strong>Desempenho em Língua Portuguesa:</strong> ${correct} de ${TOTAL_QUESTIONS} questões (${accuracy.toFixed(1).replace('.', ',')}%). ${
          correct >= proportionalTarget
            ? 'Você alcançou ou superou a referência proporcional de 50%.'
            : `Faltaram ${proportionalTarget - correct} acerto(s) para atingir 50% neste simulado.`
        }<br>
        • <strong>Critérios eliminatórios oficiais (Edital 2026):</strong> o certame exige mínimo cumulativo de <strong>14 acertos no Módulo I</strong> (28 questões), <strong>21 acertos no Módulo II</strong> (42 questões) e <strong>35 acertos no total</strong> (70 questões).<br>
        • <strong>Limitação de escopo:</strong> como Língua Portuguesa terá 10 questões em 2026 e este simulado não contempla as demais disciplinas, ainda seriam necessários pelo menos <strong>${missingTotal} acertos</strong> nas outras matérias para atingir o mínimo total de 35 pontos — além da nota de corte classificatória para os <strong>500 convocados ao TAF</strong>.
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
        : '<li>Nenhum acerto registrado nesta tentativa. Use a revisão comentada para retomar os conceitos desde a Questão 1.</li>';

    summaryWeaknessesEl.innerHTML =
      weaknesses.length > 0
        ? weaknesses.join('')
        : '<li>Excelente resultado! Você acertou todos os conteúdos cobrados neste simulado.</li>';
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

    // Se todas as questões foram respondidas, finaliza a contagem do cronômetro
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

  // Modal de confirmação para limpar e reiniciar
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
