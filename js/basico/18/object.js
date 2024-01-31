// const pessoa = {
//     nome: 'Jose',
//     sobrenome: 'Silva',
//     idade: 25
// };

// console.log(pessoa.nome);

function criaPessoa(nome,sobrenome,idade){
    return{ nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Diego', 'Marques', '22');
const pessoa2 = criaPessoa('José', 'Silva', '22');
console.log(pessoa1, pessoa2)