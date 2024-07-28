"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const ErrorMiddleware_1 = require("./middlewares/ErrorMiddleware");
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
dotenv_1.default.config();
// console.log(process.env.MONGODB_URI);
(0, db_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Default
app.get("/api", (req, res) => {
    res.status(201).json({ message: "Welcome to Auth ts" });
});
// User Route
app.use("/api/auth", UserRoutes_1.default);
// Middleware
app.use(ErrorMiddleware_1.notFound);
app.use(ErrorMiddleware_1.errorHandler);
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
