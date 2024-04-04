import resetState from '../../../utils/resetState.js'
import { errorLogger } from '../../../utils/errorLogger.js'

export default async function backHandler(ctx) {
    try {
        await ctx.deleteMessage();
        await resetState(ctx);
    }
    catch (err) {
        errorLogger(`Go back error: ${err}`)
    }
}