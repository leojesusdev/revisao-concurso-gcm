<script>
    // =========================================================================
    // DADOS ESTRUTURADOS DO EDITAL 02/2026 RETIFICADO (SEM QUESTÕES DE PROVA)
    // =========================================================================
    const DISCIPLINE_MAX = {
      portugues: 10,
      logica: 10,
      informatica: 8,
      const: 10,
      penal: 7,
      adm: 5,
      atuacao: 10,
      legislacao: 10,
      meta: 70
    };

    const DISCIPLINE_LABELS = {
      portugues: `Língua Portuguesa`,
      logica: `Raciocínio Lógico`,
      informatica: `Informática`,
      const: `Dir. Const. e Civil`,
      penal: `Dir. Penal e Proc. Penal`,
      adm: `Adm. e Pol. Públicas`,
      atuacao: `Área de Atuação`,
      legislacao: `Legislação`
    };

    const STAGES_DATA = {
      1: {
        badge: `1ª Etapa · Eliminatória e Classificatória · Banca FGV`,
        title: `Prova Escrita Objetiva (17 de janeiro de 2027)`,
        summary: `Aplicada na cidade de Salvador/BA, das 08h00 às 12h30 (horário de Brasília), com fechamento dos portões às 07h30. Composta por 70 questões de múltipla escolha (A–E), valendo 1 ponto cada (máximo de 70 pontos), sem consulta.`,
        highlights: [
          `Módulo I (Conhecimentos Básicos): 28 questões (40% da prova) — Português (10), Raciocínio Lógico (10) e Informática (8).`,
          `Módulo II (Conhecimentos Específicos): 42 questões (60% da prova) — Dir. Constitucional/Civil (10), Dir. Penal/Proc. Penal (7), Adm./Pol. Públicas (5), Área de Atuação (10) e Legislação (10).`,
          `Caneta esferográfica transparente de tinta azul ou preta; documento físico original com foto obrigatório (documentos digitais são proibidos).`,
          `Questões sem marcação, rasuradas ou com mais de uma alternativa marcada são anuladas no cartão (nota zero).`
        ],
        isTaf: false
      },
      2: {
        badge: `2ª Etapa · Eliminatória e Classificatória · Banca FGV`,
        title: `Teste de Aptidão Física — TAF (05 a 07 de abril de 2027)`,
        summary: `Avalia a capacidade física mínima e acrescenta até 5,00 pontos à Nota Final do candidato. Os 4 exercícios são executados na ordem obrigatória do Item 10.16: Barra Fixa, Flexão de Membros Superiores, Abdominal Remador e Corrida.`,
        highlights: [
          `Pontuação máxima do TAF: 5,00 pontos (1,00 pt na Barra + 1,00 pt na Flexão + 1,00 pt no Abdominal + 2,00 pts na Corrida).`,
          `Qualquer exercício classificado como Insuficiente (I = 0 ponto) compromete o desempenho mínimo exigido conforme edital de convocação.`,
          `Obrigatório apresentar atestado médico específico conforme modelo do Anexo VI do Edital.`
        ],
        isTaf: true
      },
      3: {
        badge: `3ª Etapa · Eliminatória · Banca FGV`,
        title: `Avaliação Psicológica (30 de maio de 2027)`,
        summary: `Define o resultado APTO ou INAPTO (sem atribuição de nota numérica). O candidato INAPTO é eliminado do certame, não cabendo segunda avaliação psicológica, mas podendo solicitar entrevista de devolução e recurso.`,
        highlights: [
          `11 constructos avaliados (Item 10.13): Atenção Concentrada, Atenção Difusa/Dividida, Inteligência Geral e Memória (exigem desempenho mínimo médio).`,
          `Traços de personalidade e controle: Estabilidade Emocional, Conscienciosidade, Neuroticismo e Relacionamento Interpessoal.`,
          `Controles críticos de segurança: Regulação da Ansiedade, Regulação da Agressividade e Regulação da Impulsividade (níveis exacerbados são impeditivos).`
        ],
        isTaf: false
      },
      4: {
        badge: `4ª Etapa · Eliminatória · Prefeitura do Salvador (GESMS / SEMGE)`,
        title: `Heteroidentificação, Perícia Médica e Investigação Social`,
        summary: `Procedimentos presenciais e documentais que antecedem a matrícula no Curso de Formação e a posse. Candidatos inscritos às cotas de Negros (PPP) passam por entrevista presencial de Heteroidentificação (02 a 06/08/2027).`,
        highlights: [
          `Perícia Médica (GESMS/SEMGE): prazo de 30 dias corridos após convocação para agendamento; PCD passa também por equipe multidisciplinar da SEMGE + GCM.`,
          `Investigação Social (Item 3.3): certidões negativas criminais das Polícias Civil e Federal e certidões dos Poderes Judiciários Estadual, Distrital e Federal.`,
          `Requisitos documentais na posse: Nível Médio completo com histórico escolar e CNH válida categoria mínima "B".`
        ],
        isTaf: false
      },
      5: {
        badge: `5ª Etapa · Eliminatória · Guarda Civil Municipal de Salvador`,
        title: `Curso de Formação Inicial (744 horas-aula presenciais)`,
        summary: `Organizado pela própria GCM em Salvador/BA (podendo ocorrer em dias úteis, feriados e finais de semana). A aprovação é requisito indispensável para nomeação e posse no cargo de GCM 3ª Classe.`,
        highlights: [
          `Carga horária de 744 horas-aula presenciais; exigência de frequência mínima de 85% para habilitar-se à Prova Final.`,
          `Aprovação exige nota ≥ 60% na Prova Final (100 pts) e aproveitamento ≥ 60% na avaliação técnica de manuseio de arma de fogo (IN 111-DG/PF e IN 310/2025-DG/PF).`,
          `Bolsa-auxílio durante o curso: 85% do vencimento base (R$ 1.507,23) sem descontos de encargos.`
        ],
        isTaf: false
      }
    };

    const TAF_EXERCISES = {
      masc: [
        {
          order: `1º Exercício`,
          name: `Barra Fixa (Dinâmica · Pegada Livre)`,
          bands: [
            { label: `I (0,00 pt)`, val: `< 3 repetições` },
            { label: `B (0,75 pt)`, val: `3 a 6 repetições` },
            { label: `MB (1,00 pt)`, val: `> 6 repetições` }
          ]
        },
        {
          order: `2º Exercício`,
          name: `Flexão de Membros Superiores`,
          bands: [
            { label: `I (0,00 pt)`, val: `< 20 repetições` },
            { label: `B (0,75 pt)`, val: `20 a 30 repetições` },
            { label: `MB (1,00 pt)`, val: `> 30 repetições` }
          ]
        },
        {
          order: `3º Exercício`,
          name: `Abdominal Remador`,
          bands: [
            { label: `I (0,00 pt)`, val: `< 25 repetições` },
            { label: `B (0,75 pt)`, val: `25 a 35 repetições` },
            { label: `MB (1,00 pt)`, val: `> 35 repetições` }
          ]
        },
        {
          order: `4º Exercício`,
          name: `Corrida (12 minutos)`,
          bands: [
            { label: `I (0,00 pt)`, val: `< 2.200 metros` },
            { label: `B (1,00 pt)`, val: `2.200 a 2.400 m` },
            { label: `MB (2,00 pts)`, val: `> 2.400 metros` }
          ]
        }
      ],
      fem: [
        {
          order: `1º Exercício`,
          name: `Barra Fixa (Estática · Pegada Livre)`,
          bands: [
            { label: `I (0,00 pt)`, val: `< 10 segundos` },
            { label: `B (0,75 pt)`, val: `10 a 13 segundos` },
            { label: `MB (1,00 pt)`, val: `> 13 segundos` }
          ]
        },
        {
          order: `2º Exercício`,
          name: `Flexão de Membros Superiores`,
          bands: [
            { label: `I (0,00 pt)`, val: `< 15 repetições` },
            { label: `B (0,75 pt)`, val: `15 a 25 repetições` },
            { label: `MB (1,00 pt)`, val: `> 25 repetições` }
          ]
        },
        {
          order: `3º Exercício`,
          name: `Abdominal Remador`,
          bands: [
            { label: `I (0,00 pt)`, val: `< 20 repetições` },
            { label: `B (0,75 pt)`, val: `20 a 30 repetições` },
            { label: `MB (1,00 pt)`, val: `> 30 repetições` }
          ]
        },
        {
          order: `4º Exercício`,
          name: `Corrida (14 minutos)`,
          bands: [
            { label: `I (0,00 pt)`, val: `< 2.200 metros` },
            { label: `B (1,00 pt)`, val: `2.200 a 2.400 m` },
            { label: `MB (2,00 pts)`, val: `> 2.400 metros` }
          ]
        }
      ]
    };

    const TIMELINE_EVENTS = [
      { date: `21/09 a 30/10/2026`, event: `Período de inscrições e solicitações de isenção (21 a 22/09)`, status: `Concluído`, isPast: true, isToday: false },
      { date: `20/11/2026`, event: `Prazo limite para pagamento do boleto bancário (R$ 98,00)`, status: `Concluído`, isPast: true, isToday: false },
      { date: `24/11/2026`, event: `Relação Preliminar de Inscrições Deferidas (Geral, PPP, Feminino, PCD e Atendimento Especial)`, status: `Hoje`, isPast: false, isToday: true },
      { date: `25/11 a 26/11/2026`, event: `Prazo para recursos contra as Relações Preliminares de Inscrição`, status: `Próximo`, isPast: false, isToday: false },
      { date: `10/12/2026`, event: `Relação Definitiva de Inscrições e divulgação da Concorrência (Candidato/Vaga)`, status: `Previsto`, isPast: false, isToday: false },
      { date: `11/01/2027`, event: `Publicação dos Locais de Prova (Cartão de Confirmação — CCI)`, status: `Previsto`, isPast: false, isToday: false },
      { date: `17/01/2027`, event: `Aplicação da Prova Escrita Objetiva (08h00 às 12h30)`, status: `Etapa 1`, isPast: false, isToday: false },
      { date: `18/01/2027`, event: `Divulgação do Gabarito Preliminar (Recursos: 19 a 20/01/2027)`, status: `Previsto`, isPast: false, isToday: false },
      { date: `22/02/2027`, event: `Gabarito Definitivo e Resultado Preliminar da Prova Objetiva`, status: `Previsto`, isPast: false, isToday: false },
      { date: `17/03/2027`, event: `Resultado Definitivo da Prova Objetiva e Convocação para o TAF`, status: `Previsto`, isPast: false, isToday: false },
      { date: `05/04 a 07/04/2027`, event: `Realização do Teste de Aptidão Física (TAF)`, status: `Etapa 2`, isPast: false, isToday: false },
      { date: `11/05/2027`, event: `Resultado Definitivo do TAF e Convocação para Avaliação Psicológica`, status: `Previsto`, isPast: false, isToday: false },
      { date: `30/05/2027`, event: `Realização da Avaliação Psicológica`, status: `Etapa 3`, isPast: false, isToday: false },
      { date: `19/07/2027`, event: `Resultado Definitivo da Avaliação Psicológica e Convocação Heteroidentificação`, status: `Previsto`, isPast: false, isToday: false },
      { date: `02/08 a 06/08/2027`, event: `Entrevistas presenciais de Heteroidentificação (PPP)`, status: `Etapa 4`, isPast: false, isToday: false },
      { date: `02/09/2027`, event: `Publicação do Resultado Final do Concurso Público`, status: `Final`, isPast: false, isToday: false }
    ];

    const THEMATIC_PAGES = {
      portugues: {
        title: `Língua Portuguesa`,
        module: `Módulo I — Conhecimentos Básicos`,
        questions: `10 questões (10 pontos · 14,3% da Prova Objetiva)`,
        tiebreaker: `2º critério oficial de desempate (atrás apenas do total do Módulo II)`,
        focusNote: `A FGV cobra leitura analítica de textos argumentativos, análise sintática contextual, semântica (denotação/conotação), variação linguística e reescritura mantendo clareza e correção gramatical.`,
        topics: [
          `1. Interpretação de textos argumentativos, com destaque para métodos de raciocínio e tipologia argumentativa`,
          `2. Processos de construção textual`,
          `3. Progressão textual`,
          `4. Marcas de textualidade: coesão, coerência e intertextualidade`,
          `5. Reescritura de frases em busca da melhor expressão escrita`,
          `6. Domínio vocabular e sua importância na construção do sentido do texto`,
          `7. Presença dos estrangeirismos em nosso léxico`,
          `8. Diversos usos das várias classes de palavras`,
          `9. Organização sintática e emprego dos sinais de pontuação`,
          `10. Variação linguística e sua adequação às diversas situações comunicativas`,
          `11. Linguagem denotativa e conotativa`,
          `12. Nova ortografia oficial`
        ]
      },
      logica: {
        title: `Raciocínio Lógico-Matemático`,
        module: `Módulo I — Conhecimentos Básicos`,
        questions: `10 questões (10 pontos · 14,3% da Prova Objetiva)`,
        tiebreaker: `3º critério oficial de desempate`,
        focusNote: `No perfil da banca FGV para Salvador, predominam problemas de lógica proposicional (negações e equivalências), conjuntos, calendários/sequências periódicas, proporcionalidade e análise combinatória básica.`,
        topics: [
          `1. Estruturas lógicas, proposições simples e compostas, conectivos e tabelas-verdade`,
          `2. Negação de proposições e equivalências lógicas`,
          `3. Diagramas lógicos e quantificadores (todo, algum, nenhum)`,
          `4. Teoria dos conjuntos: união, intersecção, diferença e diagramas de Venn`,
          `5. Sequências lógicas numéricas, alfabéticas e raciocínio temporal (dias da semana/calendário)`,
          `6. Razão, proporção, regra de três simples e composta e porcentagens`,
          `7. Análise combinatória básica: princípio fundamental da contagem, combinações e arranjos`,
          `8. Resolução de situações-problema com equações de 1º grau e sistemas simples`
        ]
      },
      informatica: {
        title: `Informática`,
        module: `Módulo I — Conhecimentos Básicos`,
        questions: `08 questões (8 pontos · 11,4% da Prova Objetiva)`,
        tiebreaker: `Compõe a nota global da Prova Objetiva`,
        focusNote: `Os excertos do Anexo I destacam navegação segura, criptografia, autenticação (tokens e senhas fortes), browsers, links, upload/download e conceitos de transferência e banda.`,
        topics: [
          `1. Internet: conceitos gerais e funcionamento`,
          `2. Endereçamento de recursos (URLs, endereços e protocolos)`,
          `3. Navegação segura: cuidados no uso da Internet e identificação de ameaças`,
          `4. Uso de senhas e criptografia; senhas fracas e fortes`,
          `5. Tokens e outros dispositivos de segurança`,
          `6. Navegadores (browsers) e suas principais funções`,
          `7. Sites, links e mecanismos de busca`,
          `8. Transferência de arquivos e dados: upload, download, banda e velocidades de transmissão`,
          `9. Noções de suítes de escritório e planilhas eletrônicas (referências e fórmulas usuais)`
        ]
      },
      legislacao: {
        title: `Legislação Institucional`,
        module: `Módulo II — Conhecimentos Específicos`,
        questions: `10 questões (10 pontos · 14,3% da Prova Objetiva)`,
        tiebreaker: `Integra o Módulo II (1º critério oficial de desempate)`,
        focusNote: `Reúne a Legislação Penal Especial Federal, o Estatuto Geral das Guardas Municipais (Lei 13.022/2014), o Regime Jurídico e Disciplinar da GCM Salvador e a Lei Orgânica/Código Tributário do Município.`,
        topics: [
          `Legislação Geral: Lei nº 11.340/2006 (Maria da Penha) e Lei nº 11.343/2006 (Lei de Drogas)`,
          `Legislação Geral: Lei nº 7.716/1989 (Preconceito de raça ou cor) e Lei nº 8.069/1990 (ECA)`,
          `Legislação Geral: Lei nº 9.605/1998 (Crimes Ambientais) e Lei nº 9.503/1997 (CTB — Trânsito)`,
          `Legislação Geral: Lei nº 10.826/2003 (Estatuto do Desarmamento) e Lei nº 13.869/2019 (Abuso de Autoridade)`,
          `Legislação Geral: Lei nº 14.133/2021 (Licitações e Contratos Administrativos)`,
          `Específica Salvador: Lei Complementar nº 01/1991 (Regime Jurídico Único dos Servidores de Salvador)`,
          `Específica Salvador: Lei Ordinária nº 9.640/2022 (Plano de Carreira e Vencimentos da GCM)`,
          `Específica GCM: Lei Federal nº 13.022/2014 (Estatuto Geral das Guardas Municipais)`,
          `Específica Salvador: Decreto nº 27.731/2016 (Regimento da GCM) e Lei nº 9.273/2017 (Regime Disciplinar da GCM)`,
          `Lei Orgânica do Município de Salvador: organização, competências, Poderes, servidores, bens e serviços públicos`,
          `Organização Administrativa e Noções do Código Tributário e de Rendas (Lei Municipal nº 7.186/2006)`,
          `Ética, integridade, transparência, acesso à informação e direitos dos cidadãos perante a Administração`
        ]
      },
      especificos: {
        title: `Conhecimentos Específicos (Blocos Complementares do Módulo II)`,
        module: `Módulo II — Conhecimentos Específicos`,
        questions: `32 questões (32 pontos · 45,7% da Prova Objetiva — somando-se às 10q de Legislação = 42q do Módulo II)`,
        tiebreaker: `Integra o Módulo II (1º critério oficial de desempate)`,
        focusNote: `Agrupa os quatro grandes eixos técnicos e jurídicos do Módulo II além de Legislação: Direito Constitucional/Civil (10q), Direito Penal/Processual Penal (7q), Administração/Políticas Públicas (5q) e Área de Atuação Operacional (10q).`,
        topics: [
          `Bloco 04 (10q) — Direito Constitucional: Conceito, classificações e princípios fundamentais da CF/88`,
          `Bloco 04 (10q) — Direito Constitucional: Direitos e garantias fundamentais, sociais, nacionalidade e direitos políticos`,
          `Bloco 04 (10q) — Direito Constitucional: Organização político-administrativa e Administração Pública (servidores)`,
          `Bloco 04 (10q) — Noções de Direito Civil aplicadas ao exercício funcional`,
          `Bloco 05 (7q) — Noções de Direito Penal e Direito Processual Penal`,
          `Bloco 06 (5q) — Noções de Administração Pública e Políticas Públicas`,
          `Bloco 07 (10q) — Relações Humanas e Atendimento: qualidade, comunicação, cortesia, discrição e trabalho em equipe`,
          `Bloco 07 (10q) — Noções de Defesa Pessoal, Análise de Riscos, Contingências, Manejo de Emergência e Gerenciamento de Crises`,
          `Bloco 07 (10q) — Segurança da Informação: graus de sigilo, ameaças, vulnerabilidades e comportamento do agente`,
          `Bloco 07 (10q) — Condutas do Socorrista e APH Nível Básico: segurança do local e transferência especializada`,
          `Bloco 07 (10q) — Serviços de Inteligência: finalidade, utilização, fontes de coleta e metodologia de produção`
        ]
      }
    };

    // =========================================================================
    // ESTADO PERSISTIDO DO APLICATIVO
    // =========================================================================
    const DEFAULT_SIM_STATE = {
      activePage: `home`,
      activeStage: 1,
      tafGender: `masc`,
      timelineFilter: `upcoming`,
      scores: {
        portugues: 7,
        logica: 7,
        informatica: 6,
        const: 8,
        penal: 5,
        adm: 4,
        atuacao: 8,
        legislacao: 8
      },
      taf: {
        barra: `0.75`,
        flexao: `0.75`,
        abdominal: `1`,
        corrida: `1`
      },
      psico: `apto`,
      meta: 52,
      checkedTopics: {}
    };

    let appState = JSON.parse(JSON.stringify(DEFAULT_SIM_STATE));
    let estruturaChart = null;
    let simuladorChart = null;
    let saveTimer = null;

    function getCssVar(name) {
      return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    }

    function clampInt(val, min, max) {
      const parsed = parseInt(val, 10);
      if (isNaN(parsed)) return min;
      return Math.max(min, Math.min(max, parsed));
    }

    function scheduleStateSave(showFeedback) {
      if (saveTimer) clearTimeout(saveTimer);
      saveTimer = setTimeout(async function () {
        if (window.notebookAppApi && typeof window.notebookAppApi.setAppState === `function`) {
          try {
            await window.notebookAppApi.setAppState(appState);
            if (showFeedback) {
              const fb = document.getElementById(`sim-save-feedback`);
              if (fb) {
                fb.textContent = `Cenário salvo automaticamente.`;
                setTimeout(function () {
                  if (fb) fb.textContent = ``;
                }, 2200);
              }
            }
          } catch (e) {
            // Silencioso em fallback
          }
        }
      }, 150);
    }

    // =========================================================================
    // NAVEGAÇÃO HORIZONTAL DO PORTAL
    // =========================================================================
    function navigateTo(pageKey) {
      appState.activePage = pageKey;

      const navButtons = document.querySelectorAll(`.m3-nav-item`);
      navButtons.forEach(function (btn) {
        btn.classList.remove(`is-active`);
      });
      const activeBtn = document.getElementById(`nav-` + pageKey);
      if (activeBtn) activeBtn.classList.add(`is-active`);

      const homeView = document.getElementById(`view-home`);
      const topicView = document.getElementById(`view-topic`);
      if (!homeView || !topicView) return;

      if (pageKey === `home`) {
        topicView.classList.remove(`is-visible`);
        homeView.classList.add(`is-visible`);
      } else {
        homeView.classList.remove(`is-visible`);
        topicView.classList.add(`is-visible`);
        renderThematicPage(pageKey);
      }

      window.scrollTo({ top: 0, behavior: `smooth` });
      scheduleStateSave(false);
    }

    function scrollToSection(sectionId) {
      if (appState.activePage !== `home`) {
        navigateTo(`home`);
      }
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: `smooth`, block: `start` });
      }
    }

    function renderThematicPage(pageKey) {
      const data = THEMATIC_PAGES[pageKey];
      const mount = document.getElementById(`topic-content-mount`);
      if (!data || !mount) return;

      const checkedList = Array.isArray(appState.checkedTopics[pageKey]) ? appState.checkedTopics[pageKey] : [];
      const totalTopics = data.topics.length;
      const doneCount = checkedList.length;
      const pct = totalTopics > 0 ? Math.round((doneCount / totalTopics) * 100) : 0;

      let topicsHtml = ``;
      for (let i = 0; i < data.topics.length; i++) {
        const isChecked = checkedList.indexOf(i) !== -1;
        topicsHtml += `
          <label class="syllabus-check-item ${isChecked ? `is-done` : ``}">
            <input type="checkbox" ${isChecked ? `checked` : ``} onchange="toggleTopicCheck('${pageKey}', ${i}, this.checked)">
            <span class="topic-text">${data.topics[i]}</span>
          </label>
        `;
      }

      mount.innerHTML = `
        <div class="m3-hero">
          <div class="m3-actions-row">
            <button type="button" class="m3-btn m3-btn--outlined" onclick="navigateTo('home')">
              <span class="material-symbols-outlined" aria-hidden="true">arrow_back</span>
              Voltar para a Home
            </button>
            <span class="m3-chip m3-chip--primary">${data.module}</span>
            <span class="m3-chip m3-chip--tertiary">${data.questions}</span>
          </div>
          <div class="m3-hero-header">
            <h1>${data.title}</h1>
            <p class="lede">${data.focusNote}</p>
          </div>
          <div class="m3-notice-box">
            <span class="material-symbols-outlined" aria-hidden="true">emoji_events</span>
            <div>
              <strong>Relevância na Classificação:</strong> ${data.tiebreaker}. Marque abaixo os tópicos do Edital nº 02/2026 já revisados para acompanhar seu progresso de estudo.
            </div>
          </div>
        </div>

        <div class="m3-card--white">
          <div class="section-header">
            <div>
              <h2>Conteúdo Programático Oficial (Anexo I — Edital 2026)</h2>
              <p class="section-subtitle" id="topic-progress-label">${doneCount} de ${totalTopics} tópicos concluídos (${pct}%)</p>
            </div>
            <button type="button" class="m3-btn m3-btn--filled" onclick="scrollToSection('sec-simulador')">
              <span class="material-symbols-outlined" aria-hidden="true">tune</span>
              Simular Pontuação na Home
            </button>
          </div>
          <div class="progress-track" aria-label="Progresso de revisão dos tópicos">
            <div class="progress-fill" id="topic-progress-bar" style="width: ${pct}%;"></div>
          </div>
          <div class="syllabus-grid">
            ${topicsHtml}
          </div>
        </div>
      `;
    }

    function toggleTopicCheck(pageKey, index, isChecked) {
      if (!Array.isArray(appState.checkedTopics[pageKey])) {
        appState.checkedTopics[pageKey] = [];
      }
      const list = appState.checkedTopics[pageKey];
      const pos = list.indexOf(index);
      if (isChecked && pos === -1) {
        list.push(index);
      } else if (!isChecked && pos !== -1) {
        list.splice(pos, 1);
      }
      renderThematicPage(pageKey);
      scheduleStateSave(false);
    }

    // =========================================================================
    // ETAPAS DO CONCURSO & TAF INTERATIVO
    // =========================================================================
    function selectStage(stageNum) {
      appState.activeStage = stageNum;
      for (let i = 1; i <= 5; i++) {
        const btn = document.getElementById(`tab-stage-` + i);
        if (btn) {
          if (i === stageNum) btn.classList.add(`is-active`);
          else btn.classList.remove(`is-active`);
        }
      }
      renderStageDetail();
      scheduleStateSave(false);
    }

    function setTafGender(gender) {
      appState.tafGender = gender;
      renderStageDetail();
      scheduleStateSave(false);
    }

    function renderStageDetail() {
      const container = document.getElementById(`stage-detail-container`);
      if (!container) return;
      const stage = STAGES_DATA[appState.activeStage] || STAGES_DATA[1];

      let listHtml = ``;
      for (let i = 0; i < stage.highlights.length; i++) {
        listHtml += `
          <li class="m3-ordered-item">
            <span class="m3-step-num">${i + 1}</span>
            <div>${stage.highlights[i]}</div>
          </li>
        `;
      }

      let tafHtml = ``;
      if (stage.isTaf) {
        const exercises = TAF_EXERCISES[appState.tafGender] || TAF_EXERCISES.masc;
        let cardsHtml = ``;
        for (let i = 0; i < exercises.length; i++) {
          const ex = exercises[i];
          let bandsHtml = ``;
          for (let j = 0; j < ex.bands.length; j++) {
            bandsHtml += `
              <div class="taf-band-row">
                <span>${ex.bands[j].label}</span>
                <strong>${ex.bands[j].val}</strong>
              </div>
            `;
          }
          cardsHtml += `
            <div class="taf-exercise-card">
              <span class="m3-kpi-label">${ex.order}</span>
              <strong>${ex.name}</strong>
              <div class="taf-bands">${bandsHtml}</div>
            </div>
          `;
        }

        tafHtml = `
          <div style="display: grid; gap: var(--space-md); margin-top: var(--space-sm);">
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: var(--space-md);">
              <strong>Tabela de Índices Mínimos e Pontuação (Item 10.16):</strong>
              <div class="m3-segmented" role="group" aria-label="Selecionar tabela TAF por sexo">
                <button type="button" class="m3-segmented-btn ${appState.tafGender === `masc` ? `is-active` : ``}" onclick="setTafGender('masc')">Masculino</button>
                <button type="button" class="m3-segmented-btn ${appState.tafGender === `fem` ? `is-active` : ``}" onclick="setTafGender('fem')">Feminino</button>
              </div>
            </div>
            <div class="taf-grid">${cardsHtml}</div>
          </div>
        `;
      }

      container.innerHTML = `
        <div style="display: grid; gap: var(--space-xs);">
          <div><span class="m3-chip m3-chip--primary">${stage.badge}</span></div>
          <h3>${stage.title}</h3>
          <p>${stage.summary}</p>
        </div>
        <ul class="m3-ordered-list">${listHtml}</ul>
        ${tafHtml}
      `;
    }

    // =========================================================================
    // CRONOGRAMA OFICIAL (ANEXO VII)
    // =========================================================================
    function filterTimeline(mode) {
      appState.timelineFilter = mode;
      const btnUp = document.getElementById(`btn-tl-upcoming`);
      const btnAll = document.getElementById(`btn-tl-all`);
      if (btnUp && btnAll) {
        if (mode === `upcoming`) {
          btnUp.className = `m3-btn m3-btn--tonal`;
          btnAll.className = `m3-btn m3-btn--outlined`;
        } else {
          btnUp.className = `m3-btn m3-btn--outlined`;
          btnAll.className = `m3-btn m3-btn--tonal`;
        }
      }
      renderTimeline();
      scheduleStateSave(false);
    }

    function renderTimeline() {
      const mount = document.getElementById(`timeline-list`);
      if (!mount) return;
      const mode = appState.timelineFilter;
      let html = ``;
      for (let i = 0; i < TIMELINE_EVENTS.length; i++) {
        const item = TIMELINE_EVENTS[i];
        if (mode === `upcoming` && item.isPast) continue;
        const chipClass = item.isToday ? `m3-chip--primary` : (item.isPast ? `` : `m3-chip--tertiary`);
        html += `
          <div class="timeline-item ${item.isToday ? `is-today` : ``}">
            <div class="timeline-date">${item.date}</div>
            <div>${item.event}</div>
            <div><span class="m3-chip ${chipClass}">${item.status}</span></div>
          </div>
        `;
      }
      mount.innerHTML = html;
    }

    // =========================================================================
    // GRÁFICO ESTRUTURA DA PROVA (CHART.JS)
    // =========================================================================
    function initEstruturaChart() {
      const canvas = document.getElementById(`chartEstrutura`);
      if (!canvas || typeof Chart === `undefined`) return;

      const cPrimary = getCssVar(`--data-1`);
      const cTertiary = getCssVar(`--data-3`);
      const cInk = getCssVar(`--on-surface-variant`);
      const cGrid = getCssVar(`--outline-variant`);

      if (estruturaChart) estruturaChart.destroy();
      estruturaChart = new Chart(canvas, {
        type: `bar`,
        data: {
          labels: [
            `Língua Portuguesa`,
            `Raciocínio Lógico`,
            `Informática`,
            `Dir. Const. e Civil`,
            `Área de Atuação`,
            `Legislação`,
            `Dir. Penal e Proc. Penal`,
            `Adm. e Pol. Públicas`
          ],
          datasets: [{
            label: `Questões (1,0 pt cada)`,
            data: [10, 10, 8, 10, 10, 10, 7, 5],
            backgroundColor: [
              cPrimary, cPrimary, cPrimary,
              cTertiary, cTertiary, cTertiary, cTertiary, cTertiary
            ],
            borderRadius: 8,
            barThickness: 20
          }]
        },
        options: {
          indexAxis: `y`,
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function (ctx) {
                  const v = ctx.parsed.x;
                  const pct = ((v / 70) * 100).toFixed(1);
                  return `${v} questões (${pct}% da prova)`;
                }
              }
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              max: 12,
              grid: { color: cGrid },
              ticks: { color: cInk, stepSize: 2 }
            },
            y: {
              grid: { display: false },
              ticks: { color: cInk, font: { weight: `600` } }
            }
          }
        }
      });
    }

    // =========================================================================
    // SIMULADOR INTERATIVO DE PONTUAÇÃO E DESEMPENHO
    // =========================================================================
    function syncFromSlider(field, val) {
      const maxVal = DISCIPLINE_MAX[field] || 10;
      const minVal = field === `meta` ? 35 : 0;
      const clean = clampInt(val, minVal, maxVal);
      const numEl = document.getElementById(`num-` + field);
      if (numEl) numEl.value = clean;
      if (field === `meta`) appState.meta = clean;
      else appState.scores[field] = clean;
      updateSimulator(true);
    }

    function syncFromNumber(field, val) {
      const maxVal = DISCIPLINE_MAX[field] || 10;
      const minVal = field === `meta` ? 35 : 0;
      const clean = clampInt(val, minVal, maxVal);
      const sliderEl = document.getElementById(`slider-` + field);
      if (sliderEl) sliderEl.value = clean;
      if (field === `meta`) appState.meta = clean;
      else appState.scores[field] = clean;
      updateSimulator(true);
    }

    function applyInputsFromState() {
      const keys = Object.keys(appState.scores);
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        const s = document.getElementById(`slider-` + k);
        const n = document.getElementById(`num-` + k);
        if (s) s.value = appState.scores[k];
        if (n) n.value = appState.scores[k];
      }
      const sm = document.getElementById(`slider-meta`);
      const nm = document.getElementById(`num-meta`);
      if (sm) sm.value = appState.meta;
      if (nm) nm.value = appState.meta;

      const sb = document.getElementById(`taf-barra`);
      const sf = document.getElementById(`taf-flexao`);
      const sa = document.getElementById(`taf-abdominal`);
      const sc = document.getElementById(`taf-corrida`);
      const sp = document.getElementById(`sim-psico`);
      if (sb) sb.value = appState.taf.barra;
      if (sf) sf.value = appState.taf.flexao;
      if (sa) sa.value = appState.taf.abdominal;
      if (sc) sc.value = appState.taf.corrida;
      if (sp) sp.value = appState.psico;
    }

    function applyPreset(presetName) {
      if (presetName === `meta60`) {
        appState.scores = { portugues: 6, logica: 6, informatica: 5, const: 6, penal: 4, adm: 3, atuacao: 6, legislacao: 6 };
        appState.taf = { barra: `0.75`, flexao: `0.75`, abdominal: `0.75`, corrida: `1` };
        appState.psico = `apto`;
        appState.meta = 42;
      } else if (presetName === `competitivo75`) {
        appState.scores = { portugues: 7, logica: 7, informatica: 6, const: 8, penal: 5, adm: 4, atuacao: 8, legislacao: 8 };
        appState.taf = { barra: `0.75`, flexao: `0.75`, abdominal: `1`, corrida: `1` };
        appState.psico = `apto`;
        appState.meta = 52;
      } else if (presetName === `topo85`) {
        appState.scores = { portugues: 9, logica: 8, informatica: 7, const: 9, penal: 6, adm: 4, atuacao: 9, legislacao: 8 };
        appState.taf = { barra: `1`, flexao: `1`, abdominal: `1`, corrida: `2` };
        appState.psico = `apto`;
        appState.meta = 58;
      }
      applyInputsFromState();
      updateSimulator(true);
    }

    function resetSimulator(btn) {
      if (btn && btn.dataset.armed !== `true`) {
        btn.dataset.armed = `true`;
        btn.textContent = `Confirmar Zerar`;
        setTimeout(function () {
          if (btn && btn.dataset.armed === `true`) {
            btn.dataset.armed = `false`;
            btn.textContent = `Zerar Simulação`;
          }
        }, 3500);
        return;
      }
      if (btn) {
        btn.dataset.armed = `false`;
        btn.textContent = `Zerar Simulação`;
      }
      appState.scores = { portugues: 0, logica: 0, informatica: 0, const: 0, penal: 0, adm: 0, atuacao: 0, legislacao: 0 };
      appState.taf = { barra: `0`, flexao: `0`, abdominal: `0`, corrida: `0` };
      appState.psico = `apto`;
      appState.meta = 49;
      applyInputsFromState();
      updateSimulator(true);
    }

    function updateSimulator(shouldPersist) {
      const sb = document.getElementById(`taf-barra`);
      const sf = document.getElementById(`taf-flexao`);
      const sa = document.getElementById(`taf-abdominal`);
      const sc = document.getElementById(`taf-corrida`);
      const sp = document.getElementById(`sim-psico`);

      if (sb) appState.taf.barra = sb.value;
      if (sf) appState.taf.flexao = sf.value;
      if (sa) appState.taf.abdominal = sa.value;
      if (sc) appState.taf.corrida = sc.value;
      if (sp) appState.psico = sp.value;

      const s = appState.scores;
      const mod1 = s.portugues + s.logica + s.informatica;
      const mod2 = s.const + s.penal + s.adm + s.atuacao + s.legislacao;
      const objTotal = mod1 + mod2;

      const tafBarra = parseFloat(appState.taf.barra) || 0;
      const tafFlexao = parseFloat(appState.taf.flexao) || 0;
      const tafAbd = parseFloat(appState.taf.abdominal) || 0;
      const tafCorr = parseFloat(appState.taf.corrida) || 0;
      const tafTotal = tafBarra + tafFlexao + tafAbd + tafCorr;
      const hasTafFail = (tafBarra === 0 || tafFlexao === 0 || tafAbd === 0 || tafCorr === 0);

      const finalTotal = objTotal + tafTotal;
      const objPct = ((objTotal / 70) * 100).toFixed(1).replace(`.`, `,`);
      const mod1Pct = ((mod1 / 28) * 100).toFixed(1).replace(`.`, `,`);
      const mod2Pct = ((mod2 / 42) * 100).toFixed(1).replace(`.`, `,`);

      const mod1Label = document.getElementById(`mod1-subtotal-label`);
      const mod2Label = document.getElementById(`mod2-subtotal-label`);
      if (mod1Label) mod1Label.textContent = `${mod1} / 28`;
      if (mod2Label) mod2Label.textContent = `${mod2} / 42`;

      const elFinal = document.getElementById(`sim-final-score`);
      const elDesc = document.getElementById(`sim-status-desc`);
      const elChip = document.getElementById(`sim-status-chip`);
      const elMod1Val = document.getElementById(`sim-mod1-val`);
      const elMod1Pct = document.getElementById(`sim-mod1-pct`);
      const elMod2Val = document.getElementById(`sim-mod2-val`);
      const elMod2Pct = document.getElementById(`sim-mod2-pct`);
      const elDelta = document.getElementById(`sim-meta-delta`);
      const elTarget = document.getElementById(`sim-meta-target`);

      if (elFinal) elFinal.textContent = `${finalTotal.toFixed(2).replace(`.`, `,`)} / 75`;
      if (elDesc) elDesc.textContent = `Objetiva: ${objTotal} / 70 pts (${objPct}%) · TAF: ${tafTotal.toFixed(2).replace(`.`, `,`)} / 5,00 pts · Psicotécnico: ${appState.psico === `apto` ? `APTO` : `INAPTO`}.`;
      if (elMod1Val) elMod1Val.textContent = `${mod1} / 28`;
      if (elMod1Pct) elMod1Pct.textContent = `${mod1Pct}%`;
      if (elMod2Val) elMod2Val.textContent = `${mod2} / 42`;
      if (elMod2Pct) elMod2Pct.textContent = `${mod2Pct}%`;

      const delta = objTotal - appState.meta;
      if (elDelta) elDelta.textContent = `${delta >= 0 ? `+` : ``}${delta} pt${Math.abs(delta) === 1 ? `` : `s`}`;
      if (elTarget) elTarget.textContent = `Meta: ${appState.meta} pts`;

      if (elChip) {
        if (appState.psico === `inapto`) {
          elChip.className = `m3-chip m3-chip--tertiary`;
          elChip.style.backgroundColor = getCssVar(`--error-container`);
          elChip.style.color = getCssVar(`--on-error-container`);
          elChip.textContent = `Eliminado no Psicotécnico`;
        } else if (hasTafFail) {
          elChip.className = `m3-chip m3-chip--tertiary`;
          elChip.style.backgroundColor = getCssVar(`--warning-container`);
          elChip.style.color = getCssVar(`--on-warning-container`);
          elChip.textContent = `Atenção: Índice I (0 pt) no TAF`;
        } else if (delta >= 0) {
          elChip.className = `m3-chip m3-chip--positive`;
          elChip.style.backgroundColor = ``;
          elChip.style.color = ``;
          elChip.textContent = `Acima da Meta Projetada`;
        } else {
          elChip.className = `m3-chip m3-chip--tertiary`;
          elChip.style.backgroundColor = ``;
          elChip.style.color = ``;
          elChip.textContent = `Abaixo da Meta Projetada`;
        }
      }

      // Diagnóstico estratégico + vetor de desempate
      const discKeys = Object.keys(DISCIPLINE_LABELS);
      let weakestKey = discKeys[0];
      let weakestPct = 101;
      let strongestKey = discKeys[0];
      let strongestPct = -1;

      const pctArray = [];
      for (let i = 0; i < discKeys.length; i++) {
        const k = discKeys[i];
        const p = (s[k] / DISCIPLINE_MAX[k]) * 100;
        pctArray.push(Math.round(p));
        if (p < weakestPct) {
          weakestPct = p;
          weakestKey = k;
        }
        if (p > strongestPct) {
          strongestPct = p;
          strongestKey = k;
        }
      }

      const diagEl = document.getElementById(`sim-diagnosis-text`);
      if (diagEl) {
        diagEl.innerHTML = `
          <strong>Vetor de Desempate (Item 14.1):</strong> 1º Módulo II = <strong>${mod2} pts</strong> · 2º Português = <strong>${s.portugues} pts</strong> · 3º Raciocínio Lógico = <strong>${s.logica} pts</strong>.<br>
          <strong>Maior alavanca de ganho:</strong> priorize reforço em <strong>${DISCIPLINE_LABELS[weakestKey]}</strong> (${Math.round(weakestPct)}% de acertos) para proteger seu teto enquanto mantém <strong>${DISCIPLINE_LABELS[strongestKey]}</strong> (${Math.round(strongestPct)}%).
        `;
      }

      updateSimuladorChart(pctArray);

      if (shouldPersist) {
        scheduleStateSave(true);
      }
    }

    function updateSimuladorChart(pctArray) {
      const canvas = document.getElementById(`chartSimulador`);
      if (!canvas || typeof Chart === `undefined`) return;

      const cMod1 = getCssVar(`--data-1`);
      const cMod2 = getCssVar(`--data-3`);
      const cInk = getCssVar(`--on-surface-variant`);
      const cGrid = getCssVar(`--outline-variant`);
      const labels = Object.keys(DISCIPLINE_LABELS).map(function (k) {
        return DISCIPLINE_LABELS[k];
      });

      if (!simuladorChart) {
        simuladorChart = new Chart(canvas, {
          type: `bar`,
          data: {
            labels: labels,
            datasets: [{
              label: `Aproveitamento (%)`,
              data: pctArray,
              backgroundColor: [cMod1, cMod1, cMod1, cMod2, cMod2, cMod2, cMod2, cMod2],
              borderRadius: 6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: function (ctx) {
                    return `${ctx.parsed.y}% de aproveitamento`;
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                grid: { color: cGrid },
                ticks: {
                  color: cInk,
                  callback: function (v) { return v + `%`; }
                }
              },
              x: {
                grid: { display: false },
                ticks: { color: cInk, font: { size: 11 } }
              }
            }
          }
        });
      } else {
        simuladorChart.data.datasets[0].data = pctArray;
        simuladorChart.update();
      }
    }

    function exportSimulationCsv() {
      const s = appState.scores;
      const mod1 = s.portugues + s.logica + s.informatica;
      const mod2 = s.const + s.penal + s.adm + s.atuacao + s.legislacao;
      const tafTotal = (parseFloat(appState.taf.barra) || 0) + (parseFloat(appState.taf.flexao) || 0) + (parseFloat(appState.taf.abdominal) || 0) + (parseFloat(appState.taf.corrida) || 0);
      const rows = [
        [`Componente`, `Acertos/Nota`, `Maximo`],
        [`Lingua Portuguesa`, s.portugues, 10],
        [`Raciocinio Logico`, s.logica, 10],
        [`Informatica`, s.informatica, 8],
        [`Direito Constitucional e Civil`, s.const, 10],
        [`Direito Penal e Processual Penal`, s.penal, 7],
        [`Administracao e Politicas Publicas`, s.adm, 5],
        [`Conhecimentos na Area de Atuacao`, s.atuacao, 10],
        [`Legislacao`, s.legislacao, 10],
        [`Subtotal Modulo I`, mod1, 28],
        [`Subtotal Modulo II`, mod2, 42],
        [`Total Prova Objetiva`, mod1 + mod2, 70],
        [`TAF`, tafTotal.toFixed(2), 5],
        [`Avaliacao Psicologica`, appState.psico.toUpperCase(), `-`],
        [`Nota Final Projetada`, (mod1 + mod2 + tafTotal).toFixed(2), 75]
      ];

      const csv = rows.map(function (r) {
        return r.join(`;`);
      }).join(`\n`);

      const fb = document.getElementById(`sim-save-feedback`);
      if (window.notebookAppApi && typeof window.notebookAppApi.triggerFileDownload === `function`) {
        window.notebookAppApi.triggerFileDownload({
          content: csv,
          contentType: `text/csv`,
          encoding: `UTF-8`,
          filename: `simulacao_gcm_salvador_2026.csv`
        });
      } else {
        const blob = new Blob([csv], { type: `text/csv;charset=utf-8;` });
        const url = URL.createObjectURL(blob);
        const link = document.createElement(`a`);
        link.href = url;
        link.download = `simulacao_gcm_salvador_2026.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
      if (fb) {
        fb.textContent = `Simulação exportada em CSV.`;
        setTimeout(function () {
          if (fb) fb.textContent = ``;
        }, 2500);
      }
    }

    // =========================================================================
    // INICIALIZAÇÃO
    // =========================================================================
    async function initPortal() {
      if (window.notebookAppApi && typeof window.notebookAppApi.getAppState === `function`) {
        try {
          const saved = await window.notebookAppApi.getAppState();
          if (saved && typeof saved === `object`) {
            if (saved.scores) appState.scores = Object.assign({}, appState.scores, saved.scores);
            if (saved.taf) appState.taf = Object.assign({}, appState.taf, saved.taf);
            if (typeof saved.meta === `number`) appState.meta = saved.meta;
            if (typeof saved.psico === `string`) appState.psico = saved.psico;
            if (typeof saved.activeStage === `number`) appState.activeStage = saved.activeStage;
            if (typeof saved.tafGender === `string`) appState.tafGender = saved.tafGender;
            if (typeof saved.timelineFilter === `string`) appState.timelineFilter = saved.timelineFilter;
            if (saved.checkedTopics && typeof saved.checkedTopics === `object`) appState.checkedTopics = saved.checkedTopics;
            if (typeof saved.activePage === `string`) appState.activePage = saved.activePage;
          }
        } catch (e) {
          // Segue com estado inicial
        }
      }

      applyInputsFromState();
      selectStage(appState.activeStage);
      filterTimeline(appState.timelineFilter);
      initEstruturaChart();
      updateSimulator(false);

      if (appState.activePage && appState.activePage !== `home`) {
        navigateTo(appState.activePage);
      }

      if (window.notebookAppApi && typeof window.notebookAppApi.notifyAppReady === `function`) {
        window.notebookAppApi.notifyAppReady();
      }
    }

    document.addEventListener(`DOMContentLoaded`, initPortal);
  </script>