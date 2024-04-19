let a = 5;
let b = 7;
let soma = a + b;
console.log("A soma de a e b é:", soma);

function verificaNumero(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é par.");
    } else {
        console.log(numero + " é ímpar.");
    }
}

verificaNumero(10);
verificaNumero(7);
verificaNumero(12);


let minhaString = "Olá, mundo!";
console.log("Comprimento da string:", minhaString.length);
console.log("String em maiúsculas:", minhaString.toUpperCase());
let palavras = minhaString.split(" ");
console.log("Palavras separadas:");
for (let palavra of palavras) {
    console.log(palavra);
}
