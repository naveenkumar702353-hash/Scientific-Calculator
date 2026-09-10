const display = document.getElementById("display");

let memory = 0;

let angleMode = "DEG";

function Value(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("Invalid factorial");
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

function root(x, y) {
    return x ** (1 / y);
}

function toRadians(x) {
    if (angleMode === "DEG") {
        return x * Math.PI / 180;
    }

    return x;
}

function sin(x) {
    return Math.sin(toRadians(x));
}

function cos(x) {
    return Math.cos(toRadians(x));
}

function tan(x) {
    return Math.tan(toRadians(x));
}

function toggleAngleMode() {
    if (angleMode === "DEG") {
        angleMode = "RAD";
    } else {
        angleMode = "DEG";
    }

    document.querySelector(".angle-mode").textContent = angleMode;
}

function toggleSign() {

    if (display.value === "") {
        return;
    }

    try {
        let value = eval(display.value);
        display.value = -value;
    } catch (error) {
        display.value = "Error";
    }
}

function percentage() {

    if (display.value === "") {
        return;
    }

    try {
        let value = eval(display.value);
        display.value = value / 100;
    } catch (error) {
        display.value = "Error";
    }
}

function calculate() {

    let expression = display.value;

    if (expression === "") {
        return;
    }

    try {

        let result = eval(expression);

        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }

        display.value = result;

    } catch (error) {

        display.value = "Error";

    }
}

function memoryClear() {
    memory = 0;
}

function memoryAdd() {

    try {
        let value = eval(display.value);
        memory += value;
    } catch (error) {
        display.value = "Error";
    }
}

function memorySubtract() {

    try {
        let value = eval(display.value);
        memory -= value;
    } catch (error) {
        display.value = "Error";
    }
}


function memoryRecall() {
    display.value = memory;
}