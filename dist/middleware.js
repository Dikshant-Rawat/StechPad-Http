"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = middleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("@repo/backend-common/config");
function middleware(req, res, next) {
    const authHeaders = req.headers.authorization;
    if (!authHeaders || !authHeaders.startsWith("Bearer")) {
        return res.status(411).json({
            "message": "Error in authorization tokens"
        });
    }
    ;
    const token = authHeaders.split(' ')[1] ?? "";
    try {
        //@ts-ignore
        const decoded = jsonwebtoken_1.default.verify(token, config_1.JWT_SECRET);
        req.userId = decoded.userId;
    }
    catch (err) {
        return res.status(403).json({ "message": "error while decoding token" });
    }
    console.log("authentication successfull");
    next();
}
