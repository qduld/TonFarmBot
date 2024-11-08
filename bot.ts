// 现在，你已经确定了将如何处理信息，可以开始运行你的 bot。
// 这将连接到 Telegram 服务器并等待消息。

import { Bot } from "grammy";

const bot = new Bot("7360724156:AAGeBGUrfDuRRYTkL-G4ZWKmi3rIKWH05VU"); // <-- 替换为你的 bot token

const GAME_SHORT_NAME = "menghuan"; // 游戏的短名称
const GAME_URL = "http://3.25.96.209/farm/"; // Web App 的 URL

// 处理 /start 命令，启动游戏
// 处理 /start 命令，启动游戏并带有按钮
bot.command("start", async (ctx) => {
  await ctx.reply("欢迎来到游戏！点击下面的按钮开始游戏。", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "开始游戏",
            web_app: {
              url: GAME_URL, // 当按钮被点击时打开的 Web App URL
            },
          },
        ],
      ],
    },
  });
});

// 处理其他消息
bot.on("message", (ctx) => ctx.reply("Got another message!"));

// 处理游戏回调查询
bot.on("callback_query:game_short_name", async (ctx) => {
  console.log("Received callback query:", ctx.callbackQuery.game_short_name);
  if (ctx.callbackQuery.game_short_name === GAME_SHORT_NAME) {
    // 当回调查询的游戏名称匹配时，打开 Web App URL
    await ctx.answerCallbackQuery({ url: GAME_URL });
  }
});

// bot.command(
//   "start",
//   async (ctx) =>
//     await ctx.reply(
//       '<b>Hi!</b> <i>Welcome</i> to <a href="http://3.25.238.255/farm/">grammY</a>.',
//       { parse_mode: "HTML" }
//     )
// );

// 启动 bot，等待消息和回调查询
bot.start();
