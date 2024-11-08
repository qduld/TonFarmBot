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
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const bot = new grammy_1.Bot("YOUR_BOT_TOKEN_HERE"); // 替换为你的 bot token
const GAME_SHORT_NAME = "menghuan"; // 游戏的短名称
const GAME_URL = "http://3.25.96.209/farm/"; // Web App 的 URL
// 处理 /start 命令，启动游戏并带有按钮
bot.command("start", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Received /start command");
    try {
        // 使用 callback_data 创建按钮
        const keyboard = new grammy_1.InlineKeyboard().text("开始游戏", GAME_SHORT_NAME);
        console.log("Sending reply with button");
        yield ctx.reply("欢迎使用游戏！点击下面的按钮开始游戏。", {
            reply_markup: keyboard,
        });
        console.log("Reply sent to user");
    }
    catch (error) {
        console.error("Error handling /start command:", error);
    }
}));
// 处理 callback_query 以在 Telegram 中打开 Web App
bot.on("callback_query:data", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const callbackData = ctx.callbackQuery.data;
    if (callbackData === GAME_SHORT_NAME) {
        console.log("Received callback query for game:", callbackData);
        // 使用 answerCallbackQuery 打开 Web App URL
        yield ctx.answerCallbackQuery({
            url: GAME_URL,
        });
    }
}));
bot.command("help", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Received /help command");
    yield ctx.reply("帮助信息：你可以使用 /start 来开始游戏");
}));
// 处理其他消息
bot.on("message", (ctx) => ctx.reply("Got another message!"));
// 启动 bot，等待消息和回调查询
bot.start();
