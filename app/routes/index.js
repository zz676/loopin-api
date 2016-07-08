var express = require('express');
var router = express.Router();

var Users = require('./users');
var Events = require('./events');
var Vendors = require('./vendors');
var Products = require('./products');


// USERS
router.get('/api/users', Users.getAll);
router.post('/api/users', Users.create);
router.delete('/api/users/:user_id', Users.remove);

// VENDORS
router.get('/api/vendors', Vendors.getAll);
router.post('/api/vendors', Vendors.createOne);
router.get('/api/vendors/:vendor_id', Vendors.getOne);
router.post('/api/vendors/:vendor_id', Vendors.updateOne);
router.delete('/api/vendors/:vendor_id', Vendors.deleteOne);



// EVENTS
router.get('/api/events', Events.getAll);
router.post('/api/events', Events.create);
router.delete('/api/events/:event_id', Events.remove);

// global routes
router.get('/', function(req, res) {
    res.send('LoopIn-API');
});
router.get('*',function (req, res) {
    res.redirect('/');
});


module.exports = router;
