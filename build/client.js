"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const socket = (0, socket_io_client_1.default)("http://localhost:3000");
class BasicClient {
    initializeListeners = () => {
        socket.on("data", (data) => {
            console.log(data.message);
        });
    };
}
const basic_client = new BasicClient();
exports.default = basic_client;
