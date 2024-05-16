const mongoose = require("mongoose");

const followSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User Id can't be empty"],
    },
    targetUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "TargetUserId can't be empty"],
    },
    created_at: {
        type: Date,
        def: Date.now,
    },
});

const Follow = mongoose.model("Follow", followSchema);

module.exports = Follow;
