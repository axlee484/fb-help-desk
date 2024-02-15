import { NextFunction, Response } from "express";
import {
  AuthorisedRequest,
  User,
} from "../controllers/conversations/getConversations.js";
import getUserFromToken from "./getUserFromToken.js";

const requireLogin = async (
  req: AuthorisedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(403).json({ message: "Unauthorized" });
    const user = getUserFromToken(token) as User;
    req.user = user;
    return next();
  } catch (err) {
    return res.status(403).json({ message: "Unauthorized" });
  }
};

export default requireLogin;
