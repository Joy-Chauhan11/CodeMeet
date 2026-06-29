// import dotenv from "dotenv"

// dotenv.config({path: "../../.env",});

// const ENV= {
//     PORT : process.env.PORT,
//     NODE_ENV : process.env.NODE_ENV
// }

// export {ENV}


import dotenv from "dotenv";

const result = dotenv.config();

console.log(result);
console.log(process.env.PORT);

const ENV = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
};

export { ENV };