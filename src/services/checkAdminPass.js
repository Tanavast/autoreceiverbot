import Password from "../models/password.model.js";
import bcryptjs from 'bcryptjs';
import { errorLogger } from '../utils/errorLogger.js'

export default async function checkAdminPass(currentPass) {
    const validPass = await Password.findOne({ name: 'admin' });
    try {
        const validPassword = bcryptjs.compareSync(currentPass, validPass.password);
        if (validPassword) {
            return true
        }
        return false
    }
    catch (err) {
        errorLogger(`Admin password checking error: ${err}`)
    }
}