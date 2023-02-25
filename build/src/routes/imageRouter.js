"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app_1 = require("../app");
const processImage_1 = __importDefault(require("../../utilities/processImage"));
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fileName, width, height } = req.query;
    try {
        yield (0, processImage_1.default)(fileName, parseInt(width), parseInt(height));
        res.sendFile(`${fileName}_${width}_${height}.jpg`, {
            root: path_1.default.join(app_1.dirname, `/assets/thumb/`),
        });
    }
    catch (err) {
        res.send("<h1>There was an error processing your image, Make sure that your image exists</h1>");
    }
}));
exports.default = router;
