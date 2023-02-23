"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send("worked successfully");
});
router.get("/?fileName:fileName&width:width&height:height", (req, res) => {
    console.log("req.query:", req.query);
    res.send(`The fileName is ${req.query.fileName}, width: ${req.query.width} and height: ${req.query.height}`);
});
exports.default = router;
