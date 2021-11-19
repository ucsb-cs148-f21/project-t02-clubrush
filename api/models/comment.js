const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: false
    },
    userId: {
        type: String,
        required: true
    },
    parentId: {
        type: String,
        required: false
    },
    createdAt: {
        type: String,
        required: false
    }
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;