const mongoose = require('mongoose');
const Opinion = require('./opinion.model');
const User = require('../models/user.model');

const RefuteSchema = mongoose.Schema({
    content: {
        type: String,
        minlength: [ 10, "Your refute content should have at least 10 characters"],
        required: [ true, "You need to provide content for your refute" ]
    },
    opinionId: {
        // opinionId this refute is responding to
        type: mongoose.Schema.Types.ObjectId,
        ref: "Opinion",
        required: [ true, "Your refute needs an opinion"]
    },
    userId: {
        // userId of the owner of this refute
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [ true, "Your opinion needs an owner"]
    }
}, { timestamps: true });

module.exports = mongoose.model("Refute", RefuteSchema);