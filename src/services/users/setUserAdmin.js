import User from "../../models/user.model.js";
import { errorLogger } from "../../utils/errorLogger.js";

export default async function setUserAdmin(id) {
    try {
        await User.updateOne({ id: id }, { $set: { is_admin: true } });
    } catch (error) {
        errorLogger(`Changing user permissions error: ${error}`);
    }
}