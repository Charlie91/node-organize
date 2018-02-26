// app/routes.js
var Note     = require('../app/models/note');
var mongoose = require('mongoose');


module.exports = function(app, passport) {
    app.get('/', function(req, res) {
        console.log(req.user);
        res.end('...Hello...world');
    });

    app.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.send('hey. do the post request in here for more magic')
    });

    app.post('/signup', passport.authenticate('local-signup'),function(req,res){
        let user = req.body;
        res.json(user);
    });

    app.post('/login', passport.authenticate('local-login'),function(req, res) {
        let user = req.body;
        res.status = 200;
        res.json({login:'success'});
    });

    app.get('/profile', isLoggedIn, function(req, res) {
        let user = req.user;
        res.json(user);
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.json({login:false})
    });

    app.get('/notes', isLoggedIn,function(req, res) {
        Note.find({
            author: req.user.id
        }).exec(function(err, books) {
            if (err) throw err;
            res.json(books);
        })
    });

    app.post('/addNote', isLoggedIn,function(req, res) {

        var newNote = new Note();
        newNote.text = req.body.text;
        newNote.author = req.user._id;

        newNote.save(function(err) {
            if (err)
                throw err;
            console.log('note successfully saved.');
            res.json({isSaved:true});
        });

    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.status(401);
    res.json({login:false});
}
