let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
let temp;

temp = varA;
varA = varB;
varB = varC;
varC = temp;


console.log(varA,varB,varC);