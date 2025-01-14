import app from "@/app"
import { connectDB } from "./config";

const PORT = process.env.PORT as string;

const bootstrap = async () => {
    await connectDB();
    app.listen(PORT, () => console.log(`🚀 Server started on ${PORT}`))
}

bootstrap(); 