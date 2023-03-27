//Promises

function rand(min,max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random()* (max - min) + min);
}

function esperaAi(msg,tempo){
  return new Promise((resolve, reject) =>{
    if(typeof msg !== 'string') reejct(false);
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi('Conexão com o BD', rand(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da Base ', rand (1,3));
})
.then (resposta => {
  console.log(resposta);
  return esperaAi('Tratando os dados da Base', rand (1,3));
})
.then(resposta =>{
  console.log(resposta);
})
.then(resposta =>{
  console.log('Exibe dados na tela.');
})
.catch(e =>{
  console.log('Erro', e);
});