import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import apiRoutes from "../src/routes/apiRoutes";


//--Configurando variaveis de ambiente#
dotenv.config();
//--Criando servidor#
const server = express();
//--Criando filtro de acesso CORS#
server.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT']
}));
//--Requisições com paramentros#
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.urlencoded({extended : true}));
//--Acessando rotas#
server.use(apiRoutes);
//--Tratando rotas invalidas#
server.use((req: Request, res: Response)=>{
    res.status(404);
    res.json({error: "Endpoint not found!"})
});
//--Indicando a porta do servidor#
server.listen(process.env.SERVER_PORT)