// Seleciona o botão com o ID 'btn' do HTML
let btn = document.getElementById('btn');

// Seleciona o elemento onde o resultado do IMC será exibido, com o ID 'valor-imc'
let mostraValor = document.getElementById('valor-imc');

// Adiciona um evento de clique ao botão
btn.addEventListener('click', (e) => {
    // Previne o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();

    // Obtém o valor do campo de texto com o ID 'nome'
    let nome = document.getElementById('nome').value;

    // Obtém o valor do campo de texto com o ID 'peso' e o converte para um número decimal
    let peso = parseFloat(document.getElementById('peso').value);

    // Obtém o valor do campo de texto com o ID 'altura', converte para número decimal e divide por 100 para converter de cm para metros
    let altura = parseFloat(document.getElementById('altura').value) / 100;

    // Calcula o IMC usando a fórmula peso / (altura * altura)
    let imc = peso / (altura * altura);

    // Verifica se o IMC é menor que 18.5 (abaixo do peso)
    if (imc < 18.5) {
        // Exibe a mensagem correspondente no elemento 'mostraValor'
        mostraValor.innerText = `Olá ${nome} seu IMC é: ${imc.toFixed(2)} e está abaixo de 18.5, o que indica baixo peso. `;

    // Verifica se o IMC está entre 18.5 e 24.9 (peso normal)
    } else if (imc >= 18.5 && imc < 24.9) {
        // Exibe a mensagem correspondente no elemento 'mostraValor'
        mostraValor.innerText = `Olá ${nome} seu IMC é: ${imc.toFixed(2)} o que indica peso normal. `;

    // Verifica se o IMC está entre 25 e 29.9 (sobrepeso)
    } else if (imc >= 25 && imc < 29.9) {
        // Exibe a mensagem correspondente no elemento 'mostraValor'
        mostraValor.innerText = `Olá ${nome} seu IMC é: ${imc.toFixed(2)} o que indica Sobrepeso. `;

    // Verifica se o IMC está entre 30 e 34.9 (obesidade grau 1)
    } else if (imc >= 30 && imc < 34.9) {
        // Exibe a mensagem correspondente no elemento 'mostraValor'
        mostraValor.innerText = `Olá ${nome} seu IMC é: ${imc.toFixed(2)} o que indica Obesidade grau 1. `;

    // Verifica se o IMC está entre 35 e 39.9 (obesidade grau 2)
    } else if (imc >= 35 && imc < 39.9) {
        // Exibe a mensagem correspondente no elemento 'mostraValor'
        mostraValor.innerText = `Olá ${nome} seu IMC é: ${imc.toFixed(2)} o que indica Obesidade grau 2. `;

    // Verifica se o IMC é maior ou igual a 40 (obesidade grau 3)
    } else if (imc >= 40) {
        // Exibe a mensagem correspondente no elemento 'mostraValor'
        mostraValor.innerText = `Olá ${nome} seu IMC é: ${imc.toFixed(2)} o que indica Obesidade grau 3. `;
    }
});
