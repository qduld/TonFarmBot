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
const bot = new grammy_1.Bot("7360724156:AAGeBGUrfDuRRYTkL-G4ZWKmi3rIKWH05VU"); // 替换为你的 bot token
const GAME_SHORT_NAME = "menghuan"; // 游戏的短名称
const GAME_URL = "http://3.25.96.209/farm/"; // Web App 的 URL
// 处理 /start 命令，显示开始游戏按钮
bot.command("start", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("收到 /start 命令");
    try {
        // 创建带有 callback_data 的按钮
        const keyboard = new grammy_1.InlineKeyboard().text("开始游戏", GAME_SHORT_NAME);
        console.log("发送带有按钮的回复");
        yield ctx.reply("欢迎使用游戏！点击下面的按钮开始游戏。", {
            reply_markup: keyboard,
        });
        console.log("已发送回复给用户");
    }
    catch (error) {
        console.error("处理 /start 命令时出错:", error);
    }
}));
// 处理 callback_query 以打开 Web App
bot.on("callback_query:data", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const callbackData = ctx.callbackQuery.data;
    if (callbackData === GAME_SHORT_NAME) {
        console.log("收到游戏的 callback query:", callbackData);
        // 使用 answerCallbackQuery 打开 Web App URL
        yield ctx.answerCallbackQuery({
            url: GAME_URL,
        });
    }
}));
// 处理 /help 命令
bot.command("help", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("收到 /help 命令");
    yield ctx.reply("帮助信息：你可以使用 /start 来开始游戏");
}));
// 处理其他消息
bot.on("message", (ctx) => ctx.reply("收到其他消息！"));
// 启动 bot，等待消息和回调查询
bot.start();
