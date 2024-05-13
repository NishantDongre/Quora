const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Question Title can't be empty"],
        trim: true,
    },
    body: {
        type: String,
        required: [true, "Question Title can't be empty"],
        trim: true,
    },
    topic: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Topic",
        },
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
