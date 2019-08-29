import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression
} from "./common";

// import { handleAPIDocs } from "./apiDocs";
import { handleRouter } from "./router";

export default [
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    handleRouter
];
