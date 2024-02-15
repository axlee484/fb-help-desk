import { Router } from "express";

import requireLogin from "../middleware/requireLogin.js";
import postMessage from "../controllers/message/postMessage.js";
import env from "../utils/env.js";

const messageRoute = Router();
messageRoute.post("/message/:id", requireLogin, postMessage);

messageRoute.get("/messages", async (_req, res) => {
  try {
    const accessToken = env.FB_ACCESS_TOKEN;

    const response = await fetch(
      `https://graph.facebook.com/v19.0/230284756835471/conversations?access_token=${accessToken}`
    );
    const data = await response.json();
    console.log(data);

    res.json({ messages: "ok" });
  } catch (error) {
    console.error("Error fetching messages from Messenger:", error);
    res.status(500).json({ error: "Failed to fetch messages from Messenger" });
  }
});

export default messageRoute;
