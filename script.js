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
    { id: 14, title: "Questão 14", text: "Qual é a grafia correta do termo que se refere à valorização da população negra e de sua história?", options: ["negritude", "negritúde", "nigritude", "negritudi"], correct: "negritude" },
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

let statsMap = JSON.parse(localStorage.getItem("quiz_olhosdagua_stats")) || {};

function initStats() {
    quizDatabase.forEach(q => {
        if (!statsMap[q.id]) {
            statsMap[q.id] = { title: q.title, hits: 0, misses: 0 };
        }
    });
    localStorage.setItem("quiz_olhosdagua_stats", JSON.stringify(statsMap));
}
initStats();

// Instanciação dos Efeitos Sonoros
const soundTrilha = new Audio("aud/trilha.ogg");
soundTrilha.loop = true;
soundTrilha.volume = 0.4;

const soundAcerto = new Audio("aud/acerto.ogg");
const soundErro = new Audio("aud/erro.ogg");
const soundFlash = new Audio("aud/flash.ogg");

let gameQuestions = [];
let currentQuestionIdx = 0;
let webcamStream = null;
let currentRenderedOptions = [];
let executionState = "INTRO"; // INTRO, PLAYING, PHOTO, GAMEOVER, VICTORY

const bgPalettes = [
    "linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(192, 132, 252, 0.2))",
    "linear-gradient(135deg, rgba(255, 0, 127, 0.2), rgba(255, 94, 0, 0.2))",
    "linear-gradient(135deg, rgba(0, 255, 196, 0.2), rgba(0, 240, 255, 0.2))",
    "linear-gradient(135deg, rgba(192, 132, 252, 0.2), rgba(255, 51, 85, 0.2))"
];

function mutateBackgroundBackground() {
    const cubes = document.querySelectorAll(".cube");
    const chosenPalette = bgPalettes[Math.floor(Math.random() * bgPalettes.length)];
    cubes.forEach(cube => {
        cube.style.background = chosenPalette;
        cube.style.animationDuration = `${Math.floor(Math.random() * 6) + 7}s`;
    });
}

function startGame() {
    executionState = "PLAYING";
    document.getElementById("loading-screen").classList.add("hidden");
    document.getElementById("gameover-screen").classList.add("hidden");
    document.getElementById("victory-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    document.getElementById("leaderboard-section").classList.remove("hidden");
    
    // Toca a trilha sonora em looping ao iniciar
    soundTrilha.currentTime = 0;
    soundTrilha.play().catch(e => console.log("Áudio bloqueado pelo navegador até interação:", e));

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
    
    document.getElementById("level-badge").innerText = currentQ.title;
    document.getElementById("progress-text").innerText = `Progresso: ${currentQuestionIdx + 1} / ${gameQuestions.length}`;
    
    const percentage = (currentQuestionIdx / gameQuestions.length) * 100;
    document.getElementById("progress-fill").style.width = `${percentage}%`;
    document.getElementById("question-text").innerText = currentQ.text;
    
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
            // Toca som de acerto
            soundAcerto.currentTime = 0;
            soundAcerto.play().catch(e => {});

            statsMap[currentQ.id].hits += 1;
            localStorage.setItem("quiz_olhosdagua_stats", JSON.stringify(statsMap));
            
            currentQuestionIdx++;
            loadNextQuestion();
        } else {
            // Toca som de erro
            soundErro.currentTime = 0;
            soundErro.play().catch(e => {});

            statsMap[currentQ.id].misses += 1;
            localStorage.setItem("quiz_olhosdagua_stats", JSON.stringify(statsMap));
            
            handleAnswerError();
        }
    }
}

window.addEventListener("keydown", (e) => {
    const keyNum = parseInt(e.key);
    if (!isNaN(keyNum)) {
        evaluateInput(keyNum);
    }
});

function handleAnswerError() {
    document.getElementById("quiz-screen").classList.add("hidden");

    if (currentQuestionIdx >= 1) {
        triggerPhotoCaptureFlow();
    } else {
        triggerGameOverScreen();
    }
}

function triggerPhotoCaptureFlow() {
    executionState = "PHOTO";
    document.getElementById("victory-screen").classList.remove("hidden");

    navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } })
        .then(stream => {
            document.getElementById("webcam").srcObject = stream;
            webcamStream = stream;
            startAutomaticCountdown();
        })
        .catch(() => {
            setTimeout(() => { 
                saveAutomatedWinner(null, currentQuestionIdx); 
                document.getElementById("victory-screen").classList.add("hidden");
                triggerGameOverScreen();
            }, 3000);
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
            setTimeout(() => { 
                saveAutomatedWinner(null, 30); 
                returnToMenu();
            }, 3000);
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
    // Toca o som do flash no momento exato da captura
    soundFlash.currentTime = 0;
    soundFlash.play().catch(e => {});

    const video = document.getElementById("webcam");
    const canvas = document.getElementById("capture-canvas");
    const context = canvas.getContext("2d");

    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    context.setTransform(1, 0, 0, 1, 0, 0);

    const snapshotBase64 = canvas.toDataURL("image/png");
    saveAutomatedWinner(snapshotBase64, currentQuestionIdx);

    closeWebcam();
    document.getElementById("victory-screen").classList.add("hidden");

    if (executionState === "VICTORY") {
        returnToMenu();
    } else {
        triggerGameOverScreen();
    }
}

/* Tempo da tela final reduzido para 5 segundos */
function triggerGameOverScreen() {
    executionState = "GAMEOVER";
    mutateBackgroundBackground();
    
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("leaderboard-section").classList.add("hidden");
    document.getElementById("gameover-screen").classList.remove("hidden");
    
    displayQuestionStats();

    const cooldownFill = document.getElementById("defeat-cooldown");
    cooldownFill.style.transition = "none";
    cooldownFill.style.width = "100%";
    
    setTimeout(() => {
        cooldownFill.style.transition = "width 5s linear";
        cooldownFill.style.width = "0%";
    }, 50);

    setTimeout(() => {
        if (executionState === "GAMEOVER") {
            returnToMenu();
        }
    }, 5050);
}

function displayQuestionStats() {
    const container = document.getElementById("stats-question-list");
    if (!container) return;
    
    const statsArray = Object.values(statsMap);

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

function saveAutomatedWinner(photoData, finalScore) {
    if (finalScore < 1) return;

    const fallbackAvatar = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='55' height='55' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' fill='%2300ff87'/><text x='50%' y='65%' font-family='sans-serif' font-size='10' fill='black' text-anchor='middle'>⭐</text></svg>`;
    const localRecords = JSON.parse(localStorage.getItem("pro_players_db")) || [];
    
    const currentNumber = localRecords.length + 1;
    const computedName = `Leitor Pro #${currentNumber}`;

    const newWinner = {
        name: computedName,
        score: finalScore,
        photo: photoData || fallbackAvatar,
        timestamp: new Date().toLocaleDateString('pt-BR')
    };

    localRecords.push(newWinner);
    localRecords.sort((a, b) => b.score - a.score);

    const topFiveRecords = localRecords.slice(0, 5);

    localStorage.setItem("pro_players_db", JSON.stringify(topFiveRecords));
    displayLeaderboard("leaderboard-list-main");
}

function returnToMenu() {
    executionState = "INTRO";
    // Para a trilha sonora ao retornar ao menu (opcional, caso queira que continue, basta remover esta linha)
    soundTrilha.pause();
    
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
        container.innerHTML = `<p style="grid-column: span 5; color: #94a3b8; text-align: center; width: 100%;">Nenhum campeão registrado ainda. Acerte pelo menos 1 questão para entrar no ranking!</p>`;
        return;
    }

    localRecords.forEach((item, index) => {
        const slot = document.createElement("div");
        slot.className = "player-slot";
        slot.innerHTML = `
            <img src="${item.photo}" alt="Avatar">
            <div class="player-meta">
                <h4>${index + 1}º - ${item.name}</h4>
                <span>⭐ ${item.score} Acertos</span>
                <small>${item.timestamp}</small>
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