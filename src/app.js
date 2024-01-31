import express from 'express'

const app = express(); 


app.use(express.json())



const clientes = [
    { id: 1, nome: "Joao Batista"},
    { id: 2, nome: "Erick"}
]


// rota principal
app.get('/', (req, res) => {
res.status(200).send("Api-clientes");
})

// rota cliente (consultar todos os clientes)


app.get("/clientes", (req, res) => {
res.status(200).json(clientes);
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














function consultarId(idCliente) {
    var index =  clientes.findIndex((cliente) => cliente.id === Number(idCliente)); 
    return index
}