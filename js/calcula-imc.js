let paciente = document.querySelectorAll(".paciente")

for (let i = 0; i < paciente.length; i++) {
    let peso = paciente[i].querySelector(".info-peso").textContent
    let altura = paciente[i].querySelector(".info-altura").textContent
    let imc = paciente[i].querySelector(".info-imc")

    if (peso < 0 || peso > 1000) {
        console.log("Peso inválido")
        imc.textContent = "Peso inválido"
        paciente[i].classList.add("paciente-invalido")
    } else if (altura < 0 || altura > 4) {
        console.log("Altura inválida")
        imc.textContent = "Altura inválida"
        paciente[i].classList.add("paciente-invalido")
    } else {
        imc.textContent = calcImc(peso, altura)
    }
}

function calcImc(peso, altura) {
    let imc = (peso / (altura * altura)).toFixed(2)
    return imc
}