import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";

const router = Router();

router.post("/users", new CreateUserController().handle)

export { router }