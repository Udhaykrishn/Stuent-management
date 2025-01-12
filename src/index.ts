import express, { Application, Request, Response } from "express"

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
    res.send('Welcome to express and typescript')
})

app.listen(PORT, () => console.log("Server started"))