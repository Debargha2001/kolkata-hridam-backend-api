const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
},{
    timestamps: true
});

const Certificate = mongoose.model('Certificate', certificateSchema);
module.exports = Certificate;