const mongoose = require('mongoose');

const projectEventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    dateOfExecution: {
        type: Date,
        required: true
    },
    supervisor: {
        type: String,
        required: true
    },
    participants: {
        type: Number,
        required: true
    },
    // a catefory can be either project or event
    category: {
        type: String,
        required: true
    }
});

const ProjectEvent = mongoose.model('ProjectEvent', projectEventSchema);
module.exports = ProjectEvent;