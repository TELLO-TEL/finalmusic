var mongoose = require('mongoose');

var imageSchema = mongoose.Schema({
    path: {
        type: String,
        required: true,
        trim: true
    },
    originalname: {
        type: String,
        required: true
    },
    name:{
        type:String
    }

});

var Video = module.exports = mongoose.model('Video', imageSchema);


module.exports.getImages = function (callback) {
    Video.find(callback);
}


module.exports.getImageById = function (id, callback) {

    Video.findById(id, callback);

}

module.exports.addImage = function (image, callback) {
    Video.create(image, callback);
}



