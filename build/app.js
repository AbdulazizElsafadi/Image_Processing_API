"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageRouter_1 = __importDefault(require("./routes/imageRouter"));
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.redirect("/image");
});
app.use("/image", imageRouter_1.default);
app.get("/health/live", function (req, res) {
    res.send("OK");
});
app.listen(3000, function () {
    console.log("listening on PORT 3000");
});
exports.default = app;
