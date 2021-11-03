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
    }
})

const Club = mongoose.model('Club', clubSchema);

module.exports = Club;