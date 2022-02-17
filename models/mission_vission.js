const mongoose = require('mongoose');

const missionVissionSchema = new mongoose.Schema({
    article: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    }
});

const MissionVission = mongoose.model('MissionVission', missionVissionSchema);

module.exports = MissionVission;