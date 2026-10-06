const car = document.getElementById('#carousel');
const btnEsquerda = document.querySelector('#btn-esquerda');
const btnDireita = document.querySelector('#btn-direita');

const cor = [
    `var(--preto-100)`,
    `var(--bege-200)`
];

let indiceAtual = 0;
function atualizarCarousel() {
    car.style.background = cor[indiceAtual];
}

btnDireita.addEventListener("click", () => {
    indiceAtual++;
    if (indiceAtual >= cor.length) {
        indiceAtual = 0;
    }
    atualizarCarousel();
});

btnEsquerda.addEventListener("click", () => {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = cor.length - 1;
    }
    atualizarCarousel();
});