const mongoose = require('mongoose');
const User = require('../models/user.model');

const OpinionSchema = mongoose.Schema({
    content: {
        type: String,
        minlength: [ 10, "Your opinion content should have at least 10 characters"],
        required: [ true, "You need to provide content for your opinion" ]
    },
    yea: {
        // number of upvotes
        type: Number,
        default: 0
    },
    nay: {
        // number of downvotes
        type: Number,
        default: 0
    },
    userId: {
        // userId of the owner of this opinion
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [ true, "Your opinion needs an owner"]
    }
}, { timestamps: true });

module.exports = mongoose.model("Opinion", OpinionSchema);