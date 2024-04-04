import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true }
)

const Password = mongoose.model('password', passwordSchema);

export default Password
