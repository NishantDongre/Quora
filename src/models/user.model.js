const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username can't be empty"],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email can't be empty"],
        unique: true,
        trim: true,
    },
    bio: {
        type: String,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
