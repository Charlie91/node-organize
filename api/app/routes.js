// app/routes.js
var User     = require('../app/models/user');
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
        res.json(user);
    });


    app.get('/profile', isLoggedIn, function(req, res) {
        let user = req.user;
        res.json(user);
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
