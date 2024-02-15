import { Router } from "express";
import signup from "../controllers/user/signup.js";
import login from "../controllers/user/login.js";
import requireLogin from "../middleware/requireLogin.js";
import addPage from "../controllers/user/addPage.js";
const userRoute = Router();
userRoute.get("/signup", (_req, res) => res.render("signup"));
userRoute.get("/login", (_req, res) => res.render("login"));
userRoute.get("/integrate", (_req, res) => res.render("integrate"));
userRoute.get("/agent", (_req, res) => res.render("agent"));
userRoute.post("/signup", signup);
userRoute.post("/login", login);
userRoute.post("/integrate", requireLogin, addPage);
export default userRoute;
//# sourceMappingURL=user.js.map