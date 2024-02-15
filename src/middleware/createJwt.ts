import jwt from "jsonwebtoken";
import env from "../utils/env.js";
const createJwt = (email: string, id: number) => {
  return jwt.sign({ id, email }, env.SECRET);
};

export default createJwt;
