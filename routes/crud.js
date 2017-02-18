var express = require('express');
var router = express.Router();
var User = require("../model/model");
var Match = require("../model/match");
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('crud/index', { title: 'Naieem crud' });
});

router.get('/add', function(req, res) {
    res.render('crud/add', { title: "Add Data" });
});

router.get('/teams', function(req, res) {
    res.render('crud/teams', { title: "All Teams" });
});

router.post('/toss', function(req, res) {
    // console.log("req");
    console.log(req.body);
    var match = new Match();
    match.teams = req.body.teams;
    match.toss = req.body.toss;
    match.save(function(err, matchInfo) {
        if (err)
            res.send(err);

        // res.json({ message: supto.teams });
        res.send(matchInfo);
    });
    // res.send(supto);
    // res.render('crud/toss', { title: "Time for Toss Now" });
});

router.post('/runUpdate', function(req, res) {
    // console.log("req");
    console.log(req.body);
    //var match = new Match();
    var bowls = req.body.bowls;
    var matchid = req.body.id;
    Match.findByIdAndUpdate(matchid
        , { bowls: bowls }
        , function(err, match) {
          if (err) res.send(err);
          else{
            Match.find(function(err, match) {
                if (err) res.send(err);
                res.send(match);
            });
        }
    });
});


router.get('/matches', function(req, res) {
    Match.find(function(err, matches) {
        if (err)
            res.send(err);
        res.render('crud/matches', { title: "Add Matches",matches:matches });
        var myJSON = JSON.stringify(matches);
         // res.json(matches);
     });
    // res.render('crud/matches', { title: "Add Matches" });
});

router.get('/details/:matchId', function (req, res) {
    Match.findById(req.params.matchId, function(err, match) {
      if (err) throw err;
      var run=0;
      for (var i = 0; i < match.bowls.length; i++) {
          run=run+match.bowls[i].run;
      }
      res.render('crud/details', { title: "match details",match:match,totalRun:run });
  });
});

router.get('/details/:matchId/:over/:ball', function (req, res) {
    Match.findById(req.params.matchId, function(err, match) {
      if (err) throw err;
      var run=0;
      var matchDetails=[];
      for (var i = 0; i < match.bowls.length; i++) {
        if(match.bowls[i].over == req.params.over && match.bowls[i].ball > req.params.ball)
            break;
          run=run+match.bowls[i].run;
          matchDetails.push(match.bowls[i]);
      }
      res.render('crud/details_with_over', { title: "match details",matchDetails:matchDetails,match:match,totalRun:run });
  });
});


// router.get('/add', function(req, res) {
//     res.render('crud/add', { title: "Add Data" });
// });
// router.post('/add', function(req, res) {
//     var email = req.body.email;
//     var pass = req.body.password;
//     // console.log(email);
//     // res.send(email);
//     res.render('crud/add', { title: "Add Data", email:email,password:pass});
// });

// router.get('/naieem', function(req, res, next) {
//     // res.render('index', { title: 'Naieem' });
//     // res.json({ message: 'Beer added to the locker!' });
//     // var User = new User();
//     User.find(function(err, users) {
//         if (err) throw err;

//         // object of all the users
//         res.json(users);
//         // console.log(users);
//     });
//     // var supto = new User();
//     // supto.name=req.body.name;
//     // // res.json({ message: req.body.name });
//     // supto.save(function(err) {
//     //         if (err)
//     //             res.send(err);

//     //         res.json({ message: supto.name });
//     //          // res.send(supto);
//     //     });
//     // res.send(supto);
// });



// var beersRoute = router.route('/user');
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
