/**
 * SIMULADO DE RACIOCÍNIO LÓGICO-MATEMÁTICO — PORTAL DE ESTUDOS GCM SALVADOR 2026
 * - Quantidade de questões baseada na prova oficial GCM Salvador 2019 (10 questões: Q15 a Q24).
 * - Critérios de aprovação baseados exclusivamente no Edital nº 002/2026.
 * - Navegação compartilhada sincronizada com a configuração de links do portal.
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
   2. BANCO DE 10 QUESTÕES + REVISÃO TEÓRICA + CORREÇÃO PASSO A PASSO
   Espelha as 10 questões de Raciocínio Lógico (15 a 24) da prova FGV 2019.
   ========================================================================== */
const questionsData = [
  {
    id: 1,
    topic: 'Diferença constante de idades',
    reviewTitle: 'Problemas de idades: a diferença nunca muda',
    reviewConcept:
      'Um dos problemas aritméticos mais clássicos da FGV envolve comparar a idade de duas pessoas em dois momentos diferentes. O princípio fundamental é simples: o tempo passa exatamente igual para todos, portanto a <strong>diferença de idade entre duas pessoas é sempre constante</strong>.',
    reviewFormula: 'Diferença = Idade maior − Idade menor (mantém-se igual no passado, presente e futuro)',
    reviewRules: [
      '<strong>Passo 1:</strong> Descubra a idade das duas pessoas no momento inicial citado no enunciado.',
      '<strong>Passo 2:</strong> Calcule a diferença (ou quantos anos se passaram até o momento atual).',
      '<strong>Passo 3:</strong> Some a mesma diferença (ou os mesmos anos decorridos) para achar a idade pedida. <em>Exemplo:</em> Se aos 6 anos Maria tinha um irmão com o triplo da idade (18 anos), a diferença é 12 anos. Quando Maria tiver 30, o irmão terá 30 + 12 = 42 anos.'
    ],
    reviewTip: 'Você pode resolver de dois jeitos: pela diferença fixa entre as idades ou calculando quantos anos se passaram entre os dois momentos.',
    reviewAlert: 'Erro clássico: manter a proporção ("o dobro", "a metade") para o presente! Se o irmão tinha o dobro aos 10 anos, ele NÃO terá o dobro quando a irmã tiver 34.',
    contextHtml: '',
    prompt:
      'Quando Luana completou 10 anos, seu irmão Mateus tinha o dobro da idade dela. Hoje, Luana tem 34 anos; a idade atual de Mateus é de',
    options: {
      A: '24 anos.',
      B: '38 anos.',
      C: '44 anos.',
      D: '48 anos.',
      E: '68 anos.'
    },
    correct: 'C',
    wrongFeedback: {
      A: 'Você subtraiu os 10 anos iniciais (34 − 10 = 24), mas Mateus era mais velho que Luana (tinha o dobro de 10, ou seja, 20 anos).',
      B: 'Valor obtido sem considerar corretamente os 24 anos que se passaram desde os 10 anos de Luana (34 − 10 = 24; 20 + 24 = 44).',
      D: 'A diferença entre eles era de 10 anos (20 − 10 = 10), e não de 14 anos.',
      E: 'Cuidado com a armadilha clássica: você dobrou a idade atual de Luana (34 × 2 = 68), mas a relação de "dobro" valia apenas quando ela tinha 10 anos.'
    },
    correctExplanation:
      'Passo 1: Quando Luana tinha 10 anos, Mateus tinha o dobro: 2 × 10 = 20 anos.<br>Passo 2: A diferença entre as idades é de 20 − 10 = 10 anos (ou, pensando no tempo decorrido: de 10 para 34 anos passaram-se 24 anos).<br>Passo 3: Hoje, Mateus tem 34 + 10 = 44 anos (ou 20 + 24 = 44 anos).'
  },
  {
    id: 2,
    topic: 'Conjuntos (União e Interseção)',
    reviewTitle: 'Diagrama de Venn com dois conjuntos (quem não está em nenhum)',
    reviewConcept:
      'Problemas com dois grupos que se sobrepõem (ex.: quem usa item A, quem usa item B, quem usa ambos e quem não usa nenhum) são resolvidos evitando contar a interseção duas vezes.',
    reviewFormula: 'Total em pelo menos um grupo: n(A ∪ B) = n(A) + n(B) − n(A ∩ B)  |  Nenhum = Total − n(A ∪ B)',
    reviewRules: [
      '<strong>1. Comece pela interseção (ambos):</strong> esse número faz parte tanto do grupo A quanto do grupo B.',
      '<strong>2. Encontre os "somente":</strong> subtraia a interseção de cada grupo. <em>Exemplo:</em> em 40 pessoas, 18 usam boné, 20 usam óculos e 8 usam ambos -> somente boné = 10; somente óculos = 12; pelo menos um = 10 + 8 + 12 = 30; nenhum = 40 − 30 = 10.'
    ],
    reviewTip: 'Sempre desenhe dois círculos cruzados (ou use a fórmula n(A) + n(B) − n(ambos)) antes de subtrair do total.',
    reviewAlert: 'Erro clássico: somar 28 + 34 = 62 e se assustar por passar do total! Isso acontece porque quem usa os dois itens foi contado duas vezes.',
    contextHtml: '',
    prompt:
      'Em um treinamento operacional participam 60 candidatos, usando equipamentos variados. Entre esses candidatos, há 28 usando colete refletivo, 34 usando boné institucional e 15 usando colete refletivo e boné institucional. Assinale a opção que indica o número de candidatos que não estão usando nenhum desses dois itens.',
    options: {
      A: '2.',
      B: '11.',
      C: '13.',
      D: '15.',
      E: '17.'
    },
    correct: 'C',
    wrongFeedback: {
      A: 'Você somou 28 + 34 = 62 sem descontar a interseção (15), ou fez uma subtração invertida do total.',
      B: 'Revise a subtração: 28 + 34 − 15 = 47 candidatos com pelo menos um item; então 60 − 47 = 13 (e não 11).',
      D: '15 é a quantidade de candidatos que usam ambos os itens (a interseção), não os que não usam nenhum.',
      E: 'Confira as contas: apenas colete = 28 − 15 = 13; apenas boné = 34 − 15 = 19; total com algum item = 13 + 15 + 19 = 47; fora dos dois = 60 − 47 = 13.'
    },
    correctExplanation:
      'Passo 1: Pela fórmula da união, n(Colete ∪ Boné) = 28 + 34 − 15 = 47 candidatos que usam pelo menos um dos dois itens (ou por partes: 13 só colete + 15 ambos + 19 só boné = 47).<br>Passo 2: Quem não usa nenhum dos dois itens = 60 − 47 = 13 candidatos.'
  },
  {
    id: 3,
    topic: 'Calendário e aritmética modular (dias da semana)',
    reviewTitle: 'Contando dias no calendário com o resto da divisão por 7',
    reviewConcept:
      'A semana possui ciclo fixo de <strong>7 dias</strong>. A cada 7 dias avançados, caímos exatamente no mesmo dia da semana. Por isso, para descobrir o dia da semana futuro, dividimos a quantidade de dias transcorridos por 7 e avançamos apenas o <strong>resto</strong>.',
    reviewFormula: 'Dias avançados = Posição final − Posição inicial  |  Resto = (Dias avançados) mod 7',
    reviewRules: [
      '<strong>Duração dos meses:</strong> Janeiro tem <strong>31 dias</strong>; Fevereiro tem <strong>28 dias</strong> em ano não bissexto (e 29 em ano bissexto).',
      '<strong>Atenção à contagem:</strong> se 1º de janeiro é o dia 1, então o último dia de fevereiro (28/02) é o 31 + 28 = 59º dia. De 1 para 59 avançamos <strong>59 − 1 = 58 dias</strong>. <em>Exemplo:</em> se fosse 7 dias após sábado, daria sábado (resto 0); se fosse 9 dias após sábado, 9 ÷ 7 dá resto 2 -> segunda-feira.'
    ],
    reviewTip: 'Quando a data inicial é dia 1, lembre-se sempre de subtrair 1 do total de dias para saber quantos saltos você deu no calendário!',
    reviewAlert: 'Erro clássico: usar 59 ÷ 7 (resto 3) em vez de 58 ÷ 7 (resto 2), contando o dia 1º de janeiro duas vezes.',
    contextHtml: '',
    prompt:
      'Em um ano não bissexto, quando o primeiro dia do ano cai em uma quinta-feira, o último dia de fevereiro cairá em um(a)',
    options: {
      A: 'quarta-feira.',
      B: 'quinta-feira.',
      C: 'sexta-feira.',
      D: 'sábado.',
      E: 'domingo.'
    },
    correct: 'D',
    wrongFeedback: {
      A: 'Quarta-feira ocorreria se recuássemos 1 dia (ou avançássemos 6), o que não corresponde ao resto de 58 ÷ 7.',
      B: 'Quinta-feira seria o mesmo dia inicial (resto 0), mas 58 dias não é múltiplo de 7 (56 é múltiplo de 7).',
      C: 'Sexta-feira seria avançar apenas 1 dia (resto 1), o que corresponderia ao dia 27 de fevereiro, e não 28.',
      E: 'Domingo corresponde a avançar 3 dias (resto 3, de 59 ÷ 7), erro comum ao esquecer de subtrair o próprio dia 1º de janeiro.'
    },
    correctExplanation:
      'Passo 1: Em ano não bissexto, Janeiro tem 31 dias e Fevereiro tem 28 dias, totalizando 31 + 28 = 59 dias.<br>Passo 2: Partindo do dia 1 (1º de janeiro = quinta-feira), até o dia 59 (28 de fevereiro) transcorrem 59 − 1 = 58 dias.<br>Passo 3: Dividindo 58 por 7, temos 58 = 7 × 8 + 2 (8 semanas completas e <strong>resto 2</strong>).<br>Passo 4: Avançando 2 dias a partir de quinta-feira: sexta-feira (+1), <strong>sábado (+2)</strong>.'
  },
  {
    id: 4,
    topic: 'Tabela de dupla entrada e equações do 1º grau',
    reviewTitle: 'Completando tabelas com proporções e totais',
    reviewConcept:
      'A FGV costuma apresentar uma tabela incompleta e dar uma relação algébrica simples sobre o total (por exemplo, "o dobro", "o triplo", "a metade"). Primeiro encontramos os totais por linha/coluna usando uma equação do 1º grau e depois preenchemos os espaços vazios.',
    reviewFormula: 'Se M = 2H e H + M = Total, então H + 2H = Total  ⇒  3H = Total',
    reviewRules: [
      '<strong>Passo 1:</strong> Traduza a relação entre homens e mulheres em equação para achar o total de cada linha.',
      '<strong>Passo 2:</strong> Preencha as células faltantes subtraindo o valor já conhecido do total da linha.',
      '<strong>Passo 3:</strong> Some os dois valores da coluna pedida. <em>Exemplo:</em> se há 60 pessoas e mulheres são o dobro dos homens, 3H = 60 -> H = 20 e M = 40.'
    ],
    reviewTip: 'Depois de preencher toda a tabela, confira se a soma das duas colunas bate exatamente com o total geral informado no enunciado.',
    reviewAlert: 'Erro clássico: dividir o total por 2 quando o enunciado diz "o dobro"! Quando uma parte é o dobro da outra, o total é dividido em 1 + 2 = 3 partes iguais.',
    contextHtml: `
      <p>Uma corporação municipal abriu inscrição para dois cursos internos de capacitação: Atendimento Comunitário e Primeiros Socorros. Inscreveram-se <strong>90 servidores</strong>, sendo que o número de mulheres foi o <strong>dobro</strong> do número de homens.</p>
      <p>O quadro incompleto a seguir mostra os números de inscritos nos dois cursos:</p>
      <div class="rlm-table-wrap">
        <table class="rlm-table">
          <thead>
            <tr>
              <th>Sexo / Curso</th>
              <th>Atendimento Comunitário</th>
              <th>Primeiros Socorros</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Homens</th>
              <td>14</td>
              <td>—</td>
            </tr>
            <tr>
              <th>Mulheres</th>
              <td>—</td>
              <td>24</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    prompt: 'O número total de servidores inscritos para o curso de Atendimento Comunitário era de',
    options: {
      A: '38.',
      B: '46.',
      C: '50.',
      D: '52.',
      E: '54.'
    },
    correct: 'C',
    wrongFeedback: {
      A: 'Se deu 38 (14 + 24), você somou dois valores de cursos diferentes (Homens de Atendimento + Mulheres de Primeiros Socorros)!',
      B: 'Verifique a divisão do total: com 90 servidores e M = 2H, temos 3H = 90 -> H = 30 e M = 60. Logo, mulheres em Atendimento = 60 − 24 = 36.',
      D: 'Total de homens é 30 e total de mulheres é 60. Subtraindo 24 mulheres de Primeiros Socorros restam 36 mulheres, que somadas aos 14 homens dão 50 (não 52).',
      E: 'Se você dividiu 90 por 2, achou 45 erradamente; quando um é o dobro do outro, dividimos por 3 (30 homens e 60 mulheres).'
    },
    correctExplanation:
      'Passo 1: Chamando os homens de H e as mulheres de M, temos M = 2H e H + M = 90. Substituindo: H + 2H = 90 ⇒ 3H = 90 ⇒ H = 30 homens e M = 60 mulheres.<br>Passo 2: Na linha das mulheres, 24 inscreveram-se em Primeiros Socorros; portanto, em Atendimento Comunitário há 60 − 24 = 36 mulheres.<br>Passo 3: Somando os inscritos em Atendimento Comunitário: 14 homens + 36 mulheres = <strong>50 servidores</strong>.'
  },
  {
    id: 5,
    topic: 'Negação de proposições categóricas',
    reviewTitle: 'Como negar "Nenhum A é B" e "Todo A é B"',
    reviewConcept:
      'Dizer que uma afirmação "não é verdadeira" equivale exatamente a fazer sua <strong>negação lógica</strong>. A FGV cobra com muita frequência a negação de quantificadores universais ("Todo", "Nenhum").',
    reviewFormula: 'Negação de "Nenhum A é B" ⇔ "Pelo menos um A é B" (ou "Existe algum A que é B")',
    reviewRules: [
      '<strong>Negação de "Nenhum A é B":</strong> basta existir um único contraexemplo para derrubar "Nenhum". Logo, vira <strong>"Há, pelo menos, um A que é B"</strong>.',
      '<strong>Negação de "Todo A é B":</strong> basta existir um único contraexemplo fora do padrão. Logo, vira <strong>"Há, pelo menos, um A que não é B"</strong>.',
      '<strong>Atenção:</strong> a negação de "Nenhum" NÃO é "Todos"!'
    ],
    reviewTip: 'Sempre que ler "...não é verdadeira" diante de "Todo" ou "Nenhum", busque a resposta que começa com "Há, pelo menos, um..." / "Existe algum...".',
    reviewAlert: 'Erro clássico: achar que o contrário lógico de "Nenhum faltou" é "Todos faltaram". Se apenas 1 pessoa faltar, "Nenhum faltou" já fica falsa!',
    contextHtml: '',
    prompt:
      'Considerando que a afirmação “Nenhum guarda municipal faltou ao plantão” não é verdadeira, é correto concluir que',
    options: {
      A: '“Todos os guardas municipais faltaram ao plantão.”',
      B: '“Há, pelo menos, um guarda municipal que faltou ao plantão.”',
      C: '“Quem não é guarda municipal faltou ao plantão.”',
      D: '“Apenas um guarda municipal compareceu ao plantão.”',
      E: '“Todos os que faltaram ao plantão são guardas municipais.”'
    },
    correct: 'B',
    wrongFeedback: {
      A: 'Erro clássico dos quantificadores: a negação de "Nenhum" não é "Todos". Para tornar "Nenhum faltou" falsa, basta 1 falta.',
      C: 'A proposição trata exclusivamente do conjunto dos guardas municipais, nada afirmando sobre quem não pertence a ele.',
      D: 'Não podemos garantir quantos compareceram exatamente; apenas sabemos que não foram todos (pelo menos 1 faltou).',
      E: 'Inversão indevida de conjuntos: saber que algum guarda faltou não impede que outras pessoas também tenham faltado.'
    },
    correctExplanation:
      'Se a proposição universal negativa "Nenhum guarda municipal faltou ao plantão" é falsa, sua negação lógica é verdadeira. Pela lógica das proposições categóricas, a negação de "Nenhum A é B" é "Existe pelo menos um A que é B", ou seja: "Há, pelo menos, um guarda municipal que faltou ao plantão".'
  },
  {
    id: 6,
    topic: 'Princípio de contagem / Combinação simples',
    reviewTitle: 'Formação de pares, jogos ou duplas sem repetir a ordem',
    reviewConcept:
      'Quando precisamos formar grupos de 2 elementos (duplas de trabalho, partidas entre times, apertos de mão) onde a ordem não importa — pois a dupla (Viatura 1, Viatura 2) é a mesma que (Viatura 2, Viatura 1) — usamos a <strong>Combinação Simples de n tomados 2 a 2</strong>.',
    reviewFormula: 'C(n, 2) = n × (n − 1) ÷ 2',
    reviewRules: [
      '<strong>Por que dividir por 2?</strong> Cada um dos <em>n</em> elementos pode se juntar a outros <em>(n − 1)</em> elementos, dando <em>n × (n − 1)</em> escolhas ordenadas; dividimos por 2 para não contar cada dupla duas vezes.',
      '<strong>Exemplo prático:</strong> com 5 times jogando todos contra todos em turno único: 5 × 4 ÷ 2 = 10 partidas.'
    ],
    reviewTip: 'Para grupos de 2 (duplas/jogos de turno único), basta multiplicar a quantidade total pelo número imediatamente anterior e dividir por 2.',
    reviewAlert: 'Erro clássico: esquecer de dividir por 2 (obtendo 30 em vez de 15) ou multiplicar por 2.',
    contextHtml: '',
    prompt:
      'Seis viaturas de uma base operacional serão escaladas em duplas para rondas integradas, de modo que cada viatura forme dupla exatamente uma vez com cada uma das outras viaturas. O número total de duplas distintas que serão formadas é',
    options: {
      A: '10.',
      B: '12.',
      C: '15.',
      D: '24.',
      E: '30.'
    },
    correct: 'C',
    wrongFeedback: {
      A: '10 seria o resultado para 5 viaturas (5 × 4 ÷ 2 = 10), e não para 6 viaturas.',
      B: '6 × 2 = 12 não considera todas as combinações possíveis entre as 6 viaturas.',
      D: 'Verifique a fórmula: C(6,2) = (6 × 5) ÷ 2 = 15 (e não 24).',
      E: 'Você fez 6 × 5 = 30, mas esqueceu de dividir por 2! Sem dividir por 2, a dupla (V1, V2) e a dupla (V2, V1) são contadas como se fossem diferentes.'
    },
    correctExplanation:
      'Como a ordem na dupla não altera a dupla formada, aplicamos a combinação simples C(6, 2):<br>C(6, 2) = (6 × 5) ÷ 2 = 30 ÷ 2 = <strong>15 duplas distintas</strong>.<br>(Também é possível somar manualmente: a V1 forma 5 duplas novas, a V2 mais 4, a V3 mais 3, a V4 mais 2 e a V5 mais 1 -> 5 + 4 + 3 + 2 + 1 = 15.)'
  },
  {
    id: 7,
    topic: 'Proporcionalidade e divisão com decimais',
    reviewTitle: 'Regra de três simples e divisão com número decimal',
    reviewConcept:
      'Muitas questões da FGV pedem uma regra de três direta envolvendo números com vírgula (ex.: 2,5 litros por hora, 7,5 litros por quilo). Para nunca errar a conta na hora da prova, elimine a vírgula multiplicando numerador e denominador por 10 (ou por 2).',
    reviewFormula: 'Quantidade = Total disponível ÷ Consumo unitário  |  Dica: 115 ÷ 2,5 = (115 × 2) ÷ (2,5 × 2) = 230 ÷ 5',
    reviewRules: [
      '<strong>Regra de três direta:</strong> se 1 hora consome 2,5 L, então <em>x</em> horas consomem 115 L -> 2,5x = 115.',
      '<strong>Truque para dividir por 2,5 ou 7,5:</strong> multiplique ambos os lados por 2 (2,5 vira 5; 7,5 vira 15) ou por 10 (2,5 vira 25). Dividir por número inteiro evita erros de vírgula!'
    ],
    reviewTip: 'Sempre faça uma estimativa rápida para conferir o resultado: 40 × 2,5 = 100 L; como temos 115 L (15 L a mais, e 15 ÷ 2,5 = 6), o total só pode ser 40 + 6 = 46!',
    reviewAlert: 'Erro clássico: errar a posição da vírgula na divisão ou multiplicar 115 por 2,5 em vez de dividir.',
    contextHtml: '',
    prompt:
      'Um gerador portátil utilizado em eventos públicos consome 2,5 litros de combustível a cada hora de funcionamento contínuo. Com um reservatório contendo 115 litros de combustível, o tempo máximo de funcionamento contínuo desse gerador é de',
    options: {
      A: '42 horas.',
      B: '44 horas.',
      C: '46 horas.',
      D: '48 horas.',
      E: '52 horas.'
    },
    correct: 'C',
    wrongFeedback: {
      A: '42 × 2,5 = 105 litros; ainda sobrariam 10 litros no reservatório (suficientes para mais 4 horas).',
      B: '44 × 2,5 = 110 litros; ainda restariam 5 litros (mais 2 horas).',
      D: '48 × 2,5 = 120 litros, ultrapassando os 115 litros disponíveis.',
      E: '52 × 2,5 = 130 litros, muito acima dos 115 litros do reservatório.'
    },
    correctExplanation:
      'Montando a regra de três: 1 hora está para 2,5 litros, assim como x horas estão para 115 litros.<br>x = 115 ÷ 2,5.<br>Multiplicando ambos por 2 para eliminar a vírgula: 230 ÷ 5 = <strong>46 horas</strong>.<br>(Prova real: 46 × 2 = 92; 46 × 0,5 = 23; 92 + 23 = 115 litros.)'
  },
  {
    id: 8,
    topic: 'Posicionamento em fila (raciocínio sequencial)',
    reviewTitle: 'Contagem de posições e pessoas "entre" dois pontos na fila',
    reviewConcept:
      'Problemas de fila exigem muito cuidado com a palavra <strong>"entre"</strong>. Quando há <em>k</em> pessoas entre A e B, a distância na numeração da fila é <strong>k + 1</strong>.',
    reviewFormula: 'Posição(B) = Posição(A) + (pessoas entre A e B) + 1  |  Meio da fila: Total = 2 × (Posição do meio) − 1',
    reviewRules: [
      '<strong>Posição vs. pessoas à frente:</strong> se alguém é o 9º da fila, há <strong>8 pessoas</strong> à sua frente (9 − 1).',
      '<strong>"Entre A e B há 6 pessoas":</strong> se A está na posição 9, contamos 10, 11, 12, 13, 14, 15 (6 pessoas) e B será o <strong>16º</strong> (9 + 6 + 1 = 16).',
      '<strong>Pessoa no meio da fila:</strong> se há 15 pessoas antes dela, também há exatamente 15 pessoas depois dela.'
    ],
    reviewTip: 'Desenhe uma linha horizontal marcando os nomes, suas posições ordinais (9º, 16º, 25º) e quantas pessoas há em cada intervalo!',
    reviewAlert: 'Erro clássico: somar 9 + 6 = 15 sem somar +1 para chegar à posição da próxima pessoa, errando toda a fila por 1 unidade.',
    contextHtml: `
      <p>Bruno, Camila e Diego estão em uma fila de atendimento, nessa ordem, ou seja, Camila está atrás de Bruno e Diego está atrás de Camila. Sabe-se que:</p>
      <ul class="question-context-bullets">
        <li>Camila está no meio da fila, ou seja, há tantas pessoas na frente dela como atrás dela.</li>
        <li>Há 6 pessoas entre Bruno e Camila.</li>
        <li>Há 8 pessoas entre Camila e Diego.</li>
        <li>Bruno é o 9º da fila.</li>
      </ul>
    `,
    prompt: 'Nessa fila, o número de pessoas atrás de Diego é',
    options: {
      A: '5.',
      B: '6.',
      C: '7.',
      D: '8.',
      E: '9.'
    },
    correct: 'B',
    wrongFeedback: {
      A: 'Revise a conta de posições: Camila é a 16ª (há 15 atrás dela). Diego fica em 16 + 8 + 1 = 25º, restando 31 − 25 = 6 pessoas atrás.',
      C: 'Você provavelmente esqueceu de contar o próprio Diego ao subtrair os 8 do intervalo (15 − 8 = 7), mas Diego ocupa uma posição após esses 8!',
      D: '8 é a quantidade de pessoas à frente de Bruno (e também entre Camila e Diego), não atrás de Diego.',
      E: '9 é a posição de Bruno na fila, não o número de pessoas atrás de Diego.'
    },
    correctExplanation:
      'Passo 1: Bruno é o 9º da fila (há 8 pessoas antes dele).<br>Passo 2: Há 6 pessoas entre Bruno e Camila, então Camila ocupa a posição 9 + 6 + 1 = 16ª (há 15 pessoas à sua frente).<br>Passo 3: Como Camila está no meio da fila, há também 15 pessoas atrás dela (total da fila = 15 + 1 + 15 = 31 pessoas).<br>Passo 4: Há 8 pessoas entre Camila e Diego, logo Diego ocupa a posição 16 + 8 + 1 = 25ª.<br>Passo 5: Atrás de Diego há 31 − 25 = <strong>6 pessoas</strong> (ou 15 − 8 − 1 = 6).'
  },
  {
    id: 9,
    topic: 'Sequências periódicas (divisão euclidiana)',
    reviewTitle: 'Encontrando o enésimo termo em sequências que se repetem',
    reviewConcept:
      'Quando uma palavra ou sequência de símbolos se repete indefinidamente sem espaços, não listamos até o 300º termo! Contamos o tamanho do bloco repetido (<strong>período</strong>) e dividimos a posição desejada por esse período.',
    reviewFormula: 'Posição ÷ Tamanho do bloco = Quociente (blocos completos) + Resto (posição dentro do bloco)',
    reviewRules: [
      '<strong>Passo 1:</strong> Conte com muita atenção quantas letras tem exatamente o bloco que se repete.',
      '<strong>Passo 2:</strong> Divida a posição pedida pelo tamanho do bloco e olhe para o <strong>resto</strong>.',
      '<strong>Resto diferente de zero (1, 2, 3...):</strong> a resposta é a 1ª, 2ª, 3ª... letra do bloco.',
      '<strong>Resto zero (0):</strong> a divisão foi exata, então a resposta é a <strong>última letra</strong> do bloco!'
    ],
    reviewTip: 'Numere de 1 até N embaixo das letras do primeiro bloco no rascunho antes de fazer a divisão.',
    reviewAlert: 'Erro clássico: contar errado o número de letras do bloco (por exemplo, contar 13 em vez de 14 em GUARDASALVADOR) ou errar o significado do resto 0.',
    contextHtml: `
      <p>Para identificar lotes de equipamentos, um sistema repete continuamente, sem espaços, a sequência de letras a seguir, mantendo sempre o mesmo padrão:</p>
      <code class="question-code-seq">GUARDASALVADORGUARDASALVADORGUARDA...</code>
    `,
    prompt: 'A 301ª letra dessa sequência é',
    options: {
      A: 'A.',
      B: 'D.',
      C: 'G.',
      D: 'R.',
      E: 'S.'
    },
    correct: 'E',
    wrongFeedback: {
      A: 'A letra A aparece nas posições 3, 6, 8 e 11 do bloco. Como 301 = 14 × 21 + 7, o resto é 7 (que corresponde a S, não a A).',
      B: 'A letra D está nas posições 5 e 12 do bloco; o resto de 301 ÷ 14 é 7.',
      C: 'A letra G é a 1ª do bloco (seria resto 1, ou seja, 295ª posição).',
      D: 'A letra R está nas posições 4 e 14 (seria resto 4 ou resto 0, caso fosse a 294ª ou 308ª letra).'
    },
    correctExplanation:
      'Passo 1: O padrão que se repete é <strong>GUARDASALVADOR</strong>, que possui <strong>14 letras</strong>: G(1) U(2) A(3) R(4) D(5) A(6) S(7) A(8) L(9) V(10) A(11) D(12) O(13) R(14).<br>Passo 2: Dividimos 301 por 14: 14 × 21 = 294, sobrando <strong>resto 301 − 294 = 7</strong>.<br>Passo 3: A 7ª letra do bloco GUARDASALVADOR é <strong>S</strong>.'
  },
  {
    id: 10,
    topic: 'Ordenação lógica e dedução',
    reviewTitle: 'Resolvendo problemas de ordem de chegada por eliminação',
    reviewConcept:
      'Nos problemas de ordenação da FGV ("quem chegou primeiro / por último"), nem sempre as pistas revelam imediatamente todas as posições exatas, mas permitem <strong>eliminar candidatos</strong> para os extremos (1º e último) até sobrar apenas uma conclusão necessária.',
    reviewRules: [
      '<strong>Passo 1:</strong> Liste todos os participantes e marque com setas quem chegou antes de quem (ex.: A < B significa "A chegou antes de B").',
      '<strong>Passo 2:</strong> Para descobrir o <strong>último</strong>, elimine quem chegou "antes de alguém" e quem o enunciado diz que "não foi o último".',
      '<strong>Passo 3:</strong> Para descobrir o <strong>primeiro</strong>, elimine quem chegou "depois de alguém" e quem o enunciado diz que "não foi o primeiro".'
    ],
    reviewTip: 'Teste cada alternativa buscando se ela é obrigatoriamente verdadeira (e não apenas "possível"). Na FGV, às vezes duas pessoas do meio podem trocar de lugar, mas um extremo fica 100% determinado.',
    reviewAlert: 'Erro clássico: confundir uma ordem "possível" que você chutou para o meio da fila com uma conclusão logicamente obrigatória!',
    contextHtml: `
      <p>André, Beatriz, Cláudio, Daniela e Eduardo marcaram horário para uma entrevista de instrução. Todos chegaram em momentos ligeiramente diferentes. Sabe-se que:</p>
      <ul class="question-context-bullets">
        <li>Beatriz chegou antes de Eduardo e de Daniela, mas não foi a primeira a chegar.</li>
        <li>Eduardo chegou depois de Daniela, mas não foi o último a chegar.</li>
        <li>Cláudio chegou antes de Eduardo.</li>
      </ul>
    `,
    prompt: 'Com base nessas informações, é correto concluir que',
    options: {
      A: 'André foi o último a chegar.',
      B: 'Beatriz foi a terceira a chegar.',
      C: 'Daniela foi a segunda a chegar.',
      D: 'Eduardo foi o último a chegar.',
      E: 'Cláudio foi o segundo a chegar.'
    },
    correct: 'A',
    wrongFeedback: {
      B: 'Não podemos concluir que Beatriz foi a 3ª: como Cláudio é o único que pode ser o 1º e Beatriz vem antes de Daniela e Eduardo (enquanto André é o último), Beatriz foi obrigatoriamente a 2ª!',
      C: 'Daniela chegou depois de Beatriz e de Cláudio (que foi o 1º), logo ela não pode ter sido a 2ª (foi a 3ª).',
      D: 'O enunciado afirma explicitamente que Eduardo "não foi o último a chegar".',
      E: 'Como Beatriz não foi a 1ª, Daniela e Eduardo vieram depois de Beatriz, e André foi o último, só resta a Cláudio o 1º lugar (não o 2º).'
    },
    correctExplanation:
      'Passo 1 — Quem pode ser o 5º (último)?<br>• Beatriz chegou antes de Eduardo e Daniela (não é última).<br>• Daniela chegou antes de Eduardo (não é última).<br>• Cláudio chegou antes de Eduardo (não é último).<br>• Eduardo, pelo enunciado, não foi o último.<br>Portanto, o único restante é <strong>André, que foi obrigatoriamente o último a chegar</strong>.<br>Passo 2 — Confirmando a ordem completa: 1º Cláudio (único que pode ser o 1º), 2ª Beatriz, 3ª Daniela, 4º Eduardo, 5º André.'
  }
];

/* ==========================================================================
   3. CONSTANTES DO EDITAL 2026 (USO EXCLUSIVO PARA O PAINEL DE APROVAÇÃO)
   ========================================================================== */
const EDITAL_2026 = {
  totalProva: 70,
  totalModulo1: 28,
  totalModulo2: 42,
  rlmEm2026: 10,
  minimoModulo1: 14, // 50% de 28
  minimoModulo2: 21, // 50% de 42
  minimoTotal: 35    // 50% de 70
};

/* ==========================================================================
   4. ESTADO DO SIMULADO E CONTROLADORES
   ========================================================================== */
const TOTAL_QUESTIONS = questionsData.length; // 10 questões (ref. 2019: Q15 a Q24)

const state = {
  currentIndex: 0,
  answers: new Array(TOTAL_QUESTIONS).fill(null),
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
        if (key === 'raciocinioLogico') {
          element.setAttribute('aria-current', 'page');
        }

        let pill = element.querySelector('.nav-status-pill');
        if (!pill) {
          pill = document.createElement('span');
          element.appendChild(pill);
        }
        pill.className = 'nav-status-pill ready';
        pill.textContent = key === 'raciocinioLogico' ? 'Atual' : 'Abrir';
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

    // 1. Referência proporcional de 50% (5 acertos em 10 questões)
    const proportionalTarget = Math.ceil(TOTAL_QUESTIONS * 0.5); // 5
    const proportionalPct = Math.min(100, (correct / proportionalTarget) * 100);
    benchPercentFillEl.style.width = `${proportionalPct.toFixed(0)}%`;

    if (correct >= proportionalTarget) {
      benchPercentBadgeEl.textContent = `Atingida (${correct}/${proportionalTarget})`;
      benchPercentBadgeEl.className = 'benchmark-badge is-met';
      benchPercentFillEl.classList.add('is-met');
      benchPercentNoteEl.textContent = `Você atingiu ${correct} acertos (${((correct / TOTAL_QUESTIONS) * 100).toFixed(1).replace('.', ',')}% do simulado), superando a referência proporcional de 50% (5 acertos).`;
    } else {
      const missingProp = proportionalTarget - correct;
      benchPercentBadgeEl.textContent = `Faltam ${missingProp} (${correct}/${proportionalTarget})`;
      benchPercentBadgeEl.className = answered > 0 ? 'benchmark-badge is-below' : 'benchmark-badge';
      benchPercentFillEl.classList.remove('is-met');
      benchPercentNoteEl.textContent = `O Edital 2026 exige 50% em cada módulo. Em 10 questões de Raciocínio Lógico-Matemático, faltam ${missingProp} acerto(s) para alcançar 5 acertos (50%).`;
    }

    // 2. Critério numérico do Módulo I no Edital 2026 (14 acertos em 28 questões)
    const m1Pct = Math.min(100, (correct / EDITAL_2026.minimoModulo1) * 100);
    benchM1FillEl.style.width = `${m1Pct.toFixed(0)}%`;

    const missingM1 = Math.max(0, EDITAL_2026.minimoModulo1 - correct);
    benchM1BadgeEl.textContent = `Faltam ${missingM1} pts no Módulo I`;
    benchM1BadgeEl.className = answered > 0 ? 'benchmark-badge is-below' : 'benchmark-badge';

    // 3. Critério total (35 acertos em 70 questões)
    const missingTotal = Math.max(0, EDITAL_2026.minimoTotal - correct);
    benchTotalMissingEl.textContent = `faltam ao menos ${missingTotal} acertos nas demais questões da prova de 70 itens`;

    // Status geral sempre transparente quanto à limitação de escopo
    if (answered === 0) {
      approvalOverallPillEl.textContent = 'Dados insuficientes para aprovação geral';
      approvalStatusTextEl.innerHTML =
        'Este simulado avalia apenas <strong>Raciocínio Lógico-Matemático (10 questões)</strong>. No Edital nº 002/2026, a aprovação na Prova Objetiva depende do desempenho cumulativo em <strong>todos os módulos (70 questões)</strong>.';
    } else if (state.isCompleted) {
      approvalOverallPillEl.textContent =
        correct >= proportionalTarget
          ? 'Bom desempenho parcial · Dados insuficientes p/ aprovação geral'
          : 'Abaixo da referência de 50% · Dados insuficientes p/ aprovação geral';
      approvalStatusTextEl.innerHTML =
        `Você concluiu Raciocínio Lógico-Matemático com <strong>${correct} de ${TOTAL_QUESTIONS} acertos (${accuracy.toFixed(1).replace('.', ',')}%)</strong>. Como o Edital 2026 exige mínimos cumulativos no Módulo I (14/28), Módulo II (21/42) e Total (35/70), não é possível declarar aprovação no concurso apenas com esta disciplina.`;
    } else {
      approvalOverallPillEl.textContent = 'Dados insuficientes para aprovação geral';
      approvalStatusTextEl.innerHTML =
        `Desempenho parcial em Raciocínio Lógico-Matemático: <strong>${correct} acerto(s)</strong> em ${answered} respondida(s). A aprovação oficial depende também de Língua Portuguesa, Informática e todo o Módulo II no Edital 2026.`;
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

    const formulaHtml = question.reviewFormula
      ? `<div class="review-formula-box"><strong>Fórmula / Regra-chave:</strong> ${question.reviewFormula}</div>`
      : '';

    reviewBodyEl.innerHTML = `
      <p class="review-concept">${question.reviewConcept}</p>
      ${formulaHtml}
      <div class="review-rules-box">
        <p class="review-rules-title">Como resolver passo a passo:</p>
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
          <strong>Resolução passo a passo:</strong>
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
          <strong>Resolução correta passo a passo (alternativa ${question.correct}):</strong>
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

    const missingM1 = Math.max(0, EDITAL_2026.minimoModulo1 - correct);
    const missingTotal = Math.max(0, EDITAL_2026.minimoTotal - correct);

    summaryEditalBoxEl.innerHTML = `
      <p><strong>Comparação com os critérios oficiais do Edital nº 002/2026:</strong></p>
      <p>
        • <strong>Desempenho em Raciocínio Lógico-Matemático:</strong> ${correct} de ${TOTAL_QUESTIONS} questões (${accuracy.toFixed(1).replace('.', ',')}%). ${
          correct >= proportionalTarget
            ? 'Você alcançou ou superou a referência proporcional de 50% (5 acertos).'
            : `Faltaram ${proportionalTarget - correct} acerto(s) para atingir 50% neste simulado.`
        }<br>
        • <strong>Critérios eliminatórios oficiais (Edital 2026):</strong> o edital exige mínimo cumulativo de <strong>14 acertos no Módulo I</strong> (28 questões), <strong>21 acertos no Módulo II</strong> (42 questões) e <strong>35 acertos no total</strong> (70 questões).<br>
        • <strong>Limitação de escopo:</strong> ainda faltam ao menos <strong>${missingM1} acertos</strong> em Língua Portuguesa/Informática para completar os 14 pontos mínimos do Módulo I, e ao menos <strong>${missingTotal} acertos</strong> no restante da prova para alcançar o piso de 35 pontos — além da nota de corte classificatória para os <strong>500 convocados ao TAF</strong>.
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
        : '<li>Nenhum acerto registrado nesta tentativa. Use a revisão teórica e a resolução comentada para retomar desde a Questão 1.</li>';

    summaryWeaknessesEl.innerHTML =
      weaknesses.length > 0
        ? weaknesses.join('')
        : '<li>Excelente desempenho! Você acertou todas as questões de Raciocínio Lógico-Matemático deste simulado.</li>';
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
