import {Request, Response } from "express";
import { CreateTagService } from "../service/CreateTagService";

class CreateTagController {

  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const tag = await new CreateTagService()
              .execute(name);
    return res.json(tag);
  }

}

export { CreateTagController }