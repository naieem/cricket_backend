var express = require('express');
var router = express.Router();
var User = require("../model/model");
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/matches', function(req, res, next) {
    // res.render('index', { title: 'Naieem' });
    // res.json({ message: 'Beer added to the locker!' });
    // var User = new User();
    // User.find(function(err, users) {
    //     if (err) throw err;

    //     // object of all the users
    //     res.json(users);
    //     // console.log(users);
    // });
    // var supto = new User();
    // supto.name=req.body.name;
    // // res.json({ message: req.body.name });
    // supto.save(function(err) {
    //         if (err)
    //             res.send(err);

    //         res.json({ message: supto.name });
    //          // res.send(supto);
    //     });
    // res.send(supto);
});

router.post('/add', function(req, res, next) {
    // res.render('index', { title: 'Naieem' });
    // res.json({ message: 'Beer added to the locker!' });
    // var User = new User();
    // User.find(function(err, users) {
    //     if (err) throw err;

    //     // object of all the users
    //     res.json(users);
    //     // console.log(users);
    // });
    var supto = new User();
    supto.name=req.body.name;
    // res.json({ message: req.body.name });
    supto.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: supto.name });
             // res.send(supto);
        });
    // res.send(supto);
});

var beersRoute = router.route('/user');
// Create endpoint /api/beers for POSTS
// beersRoute.post(function(req, res) {
//   // Create a new instance of the Beer model
//   var beer = new Beer();

//   // Set the beer properties that came from the POST data
//   beer.name = req.body.name;
//   beer.type = req.body.type;
//   beer.quantity = req.body.quantity;

//   // Save the beer and check for errors
//   beer.save(function(err) {
//     if (err)
//       res.send(err);

// res.json({ message: 'Beer added to the locker!', data: beer });
//   });
// });

// beersRoute.get(function(req, res) {
//   // Use the Beer model to find all beer
//   var User = new User();
//   User.find(function(err, beers) {
//     if (err)
//       res.send(err);

//     res.json(beers);
//   });
// });

module.exports = router;
