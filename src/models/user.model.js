import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    is_admin: {
        type: Boolean,
        required: true
    },
    first_name: {
        type: String
    },
    username: {
        type: String,
        unique: true
    },
    language_code: {
        type: String
    }

}, { timestamps: true }
)

const User = mongoose.model('User', userSchema);

export default User