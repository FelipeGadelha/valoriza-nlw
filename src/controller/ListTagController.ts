import { Request, Response } from "express";
import { ListTagService } from "../service/ListTagService";

class ListTagController {
  async handle(req: Request, res: Response) {
    const tags = await new ListTagService().execute();
    return res.json(tags);
  }
}

export { ListTagController };