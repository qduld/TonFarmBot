import { Bot, InlineKeyboard } from "grammy";

const bot = new Bot("7360724156:AAGeBGUrfDuRRYTkL-G4ZWKmi3rIKWH05VU"); // 替换为你的 bot token

const GAME_SHORT_NAME = "menghuan"; // 游戏的短名称
const GAME_URL = "http://3.25.96.209/farm/"; // Web App 的 URL

// 处理 /start 命令，启动游戏并带有按钮
bot.command("start", async (ctx) => {
  console.log("Received /start command");
  try {
    // 使用 callback_data 创建按钮
    const keyboard = new InlineKeyboard().webApp("开始游戏", GAME_URL);
    console.log("Sending reply with button");
    await ctx.reply("欢迎使用游戏！点击下面的按钮开始游戏。", {
      reply_markup: keyboard,
    });
    console.log("Reply sent to user");
  } catch (error) {
    console.error("Error handling /start command:", error);
  }
});

// 处理 callback_query 以在 Telegram 中打开 Web App
bot.on("callback_query:data", async (ctx) => {
  const callbackData = ctx.callbackQuery.data;

  if (callbackData === GAME_SHORT_NAME) {
    console.log("Received callback query for game:", callbackData);
    // 使用 answerCallbackQuery 打开 Web App URL
    await ctx.answerCallbackQuery({
      url: GAME_URL,
    });
  }
});

bot.command("help", async (ctx) => {
  console.log("Received /help command");
  await ctx.reply("帮助信息：你可以使用 /start 来开始游戏");
});

// 处理其他消息
bot.on("message", (ctx) => ctx.reply("Got another message!"));

// 启动 bot，等待消息和回调查询
bot.start();
