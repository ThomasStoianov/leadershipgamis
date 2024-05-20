let menu = document.getElementById("menu")
let iconebarras = document.getElementById("icone-barras")
let iconex = document.getElementById("iconex")

function AbrirFechar() {

    if(menu.classList.contains("menu-fechado")) {

        menu.classList.remove("menu-fechado")

        iconex.style.display = "inline"

        iconebarras.style.display = "none"
    } else {

        menu.classList.add("menu-fechado")

        iconex.style.display = "none"

        iconebarras.style.display = "inline"
    }
}


window.onresize = () => {
    menu.classList.remove("menu-fechado");
    iconeX.style.display = "inline"
    iconebarras.style.display = "none"
}



const SolicitarOrcamento = (event) => {

    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorTelefone = document.getElementById("campo-telefone").value

    console.log(valorNome);
    console.log(valorEmail);
    console.log(valorTelefone);

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        telefone: valorTelefone,
    }

    fetch("http://localhost:3000/solicitacoes" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })

    .then(resposta => {
        console.log(resposta)

        document.querySelector("#contato form").reset()

        alert("Solicitação cadastrada")
    })

    .catch(erro => {
        console.error(erro)
        alert("Erro na descrição")
    
    })

    event.preventDefault()


}