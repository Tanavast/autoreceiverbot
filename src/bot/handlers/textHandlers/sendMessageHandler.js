import sendNewMessage from '../sendNewMessageHandler.js'

export default async function sendMessageHandler(ctx) {
    let type;
    let currentMesssage;
    if (ctx.message.text) {
        type = 'text';
        currentMesssage = ctx.message.text;
    } else if (ctx.message.video_note) {
        type = 'video_note';
        currentMesssage = ctx.message.video_note.file_id;
    } else if (ctx.message.photo && !ctx.message.media_group_id) {
        type = 'photo';
        const caption = ctx.message.caption ? ctx.message.caption : null;
        currentMesssage = { photo: ctx.message.photo[0].file_id, caption: caption };
    } else if (ctx.message.video) {
        type = 'video';
        const caption = ctx.message.caption ? ctx.message.caption : null;
        currentMesssage = { video: ctx.message.video.file_id, caption: caption }
    } else if (ctx.message.voice) {
        type = 'voice';
        currentMesssage = ctx.message.voice.file_id
    } else if (ctx.message.animation) {
        type = 'animation';
        const caption = ctx.message.caption ? ctx.message.caption : null;
        currentMesssage = { animation: ctx.message.animation.file_id, caption: caption }
    }

    await sendNewMessage(ctx, type, currentMesssage)
    ctx.session.awaitingMessage = false
}