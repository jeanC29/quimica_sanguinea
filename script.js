function interpretarExamen() {
    // Obtener valores de los inputs
    let glucosa = parseFloat(document.getElementById("glucosa").value);
    let colesterol = parseFloat(document.getElementById("Colesterol").value);
    let HDL = parseFloat(document.getElementById("HDL").value);
    let LDL = parseFloat(document.getElementById("LDL").value);
    let VLDL = parseFloat(document.getElementById("VLDL").value);
    let trigliceridos = parseFloat(document.getElementById("trigliceridos").value);

    // Obtener elementos para mostrar resultados
    let resultadoGlucosa = document.getElementById("resultadoGlucosa");
    let resultadoColesterol = document.getElementById("resultadoColesterol"); 
    let resultadoHDL = document.getElementById("resultadoHDL");
    let resultadoLDL = document.getElementById("resultadoLDL");
    let resultadoVLDL = document.getElementById("resultadoVLDL");
    let resultadoTrigliceridos = document.getElementById("resultadoTrigliceridos");

    // Evaluar Glucosa
    if (!isNaN(glucosa) && glucosa > 0) {
        if (glucosa < 100) {
            resultadoGlucosa.innerHTML = "Glucosa normal.";
            resultadoGlucosa.style.color = "green";
        } else if (glucosa >= 100 && glucosa < 126) {
            resultadoGlucosa.innerHTML = "Glucosa elevada. Posible prediabetes.";
            resultadoGlucosa.style.color = "orange";
        } else {
            resultadoGlucosa.innerHTML = "Posible diagnóstico de diabetes. Consulte a su médico.";
            resultadoGlucosa.style.color = "red";
        }
    } else {
        resultadoGlucosa.innerHTML = "Ingrese un valor válido para la glucosa.";
        resultadoGlucosa.style.color = "black";
    }

    // Evaluar Colesterol
    if (!isNaN(colesterol) && colesterol > 0) {
        if (colesterol < 200) {
            resultadoColesterol.innerHTML = "Colesterol normal.";
            resultadoColesterol.style.color = "green";
        } else if (colesterol >= 200 && colesterol <= 239) {
            resultadoColesterol.innerHTML = "Colesterol al límite alto.";
            resultadoColesterol.style.color = "orange";
        } else {
            resultadoColesterol.innerHTML = "Colesterol alto. Consulte a su médico.";
            resultadoColesterol.style.color = "red";
        }
    } else {
        resultadoColesterol.innerHTML = "Ingrese un valor válido para el colesterol.";
        resultadoColesterol.style.color = "black";
    }

    // Evaluar Colesterol HDL
    if (!isNaN(HDL) && HDL > 0) {
        if (HDL < 40) {
            resultadoHDL.innerHTML = "Colesterol HDL bajo.";
            resultadoHDL.style.color = "green";
        } else if (HDL >= 40 && HDL <= 60) {
            resultadoHDL.innerHTML = "Colesterol HDL normal.";
            resultadoHDL.style.color = "orange";
        } else {
            resultadoHDL.innerHTML = "Colesterol HDL alto. Consulte a su médico.";
            resultadoHDL.style.color = "red";
        }
    } else {
        resultadoHDL.innerHTML = "Ingrese un valor válido para el colesterol HDL.";
        resultadoHDL.style.color = "black";
    }

    // Evaluar Colesterol LDL
    if (!isNaN(LDL) && LDL > 0) {
        if (LDL < 100) {
            resultadoLDL.innerHTML = "Colesterol LDL óptimo.";
            resultadoLDL.style.color = "green";
        } else if (LDL >= 100 && LDL <= 129) {
            resultadoLDL.innerHTML = "Colesterol LDL casi óptimo.";
            resultadoLDL.style.color = "yellow";
        } else if (LDL >= 130 && LDL <= 159) {
            resultadoLDL.innerHTML = "Colesterol LDL límite alto.";
            resultadoLDL.style.color = "orange";
        } else {
            resultadoLDL.innerHTML = "Colesterol LDL muy alto. Consulte a su médico.";
            resultadoLDL.style.color = "red";
        }
    } else {
        resultadoLDL.innerHTML = "Ingrese un valor válido para el colesterol LDL.";
        resultadoLDL.style.color = "black";
    }

    // Evaluar Colesterol VLDL
    if (!isNaN(VLDL) && VLDL > 0) {
        if (VLDL < 30) {
            resultadoVLDL.innerHTML = "Colesterol VLDL normal.";
            resultadoVLDL.style.color = "green";
        } else {
            resultadoVLDL.innerHTML = "Colesterol VLDL alto. Consulte a su médico.";
            resultadoVLDL.style.color = "red";
        }
    } else {
        resultadoVLDL.innerHTML = "Ingrese un valor válido para el colesterol VLDL.";
        resultadoVLDL.style.color = "black";
    }

    // Evaluar Triglicéridos
    if (!isNaN(trigliceridos) && trigliceridos > 0) {
        if (trigliceridos < 150) {
            resultadoTrigliceridos.innerHTML = "Triglicéridos normales.";
            resultadoTrigliceridos.style.color = "green";
        } else if (trigliceridos >= 150 && trigliceridos <= 199) {
            resultadoTrigliceridos.innerHTML = "Triglicéridos moderados. Precaución.";
            resultadoTrigliceridos.style.color = "orange";
        } else {
            resultadoTrigliceridos.innerHTML = "Triglicéridos altos. Consulte a su médico.";
            resultadoTrigliceridos.style.color = "red";
        }
    } else {
        resultadoTrigliceridos.innerHTML = "Ingrese un valor válido para los triglicéridos.";
        resultadoTrigliceridos.style.color = "black";
    }
}

