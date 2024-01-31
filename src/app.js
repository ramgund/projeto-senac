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











export default app; 