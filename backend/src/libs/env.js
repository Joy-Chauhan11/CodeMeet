import dotenv from "dotenv"

dotenv.config({   path: "../.env" });

const ENV= {
    PORT : process.env.PORT,

}

export {ENV}