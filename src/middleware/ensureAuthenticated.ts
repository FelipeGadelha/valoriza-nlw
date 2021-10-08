import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if(!authToken){ return res.status(401).json({message: "Token missing"}) }

  // const token = authToken.substring(7);
  const [,token] = authToken.split(" ");
  try {
    const { sub } = verify(token, "d1968d518bdf846cc5f874179c24ddf9") as IPayload;
    req.user_id = sub;
    return next();

  } catch(err) {
    return res.status(401).end();
  }
}