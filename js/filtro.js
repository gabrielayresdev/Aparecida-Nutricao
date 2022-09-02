let search = document.querySelector("#filtrar-tabela")

search.addEventListener("input", function () {
    let pacientes = document.querySelectorAll(".paciente")

    let reg = new RegExp(this.value, "i")

    if (search.value.length > 0) {
        pacientes.forEach(function (paciente) {
            nome = paciente.querySelector(".info-nome").textContent
            if (!reg.test(nome)) {
                paciente.classList.add("invisivel")
            } else {
                paciente.classList.remove("invisivel")
            }
        })
    } else {
        pacientes.forEach(function (paciente) {
            paciente.classList.remove("invisivel")
        })
    }

})