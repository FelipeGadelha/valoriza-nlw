import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../service/ListUserSendComplimentsService";


class ListUserSendComplimentsController {

  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const compliments = await new ListUserSendComplimentsService()
                          .execute(user_id);
    return res.json(compliments);
  }
}

export { ListUserSendComplimentsController };