//Primitivos [imutáveis] - String, number, boolen, undefined, null (bigint, symbol)
//let a = 'A';
//let b = a; //copia
//console.log(a,b);

//Referência (mutável) = array, object, function
const a = [1 , 2, 3];
let b = a;
console.log(a,b);
a.push(4); //altera ambos valores
console.log(a,b);
b.pop(); //altera ambos valores
console.log(a,b);

//copiar valores do array
let c = [...a];
a.push('Diego');
console.log(a,b,c);

//copiar valores do object
const pessoa1 = {
    nome: 'Diego',
    sobrenome: 'Marques',
};
const pessoa2 = {...pessoa1};
pessoa1.nome = 'João';
console.log(pessoa1, pessoa2);
