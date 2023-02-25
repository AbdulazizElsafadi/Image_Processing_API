"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    const { fileName, width, height } = req.query;
    // console.log("fileName:", fileName);
    // console.log("width:", width);
    // console.log("height:", height);
    // res.send(
    //   `The fileName is ${req.query.fileName}, width: ${req.query.width} and height: ${req.query.height}`
    // );
    // encenadaport
    (0, sharp_1.default)(`../assets/images/encenadaport.jpg`)
        .resize(parseInt(width), parseInt(height))
        .toFile(`../assets/thumb/${fileName}.jpg`);
    // .then((data) => console.log("data:", data))
    // .catch((err) => console.log("err:", err));
});
exports.default = router;
