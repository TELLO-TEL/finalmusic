var mongoose = require('mongoose');

var EventsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    place: {
        type: String,
        required: true
    },
    time:{
        type:String

    },
    date:{
        type:Date
    }

});

var Events = module.exports = mongoose.model('Events', EventsSchema);