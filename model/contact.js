const mongoose = require('mongoose');

const ContactSchema =  mongoose.Schema({
    name: {
        type: String,
    },
    age : {
        type: Number,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },


});

module.exports = mongoose.model('Contact', ContactSchema);
