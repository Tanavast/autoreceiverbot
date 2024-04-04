import { Telegraf, session } from 'telegraf';
import TelegramBotController from '../bot/TelegramBotController.js';

export default async function telegramService(token) {
    const bot = new Telegraf(token);
    const BotController = new TelegramBotController(telegramService);

    bot.use(session({
        defaultSession: () => ({
            "awaitingAdminPass": false,
            "awaitingMessage": false
        })
    }))

    // BOT command handlers

    bot.start(ctx => {
        return BotController.handleStart(ctx)
    });

    bot.command('getadmin', (ctx) => {
        BotController.handleGetAdmin(ctx)
    });

    bot.command('admin', (ctx) => {
        BotController.handleAdmin(ctx)
    });

    // BOT callbacks and text handlers

    bot.on('callback_query', (ctx) => {
        BotController.handleCallbackQuery(ctx)
    })

    bot.on('message', (ctx) => {
        BotController.handleTextMessage(ctx)
    })

    bot.on('chat_join_request', (ctx) => {
        BotController.handleJoinRequest(ctx)
    });

    bot.telegram.setMyCommands([{ command: 'start', description: 'Get started!' }]);

    bot.launch();

    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))
}