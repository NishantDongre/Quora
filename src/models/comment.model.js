const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer",
        required: true,
    },
    commentOn: {
        type: String,
        enum: ["answer", "comment"],
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    text: {
        type: String,
        required: [true, "Comment Text can't be empty"],
        trim: true,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
