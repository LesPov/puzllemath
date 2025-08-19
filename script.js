// ===============================================
// BANCO DE PREGUNTAS MEJORADO
// ===============================================
const PUZZLES = [
    {
        title: "Matriz Transpuesta (2x3 → 3x2)",
        stage1: {
            description: "Dada la matriz A, construye su transpuesta Aᵀ.",
            operands: [
                { type: 'matrix', label: 'A', data: [['1', '2', '3'], ['4', '5', '6']] }
            ],
            matrixSize: { rows: 3, cols: 2 },
            correctMatrix: [["1", "4"], ["2", "5"], ["3", "6"]],
            givenValues: ["1", "4", "2", "5", "3", "6", "0"],
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
        title: "Traza de una Matriz (3x3)",
        stage1: {
            description: "Calcula la traza (Tr) de la siguiente matriz A.",
            operands: [
                { type: 'matrix', label: 'A', data: [['-2', '9', '1'], ['0', '5', '8'], ['7', '4', '3']] }
            ],
            matrixSize: { rows: 1, cols: 1 },
            correctMatrix: [["6"]],
            givenValues: ["6", "10", "1", "35"],
            explanation: "La traza es la suma de los elementos de la diagonal principal: (-2) + 5 + 3 = 6."
        },
        stage2: {
            description: "La operación T(A) = Tr(A), que mapea una matriz a un escalar, ¿es una transformación lineal?",
            transformationText: "T(A) = Tr(A)",
            matrixSize: { rows: 1, cols: 1 }, correctMatrix: [["Sí"]], givenValues: ["Sí", "No"],
            explanation: "Sí es lineal, ya que Tr(A+B) = Tr(A) + Tr(B) y Tr(cA) = c * Tr(A)."
        }
    },
    {
        title: "Suma de Matrices (2x2)",
        stage1: {
            description: "Calcula el resultado de A + B.",
            operands: [
                { type: 'matrix', label: 'A', data: [['1', '-2'], ['3', '0']] },
                { type: 'symbol', value: '+' },
                { type: 'matrix', label: 'B', data: [['4', '2'], ['-1', '5']] }
            ],
            matrixSize: { rows: 2, cols: 2 },
            correctMatrix: [["5", "0"], ["2", "5"]],
            givenValues: ["5", "0", "2", "5", "3", "8"],
            explanation: "La suma se realiza sumando los elementos en la misma posición: 1+4=5, -2+2=0, etc."
        },
        stage2: {
            description: "La operación T(A) = A + B (con B fija y no nula), ¿es una transformación lineal?",
            transformationText: "T(A) = A + B",
            matrixSize: { rows: 1, cols: 1 }, correctMatrix: [["No"]], givenValues: ["Sí", "No"],
            explanation: "No es lineal. Una transformación lineal debe mapear el vector cero al vector cero. Aquí, T(0) = 0 + B = B, que no es la matriz cero."
        }
    },
    {
        title: "Multiplicación por Escalar (2x3)",
        stage1: {
            description: "Calcula el resultado de 3A.",
            operands: [
                { type: 'symbol', value: '3' },
                { type: 'matrix', label: 'A', data: [['1', '0', '-2'], ['3', '1', '4']] }
            ],
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
    {
        title: "Multiplicación de Matrices (2x2)",
        stage1: {
            description: "Calcula el producto A * B.",
            operands: [
                { type: 'matrix', label: 'A', data: [['2', '1'], ['0', '3']] },
                { type: 'symbol', value: '×' },
                { type: 'matrix', label: 'B', data: [['1', '-1'], ['4', '0']] }
            ],
            matrixSize: { rows: 2, cols: 2 },
            correctMatrix: [["6", "-2"], ["12", "0"]],
            givenValues: ["6", "-2", "12", "0", "3", "1"],
            explanation: "El elemento (i, j) del resultado es el producto punto de la fila i de A con la columna j de B."
        },
        stage2: {
            description: "La operación T(A) = A * B (con B fija), ¿es una transformación lineal?",
            transformationText: "T(A) = A * B",
            matrixSize: { rows: 1, cols: 1 }, correctMatrix: [["Sí"]], givenValues: ["Sí", "No"],
            explanation: "Sí, es lineal porque la multiplicación de matrices es distributiva y asociativa con escalares."
        }
    },
    {
        title: "Determinante (2x2)",
        stage1: {
            description: "Calcula el determinante de la matriz A.",
            operands: [
                { type: 'matrix', label: 'A', data: [['5', '2'], ['8', '6']] }
            ],
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
    {
        title: "Matriz Inversa (2x2)",
        stage1: {
            description: "Calcula la inversa de la matriz A.",
             operands: [
                { type: 'matrix', label: 'A', data: [['5', '3'], ['3', '2']] }
            ],
            matrixSize: { rows: 2, cols: 2 },
            correctMatrix: [["2", "-3"], ["-3", "5"]],
            givenValues: ["2", "-3", "-3", "5", "1", "0"],
            explanation: "Para una matriz 2x2, A⁻¹ = (1/det(A)) * [[d, -b], [-c, a]]. Aquí el determinante es 1."
        },
        stage2: {
            description: "La operación T(A) = A⁻¹, ¿es una transformación lineal?",
            transformationText: "T(A) = A⁻¹",
            matrixSize: { rows: 1, cols: 1 }, correctMatrix: [["No"]], givenValues: ["Sí", "No"],
            explanation: "No es lineal. Por ejemplo, en general (A+B)⁻¹ no es igual a A⁻¹ + B⁻¹."
        }
    },
];

// Variables globales
let currentPuzzle = null, currentStage = 1, userMatrix = [], availableValues = [], draggedValue = null, score = 0, attempts = 0, isComplete = false, cellValidation = [];

// Lógica principal del juego
function generateNewPuzzle() {
    currentPuzzle = PUZZLES[Math.floor(Math.random() * PUZZLES.length)];
    currentStage = 1; isComplete = false; attempts = 0;
    hideMessages();
    setupStage(1);
}

function setupStage(stage) {
    const stageData = currentPuzzle[`stage${stage}`];
    const questionMatrixDisplay = document.getElementById('question-matrix-display');
    const operandsContainer = document.getElementById('question-operands-display');
    const transformationTextElem = document.getElementById('question-transformation-text');
    const stageCount = Object.keys(currentPuzzle).filter(k => k.startsWith('stage')).length;

    document.getElementById("question-title").textContent = `${currentPuzzle.title} (Etapa ${stage}/${stageCount})`;
    document.getElementById("question-description").textContent = stageData.description;

    // Limpiar contenedores
    operandsContainer.innerHTML = '';
    questionMatrixDisplay.innerHTML = '';
    questionMatrixDisplay.classList.add('hidden');
    operandsContainer.classList.add('hidden');
    transformationTextElem.classList.add('hidden');

    if (stage === 1 && stageData.operands) {
        operandsContainer.classList.remove('hidden');
        renderOperands(stageData.operands, operandsContainer);
    } else if (stage === 2) {
        questionMatrixDisplay.classList.remove('hidden');
        renderDisplayMatrix(currentPuzzle.stage1.correctMatrix, questionMatrixDisplay);
        if (stageData.transformationText) {
            transformationTextElem.textContent = stageData.transformationText;
            transformationTextElem.classList.remove('hidden');
        }
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
        const hasStage2 = !!currentPuzzle.stage2;
        if (currentStage === 1 && hasStage2) {
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

// Funciones de UI y Eventos
function renderOperands(operands, container) {
    operands.forEach(op => {
        if (op.type === 'matrix') {
            const item = document.createElement('div');
            item.className = 'operand-item';
            
            const label = document.createElement('div');
            label.className = 'operand-label';
            label.textContent = `${op.label} =`;
            item.appendChild(label);

            const matrixDisplay = document.createElement('div');
            matrixDisplay.className = 'question-matrix-display visual-operand';
            renderDisplayMatrix(op.data, matrixDisplay);
            item.appendChild(matrixDisplay);
            
            container.appendChild(item);
        } else if (op.type === 'symbol') {
            const symbol = document.createElement('div');
            symbol.className = 'operand-label';
            symbol.textContent = op.value;
            container.appendChild(symbol);
        }
    });
}

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
    const targetCell = e.target.closest('.matrix-cell');
    if (!targetCell) return;
    
    const row = parseInt(targetCell.dataset.row);
    const col = parseInt(targetCell.dataset.col);
    const oldValue = userMatrix[row][col];
    
    userMatrix[row][col] = draggedValue;
    availableValues.splice(availableValues.indexOf(draggedValue), 1);
    if (oldValue) availableValues.push(oldValue);
    
    draggedValue = null;
    validateMatrix();
}

function handleCellClick(e) {
    if (isComplete) return;
    const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.col);
    const cellValue = userMatrix[row][col];
    if (cellValue) {
        userMatrix[row][col] = "";
        availableValues.push(cellValue);
        validateMatrix();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    generateNewPuzzle();
});