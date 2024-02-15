import { Response } from "express";
import { AuthorisedRequest } from "../conversations/getConversations.js";
declare const addPage: (req: AuthorisedRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export default addPage;
