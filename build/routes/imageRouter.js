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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var isFileExist_1 = __importDefault(require("../utilities/isFileExist"));
var processImage_1 = __importDefault(require("../utilities/processImage"));
var router = express_1.default.Router();
router.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, fileName, width, height, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.query, fileName = _a.fileName, width = _a.width, height = _a.height;
                // console.log("fileName:", fileName);
                // console.log("width:", width);
                // console.log("height:", height);
                if (!fileName || !width || !height) {
                    res.send("<h1>Either the fileName or the width or the height is missing,<br/> please insure to provide all needed data</h1>");
                    return [2 /*return*/];
                }
                if (!parseInt(width) || !parseInt(height)) {
                    res.send("<h1>Width and Height must be numbers!</h1>");
                    return [2 /*return*/];
                }
                if (parseInt(width) <= 0 || parseInt(height) <= 0) {
                    res.send("<h1>width and height must be bigger than zero</h1>");
                    return [2 /*return*/];
                }
                if (!(0, isFileExist_1.default)(fileName, parseInt(width), parseInt(height))) return [3 /*break*/, 1];
                // console.log("Existing File is sent");
                res.sendFile("".concat(fileName, "_").concat(width, "_").concat(height, ".jpg"), {
                    root: path_1.default.join(__dirname, "../../assets/thumb/"),
                });
                return [2 /*return*/];
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, processImage_1.default)(fileName, parseInt(width), parseInt(height))];
            case 2:
                _b.sent();
                // console.log("New File is created");
                res.sendFile("".concat(fileName, "_").concat(width, "_").concat(height, ".jpg"), {
                    root: path_1.default.join(__dirname, "../../assets/thumb/"),
                });
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                // console.log("err:", err);
                res.send("<h1>Your File doesn't exist!! Make sure you included the right file</h1>");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
