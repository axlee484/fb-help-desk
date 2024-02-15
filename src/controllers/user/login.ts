import { Request, Response } from "express";
import prisma from "../../utils/prisma.js";
import createJwt from "../../middleware/createJwt.js";

type loginBody = {
  email: string;
  password: string;
};
const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as loginBody;
    const user = await prisma.user.findUniqueOrThrow({
      where: { email },
    });
    if (!user) throw new Error(`User not found`);
    if (user.hashedPassword != password) throw new Error(`Wrong password`);
    const token = createJwt(email, user.id);
    res.status(200).json({ token, page: user.page });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message });
  }
};
export default login;
