// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var noteSchema = mongoose.Schema({
        text       : String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Note', noteSchema);
