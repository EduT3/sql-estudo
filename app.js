const notionSources = [
  {
    title: "Trilha Completa - Analista Junior de BI",
    url: "https://app.notion.com/p/3a5a46b116fe81b2b304f07dba6fcb26",
  },
  {
    title: "Modulo 3 - SQL para Analise de Dados",
    url: "https://app.notion.com/p/3a5a46b116fe81b8be2bca6fa7e9eab7",
  },
  {
    title: "Materiais - SQL",
    url: "https://app.notion.com/p/3b4a46b116fe81ba9fceeb3643d38e97",
  },
  {
    title: "Central de materiais e arquivos de pratica",
    url: "https://app.notion.com/p/3b4a46b116fe8189a7bde03e40146abe",
  },
];

const tables = [
  ["departamentos", "Areas internas, cidades e relacionamento com funcionarios."],
  ["funcionarios", "Cargos, salarios, datas de admissao e departamento."],
  ["clientes", "Segmentos B2B/B2C, cidades e estados."],
  ["pedidos", "Compra, data, cliente e status operacional."],
  ["itens_pedido", "Produtos, quantidades, preco unitario e total por item."],
  ["produtos", "Catalogo, categoria, preco e custo para margem."],
];

const levels = [
  {
    id: "nivel-1",
    title: "Nivel 1",
    focus: "SELECT, WHERE, ORDER BY, LIMIT",
    file: "exercicios/nivel_1_basico.sql",
    answer: "respostas/gabarito_nivel_1.sql",
    notion: "Fundamentos",
    exercises: [
      "Funcionarios ordenados por salario",
      "Funcionarios do departamento Tecnologia",
      "Produtos acima de R$ 1.000",
      "Cinco produtos mais baratos",
      "Clientes do estado de SP",
      "Pedidos cancelados",
      "Salarios entre R$ 7.000 e R$ 10.000",
      "Produtos de Hardware ou Mobiliario",
      "Funcionarios admitidos apos 01/01/2022",
      "Clientes com nome iniciado por E ou terminado em Ltda",
    ],
  },
  {
    id: "nivel-2",
    title: "Nivel 2",
    focus: "GROUP BY, HAVING, JOIN",
    file: "exercicios/nivel_2_group_join.sql",
    answer: "respostas/gabarito_nivel_2.sql",
    notion: "Agregacoes e relacionamentos",
    exercises: [
      "Funcionarios por departamento",
      "Salario medio, minimo e maximo por departamento",
      "Departamentos com mais de 2 funcionarios",
      "Pedidos com nome do cliente",
      "Itens de pedido com produto",
      "Valor total de cada pedido",
      "Receita por categoria",
      "Clientes com mais de 2 pedidos",
      "Funcionarios por departamento e cidade",
      "Receita por mes",
    ],
  },
  {
    id: "nivel-3",
    title: "Nivel 3",
    focus: "Subqueries, CTEs e window functions",
    file: "exercicios/nivel_3_avancado.sql",
    answer: "respostas/gabarito_nivel_3.sql",
    notion: "Logica analitica e janelas",
    exercises: [
      "Funcionarios acima da media salarial",
      "Produtos nunca vendidos",
      "Maior salario por departamento",
      "Receita mensal com variacao por LAG",
      "Top 5 clientes por ticket medio",
      "Ranking salarial por departamento",
      "Pedidos numerados por cliente",
      "Receita acumulada em 2024",
      "Receita, lucro e margem por categoria",
      "Clientes B2B em risco",
    ],
  },
  {
    id: "nivel-4",
    title: "Nivel 4",
    focus: "KPIs e analise de negocio",
    file: "exercicios/nivel_4_kpis_negocio.sql",
    answer: "respostas/gabarito_nivel_4.sql",
    notion: "Metricas, regras e validacao",
    exercises: [
      "Receita, custo e lucro total",
      "Margem por categoria",
      "Cinco clientes com maior receita",
      "Ticket medio por segmento",
      "Distribuicao dos pedidos por status",
      "Receita mensal e ticket medio",
      "Produtos mais vendidos",
      "Produtos nunca vendidos",
      "Clientes com pedidos pendentes",
      "Classificacao de clientes por receita",
    ],
  },
  {
    id: "nivel-5",
    title: "Nivel 5",
    focus: "Projeto final e painel executivo",
    file: "exercicios/nivel_5_projeto_final.sql",
    answer: "respostas/gabarito_nivel_5.sql",
    notion: "Analise completa documentada",
    exercises: [
      "View de vendas detalhadas",
      "Relatorio mensal por pedidos entregues",
      "Ranking de produtos por lucro",
      "RFM simplificado",
      "Classificacao de clientes por recencia",
      "Melhor cliente por estado",
      "Comparativo B2B vs B2C",
      "Produto lider por categoria",
      "Funil mensal de status",
      "Painel executivo em linhas",
    ],
  },
];

const timeline = [
  {
    id: "diag",
    title: "Diagnostico e ambiente",
    text: "Gerar a base SQLite local, confirmar tabelas e abrir o fluxo de pratica.",
    source: "README",
    href: "README.md",
  },
  {
    id: "fundamentos",
    title: "Fundamentos SQL",
    text: "Praticar filtros, ordenacao e leitura de tabelas antes de avancar.",
    source: "Nivel 1",
    href: "exercicios/nivel_1_basico.sql",
  },
  {
    id: "joins",
    title: "Agregacoes e JOINs",
    text: "Conectar tabelas, agrupar resultados e validar a granularidade.",
    source: "Nivel 2",
    href: "exercicios/nivel_2_group_join.sql",
  },
  {
    id: "analitico",
    title: "Consultas analiticas",
    text: "Usar subqueries, CTEs e funcoes de janela para responder perguntas de negocio.",
    source: "Nivel 3",
    href: "exercicios/nivel_3_avancado.sql",
  },
  {
    id: "kpis",
    title: "KPIs de negocio",
    text: "Calcular receita, custo, lucro, margem, ticket medio e classificacoes.",
    source: "Nivel 4",
    href: "exercicios/nivel_4_kpis_negocio.sql",
  },
  {
    id: "portfolio",
    title: "Entrega de portfolio",
    text: "Fechar com views, RFM, ranking e painel executivo versionados no GitHub.",
    source: "Nivel 5",
    href: "exercicios/nivel_5_projeto_final.sql",
  },
];

const state = {
  currentLevel: levels[0].id,
  currentExercise: 0,
  timerSeconds: 25 * 60,
  timerId: null,
};

const storage = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

function progressKey(id) {
  return `sql-estudo-progress-${id}`;
}

function notesKey(levelId, exerciseIndex) {
  return `sql-estudo-notes-${levelId}-${exerciseIndex}`;
}

function getCurrentLevel() {
  return levels.find((level) => level.id === state.currentLevel) ?? levels[0];
}

function renderTimeline() {
  const container = document.querySelector("#timeline");
  container.innerHTML = "";

  timeline.forEach((step) => {
    const done = storage.get(progressKey(step.id), false);
    const row = document.createElement("div");
    row.className = `step-row${done ? " done" : ""}`;
    row.innerHTML = `
      <input class="step-check" type="checkbox" ${done ? "checked" : ""} aria-label="Concluir ${step.title}">
      <div>
        <h3>${step.title}</h3>
        <p>${step.text}</p>
      </div>
      <a class="source-link" href="${step.href}">${step.source}</a>
    `;

    row.querySelector("input").addEventListener("change", (event) => {
      storage.set(progressKey(step.id), event.target.checked);
      renderTimeline();
    });

    container.appendChild(row);
  });
}

function exerciseDescription(level, exerciseIndex) {
  const total = level.exercises.length;
  return `Exercicio ${exerciseIndex + 1} de ${total}: ${level.exercises[exerciseIndex]}. Foco: ${level.focus}. Antes de abrir o gabarito, registre a tentativa e a validacao.`;
}

function renderLevelTabs() {
  const container = document.querySelector("#level-tabs");
  const query = document.querySelector("#exercise-search").value.trim().toLowerCase();
  container.innerHTML = "";

  levels.forEach((level) => {
    const matches =
      !query ||
      level.title.toLowerCase().includes(query) ||
      level.focus.toLowerCase().includes(query) ||
      level.exercises.some((exercise) => exercise.toLowerCase().includes(query));

    if (!matches) return;

    const button = document.createElement("button");
    button.className = `level-tab${level.id === state.currentLevel ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <strong>${level.title}</strong>
      <span>${level.focus}</span>
      <span>${level.notion}</span>
    `;
    button.addEventListener("click", () => {
      state.currentLevel = level.id;
      state.currentExercise = 0;
      renderLevelTabs();
      renderExerciseList();
      renderExercise();
    });
    container.appendChild(button);
  });
}

function renderExerciseList() {
  const level = getCurrentLevel();
  const query = document.querySelector("#exercise-search").value.trim().toLowerCase();
  const container = document.querySelector("#exercise-list");
  container.innerHTML = "";

  level.exercises.forEach((exercise, index) => {
    if (query && !exercise.toLowerCase().includes(query) && !level.focus.toLowerCase().includes(query)) {
      return;
    }

    const attempted = storage.get(progressKey(`${level.id}-${index}`), false);
    const button = document.createElement("button");
    button.className = [
      "exercise-item",
      index === state.currentExercise ? "active" : "",
      attempted ? "done" : "",
    ]
      .filter(Boolean)
      .join(" ");
    button.type = "button";
    button.innerHTML = `<span>${index + 1}</span><span>${exercise}</span>`;
    button.addEventListener("click", () => {
      state.currentExercise = index;
      renderExerciseList();
      renderExercise();
    });
    container.appendChild(button);
  });
}

function renderExercise() {
  const level = getCurrentLevel();
  const title = level.exercises[state.currentExercise] ?? level.exercises[0];
  const attempted = storage.get(
    progressKey(`${level.id}-${state.currentExercise}`),
    false,
  );

  document.querySelector("#exercise-level").textContent = `${level.title} / ${level.notion}`;
  document.querySelector("#exercise-title").textContent = title;
  document.querySelector("#exercise-description").textContent = exerciseDescription(
    level,
    state.currentExercise,
  );

  const exerciseFile = document.querySelector("#exercise-file");
  exerciseFile.href = level.file;

  const answerFile = document.querySelector("#answer-file");
  answerFile.href = level.answer;
  answerFile.classList.toggle("disabled-link", !attempted);
  answerFile.setAttribute("aria-disabled", String(!attempted));

  const check = document.querySelector("#attempt-check");
  check.checked = attempted;

  const notes = document.querySelector("#exercise-notes");
  notes.value = storage.get(notesKey(level.id, state.currentExercise), "");
}

function wireExerciseControls() {
  document.querySelector("#attempt-check").addEventListener("change", (event) => {
    const level = getCurrentLevel();
    storage.set(progressKey(`${level.id}-${state.currentExercise}`), event.target.checked);
    renderExerciseList();
    renderExercise();
  });

  document.querySelector("#exercise-notes").addEventListener("input", (event) => {
    const level = getCurrentLevel();
    storage.set(notesKey(level.id, state.currentExercise), event.target.value);
  });

  document.querySelector("#exercise-search").addEventListener("input", () => {
    renderLevelTabs();
    renderExerciseList();
  });

  document.querySelector("#reset-progress").addEventListener("click", () => {
    const keys = Object.keys(localStorage).filter((key) => key.startsWith("sql-estudo-"));
    keys.forEach((key) => localStorage.removeItem(key));
    renderTimeline();
    renderExerciseList();
    renderExercise();
  });

  document.querySelector("#answer-file").addEventListener("click", (event) => {
    if (event.currentTarget.getAttribute("aria-disabled") === "true") {
      event.preventDefault();
    }
  });
}

function formatTimer(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const rest = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${rest}`;
}

function renderTimer() {
  document.querySelector("#timer-display").textContent = formatTimer(state.timerSeconds);
  document.querySelector("#timer-toggle").textContent = state.timerId ? "Ⅱ" : "▶";
}

function wireTimer() {
  document.querySelector("#timer-toggle").addEventListener("click", () => {
    if (state.timerId) {
      clearInterval(state.timerId);
      state.timerId = null;
      renderTimer();
      return;
    }

    state.timerId = setInterval(() => {
      state.timerSeconds = Math.max(0, state.timerSeconds - 1);
      if (state.timerSeconds === 0) {
        clearInterval(state.timerId);
        state.timerId = null;
      }
      renderTimer();
    }, 1000);
    renderTimer();
  });

  document.querySelector("#timer-reset").addEventListener("click", () => {
    clearInterval(state.timerId);
    state.timerId = null;
    state.timerSeconds = 25 * 60;
    renderTimer();
  });
}

function renderReferences() {
  const tableList = document.querySelector("#table-list");
  tableList.innerHTML = tables
    .map(([table, description]) => `<li><strong>${table}</strong>: ${description}</li>`)
    .join("");

  const sourceList = document.querySelector("#source-list");
  sourceList.innerHTML = notionSources
    .map((source) => `<li><a href="${source.url}">${source.title}</a></li>`)
    .join("");
}

renderTimeline();
renderLevelTabs();
renderExerciseList();
renderExercise();
renderReferences();
renderTimer();
wireExerciseControls();
wireTimer();
