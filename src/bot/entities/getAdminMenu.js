export const getAdminMenu = async () => {
    return {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: `✉️ Send message`, callback_data: 'send_message' }],
                [{ text: `↩️ Close`, callback_data: 'exit' }]
            ]
        })
    };
};