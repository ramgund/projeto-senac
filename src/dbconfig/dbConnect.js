import mongoose, { mongo } from "mongoose";

import "dotenv/config.js"


async function dbConexao () {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    
    return mongoose.connection;
}

export default dbConexao; 