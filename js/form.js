let addBotao = document.querySelector("#adicionar-paciente")

addBotao.addEventListener('click', (event) => {
    event.preventDefault()
    let form = document.querySelector("#form-adiciona")

    //cria um objeto paciente
    let paciente = obtemPaciente(form)

    //valida a tr

    let erros = validaPaciente(paciente)
    if (erros.length > 0) {
        exibeErro(erros)
        return
    }


    adicionaPacienteNaTabela(paciente)

    let ul = document.querySelector("#erros-lista")
    ul.innerHTML = ""

    form.reset()
})

function adicionaPacienteNaTabela(paciente) {
    //monta a tr
    let novaTR = montaTr(paciente)



    //Adiciona Tr a tabela
    let tableTB = document.querySelector("#tabela-pacientes")

    tableTB.appendChild(novaTR)
}

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

    novaTR.appendChild(montaTd(paciente.nome, "info-nome"))
    novaTR.appendChild(montaTd(paciente.peso, "info-peso"))
    novaTR.appendChild(montaTd(paciente.altura, "info-altura"))
    novaTR.appendChild(montaTd(paciente.gordura, "info-gordura"))
    novaTR.appendChild(montaTd(paciente.imc, "info-imc"))

    return novaTR
}

function montaTd(dado, classe) {
    let td = document.createElement("td")
    td.classList.add(classe)
    td.textContent = dado
    return td
}

function validaPaciente(paciente) {
    let erros = []

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida")
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido")
    }

    if (paciente.nome.length == 0) {
        erros.push("Nome em branco!")
    }
    if (paciente.peso.length == 0) {
        erros.push("Nome em branco!")
    }
    if (paciente.altura.length == 0) {
        erros.push("Nome em branco!")
    }
    if (paciente.gordura.length == 0) {
        erros.push("Nome em branco!")
    }
    return erros
}

function exibeErro(erros) {
    let ul = document.querySelector("#erros-lista")
    ul.innerHTML = ""
    erros.forEach(function (erro) {
        ul.appendChild(criaLiDeErros(erro))
    })
}

function criaLiDeErros(erro) {
    let li = document.createElement("li")
    li.textContent = erro
    li.classList.add("erroLi")
    return li
}