import { Bot, InlineKeyboard } from "grammy";

const bot = new Bot("7360724156:AAGeBGUrfDuRRYTkL-G4ZWKmi3rIKWH05VU"); // 替换为你的 bot token

const GAME_URL = "http://3.25.96.209/farm/"; // Web App 的 URL

// 处理 /start 命令，显示开始游戏按钮
bot.command("start", async (ctx) => {
  console.log("收到 /start 命令");
  try {
    // 使用 web_app 类型的按钮
    const keyboard = new InlineKeyboard().webApp("开始游戏", GAME_URL);
    console.log("发送带有 Web App 按钮的回复");
    await ctx.reply("欢迎使用游戏！点击下面的按钮开始游戏。", {
      reply_markup: keyboard,
    });
    console.log("已发送回复给用户");
  } catch (error) {
    console.error("处理 /start 命令时出错:", error);
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
