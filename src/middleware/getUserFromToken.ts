import jwt from "jsonwebtoken";
import env from "../utils/env.js";

const getUserFromToken = (token: string) => {
  try {
    return jwt.verify(token, env.SECRET);
  } catch (err) {
    throw Error("Unauthorized");
  }
};

export default getUserFromToken;
