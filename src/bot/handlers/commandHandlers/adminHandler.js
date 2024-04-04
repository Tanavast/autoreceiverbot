import { getAdminMenu } from '../../entities/getAdminMenu.js'
import getUser from '../../../services/users/getUser.js'
import resetState from '../../../utils/resetState.js'

export default async function adminHandler(ctx) {
    await resetState(ctx)
    const user = await getUser(ctx.update.message.from.id);
    if (user.is_admin) {
        return ctx.reply(`Выберите действие:`, await getAdminMenu(ctx))
    }
    return ctx.reply(`You don't have admin permission`)
}