let peso = parseFloat(prompt("Qual seu peso?"));
let altura = parseFloat(prompt("Qual sua altura?"));
let imc;
function calcularIMC(parPeso, parAltura) {
     return parPeso/(parAltura * parAltura);
}

calcularIMC(peso, altura);
alert(`O imc é ${imc.toFixed(2)}`);
