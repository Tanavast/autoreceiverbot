import getUser from '../../../services/users/getUser.js'
import addNewUser from '../../../services/users/addNewUser.js'
import resetState from '../../../utils/resetState.js'
import { getPrivateLink } from '../../entities/getPrivateLink.js'


export default async function startHandler(ctx, userInterface, accountUrl) {
    console.log(accountUrl)
    await resetState(ctx)
    const user = ctx.update.message.from;
    try {
        await getUser(user.id) ? console.log('User exist') : await addNewUser(user);
        return ctx.replyWithMarkdownV2(`${userInterface.HELLO_TITLE}\n\n${userInterface.HELLO_FIRST_PARAGRAPH}\n\n${userInterface.HELLO_SECOND_PARAGRAPH}\n\n${userInterface.HELLO_LAST_PARAGRAPH}\n\n`, await getPrivateLink(userInterface.BUTTON_WRITE_TO_ME, accountUrl));
    }
    catch (err) {
        return ctx.reply(`Error: ${err}`)
    }
}