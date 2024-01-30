/**
Adição  e concatenação `+`
Potenciação `**`
Resto da divisão `%`

> Operadores possuem preferência.
> 1º ( )
> 2º **
> 3º * / %
> 4º + -

 */

let contador = 1;
//imprime primeiro depois soma
console.log(contador++);
//soma primeiro depois imprime
console.log(++contador);

contador+=1; // contador = contador + 1;
console.log(contador);
contador*=2; // contador = contador + 1;
console.log(contador);
contador**=2 //contador = contador ^2 
console.log(contador);

//NaN = Not a number
const num1 = 10;
const num2 = '5';
//Js tenta corrigir
console.log(num1*num2); // resultado 50
console.log(num1+num2); //resultado 105


