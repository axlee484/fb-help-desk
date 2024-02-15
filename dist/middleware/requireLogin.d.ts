import { NextFunction, Response } from "express";
import { AuthorisedRequest } from "../controllers/conversations/getConversations.js";
declare const requireLogin: (req: AuthorisedRequest, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export default requireLogin;
