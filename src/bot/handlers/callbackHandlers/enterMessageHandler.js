import getUser from '../../../services/users/getUser.js'
import resetState from '../../../utils/resetState.js'

export default async function handleEnterMessage(ctx) {
    await resetState(ctx)
    const validUser = await getUser(ctx.update.callback_query.from.id)
    if (validUser.is_admin) {
        ctx.session.awaitingMessage = true
        return ctx.reply('Type the message:')
    }
    return ctx.reply(`You don't have permission to send messsages`)
}