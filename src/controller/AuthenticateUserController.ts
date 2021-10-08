import { Request, Response } from "express";
import { AuthenticateUserService } from "../service/AuthenticateUserService";


class AuthenticateUserController {

  async handle(req: Request, res: Response) {
    const { email, password } = req.body
    
    const token = await new AuthenticateUserService().execute({email, password});
    return res.json(token)
  }
}

export { AuthenticateUserController };