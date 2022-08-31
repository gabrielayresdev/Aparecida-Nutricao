let addBotao = document.querySelector("#adicionar-paciente")

addBotao.addEventListener('click', (event) => {
    event.preventDefault()
    let form = document.querySelector("#form-adiciona")

    let paciente = obtemPaciente(form)

    let novaTR = montaTr(paciente)

    let tableTB = document.querySelector("#tabela-pacientes")

    tableTB.appendChild(novaTR)

    form.reset();
})

function obtemPaciente(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function montaTr(paciente) {
    let novaTR = document.createElement("tr")
    novaTR.classList.add("paciente")

    let nomeTD = montaTd(paciente.nome, "info-nome")
    let pesoTD = montaTd(paciente.peso, "info-peso")
    let alturaTD = montaTd(paciente.altura, "info-altura")
    let gorduraTD = montaTd(paciente.gordura, "info-gordura")
    let imcTD = montaTd(paciente.imc, "info-imc")

    novaTR.appendChild(nomeTD)
    novaTR.appendChild(pesoTD)
    novaTR.appendChild(alturaTD)
    novaTR.appendChild(gorduraTD)
    novaTR.appendChild(imcTD)

    return novaTR
}

function montaTd(dado, classe) {
    let td = document.createElement("td")
    td.classList.add(classe)
    td.textContent = dado
    return td
}