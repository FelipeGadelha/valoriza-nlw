import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest){
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ email });

    if(!user) { throw new Error("Email/Password incorrect") }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) { throw new Error("Email/Password incorrect") }

    const token = sign( 
      { email: user.email }, 
      "d1968d518bdf846cc5f874179c24ddf9", 
      { subject: user.id, expiresIn: "1d" }
    );
    return token;
  }

}

export { AuthenticateUserService };