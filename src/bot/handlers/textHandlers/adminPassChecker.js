import checkAdminPass from '../../../services/checkAdminPass.js'
import setUserAdmin from '../../../services/users/setUserAdmin.js'

export default async function adminPassChecker(ctx) {
    const isAdminPass = await checkAdminPass(ctx.message.text);
    if (isAdminPass) {
        try {
            await setUserAdmin(ctx.message.from.id)
            ctx.session.awaitingAdminPass = false;
            return ctx.reply(`Aвторизация успешна!\n\nИспользуй команду /admin, чтобы войти в админку.`)
        }
        catch (err) {
            return ctx.reply(err)
        }
    } else {
        return ctx.reply(`Incorrect password. Try again`)
    }
}