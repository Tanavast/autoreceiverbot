import User from "../../models/user.model.js";
import { errorLogger } from '../../utils/errorLogger.js'

export default async function addNewUser(user) {
    try {
        const newUser = new User({
            id: user.id,
            first_name: user.first_name,
            username: user.username,
            language_code: user.language_code,
            is_admin: false,
            is_logged_in: false
        });
        await newUser.save()
    }
    catch (error) {
        errorLogger(`User registation error: ${error}`);
    }
}
