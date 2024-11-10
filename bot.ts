// import { Bot, InlineKeyboard } from "grammy";

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

import { Bot } from "grammy";

const bot = new Bot("7360724156:AAGeBGUrfDuRRYTkL-G4ZWKmi3rIKWH05VU"); // <-- 把你的 bot token 放在 "" 之间

// 你现在可以在你的 bot 对象 `bot` 上注册监听器。
// 当用户向你的 bot 发送消息时，grammY 将调用已注册的监听器。

const GAME_SHORT_NAME = "menghuan";

// 处理 /start 命令。
bot.command("start", async (ctx) => await ctx.replyWithGame(GAME_SHORT_NAME));
// 处理其他的消息。
bot.on("message", (ctx) => ctx.reply("Got another message!"));

const GAME_URL = "http://3.25.96.209/farm/";
bot.on("callback_query:game_short_name", async (ctx) => {
  console.log(
    "ctx.callbackQuery.game_short_name = ",
    ctx.callbackQuery.game_short_name
  );
  if (ctx.callbackQuery.game_short_name === GAME_SHORT_NAME) {
    // await ctx.reply(`${ctx?.from?.id}ddddddd`);
    await ctx.answerCallbackQuery({ url: GAME_URL });
  }
});

bot.command("help", async (ctx) => {
  console.log("Received /help command");
  await ctx.reply(`${ctx?.from?.id}ddddddd`);
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
