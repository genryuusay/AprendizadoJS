const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req,res) =>{
    console.log(req.params);
    res.send(req.params);
})

app.post('/',(req,res) => {
    res.send(`O que você me enviou foi: ${req.body.nome}`);
    console.log(req.body);
});

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});