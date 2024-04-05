
import getUsersList from '../../services/users/getUsersList.js';
import { errorLogger } from '../../utils/errorLogger.js'

export default async function sendNewMessage(ctx, messagetype, message) {
    try {
        const users = await getUsersList();
        await ctx.reply('Message sending initiated...')
        switch (messagetype) {
            case 'text':
                for (const user of users) {
                    if (!user.is_admin) {
                        try {
                            await ctx.telegram.sendMessage(user.id, message);
                        }
                        catch (err) {
                            continue;
                        }
                    }
                }
                break;
            case 'video_note':
                for (const user of users) {
                    if (!user.is_admin) {
                        try {
                            await ctx.telegram.sendVideo(user.id, message);
                        }
                        catch (err) {
                            continue;
                        }
                    }
                }
                break;
            case 'voice':
                for (const user of users) {
                    if (!user.is_admin) {
                        try {
                            await ctx.telegram.sendVoice(user.id, message);
                        }
                        catch (err) {
                            continue;
                        }
                    }
                }
                break;
            case 'video':
                for (const user of users) {
                    if (!user.is_admin) {
                        try {
                            await ctx.telegram.sendVideo(user.id, message.video, { caption: message.caption });
                        }
                        catch (err) {
                            continue;
                        }
                    }
                }
                break;
            case 'photo':
                for (const user of users) {
                    if (!user.is_admin) {
                        try {
                            await ctx.telegram.sendPhoto(user.id, message.photo, { caption: message.caption });
                        }
                        catch (err) {
                            continue;
                        }
                    }
                }
                break;
            case 'animation':
                for (const user of users) {
                    if (!user.is_admin) {
                        try {
                            await ctx.telegram.sendAnimation(user.id, message.animation, { caption: message.caption });
                        }
                        catch (err) {
                            continue;
                        }
                    }
                }
                break;
            default:
                return ctx.reply('Unsupported message format')

        }

        await ctx.reply('✅ Message sending has been successfully completed.')
    }
    catch (err) {
        await ctx.reply(`Error occurred while sending messages: ${err}`)
        errorLogger(`Error occurred while sending messages: ${err}`)
    }
}