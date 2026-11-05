// Banco de Dados Completo - 30 Questões da Obra Olhos D'água
const quizDatabase = [
    { id: 1, title: "Questão 1", text: "Assinale a grafia correta da palavra que nomeia a transmissão de histórias, saberes e tradições entre gerações.", options: ["ancestrálidade", "ancestralidade", "ancestrabilidade", "ancesstralidade"], correct: "ancestralidade" },
    { id: 2, title: "Questão 2", text: "Qual alternativa apresenta a escrita correta?", options: ["resitência", "rezistência", "resistência", "rezistênsia"], correct: "resistência" },
    { id: 3, title: "Questão 3", text: "Marque a palavra escrita corretamente.", options: ["desigualdade", "desiguâldade", "desigaldade", "desiguldade"], correct: "desigualdade" },
    { id: 4, title: "Questão 4", text: "Em “Olhos d’Água”, a palavra do título está grafada corretamente em qual alternativa?", options: ["Olhos d'agua", "Olhos d’água", "Olhos da água", "Olhos d’aguá"], correct: "Olhos d’água" },
    { id: 5, title: "Questão 5", text: "Assinale a alternativa em que todas as palavras estão escritas corretamente.", options: ["memória, infância, lágrima", "memôria, infancia, lagrima", "memória, infânsia, lágrima", "memórea, infância, lagrima"], correct: "memória, infância, lágrima" },
    { id: 6, title: "Questão 6", text: "Qual é a forma correta?", options: ["concientização", "conscientização", "consientização", "conscientisação"], correct: "conscientização" },
    { id: 7, title: "Questão 7", text: "Marque a alternativa que apresenta a grafia correta de uma palavra relacionada à identidade cultural.", options: ["pertencimento", "pertençimento", "pertensimento", "pertec imento"], correct: "pertencimento" },
    { id: 8, title: "Questão 8", text: "Assinale a palavra escrita corretamente.", options: ["violênsia", "violência", "violeência", "violênçia"], correct: "violência" },
    { id: 9, title: "Questão 9", text: "Qual alternativa apresenta a grafia correta?", options: ["maternidade", "maternnidade", "maternidáde", "materni dade"], correct: "maternidade" },
    { id: 10, title: "Questão 10", text: "Em qual alternativa a palavra está corretamente acentuada?", options: ["história", "historia", "histôria", "histó ria"], correct: "história" },
    { id: 11, title: "Questão 11", text: "Assinale a forma correta do plural de “mulher”.", options: ["mulhers", "mulheris", "mulheres", "mulherezes"], correct: "mulheres" },
    { id: 12, title: "Questão 12", text: "Qual alternativa apresenta corretamente o plural de “cidadão”?", options: ["cidadões", "cidadães", "cidadãos", "cidadans"], correct: "cidadãos" },
    { id: 13, title: "Questão 13", text: "Marque a palavra escrita corretamente.", options: ["discriminação", "descriminação", "discriminaçâo", "discriminaçao"], correct: "discriminação" },
    { id: 14, title: "Questão 14", text: "Qual é a grafia correta do termo que se refere à valorização da população negra e de sua história?", options: ["negritude", "negritúde", "negritude", "negritudi"], correct: "negritude" },
    { id: 15, title: "Questão 15", text: "Assinale a alternativa em que todas as palavras estão corretas.", options: ["esperança, pobreza, sobrevivência", "esperansa, pobreza, sobrevivênçia", "esperança, pobresa, sobrevivencia", "esperânça, pobreza, sobrevivência"], correct: "esperança, pobreza, sobrevivência" },
    { id: 16, title: "Questão 16", text: "Qual palavra está escrita corretamente?", options: ["acolhimento", "acolimento", "acollhimento", "acolhimênto"], correct: "acolhimento" },
    { id: 17, title: "Questão 17", text: "Marque a alternativa correta quanto ao uso de “s” e “z”.", options: ["beleza e pobreza", "belesa e pobreza", "beleza e pobresa", "belesa e pobresa"], correct: "beleza e pobreza" },
    { id: 18, title: "Questão 18", text: "Assinale a palavra corretamente escrita.", options: ["narradôra", "naradora", "narradora", "narrradora"], correct: "narradora" },
    { id: 19, title: "Questão 19", text: "Qual alternativa apresenta a grafia correta?", options: ["coletânia", "coletânea", "coletanéa", "coletanêa"], correct: "coletânea" },
    { id: 20, title: "Questão 20", text: "Em qual alternativa a palavra está escrita corretamente?", options: ["cotidiano", "cotidianno", "cotidíano", "cotidiâno"], correct: "cotidiano" },
    { id: 21, title: "Questão 21", text: "Assinale a forma correta do adjetivo relacionado à África e à cultura brasileira.", options: ["afrobrasileiro", "afro-brasileiro", "afro brasileiro", "afro-brasileíro"], correct: "afro-brasileiro" },
    { id: 22, title: "Questão 22", text: "Qual alternativa apresenta a grafia correta do termo que se refere a quem descende de africanos?", options: ["afrodescendente", "afro-descendente", "afro descendente", "afrodessendente"], correct: "afrodescendente" },
    { id: 23, title: "Questão 23", text: "Marque a forma correta.", options: ["antiracista", "anti-racista", "antirracista", "anti racista"], correct: "antirracista" },
    { id: 24, title: "Questão 24", text: "Qual palavra está corretamente acentuada?", options: ["raízes", "raizes", "raízês", "raíses"], correct: "raízes" },
    { id: 25, title: "Questão 25", text: "Assinale a alternativa em que a palavra está escrita corretamente.", options: ["quilombola", "quilonbola", "quilômbola", "quilombóla"], correct: "quilombola" },
    { id: 26, title: "Questão 26", text: "Qual alternativa apresenta a grafia correta?", options: ["empoderamento", "empoderamênto", "empoderamemto", "empoderamemto"], correct: "empoderamento" },
    { id: 27, title: "Questão 27", text: "Marque a palavra escrita corretamente.", options: ["representatividade", "representativ idade", "repr sentatividade", "representatividadde"], correct: "representatividade" },
    { id: 28, title: "Questão 28", text: "Qual alternativa apresenta corretamente a palavra que indica a ação de tornar algo visível ou conhecido?", options: ["visibilidade", "vizibilidade", "visíbilidade", "vizíbilidade"], correct: "visibilidade" },
    { id: 29, title: "Questão 29", text: "Assinale a alternativa em que todas as palavras estão grafadas corretamente.", options: ["lágrimas, lembranças, emoções", "lagrimas, lembransas, emoções", "lágrimas, lembranças, emoçõens", "lágrimas, lembransas, emoçôes"], correct: "lágrimas, lembranças, emoções" },
    { id: 30, title: "Questão 30", text: "A palavra “d’água”, presente no título da obra, contém acento. Qual outra palavra também deve receber acento agudo?", options: ["memoria", "ancestralidade", "violencia", "infância"], correct: "infância" }
];

// Mapeamento de Estatísticas de Acertos e Erros mantido no localStorage
let statsMap = JSON.parse(localStorage.getItem("quiz_olhosdagua_stats")) || {};

// Inicializa a estrutura de estatísticas se ainda não existir
function initStats() {
    quizDatabase.forEach(q => {
        if (!statsMap[q.id]) {
            statsMap[q.id] = { title: q.title, hits: 0, misses: 0 };
        }
    });
    localStorage.setItem("quiz_olhosdagua_stats", JSON.stringify(statsMap));
}
initStats();

let gameQuestions = [];
let currentQuestionIdx = 0;
let webcamStream = null;
let currentRenderedOptions = [];
let executionState = "INTRO"; // INTRO, PLAYING, GAMEOVER, VICTORY

const bgPalettes = [
    "linear-gradient(135deg, rgba(0, 210, 255, 0.2), rgba(157, 78, 221, 0.2))",
    "linear-gradient(135deg, rgba(255, 0, 127, 0.2), rgba(255, 107, 53, 0.2))",
    "linear-gradient(135deg, rgba(0, 255, 135, 0.2), rgba(0, 210, 255, 0.2))",
    "linear-gradient(135deg, rgba(157, 78, 221, 0.2), rgba(255, 51, 51, 0.2))"
];

function mutateBackgroundBackground() {
    const cubes = document.querySelectorAll(".cube");
    const chosenPalette = bgPalettes[Math.floor(Math.random() * bgPalettes.length)];
    cubes.forEach(cube => {
        cube.style.background = chosenPalette;
        cube.style.animationDuration = `${Math.floor(Math.random() * 8) + 8}s`;
    });
}

function startGame() {
    executionState = "PLAYING";
    document.getElementById("loading-screen").classList.add("hidden");
    document.getElementById("gameover-screen").classList.add("hidden");
    document.getElementById("victory-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    document.getElementById("leaderboard-section").classList.remove("hidden");
    
    // Embaralha as perguntas aleatoriamente mantendo os títulos originais
    gameQuestions = [...quizDatabase].sort(() => Math.random() - 0.5);
    currentQuestionIdx = 0;
    
    closeWebcam();
    loadNextQuestion();
}

function loadNextQuestion() {
    mutateBackgroundBackground();
    
    if (currentQuestionIdx >= gameQuestions.length) {
        triggerVictoryFlow();
        return;
    }

    const quizCard = document.getElementById("quiz-card");
    quizCard.classList.remove("screen-change");
    void quizCard.offsetWidth; 
    quizCard.classList.add("screen-change");

    const currentQ = gameQuestions[currentQuestionIdx];
    
    // Mantém o título exato ("Questão X") vindo do banco de dados
    document.getElementById("level-badge").innerText = currentQ.title;
    document.getElementById("progress-text").innerText = `Progresso: ${currentQuestionIdx + 1} / ${gameQuestions.length}`;
    
    const percentage = (currentQuestionIdx / gameQuestions.length) * 100;
    document.getElementById("progress-fill").style.width = `${percentage}%`;
    document.getElementById("question-text").innerText = currentQ.text;
    
    // Embaralha as alternativas dinamicamente
    currentRenderedOptions = [...currentQ.options].sort(() => Math.random() - 0.5);
    
    const grid = document.getElementById("options-grid");
    grid.innerHTML = "";
    
    const classColors = ["indicator-orange", "indicator-purple", "indicator-blue", "indicator-green"];
    
    currentRenderedOptions.forEach((optionText, idx) => {
        const card = document.createElement("div");
        card.className = "option-card";
        card.onclick = () => evaluateInput(idx + 1);
        card.innerHTML = `
            <span class="key-indicator ${classColors[idx % 4]}">${idx + 1}</span>
            <span class="opt-text">${optionText}</span>
        `;
        grid.appendChild(card);
    });
}

function evaluateInput(keyNumber) {
    if (executionState === "INTRO" && keyNumber === 1) {
        startGame();
        return;
    }

    if (executionState === "PLAYING" && keyNumber >= 1 && keyNumber <= currentRenderedOptions.length) {
        if (currentQuestionIdx >= gameQuestions.length) return;

        const currentQ = gameQuestions[currentQuestionIdx];
        const selectedAnswerText = currentRenderedOptions[keyNumber - 1];

        if (selectedAnswerText === currentQ.correct) {
            // Registra acerto para a estatística
            statsMap[currentQ.id].hits += 1;
            localStorage.setItem("quiz_olhosdagua_stats", JSON.stringify(statsMap));
            
            currentQuestionIdx++;
            loadNextQuestion();
        } else {
            // Registra erro para a estatística
            statsMap[currentQ.id].misses += 1;
            localStorage.setItem("quiz_olhosdagua_stats", JSON.stringify(statsMap));
            
            triggerDefeatFlow();
        }
    }
}

window.addEventListener("keydown", (e) => {
    const keyNum = parseInt(e.key);
    if (!isNaN(keyNum)) {
        evaluateInput(keyNum);
    }
});

/* Fluxo de GameOver com Timer de 15 Segundos */
function triggerDefeatFlow() {
    executionState = "GAMEOVER";
    mutateBackgroundBackground();
    
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("leaderboard-section").classList.add("hidden");
    document.getElementById("gameover-screen").classList.remove("hidden");
    
    // Renderiza a lista ranqueada por acertos x erros
    displayQuestionStats();

    const cooldownFill = document.getElementById("defeat-cooldown");
    cooldownFill.style.transition = "none";
    cooldownFill.style.width = "100%";
    
    // Anima a barra durante 15 segundos
    setTimeout(() => {
        cooldownFill.style.transition = "width 15s linear";
        cooldownFill.style.width = "0%";
    }, 50);

    // Retorna após 15 segundos (15000 ms + 50ms offset)
    setTimeout(() => {
        if (executionState === "GAMEOVER") {
            returnToMenu();
        }
    }, 15050);
}

// Renderiza todas as 30 questões ranqueadas pelas mais acertadas
function displayQuestionStats() {
    const container = document.getElementById("stats-question-list");
    if (!container) return;
    
    const statsArray = Object.values(statsMap);

    // Ordenação: 1º quem mais acertou, 2º critério quem menos errou
    statsArray.sort((a, b) => {
        if (b.hits !== a.hits) {
            return b.hits - a.hits;
        }
        return a.misses - b.misses;
    });

    container.innerHTML = "";

    statsArray.forEach((item) => {
        const row = document.createElement("div");
        row.className = "stat-row";
        row.innerHTML = `
            <span class="stat-q-name">${item.title}</span>
            <div class="stat-counts">
                <span class="count-hit">✔ Acertos: ${item.hits}</span>
                <span class="count-miss">✖ Erros: ${item.misses}</span>
            </div>
        `;
        container.appendChild(row);
    });
}

function triggerVictoryFlow() {
    executionState = "VICTORY";
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("victory-screen").classList.remove("hidden");

    navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } })
        .then(stream => {
            document.getElementById("webcam").srcObject = stream;
            webcamStream = stream;
            startAutomaticCountdown();
        })
        .catch(() => {
            setTimeout(() => { saveAutomatedWinner(null); }, 4000);
        });
}

function startAutomaticCountdown() {
    const overlay = document.getElementById("countdown-overlay");
    overlay.classList.remove("hidden");

    let counter = 5;
    overlay.innerText = counter;

    const interval = setInterval(() => {
        counter--;
        if (counter > 0) {
            overlay.innerText = counter;
        } else {
            clearInterval(interval);
            overlay.classList.add("hidden");
            captureFinalSnapshot();
        }
    }, 1000);
}

function captureFinalSnapshot() {
    const video = document.getElementById("webcam");
    const canvas = document.getElementById("capture-canvas");
    const context = canvas.getContext("2d");

    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    context.setTransform(1, 0, 0, 1, 0, 0);

    const snapshotBase64 = canvas.toDataURL("image/png");
    saveAutomatedWinner(snapshotBase64);
}

function saveAutomatedWinner(photoData) {
    const fallbackAvatar = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='55' height='55' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' fill='%2300ff87'/><text x='50%' y='65%' font-family='sans-serif' font-size='10' fill='black' text-anchor='middle'>⭐</text></svg>`;
    const localRecords = JSON.parse(localStorage.getItem("pro_players_db")) || [];
    
    const currentNumber = localRecords.length + 1;
    const computedName = `Leitor Pro #${currentNumber}`;

    const newWinner = {
        name: computedName,
        photo: photoData || fallbackAvatar,
        timestamp: new Date().toLocaleDateString('pt-BR')
    };

    localRecords.unshift(newWinner);
    if (localRecords.length > 10) localRecords.pop();

    localStorage.setItem("pro_players_db", JSON.stringify(localRecords));
    displayLeaderboard("leaderboard-list-main");

    setTimeout(() => {
        returnToMenu();
    }, 3000);
}

function returnToMenu() {
    executionState = "INTRO";
    closeWebcam();
    document.getElementById("gameover-screen").classList.add("hidden");
    document.getElementById("victory-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("loading-screen").classList.remove("hidden");
    document.getElementById("leaderboard-section").classList.remove("hidden");
    displayLeaderboard("leaderboard-list-main");
}

function displayLeaderboard(targetContainerId) {
    const container = document.getElementById(targetContainerId);
    if (!container) return;
    
    const localRecords = JSON.parse(localStorage.getItem("pro_players_db")) || [];
    container.innerHTML = "";

    if (localRecords.length === 0) {
        container.innerHTML = `<p style="grid-column: span 2; color: #64748b; text-align: center; width: 100%;">Nenhum campeão registrado ainda nesta máquina.</p>`;
        return;
    }

    localRecords.forEach(item => {
        const slot = document.createElement("div");
        slot.className = "player-slot";
        slot.innerHTML = `
            <img src="${item.photo}" alt="Avatar">
            <div class="player-meta">
                <h4>${item.name}</h4>
                <span>Concluiu em ${item.timestamp}</span>
            </div>
        `;
        container.appendChild(slot);
    });
}

function closeWebcam() {
    if (webcamStream) {
        webcamStream.getTracks().forEach(track => track.stop());
        webcamStream = null;
    }
}

window.onload = function() {
    displayLeaderboard("leaderboard-list-main");
};