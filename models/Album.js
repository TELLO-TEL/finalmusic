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

var Album = module.exports = mongoose.model('album', imageSchema);


module.exports.getImages = function (callback) {
    Album.find(callback);
}


module.exports.getImageById = function (id, callback) {

    Album.findById(id, callback);

}

module.exports.addImage = function (image, callback) {
    Album.create(image, callback);
}



