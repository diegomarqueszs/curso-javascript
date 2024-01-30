const alunos = [ 'Diego' , 'Jorge', 'Lucas'];
console.log(alunos);
//posição indevida não é reportada
console.log(alunos[3]);
alunos[9] = 'Eduardo';
//console.log(alunos[9], alunos.length, alunos);

//adicionar elementos
//alunos.push('Nome'); //add elemento no final
//alunos.pop(); //retorna elemento e remove

//alunos.unshift('Diego'); //adiciona elemento no começo
//console.log(alunos[9], alunos.length, alunos);

//alunos.shift(); //remove elemento começo
delete alunos[2];
console.log(alunos[9], alunos.length, alunos);

console.log(alunos.slice(0, -2));
console.log(alunos instanceof Array);