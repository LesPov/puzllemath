// ===============================================
// BANCO DE PREGUNTAS MASIVO Y LÓGICO
// ===============================================
const PUZZLES = [
    // === CATEGORÍA: MATRIZ DE UNA TRANSFORMACIÓN LINEAL ===
    {
        title: "Matriz de una Transformación (2x2)",
        stage1: {
            description: "Encuentra la matriz estándar de la transformación lineal T(x, y) = (x + 3y, 2x - y).",
            matrixSize: { rows: 2, cols: 2 },
            correctMatrix: [["1", "3"], ["2", "-1"]],
            givenValues: ["1", "3", "2", "-1"],
            explanation: "La primera columna es T(1,0) = (1, 2). La segunda columna es T(0,1) = (3, -1)."
        },
        stage2: {
            description: "La transformación que acabas de representar, ¿es lineal?",
            transformationText: "T(x, y) = (x + 3y, 2x - y)",
            matrixSize: { rows: 1, cols: 1 }, correctMatrix: [["Sí"]], givenValues: ["Sí", "No"],
            explanation: "Sí, es lineal. No tiene términos constantes, potencias ni productos entre variables."
        }
    },
    {
        title: "Matriz de una Proyección (3x3)",
        stage1: {
            description: "Encuentra la matriz estándar de la transformación T: R³ → R³ que proyecta un vector sobre el plano XY.",
            matrixSize: { rows: 3, cols: 3 },
            correctMatrix: [["1", "0", "0"], ["0", "1", "0"], ["0", "0", "0"]],
            givenValues: ["1", "0", "0", "0", "1", "0", "0", "0", "0"],
            explanation: "La proyección de (x,y,z) sobre el plano XY es (x,y,0). T(1,0,0)=(1,0,0), T(0,1,0)=(0,1,0), T(0,0,1)=(0,0,0)."
        },
        stage2: {
            description: "La operación de proyección, ¿es una transformación lineal?",
            transformationText: "T(x,y,z) = (x,y,0)",
            matrixSize: { rows: 1, cols: 1 }, correctMatrix: [["Sí"]], givenValues: ["Sí", "No"],
            explanation: "Sí, las proyecciones ortogonales son transformaciones lineales clásicas."
        }
    },

    // === CATEGORÍA: MATRIZ TRANSPUESTA ===
    {
        title: "Matriz Transpuesta (2x3 → 3x2)",
        stage1: {
            description: "Dada la matriz A = [[1, 2, 3], [4, 5, 6]], construye su transpuesta Aᵀ.",
            matrixSize: { rows: 3, cols: 2 },
            correctMatrix: [["1", "4"], ["2", "5"], ["3", "6"]],
            givenValues: ["1", "4", "2", "5", "3", "6"],
            explanation: "La transpuesta Aᵀ se obtiene intercambiando las filas por las columnas de la matriz A."
        },
        stage2: {
            description: "La operación de transposición, T(A) = Aᵀ, ¿es una transformación lineal?",
            transformationText: "T(A) = Aᵀ",
            matrixSize: { rows: 1, cols: 1 }, correctMatrix: [["Sí"]], givenValues: ["Sí", "No"],
            explanation: "Sí es lineal, ya que cumple la aditividad ((A+B)ᵀ = Aᵀ+Bᵀ) y la homogeneidad ((cA)ᵀ = cAᵀ)."
        }
    },
    {
        title: "Matriz Transpuesta (3x3)",
        stage1: {
            description: "Dada la matriz A = [[-1, 0, 5], [2, 1, -2], [3, 4, 0]], construye su transpuesta Aᵀ.",
            matrixSize: { rows: 3, cols: 3 },
            correctMatrix: [["-1", "2", "3"], ["0", "1", "4"], ["5", "-2", "0"]],
            givenValues: ["-1", "2", "3", "0", "1", "4", "5", "-2", "0"],
            explanation: "La diagonal principal (-1, 1, 0) permanece en su lugar, y los otros elementos se reflejan a través de ella."
        },
        stage2: {
            description: "La operación de transposición, T(A) = Aᵀ, ¿es una transformación lineal?",
            transformationText: "T(A) = Aᵀ",
            matrixSize: { rows: 1, cols: 1 }, correctMatrix: [["Sí"]], givenValues: ["Sí", "No"],
            explanation: "Sí, la operación de transposición es un ejemplo clásico de una transformación lineal entre espacios de matrices."
        }
    },

    // === CATEGORÍA: OPERACIONES ENTRE MATRICES ===
    {
        title: "Suma de Matrices (2x2)",
        stage1: {
            description: "Calcula el resultado de A + B, donde A=[[1, -2], [3, 0]] y B=[[4, 2], [-1, 5]].",
            matrixSize: { rows: 2, cols: 2 },
            correctMatrix: [["5", "0"], ["2", "5"]],
            givenValues: ["5", "0", "2", "5"],
            explanation: "La suma de matrices se realiza sumando los elementos correspondientes de cada posición."
        },
        stage2: {
            description: "La operación T(A) = A + B (con B fija), ¿es una transformación lineal?",
            transformationText: "T(A) = A + B",
            matrixSize: { rows: 1, cols: 1 }, correctMatrix: [["No"]], givenValues: ["Sí", "No"],
            explanation: "No es lineal. Sumar una matriz constante B (si B no es la matriz nula) es una traslación, y T(0) = B ≠ 0."
        }
    },
    {
        title: "Multiplicación por Escalar (2x3)",
        stage1: {
            description: "Calcula el resultado de 3A, donde A = [[1, 0, -2], [3, 1, 4]].",
            matrixSize: { rows: 2, cols: 3 },
            correctMatrix: [["3", "0", "-6"], ["9", "3", "12"]],
            givenValues: ["3", "0", "-6", "9", "3", "12"],
            explanation: "Se multiplica cada elemento de la matriz A por el escalar 3."
        },
        stage2: {
            description: "La operación T(A) = 3A (multiplicar por un escalar fijo), ¿es una transformación lineal?",
            transformationText: "T(A) = 3A",
            matrixSize: { rows: 1, cols: 1 }, correctMatrix: [["Sí"]], givenValues: ["Sí", "No"],
            explanation: "Sí, es lineal. Cumple T(A+B) = 3(A+B) = 3A+3B = T(A)+T(B) y T(cA) = 3(cA) = c(3A) = cT(A)."
        }
    },

    // === CATEGORÍA: DETERMINANTE (REVISADO CON LÓGICA) ===
    {
        title: "Determinante (2x2)",
        stage1: {
            description: "Calcula el determinante de la matriz A = [[5, 2], [8, 6]].",
            matrixSize: { rows: 1, cols: 1 },
            correctMatrix: [["14"]],
            givenValues: ["14", "46", "-14", "22"],
            explanation: "El determinante de una matriz 2x2 [a,b; c,d] es ad - bc. Aquí, (5*6) - (2*8) = 30 - 16 = 14."
        },
        stage2: {
            description: "La operación T(A) = det(A), que mapea una matriz a un escalar, ¿es una transformación lineal?",
            transformationText: "T(A) = det(A)",
            matrixSize: { rows: 1, cols: 1 }, correctMatrix: [["No"]], givenValues: ["Sí", "No"],
            explanation: "No es lineal. No cumple la aditividad (det(A+B) ≠ det(A)+det(B)) ni la homogeneidad para matrices n x n (det(cA) = cⁿdet(A))."
        }
    },

    // === CATEGORÍA: MATRICES GRANDES Y CONCEPTOS AVANZADOS ===
    {
        title: "Matriz Identidad (4x4)",
        stage1: {
            description: "Construye la matriz identidad I₄ de tamaño 4x4.",
            matrixSize: { rows: 4, cols: 4 },
            correctMatrix: [["1", "0", "0", "0"], ["0", "1", "0", "0"], ["0", "0", "1", "0"], ["0", "0", "0", "1"]],
            givenValues: ["1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "1"],
            explanation: "La matriz identidad tiene 1s en su diagonal principal y 0s en todas las demás posiciones."
        },
        stage2: {
            description: "La transformación T(v) = I₄v (multiplicar por la identidad), ¿es lineal?",
            transformationText: "T(v) = Iv",
            matrixSize: { rows: 1, cols: 1 }, correctMatrix: [["Sí"]], givenValues: ["Sí", "No"],
            explanation: "Sí, es la transformación lineal más fundamental. Simplemente mapea cada vector a sí mismo (T(v)=v)."
        }
    },
    {
        title: "Matriz Diagonal (3x3)",
        stage1: {
            description: "Construye una matriz diagonal D con los valores 5, -2, 3 en la diagonal.",
            matrixSize: { rows: 3, cols: 3 },
            correctMatrix: [["5", "0", "0"], ["0", "-2", "0"], ["0", "0", "3"]],
            givenValues: ["5", "0", "0", "0", "-2", "0", "0", "0", "3"],
            explanation: "Una matriz diagonal tiene valores distintos de cero únicamente en su diagonal principal."
        },
        stage2: {
            description: "La transformación T(v) = Dv, donde D es la matriz diagonal que construiste, ¿es lineal?",
            transformationText: "T(v) = Dv",
            matrixSize: { rows: 1, cols: 1 }, correctMatrix: [["Sí"]], givenValues: ["Sí", "No"],
            explanation: "Sí, cualquier multiplicación por una matriz (sea diagonal o no) representa una transformación lineal."
        }
    },
];

// Variables globales (sin cambios)
let currentPuzzle = null, currentStage = 1, userMatrix = [], availableValues = [], draggedValue = null, score = 0, attempts = 0, isComplete = false, cellValidation = [];

// ===============================================
// LÓGICA PRINCIPAL DEL JUEGO (Sin cambios)
// ===============================================
function generateNewPuzzle() {
    currentPuzzle = PUZZLES[Math.floor(Math.random() * PUZZLES.length)];
    currentStage = 1; isComplete = false; attempts = 0;
    hideMessages();
    setupStage(1);
}

function setupStage(stage) {
    const stageData = currentPuzzle[`stage${stage}`];
    const questionMatrixDisplay = document.getElementById('question-matrix-display');
    const transformationTextElem = document.getElementById('question-transformation-text');
    const stageCount = currentPuzzle.stage2 ? 2 : 1;

    document.getElementById("question-title").textContent = `${currentPuzzle.title} (Etapa ${stage}/${stageCount})`;
    document.getElementById("question-description").textContent = stageData.description;

    if (stage === 2) {
        renderDisplayMatrix(currentPuzzle.stage1.correctMatrix, questionMatrixDisplay);
        if (stageData.transformationText) {
            transformationTextElem.textContent = stageData.transformationText;
            transformationTextElem.classList.remove('hidden');
        } else {
            transformationTextElem.classList.add('hidden');
        }
    } else {
        questionMatrixDisplay.innerHTML = '';
        transformationTextElem.classList.add('hidden');
    }

    userMatrix = Array(stageData.matrixSize.rows).fill(null).map(() => Array(stageData.matrixSize.cols).fill(""));
    cellValidation = Array(stageData.matrixSize.rows).fill(null).map(() => Array(stageData.matrixSize.cols).fill("empty"));
    availableValues = [...stageData.givenValues].sort(() => Math.random() - 0.5);
    updateUI();
}

function validateMatrix() {
    if (isComplete) return;
    const stageData = currentPuzzle[`stage${currentStage}`];
    let allFilled = true, allCorrect = true;

    for (let i = 0; i < stageData.matrixSize.rows; i++) {
        for (let j = 0; j < stageData.matrixSize.cols; j++) {
            const userValue = userMatrix[i][j], correctValue = stageData.correctMatrix[i][j];
            if (userValue === "") { allFilled = false; cellValidation[i][j] = "empty"; }
            else if (userValue === correctValue) { cellValidation[i][j] = "correct"; }
            else { allCorrect = false; cellValidation[i][j] = "incorrect"; }
        }
    }

    if (allFilled && allCorrect) {
        if (currentStage === 1 && currentPuzzle.stage2) {
            showSuccessMessage("¡Etapa 1 completada!", "Ahora, la pregunta de análisis...");
            currentStage = 2;
            setTimeout(() => { hideMessages(); setupStage(2); }, 2500);
        } else {
            score += Math.max(10 - attempts, 5);
            isComplete = true;
            showSuccessMessage("¡Puzzle Completado!", `¡Excelente! Has ganado ${Math.max(10 - attempts, 5)} puntos.`);
        }
    }
    updateUI();
}

function resetCurrentStage() {
    hideMessages();
    setupStage(currentStage);
}

// ===============================================
// FUNCIONES DE UI Y EVENTOS (Sin cambios)
// ===============================================

function renderDisplayMatrix(matrixData, container) {
    const rows = matrixData.length, cols = matrixData[0].length;
    let gridHTML = matrixData.map(row => row.map(cell => `<div class="q-cell">${cell}</div>`).join('')).join('');
    container.innerHTML = `
    <div class="q-bracket-left">[</div>
    <div class="q-grid" style="grid-template-columns: repeat(${cols}, 1fr);">${gridHTML}</div>
    <div class="q-bracket-right">]</div>`;
}

function updateUI() {
    document.getElementById("score").textContent = score;
    document.getElementById("attempts").textContent = attempts;
    updateAvailableValues();
    updateMatrix();
}

function updateAvailableValues() {
    const container = document.getElementById("available-values");
    container.innerHTML = "";
    availableValues.forEach((value) => {
        const el = document.createElement("div");
        el.className = "value-item";
        el.textContent = value;
        el.draggable = true;
        el.dataset.value = value;
        el.addEventListener("dragstart", handleDragStart);
        container.appendChild(el);
    });
}

function updateMatrix() {
    const stageData = currentPuzzle[`stage${currentStage}`];
    const container = document.getElementById("matrix-grid");
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${stageData.matrixSize.cols}, 1fr)`;
    for (let i = 0; i < stageData.matrixSize.rows; i++) {
        for (let j = 0; j < stageData.matrixSize.cols; j++) {
            const cell = document.createElement("div");
            cell.className = `matrix-cell ${cellValidation[i][j]}`;
            cell.textContent = userMatrix[i][j];
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener("dragover", handleDragOver);
            cell.addEventListener("drop", handleDrop);
            cell.addEventListener("click", handleCellClick);
            container.appendChild(cell);
        }
    }
}

function showHint() {
    if (isComplete) return;
    attempts++;
    const stageData = currentPuzzle[`stage${currentStage}`];
    document.getElementById("basic-hint").classList.remove("hidden");
    document.getElementById("basic-hint-text").textContent = stageData.explanation;
    updateUI();
}

function showSuccessMessage(title, text) {
    const successMessage = document.getElementById("success-message");
    document.getElementById("success-title").textContent = title;
    document.getElementById("success-text").textContent = text;
    successMessage.classList.remove("hidden");
}

function hideMessages() {
    document.getElementById("success-message").classList.add("hidden");
    document.getElementById("basic-hint").classList.add("hidden");
}

function handleDragStart(e) { if (isComplete) return; draggedValue = e.target.dataset.value; }
function handleDragOver(e) { e.preventDefault(); }

function handleDrop(e) {
    e.preventDefault();
    if (isComplete || !draggedValue) return;
    const row = parseInt(e.target.dataset.row), col = parseInt(e.target.dataset.col);
    const oldValue = userMatrix[row][col];
    userMatrix[row][col] = draggedValue;
    availableValues.splice(availableValues.indexOf(draggedValue), 1);
    if (oldValue) availableValues.push(oldValue);
    draggedValue = null;
    validateMatrix(); updateUI();
}

function handleCellClick(e) {
    if (isComplete) return;
    const row = parseInt(e.target.dataset.row), col = parseInt(e.target.dataset.col);
    const cellValue = userMatrix[row][col];
    if (cellValue) {
        userMatrix[row][col] = "";
        availableValues.push(cellValue);
        validateMatrix(); updateUI();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    generateNewPuzzle();
});