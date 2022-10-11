
// src/routes.ts
import { Router } from "express";
import userCreateController from "./controllers/userCreate.controller";
import userListController from "./controllers/userList.controller"; // Linha modificada

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users", userListController); // Linha modificada

export default routes;
        