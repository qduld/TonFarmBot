"use strict";
// import { Bot, InlineKeyboard } from "grammy";
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
// const bot = new Bot("7360724156:AAGeBGUrfDuRRYTkL-G4ZWKmi3rIKWH05VU"); // <-- 替换为你的 bot token
// const GAME_SHORT_NAME = "menghuan"; // 游戏的短名称
// const GAME_URL = "http://3.25.96.209/farm/"; // Web App 的 URL
// // 处理 /start 命令，启动游戏并带有按钮
// // bot.command("start", async (ctx) => {
// //   console.log("Received /start command");
// //   try {
// //     const keyboard = new InlineKeyboard().text("开始游戏", GAME_URL);
// //     console.log("Sending reply with button");
// //     await ctx.reply("欢迎使用游戏！点击下面的按钮开始游戏。", {
// //       reply_markup: keyboard,
// //     });
// //     console.log("Reply sent to user");
// //   } catch (error) {
// //     console.error("Error handling /start command:", error);
// //   }
// // });
// bot.command("start", async (ctx) => {
//   console.log("Received /start command");
//   try {
//     await ctx.replyWithGame(GAME_SHORT_NAME);
//     console.log("Game reply sent");
//   } catch (error) {
//     console.error("Error sending game:", error);
//   }
// });
// // 处理游戏回调查询
// bot.on("callback_query", async (ctx) => {
//   const callbackData = ctx.callbackQuery.data;
//   if (callbackData === GAME_SHORT_NAME) {
//     console.log("Received callback query for game:", callbackData);
//     // 通过回调查询打开 Web App
//     await ctx.answerCallbackQuery({ url: GAME_URL });
//   }
// });
// bot.command("help", async (ctx) => {
//   console.log("Received /help command");
//   await ctx.reply("帮助信息：你可以使用 /start 来开始游戏");
// });
// // 处理其他消息
// bot.on("message", (ctx) => ctx.reply("Got another message!"));
// // 启动 bot，等待消息和回调查询
// bot.start();
const grammy_1 = require("grammy");
const bot = new grammy_1.Bot("7360724156:AAGeBGUrfDuRRYTkL-G4ZWKmi3rIKWH05VU"); // <-- 把你的 bot token 放在 "" 之间
// 你现在可以在你的 bot 对象 `bot` 上注册监听器。
// 当用户向你的 bot 发送消息时，grammY 将调用已注册的监听器。
const GAME_SHORT_NAME = "menghuan";
const GAME_URL = "http://3.25.96.209/farm/";
// 处理 /start 命令。
// bot.command("start", async (ctx) => await ctx.replyWithGame(GAME_SHORT_NAME));
bot.command("start", (ctx) => {
    ctx.reply("Click the button below to play the game:", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Play Game",
                        web_app: { url: GAME_URL },
                    },
                ],
            ],
        },
    });
});
// 处理其他的消息。
bot.on("message", (ctx) => ctx.reply("Got another message!"));
bot.on("callback_query:game_short_name", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("ctx.callbackQuery.game_short_name = ", ctx.callbackQuery.game_short_name);
    if (ctx.callbackQuery.game_short_name === GAME_SHORT_NAME) {
        // await ctx.reply(`${ctx?.from?.id}ddddddd`);
        yield ctx.answerCallbackQuery({ url: GAME_URL });
    }
}));
bot.command("help", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log("Received /help command");
    yield ctx.reply(`${(_a = ctx === null || ctx === void 0 ? void 0 : ctx.from) === null || _a === void 0 ? void 0 : _a.id}ddddddd`);
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
