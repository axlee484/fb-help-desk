import { Request, Response } from "express";
import prisma from "../../utils/prisma.js";

type userBody = {
  name: string;
  email: string;
  password: string;
};
const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body as userBody;
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword: password,
      },
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
export default signup;
