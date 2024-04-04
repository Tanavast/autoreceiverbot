import User from "../../models/user.model.js";
import { errorLogger } from '../../utils/errorLogger.js'

export default async function getUser(id) {
    try {
        const validUser = await User.findOne({ id: id });
        return validUser
    }
    catch (err) {
        errorLogger(`Get user error: ${err}`);
    }
}