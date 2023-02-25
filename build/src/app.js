"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dirname = void 0;
const express_1 = __importDefault(require("express"));
const imageRouter_1 = __importDefault(require("./routes/imageRouter"));
const app = (0, express_1.default)();
// console.log("_dirname:", __dirname);
// express.static(path.join(__dirname, "/assets"));
exports.dirname = __dirname;
app.get("/", (req, res) => {
    res.redirect("/image");
});
app.use("/image", imageRouter_1.default);
app.listen(3000, () => {
    console.log("listening on PORT 3000");
});
exports.default = app;
