let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio.";

function botaoConsole(){
    console.log ("o botao foi clicado");
}

function botaoAlert(){
    alert("Eu amo JS");
}

function botaoPrompt(){
    let cidade = prompt("Nome de uma cidade no Brasil");
    alert(`Eu ja estivem em ${cidade} e lembrei de você`);
}

function botaoSoma(){
    let numero1 = parseInt(prompt ("Digite um numero"));
    let numero2 = parseInt(prompt ("Digite outro numero"));
    let resultado = (numero1 + numero2);
    alert (`A soma dos numeros ${numero1} + ${numero2} é igual a ${resultado}`);
}

