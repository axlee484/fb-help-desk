import { Response } from "express";
import { AuthorisedRequest } from "../conversations/getConversations.js";
export type postMessageBody = {
    conversationId: number;
    content: string;
    sentBy: "AGENT" | "CUSTOMER";
};
declare const postMessage: (req: AuthorisedRequest, res: Response) => Promise<void>;
export default postMessage;
