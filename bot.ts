import { Bot, InlineKeyboard } from "grammy";

const bot = new Bot("7360724156:AAGeBGUrfDuRRYTkL-G4ZWKmi3rIKWH05VU"); // <-- 替换为你的 bot token

const GAME_SHORT_NAME = "menghuan"; // 游戏的短名称
const GAME_URL = "http://3.25.96.209/farm/"; // Web App 的 URL

// 处理 /start 命令，启动游戏并带有按钮
bot.command("start", async (ctx) => {
  try {
    console.log("Received /start command, sending reply...");
    // 回复一个带有按钮的消息，按钮点击后会打开 Web App
    await ctx.reply("欢迎使用游戏！点击下面的按钮开始游戏。", {
      reply_markup: new InlineKeyboard().text("开始游戏", GAME_URL),
    });
  } catch (error) {
    console.error("Error handling /start command:", error);
  }
});

// 处理游戏回调查询
bot.on("callback_query", async (ctx) => {
  const callbackData = ctx.callbackQuery.data;

  if (callbackData === GAME_SHORT_NAME) {
    console.log("Received callback query for game:", callbackData);
    // 通过回调查询打开 Web App
    await ctx.answerCallbackQuery({ url: GAME_URL });
  }
});

// 处理其他消息
bot.on("message", (ctx) => ctx.reply("Got another message!"));

// 启动 bot，等待消息和回调查询
bot.start();
