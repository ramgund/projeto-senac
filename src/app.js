import express from 'express'

import dbConexao from './dbconfig/dbConnect.js';

import cliente from './models/Clientes.js';

const conexao = await dbConexao(); 

conexao.on("error", (erro) => {
console.error("Erro na conexao!", erro)
});


conexao.once("open", () => {
    console.log("Conexao efetuada!")
})

const app = express(); 


app.use(express.json())




// rota principal
app.get('/', (req, res) => {
res.status(200).send("Api-clientes");
})

// rota cliente (consultar todos os clientes)


app.get("/clientes", async (req, res) => {

const listarClientes = await cliente.find({})

    res.status(200).json(listarClientes);
})

// cadastrar novo cliente

app.post("/clientes", (req, res) => {
    clientes.push(req.body)
    res.status(201).send("Clientes cadastrados com sucesso")
})

// consultar cliente pelo id 

app.get("/clientes/:id", (req, res) => {
    const index = consultarId(req.params.id);
    res.status(200).json(clientes[index])
});

// atualizar cadastro 

app.put("/clientes/:id", (req, res) => {
    const index = consultarId(req.params.id);
clientes[index].nome = req.body.nome;
res.status(200).json(clientes)
})

// excluir cliente 

app.delete("/clientes/:id", (req, res) => {
    const index = consultarId(req.params.id);    
  clientes.splice(index, 1);
  res.status(200).send("Cadastro excluido com sucesso!")

})







export default app; 


