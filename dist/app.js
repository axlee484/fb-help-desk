import express from "express";
import env from "./utils/env.js";
import userRoute from "./routes/user.js";
import conversationRoute from "./routes/conversation.js";
import messageRoute from "./routes/message.js";
const app = express();
const PORT = env.PORT;
app.use(express.json());
app.listen(PORT, () => console.log("Server started at http://localhost:" + PORT));
app.use(userRoute);
app.use(conversationRoute);
app.use(messageRoute);
app.set("view engine", "ejs");
app.use(express.static("views"));
//# sourceMappingURL=app.js.map