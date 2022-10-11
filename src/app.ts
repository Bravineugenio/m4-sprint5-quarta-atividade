import express from "express";
import routes from "./routes"; // Linha modificada

const app = express();

app.use(express.json());

app.use(routes); // Linha modificada

export default app;
        