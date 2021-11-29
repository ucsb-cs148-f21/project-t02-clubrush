const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    categories: {
        type: String,
        required: false
    },
    comments: [{
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
    }]
    // id: {
    //     type: String,
    //     required: true
    // },
    // body: {
    //     type: String,
    //     required: true
    // },
    // username: {
    //     type: String,
    //     required: false
    // },
    // userId: {
    //     type: String,
    //     required: true
    // },
    // parentId: {
    //     type: String,
    //     required: false
    // },
    // createdAt: {
    //     type: String,
    //     required: false
    // }
})

const Club = mongoose.model('Club', clubSchema);

module.exports = Club;