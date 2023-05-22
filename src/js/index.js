const BotaoAlterar = document.getElementById("botao-alterar");
const ImagemBotaoAlterar = document.querySelector(".alterar");
const Body = document.querySelector("body");

BotaoAlterar.addEventListener("click", () => {

    const ModoEscuroAtivo = Body.classList.contains("modoescuro");

    Body.classList.toggle("modoescuro")

    if (ModoEscuroAtivo) {
        
        ImagemBotaoAlterar.setAttribute("src", "./src/Imagens/sun.png");

    } else {

        ImagemBotaoAlterar.setAttribute("src", "./src/Imagens/moon.png");

    }

})