import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import routes from "./routes";

const NODE_ENV = process.env.NODE_ENV;

dotenv.config({ path: `config/.${NODE_ENV}.env` });

const { PORT, DB_USER, DB_PASSWORD } = process.env;

const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.culqu.mongodb.net/${DB_USER}`;

const DB_CONNECTION_CONFIG = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true };

// conexão com o banco de dados mongoose
mongoose.connect(DB_URL, DB_CONNECTION_CONFIG).then(() => {
    console.log(`MONGODB > Conectado ao banco: ${DB_URL}`);
});

const server = express();

server.use(cors());
server.use(express.json());

server.use(routes);

server.listen(PORT, () => {
    console.log(`EXPRESS > Servidor rodando na porta: http://localhost:${PORT}`);
});
