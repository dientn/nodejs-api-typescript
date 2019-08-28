// import 'require-context/register';
import * as dotEnv from "dotenv";

dotEnv.config();

import app from './bootstrap/app';

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});

export default app;
