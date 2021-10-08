import { Request, Response } from "express";
import { ListUserService } from "../service/ListUserService";

class ListuserController{
  async handle(req: Request, res: Response) {
    const users = await new ListUserService().execute();
    return res.json(users);
  }
}
export { ListuserController };