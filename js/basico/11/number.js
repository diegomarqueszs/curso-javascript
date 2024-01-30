let num1 = 1500.54654;
let num2 = 2.5;

console.log(num1.toString() + num2);
//representacao binaria
console.log(num1.toString(2));
//truncar com quantidade específica
console.log(num1.toFixed(2));
//checar se é inteiro
console.log(Number.isFinite(num1));

let temp = num1 * 'Ola';
//verifica se é algo inválido
console.log(Number.isNaN(temp));

let num3 = 0.7;
let num4 = 0.1;

num3 += 2  * num4;
console.log(num3);