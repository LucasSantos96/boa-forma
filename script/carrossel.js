//Criando a animação do carrossel

// Variável para controlar o slide atual
let count = 1;

// Define o primeiro slide como selecionado ao carregar a página
document.getElementById("radio1").checked = true;

// Define um intervalo para alternar automaticamente entre os slides a cada 3 segundos
setInterval(function() {
    nextImage(); // Chama a função que alterna para o próximo slide
}, 5000);

// Função para alternar para o próximo slide
function nextImage() {
    count++; // Incrementa o contador para ir ao próximo slide

    // Se o contador ultrapassar o número total de slides (4), volta para o primeiro slide
    if (count > 4) {
        count = 1; // Reinicia o contador
    }

    // Marca o input radio correspondente ao slide atual
    document.getElementById("radio" + count).checked = true;
}