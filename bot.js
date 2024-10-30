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
const bot = new grammy_1.Bot("7360724156:AAGeBGUrfDuRRYTkL-G4ZWKmi3rIKWH05VU"); // <-- 把你的 bot token 放在 "" 之间
// 你现在可以在你的 bot 对象 `bot` 上注册监听器。
// 当用户向你的 bot 发送消息时，grammY 将调用已注册的监听器。
const GAME_SHORT_NAME = "menghuan";
// 处理 /start 命令。
bot.command("start", (ctx) => __awaiter(void 0, void 0, void 0, function* () { return yield ctx.replyWithGame(GAME_SHORT_NAME); }));
// 处理其他的消息。
bot.on("message", (ctx) => ctx.reply("Got another message!"));
const GAME_URL = "http://3.25.96.209/farm/";
bot.on("callback_query:game_short_name", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("ctx.callbackQuery.game_short_name = ", ctx.callbackQuery.game_short_name);
    if (ctx.callbackQuery.game_short_name === GAME_SHORT_NAME) {
        yield ctx.answerCallbackQuery({ url: GAME_URL });
    }
}));
// bot.command(
//   "start",
//   async (ctx) =>
//     await ctx.reply(
//       '<b>Hi!</b> <i>Welcome</i> to <a href="http://3.25.238.255/farm/">grammY</a>.',
//       { parse_mode: "HTML" }
//     )
// );
// 现在，你已经确定了将如何处理信息，可以开始运行你的 bot。
// 这将连接到 Telegram 服务器并等待消息。
// 启动 bot。
bot.start();
