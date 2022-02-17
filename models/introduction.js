const mongoose = require('mongoose');

const introductionSchema = new mongoose.Schema({
    data: [{
        article: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        }
    }]
});

const Introduction = mongoose.model('Introduction', introductionSchema);
module.exports = Introduction;