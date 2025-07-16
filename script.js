console.log("Script loaded");

document.getElementById("form").addEventListener("submit", verificar);

function verificar(event) {
    event.preventDefault();

    let ano = document.getElementById("number").value;
    let idade = new Date().getFullYear() - parseInt(ano);
    let sexo = document.getElementById("select").value;
    let paragrafo = document.getElementById("paragrafo");
    let img = document.createElement("img");
    img.setAttribute("id", "foto");

    // Verifica se o campo ano está vazio
    if (ano.length === "") {
        alert("Por favor, preencha o campo ano.");
        return;
    }

    // Verifica se o ano é válido
    if (parseInt(ano) < 1945 || parseInt(ano) > new Date().getFullYear()) {
        alert("Por favor, insira um ano válido entre 1945 e o ano atual.");
        return;
    }

    // Verifica se o campo sexo está vazio
    if (sexo === "") {
        alert("Por favor, selecione o sexo.");
        return;
    }

    // Exibe a mensagem de acordo com o sexo e idade
    if (sexo === "masculino") {
        if (idade < 18) {
            paragrafo.innerHTML = `Você é um homem de ${idade} anos, menor de idade.`;
            img.setAttribute("src", "img/criancaM.jpg");
        } else if (idade >= 18 && idade < 65) {
            paragrafo.innerHTML = `Você é um homem de ${idade} anos, maior de idade.`;
            img.setAttribute("src", "img/adultoM.jpg");
        } else {
            paragrafo.innerHTML = `Você é um homem de ${idade} anos, idoso.`;
            img.setAttribute("src", "img/idosoM.jpg");
        }
    } else if (sexo === "feminino") {
        if (idade < 18) {
            paragrafo.innerHTML = `Você é uma mulher de ${idade} anos, menor de idade.`;
            img.setAttribute("src", "img/criancaF.jpg");
        } else if (idade >= 18 && idade < 65) {
            paragrafo.innerHTML = `Você é uma mulher de ${idade} anos, maior de idade.`;
            img.setAttribute("src", "img/adultaF.jpg");
        } else {
            paragrafo.innerHTML = `Você é uma mulher de ${idade} anos, idosa.`;
            img.setAttribute("src", "img/idosaF.jpg");
        }
    }
    paragrafo.appendChild(img);

    img.style.width = "200px";
}