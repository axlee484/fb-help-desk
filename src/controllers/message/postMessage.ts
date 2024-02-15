import { Response } from "express";
import { AuthorisedRequest } from "../conversations/getConversations.js";
import prisma from "../../utils/prisma.js";

export type postMessageBody = {
  conversationId: number;
  content: string;
  sentBy: "AGENT" | "CUSTOMER";
};
const postMessage = async (req: AuthorisedRequest, res: Response) => {
  try {
    const { user } = req;
    if (!user) throw new Error("Unauthorized");
    const { conversationId, content, sentBy } = req.body as postMessageBody;
    await prisma.message.create({
      data: {
        content,
        sentBy,
        conversation: {
          connect: {
            id: conversationId,
          },
        },
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
export default postMessage;
