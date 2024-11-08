import { Bot, InlineKeyboard } from "grammy";

const bot = new Bot("7360724156:AAGeBGUrfDuRRYTkL-G4ZWKmi3rIKWH05VU"); // 替换为你的 bot token

const GAME_SHORT_NAME = "menghuan"; // 游戏的短名称
const GAME_URL = "http://3.25.96.209/farm/"; // Web App 的 URL

// 处理 /start 命令，显示开始游戏按钮
bot.command("start", async (ctx) => {
  console.log("收到 /start 命令");
  try {
    // 创建带有 callback_data 的按钮
    const keyboard = new InlineKeyboard().text("开始游戏", GAME_SHORT_NAME);
    console.log("发送带有按钮的回复");
    await ctx.reply("欢迎使用游戏！点击下面的按钮开始游戏。", {
      reply_markup: keyboard,
    });
    console.log("已发送回复给用户");
  } catch (error) {
    console.error("处理 /start 命令时出错:", error);
  }
});

// 处理 callback_query 以打开 Web App
bot.on("callback_query:data", async (ctx) => {
  const callbackData = ctx.callbackQuery.data;

  if (callbackData === GAME_SHORT_NAME) {
    console.log("收到游戏的 callback query:", callbackData);
    // 使用 answerCallbackQuery 打开 Web App URL
    await ctx.answerCallbackQuery({
      url: GAME_URL,
    });
  }
});

// 处理 /help 命令
bot.command("help", async (ctx) => {
  console.log("收到 /help 命令");
  await ctx.reply("帮助信息：你可以使用 /start 来开始游戏");
});

// 处理其他消息
bot.on("message", (ctx) => ctx.reply("收到其他消息！"));

// 启动 bot，等待消息和回调查询
bot.start();
