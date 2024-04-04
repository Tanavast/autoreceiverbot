import getUser from '../../../services/users/getUser.js'

export default async function getAdminHandler(ctx) {
    const validUser = await getUser(ctx.message.from.id)
    if (validUser.is_admin) {
        return ctx.reply(`Вы уже авторизированы!\n\nИспользуй команду /admin, чтобы войти в админку.`)
    }
    ctx.session.awaitingAdminPass = true;
    return ctx.reply(`Введите пароль от админки`);
}