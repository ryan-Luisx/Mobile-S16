const botaoIngredientes = document.querySelector("#botao-ingredientes");
const listaIngredientes = document.querySelector("#lista-ingredientes");
const botaoSalvar = document.querySelector("#salvar");
const botaoCompartilhar = document.querySelector("#compartilhar");
const botaoProxima = document.querySelector("#proxima");
const mensagem = document.querySelector("#mensagem");

botaoIngredientes.addEventListener("click", () => {
    const estaAberto =
        botaoIngredientes.getAttribute("aria-expanded") === "true";

    botaoIngredientes.setAttribute(
        "aria-expanded",
        String(!estaAberto)
    );

    listaIngredientes.hidden = estaAberto;

    botaoIngredientes.textContent = estaAberto
        ? "Mostrar ingredientes"
        : "Ocultar ingredientes";
});

botaoSalvar.addEventListener("click", () => {
    mensagem.textContent = "Receita salva com sucesso.";
});

botaoCompartilhar.addEventListener("click", async () => {
    if (navigator.share) {
        await navigator.share({
            title: "Bolo de chocolate",
            text: "Veja esta receita do Cozinha Fácil"
        });
    } else {
        mensagem.textContent =
            "O compartilhamento não está disponível neste navegador.";
    }
});

botaoProxima.addEventListener("click", () => {
    mensagem.textContent = "Carregando a próxima receita.";
});
