import { cleanEnv, port, str, url } from "envalid";
import dotnev from "dotenv";
dotnev.config();
const env = cleanEnv(process.env, {
    DATABASE_URL: url(),
    PORT: port(),
    SECRET: str(),
    FB_ACCESS_TOKEN: str(),
    FB_PAGE_ID: str(),
});
export default env;
//# sourceMappingURL=env.js.map