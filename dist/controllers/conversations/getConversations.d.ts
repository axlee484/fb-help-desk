import { Request, Response } from "express";
export type User = {
    id: number;
    email: string;
    page: string;
};
export interface AuthorisedRequest extends Request {
    user?: User;
}
declare const getAllConversations: (req: AuthorisedRequest, res: Response) => Promise<void>;
export default getAllConversations;
