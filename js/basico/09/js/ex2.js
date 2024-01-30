let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let aux = varA; //A
varA = varB; // B B C
varB = varC; // B C C
varC = aux; // B C A

console.log(varA, varB, varC);

//Em javascript é possível fazer:
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC)