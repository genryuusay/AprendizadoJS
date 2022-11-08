/*
José Henrique tem 29 aos, pesa 140 kg
tem 1.87 de altura e seu IMC é de 40.0354
José Henrique nasceu em 1993
*/ 

const nome= 'José Henrique';
const  sobrenome= 'Jesus';
const idade= 29;
const peso = 140;
const alturaEmM= 1.87;
let imc;
let anoNascimento;

imc = peso / (alturaEmM*alturaEmM);
anoNascimento = 2022 - idade;

/*//forma antiga
console.log(nome, sobrenome,'tem', idade, 'anos, pesa',peso,'kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de ',imc);
console.log(nome, 'nasceu em ',anoNascimento);
*/ 

//JS
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);