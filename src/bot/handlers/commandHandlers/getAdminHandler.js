import getUser from '../../../services/users/getUser.js'

export default async function getAdminHandler(ctx) {
    const validUser = await getUser(ctx.message.from.id)
    if (validUser.is_admin) {
        return ctx.reply(`You are already authorized!\n\nUse the command /admin to access the admin panel.`)
    }
    ctx.session.awaitingAdminPass = true;
    return ctx.reply(`Enter the password for the admin panel:`);
}