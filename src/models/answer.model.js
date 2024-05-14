const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
    },
    text: {
        type: String,
        required: [true, "Answer text can't be empty"],
        trim: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
