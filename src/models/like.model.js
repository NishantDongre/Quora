const mongoose = require("mongoose");

const likeSchema = mongoose.mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User Id can't be empty"],
    },
    likedEntity: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "entityType",
    },
    entityType: {
        type: String,
        required: true,
        enum: ["Question", "Answer", "Comment"],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Like = mongoose.model("Like", likeSchema);
module.exports = Like;
