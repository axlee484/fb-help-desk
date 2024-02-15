import { Router } from "express";

import getConversationById from "../controllers/conversations/getConverationById.js";
import getAllConversations from "../controllers/conversations/getConversations.js";
import requireLogin from "../middleware/requireLogin.js";

const conversationRoute = Router();
conversationRoute.get("/conversation", requireLogin, getAllConversations);
conversationRoute.get("/conversation/:id", requireLogin, getConversationById);
export default conversationRoute;
