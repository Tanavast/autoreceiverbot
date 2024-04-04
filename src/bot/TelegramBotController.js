import { translations } from '../../config/i18n/translations.js';
import { botSettings } from '../../config/config.js'
import adminPassChecker from './handlers/textHandlers/adminPassChecker.js'
import adminHandler from './handlers/commandHandlers/adminHandler.js'
import getAdminHandler from './handlers/commandHandlers/getAdminHandler.js'
import startHandler from './handlers/commandHandlers/startHandler.js'
import handleEnterMessage from './handlers/callbackHandlers/enterMessageHandler.js'
import sendMessageHandler from './handlers/textHandlers/sendMessageHandler.js'
import backHandler from './handlers/callbackHandlers/backHandler.js'


const userInterface = translations[botSettings.lang]; // Current language of Bot 
const accountUrl = botSettings.account;

class TelegramBotController {
    constructor(telegramService) {
        this.telegramService = telegramService.bot;
    }

    // Start command handling
    async handleStart(ctx) {
        await startHandler(ctx, userInterface, accountUrl)
    }

    // GET admin permissions handling
    async handleGetAdmin(ctx) {
        await getAdminHandler(ctx)
    }

    // Admin command handling
    async handleAdmin(ctx) {
        await adminHandler(ctx)
    }

    // Handling callback queries from command buttons
    async handleCallbackQuery(ctx) {
        const callBackQuery = ctx.callbackQuery.data;
        switch (callBackQuery) {
            case 'send_message':
                await handleEnterMessage(ctx)
                break;
            case 'exit':
                await backHandler(ctx)
                break;
        }
    }

    async handleJoinRequest(ctx) {
        console.log(ctx.chat.id, ctx.from.id)
        await ctx.telegram.sendMessage(ctx.from.id, `${userInterface.PREVIEW_TITLE}\n${userInterface.PREVIEW_FIRST_PARAGRAPH}\n\n${userInterface.PREVIEW_LAST_PARAGRAPH}`)
        await ctx.telegram.approveChatJoinRequest(ctx.chat.id, ctx.from.id)
    }

    // Handle text messages from user/admins
    async handleTextMessage(ctx) {
        // ADMIN login handling
        if (ctx.session.awaitingAdminPass) {
            await adminPassChecker(ctx)
        }
        // SEND MESSAGE handling
        if (ctx.session.awaitingMessage) {
            await sendMessageHandler(ctx)
        }
        if (ctx.message.from.is_bot) {
            // Handle the message from the redirected user
            // This could involve providing instructions, processing commands, etc.
            ctx.reply('Welcome! You have been redirected from the channel. How can I assist you?');
        }
    }
}

export default TelegramBotController