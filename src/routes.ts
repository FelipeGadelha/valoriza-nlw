import { Router } from "express";
import { CreateTagController } from "./controller/CreateTagController";
import { CreateUserController } from "./controller/CreateUserController";
import { ensureAdmin } from "./middleware/ensureAdmin";

const router = Router();

router.post("/users", new CreateUserController().handle)

router.post("/tags", ensureAdmin, new CreateTagController().handle)

export { router }