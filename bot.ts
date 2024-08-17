import { Bot } from "grammy";

const bot = new Bot("7360724156:AAGeBGUrfDuRRYTkL-G4ZWKmi3rIKWH05VU"); // <-- 把你的 bot token 放在 "" 之间

// 你现在可以在你的 bot 对象 `bot` 上注册监听器。
// 当用户向你的 bot 发送消息时，grammY 将调用已注册的监听器。

const GAME_SHORT_NAME = "menghuan";

// 处理 /start 命令。
bot.command("start", async (ctx) => await ctx.replyWithGame(GAME_SHORT_NAME));
// 处理其他的消息。
bot.on("message", (ctx) => ctx.reply("Got another message!"));

const GAME_URL = "http://3.25.238.255/farm/";
bot.on("callback_query:game_short_name", async (ctx) => {
  console.log(
    "ctx.callbackQuery.game_short_name = ",
    ctx.callbackQuery.game_short_name
  );
  if (ctx.callbackQuery.game_short_name === GAME_SHORT_NAME) {
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

// 现在，你已经确定了将如何处理信息，可以开始运行你的 bot。
// 这将连接到 Telegram 服务器并等待消息。

// 启动 bot。
bot.start();
