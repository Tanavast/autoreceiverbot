export const getAdminMenu = async () => {
    return {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: `✉️ Отправить сообщение`, callback_data: 'send_message' }],
                [{ text: `↩️ Закрыть`, callback_data: 'exit' }]
            ]
        })
    };
};