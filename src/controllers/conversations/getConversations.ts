import { Request, Response } from "express";
import prisma from "../../utils/prisma.js";

export type User = {
  id: number;
  email: string;
  page: string;
};
export interface AuthorisedRequest extends Request {
  user?: User;
}

const getAllConversations = async (req: AuthorisedRequest, res: Response) => {
  try {
    const { user } = req;
    if (!user) throw new Error("Unauthorized");
    const conversations = await prisma.conversation.findMany({
      where: {
        userId: user.id,
      },
    });
    res.status(200).json(conversations);
    console.log(conversations);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message });
  }
};
export default getAllConversations;
