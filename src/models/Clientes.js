import mongoose, { mongo } from "mongoose";

const clientesSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId}, 
    nome: {type: String, required: true}, 
    email: {type: String, required: true}
}, {versionKey: false}); 


const cliente = mongoose.model("clientes", clientesSchema)

export default cliente;