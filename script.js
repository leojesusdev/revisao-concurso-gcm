/**
 * PORTAL DE ESTUDOS — GCM SALVADOR 2026
 * Configuração centralizada de links das disciplinas e interações da HOME.
 */

/* ==========================================================================
   1. CONFIGURAÇÃO CENTRALIZADA DE LINKS DAS DISCIPLINAS
   Preencher cada chave com o caminho relativo ou URL real da página
   independente da disciplina (ex.: "disciplinas/portugues.html").
   Quando vazio (""), tanto o menu quanto o card indicam acesso pendente.
   ========================================================================== */
const disciplineLinks = {
  portugues: "lingua-portuguesa.html",
  raciocinioLogico: "",
  informatica: "",
  direitoConstitucional: "",
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
   2. DADOS OFICIAIS DA DISTRIBUIÇÃO DE QUESTÕES (Edital nº 002/2026, item 9.4)
   ========================================================================== */
const examDistribution = [
  { id: "portugues", name: "01. Língua Portuguesa", module: "M1", questions: 10 },
  { id: "raciocinioLogico", name: "02. Raciocínio Lógico-Matemático", module: "M1", questions: 10 },
  { id: "informatica", name: "03. Informática", module: "M1", questions: 8 },
  { id: "direitoConstitucional", name: "04. Dir. Constitucional e Dir. Civil", module: "M2", questions: 10 },
  { id: "direitoPenal", name: "05. Dir. Penal e Processual Penal", module: "M2", questions: 7 },
  { id: "administracao", name: "06. Administração e Políticas Públicas", module: "M2", questions: 5 },
  { id: "conhecimentosAtuacao", name: "07. Conhecimentos na Área de Atuação", module: "M2", questions: 10 },
  { id: "legislacao", name: "08. Legislação (inclui Lei Orgânica)", module: "M2", questions: 10 }
];

const TOTAL_EXAM_QUESTIONS = 70;

/* ==========================================================================
   3. INICIALIZAÇÃO E GERENCIAMENTO DE INTERFACE
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const snackbar = document.getElementById("portal-snackbar");
  const snackbarMessage = document.getElementById("snackbar-message");
  const snackbarClose = document.getElementById("snackbar-close");
  let snackbarTimer = null;

  function showSnackbar(message) {
    if (!snackbar || !snackbarMessage) return;
    snackbarMessage.textContent = message;
    snackbar.hidden = false;

    if (snackbarTimer) {
      clearTimeout(snackbarTimer);
    }
    snackbarTimer = setTimeout(() => {
      snackbar.hidden = true;
    }, 5000);
  }

  if (snackbarClose && snackbar) {
    snackbarClose.addEventListener("click", () => {
      snackbar.hidden = true;
      if (snackbarTimer) clearTimeout(snackbarTimer);
    });
  }

  // Sincroniza menu superior (desktop + mobile) e cards das disciplinas com `disciplineLinks`
  function configureDisciplineNavigation() {
    const allDisciplineElements = document.querySelectorAll("[data-discipline]");

    allDisciplineElements.forEach((element) => {
      const key = element.getAttribute("data-discipline");
      const url = (disciplineLinks[key] || "").trim();
      const label = disciplineLabels[key] || "Disciplina";
      const isCard = element.classList.contains("discipline-card");
      const isNavLink = element.classList.contains("discipline-nav-link");

      if (url) {
        element.setAttribute("href", url);
        element.removeAttribute("aria-disabled");
        element.classList.remove("is-pending");

        if (isCard) {
          const statusEl = element.querySelector("[data-status-label]");
          if (statusEl) statusEl.textContent = "Acessar módulo de estudo";
          element.setAttribute("aria-label", `Acessar página de estudos de ${label}`);
        }

        if (isNavLink) {
          let pill = element.querySelector(".nav-status-pill");
          if (!pill) {
            pill = document.createElement("span");
            pill.className = "nav-status-pill ready";
            element.appendChild(pill);
          } else {
            pill.className = "nav-status-pill ready";
          }
          pill.textContent = "Abrir";
        }
      } else {
        element.removeAttribute("href");
        element.setAttribute("role", "link");
        element.setAttribute("tabindex", "0");
        element.setAttribute("aria-disabled", "true");
        element.classList.add("is-pending");

        if (isCard) {
          const statusEl = element.querySelector("[data-status-label]");
          if (statusEl) statusEl.textContent = "Acesso pendente de configuração";
          element.setAttribute(
            "aria-label",
            `${label} — página independente ainda não configurada`
          );
        }

        if (isNavLink) {
          let pill = element.querySelector(".nav-status-pill");
          if (!pill) {
            pill = document.createElement("span");
            pill.className = "nav-status-pill pending";
            element.appendChild(pill);
          } else {
            pill.className = "nav-status-pill pending";
          }
          pill.textContent = "Pendente";
        }

        const handlePendingAction = (event) => {
          event.preventDefault();
          closeAllMenus();
          showSnackbar(
            `A página independente de "${label}" ainda não foi vinculada. Configure o endereço em disciplineLinks.${key}.`
          );
        };

        element.addEventListener("click", handlePendingAction);
        element.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            handlePendingAction(event);
          }
        });
      }
    });
  }

  // Controle do dropdown desktop e menu expansível mobile
  const dropdownBtn = document.getElementById("desktop-disciplines-btn");
  const dropdownPanel = document.getElementById("desktop-disciplines-panel");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");

  function closeDesktopDropdown() {
    if (!dropdownBtn || !dropdownPanel) return;
    dropdownBtn.setAttribute("aria-expanded", "false");
    dropdownPanel.hidden = true;
  }

  function closeMobileDrawer() {
    if (!mobileMenuBtn || !mobileDrawer) return;
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    mobileMenuBtn.setAttribute("aria-label", "Abrir menu de navegação");
    mobileDrawer.hidden = true;
  }

  function closeAllMenus() {
    closeDesktopDropdown();
    closeMobileDrawer();
  }

  if (dropdownBtn && dropdownPanel) {
    dropdownBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = dropdownBtn.getAttribute("aria-expanded") === "true";
      dropdownBtn.setAttribute("aria-expanded", String(!isOpen));
      dropdownPanel.hidden = isOpen;
    });

    dropdownPanel.querySelectorAll("[data-close-dropdown]").forEach((link) => {
      link.addEventListener("click", closeDesktopDropdown);
    });
  }

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      mobileMenuBtn.setAttribute("aria-expanded", String(!isOpen));
      mobileMenuBtn.setAttribute(
        "aria-label",
        isOpen ? "Abrir menu de navegação" : "Fechar menu de navegação"
      );
      mobileDrawer.hidden = isOpen;
    });

    mobileDrawer.querySelectorAll("a[href]").forEach((link) => {
      link.addEventListener("click", closeMobileDrawer);
    });
  }

  document.addEventListener("click", (event) => {
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

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllMenus();
    }
  });

  // Retorno ao topo para o item "Início" e marca do portal
  document.querySelectorAll("[data-scroll-top]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      closeAllMenus();
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState(null, "", "#topo");
    });
  });

  // Renderização do gráfico de barras de distribuição das questões
  const chartContainer = document.getElementById("questions-bar-chart");
  const filterButtons = document.querySelectorAll("[data-chart-filter]");

  function renderDistributionChart(filterModule = "all") {
    if (!chartContainer) return;

    const filteredItems =
      filterModule === "all"
        ? examDistribution
        : examDistribution.filter((item) => item.module === filterModule);

    chartContainer.innerHTML = "";

    filteredItems.forEach((item) => {
      const percentage = ((item.questions / TOTAL_EXAM_QUESTIONS) * 100).toFixed(2).replace(".", ",");
      // Largura visual proporcional ao peso na prova, escalada sobre o maior bloco (10 questões -> ~100% da barra relativa ou real?)
      // Usar escala relativa ao máximo oficial (10 questões = 100% da trilha) destaca melhor as diferenças entre 5, 7, 8 e 10 questões.
      const relativeWidth = Math.round((item.questions / 10) * 100);

      const barItem = document.createElement("div");
      barItem.className = "bar-item";

      const header = document.createElement("div");
      header.className = "bar-item-header";

      const labelEl = document.createElement("span");
      labelEl.className = "bar-item-label";
      labelEl.textContent = item.name;

      const valueEl = document.createElement("span");
      valueEl.className = "bar-item-value";
      valueEl.textContent = `${item.questions} q. (${percentage}%)`;

      header.appendChild(labelEl);
      header.appendChild(valueEl);

      const track = document.createElement("div");
      track.className = "bar-track";

      const fill = document.createElement("div");
      fill.className = `bar-fill ${item.module === "M1" ? "bar-fill-m1" : "bar-fill-m2"}`;
      fill.style.width = `${relativeWidth}%`;
      fill.setAttribute("role", "progressbar");
      fill.setAttribute("aria-valuenow", String(item.questions));
      fill.setAttribute("aria-valuemin", "0");
      fill.setAttribute("aria-valuemax", String(TOTAL_EXAM_QUESTIONS));
      fill.setAttribute("aria-label", `${item.name}: ${item.questions} questões (${percentage}%)`);

      track.appendChild(fill);
      barItem.appendChild(header);
      barItem.appendChild(track);
      chartContainer.appendChild(barItem);
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");
      const filter = button.getAttribute("data-chart-filter") || "all";
      renderDistributionChart(filter);
    });
  });

  // Destaque ativo suave na navegação ao rolar pelas seções
  const sectionNavLinks = document.querySelectorAll('.desktop-nav .nav-link[href^="#"]');
  const observedSections = ["topo", "conheca-concurso", "distribuicao-questoes", "criterios-aprovacao", "etapas-concurso"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if ("IntersectionObserver" in window && observedSections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeId = `#${entry.target.id}`;
            sectionNavLinks.forEach((link) => {
              link.classList.toggle("is-active", link.getAttribute("href") === activeId);
            });
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.05 }
    );

    observedSections.forEach((sec) => observer.observe(sec));
  }

  configureDisciplineNavigation();
  renderDistributionChart("all");
});
