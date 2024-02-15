import { Response } from "express";
import { AuthorisedRequest } from "../conversations/getConversations.js";
import prisma from "../../utils/prisma.js";

const addPage = async (req: AuthorisedRequest, res: Response) => {
  const { user } = req;
  if (!user) return res.status(500).json({ error: "Unauthorized" });
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      page: "www.facebook.com",
    },
  });
  return res.status(200).json({ message: "done" });
};
export default addPage;
