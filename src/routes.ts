import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateComplimentController } from "./controller/CreateComplimentController";
import { CreateTagController } from "./controller/CreateTagController";
import { CreateUserController } from "./controller/CreateUserController";
import { ListTagController } from "./controller/ListTagController";
import { ListuserController } from "./controller/ListUserController";
import { ListUserReceiveComplimentsController } from "./controller/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controller/ListUserSendComplimentsController";
import { ensureAdmin } from "./middleware/ensureAdmin";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/login", new AuthenticateUserController().handle);
router.post("/users", new CreateUserController().handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, new CreateTagController().handle);
router.post("/compliments", ensureAuthenticated, new CreateComplimentController().handle);
router.get("/tags", ensureAuthenticated, new ListTagController().handle)
router.get("/users", ensureAuthenticated, new ListuserController().handle)
router.get("/users/compliments/send", 
      ensureAuthenticated, 
      new ListUserSendComplimentsController().handle);
router.get("/users/compliments/receive", 
      ensureAuthenticated, 
      new ListUserReceiveComplimentsController().handle);

export { router };