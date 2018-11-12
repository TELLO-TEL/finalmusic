var mongoose = require('mongoose');

var youSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
     
    },
    
    url:{ type:String
    }

});

var You = module.exports = mongoose.model('Yous', youSchema);