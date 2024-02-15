import { Response } from "express";
import { AuthorisedRequest } from "./getConversations.js";
declare const getConversationById: (req: AuthorisedRequest, res: Response) => Promise<void>;
export default getConversationById;
