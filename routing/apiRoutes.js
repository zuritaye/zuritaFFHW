//Your apiRoutes.js file should contain two routes:
    //A GET route with the url /api/friends. 
    //This will be used to display a JSON of all possible friends.
        //A POST routes /api/friends. This will be used to handle incoming survey results. 
        //This route will also be used to handle the compatibility logic.
        

// POST routes/api/friends to handle incoming survey results, compatibility logic, load data 
var friendList = require('../data/friends.js');
// var friendList = require('./app/routing/apiRoutes.js')

module.exports = function(app){
// GET route to display JSON of list (possible fiends)

  app.get('/api/survey', function(req,res){
    res.json(friendList);
  });

  app.post('/api/survey', function(req,res){
// to grab new friend score & compare with friends in friendList array 
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

// for var to run thru current friend list
    for(var i=0; i<friendList.length; i++){
      var scoresDiff = 0;
// for var to run thru scores & compare fiend
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

// array to push results into scores array 
      scoresArray.push(scoresDiff);
    }

// for var to find best friend match 
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

// var bff to return best matched data
    var bff = friendList[bestMatch];
    res.json(bff);

// push to push new submission into friendsList array
    friendList.push(req.body);

    console.log(friendList);
  });
};