declare const env: Readonly<{
    DATABASE_URL: string;
    PORT: number;
    SECRET: string;
    FB_ACCESS_TOKEN: string;
    FB_PAGE_ID: string;
} & import("envalid").CleanedEnvAccessors>;
export default env;
