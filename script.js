// 1. Array com os caminhos das imagens
const imagens = ["branco.png", "janela.png", "vidro.png"];
let indiceAtual = 0;

// 2. Selecionar os elementos
const imagemElemento = document.getElementById("imagem-atual");
const botaoPrev = document.getElementById("prev");
const botaoNext = document.getElementById("next");

// 3. Função para atualizar a imagem
function atualizarImagem(novaPosicao) {
    indiceAtual = novaPosicao;
    imagemElemento.src = imagens[indiceAtual];
}

// 4. Lógica do botão Próximo (Direita)
botaoNext.addEventListener("click", () => {
    let proxima = indiceAtual + 1;
    // Se chegar no fim, volta para a primeira (opcional)
    if (proxima >= imagens.length) proxima = 0;
    atualizarImagem(proxima);
});

// 5. Lógica do botão Anterior (Esquerda)
botaoPrev.addEventListener("click", () => {
    let anterior = indiceAtual - 1;
    // Se chegar no início, vai para a última (opcional)
    if (anterior < 0) anterior = imagens.length - 1;
    atualizarImagem(anterior);
});
