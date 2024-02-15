import jwt from "jsonwebtoken";
import env from "../utils/env.js";
const createJwt = (email, id) => {
    return jwt.sign({ id, email }, env.SECRET);
};
export default createJwt;
//# sourceMappingURL=createJwt.js.map