let paciente = document.querySelectorAll(".paciente")

for (let i = 0; i < paciente.length; i++) {
    let peso = paciente[i].querySelector(".info-peso").textContent
    let altura = paciente[i].querySelector(".info-altura").textContent
    let imc = paciente[i].querySelector(".info-imc")

    if (!validaPeso(peso)) {
        console.log("Peso inválido")
        imc.textContent = "Peso inválido"
        paciente[i].classList.add("paciente-invalido")
    } else if (!validaAltura(altura)) {
        console.log("Altura inválida")
        imc.textContent = "Altura inválida"
        paciente[i].classList.add("paciente-invalido")
    } else {
        imc.textContent = calcImc(peso, altura)
    }
}

function validaPeso(peso) {
    if ((peso > 0 && peso < 1000) || peso == "") {
        return true
    } else {
        console.log(peso + "é o peso")
        return false
    }
}

function validaAltura(altura) {
    if ((altura > 0 && altura < 3) || altura == "") {
        return true
    } else {
        return false
    }
}

function calcImc(peso, altura) {
    let imc = (peso / (altura * altura)).toFixed(2)
    return imc
}