//funcao ocmum
function saudacao(nome = 'João'){
    console.log(`BOA NOITE ${nome}!`);
}

saudacao('DIEGO');
saudacao();

//funcao anonima
const raiz = function(n){
    return n**0.5;
};

//arrow function
const soma = (n1,n2) => {
    return n1+n2;
};
//arrow function
const raiz2 =n => n ** 0.5;

console.log(soma(5,5));
console.log(raiz(9));
console.log(raiz2(25));