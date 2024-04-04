import User from "../../models/user.model.js";
import { errorLogger } from '../../utils/errorLogger.js'

export default async function getUsersList() {
    try {
        const usersList = await User.find({});
        return usersList
    }
    catch (err) {
        errorLogger(`Get users list error: ${err}`);
    }
}