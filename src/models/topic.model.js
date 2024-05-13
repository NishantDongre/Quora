const mongoose = require("mongoose");

const topicSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Topic name is required"],
        trim: true,
    },
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
