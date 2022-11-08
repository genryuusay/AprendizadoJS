function criaPessoa(nome,sobrenome,idade){
    return {nome,sobrenome,idade}
}

const pessoa1 = criaPessoa('Luiz','Miranda',25);
const pessoa2 = criaPessoa('Maria','Oliveira',32);
const pessoa3 = criaPessoa('João','Moreira',55);
const pessoa4 = criaPessoa('Junior','Lara',44);
const pessoa5 = criaPessoa('Jean','Otávio',69);

console.log(pessoa1.nome,pessoa1.sobrenome);
