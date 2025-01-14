import "reflect-metadata"
import { InversifyExpressServer } from "inversify-express-utils"
import express from "express"
import container from "@/config/inversify.config"
import dotenv from "dotenv"
dotenv.config();

const server = new InversifyExpressServer(container)

server.setConfig((app) => {
    app.use(express.json())
})

const app = server.build();

export default app;
