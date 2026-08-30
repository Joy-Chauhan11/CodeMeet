import dotenv from "dotenv";

dotenv.config();


const ENV = {
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV || "development",
    DB_URL: process.env.DB_URL,
    client_url: process.env.client_url,
    CODE_ENGINE_URL: process.env.CODE_ENGINE_URL,
    GROQ_API_KEY: process.env.GROQ_API_KEY,
};

export { ENV };