const pessoas = [
{nome: 'Luiz', idade: 62},
{nome: 'Maria', idade: 23},
{nome: 'Eduardo', idade: 55},
{nome: 'letícia', idade: 19},
{nome: 'Rosana', idade: 32},
{nome: 'Wallace', idade: 47},
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDe50Anos =  pessoas.filter(obj => obj.idade > 50);
const pessoasQueTerminamCOmA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDe50Anos);
console.log(pessoasQueTerminamCOmA);
