export const getPrivateLink = async (buttonText, accountUrl) => {
    return {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: `${buttonText}`, url: accountUrl }]
            ]
        })
    };
};