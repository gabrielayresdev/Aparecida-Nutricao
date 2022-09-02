let busca = document.querySelector("#buscar-pacientes")

busca.addEventListener("click", function () {
    let xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    let erroSpan = document.querySelector("#erro-ajax")

    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            erroSpan.classList.add("invisivel")
            var pacientes = JSON.parse(xhr.responseText)

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente)
            })
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroSpan.classList.remove("invisivel")
        }
    })

    xhr.send()
})