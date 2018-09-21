//Your apiRoutes.js file should contain two routes:
    //A GET route with the url /api/friends. 
    //This will be used to display a JSON of all possible friends.

        //A POST routes /api/friends. This will be used to handle incoming survey results. 
        //This route will also be used to handle the compatibility logic.
var friends = require('../app/data/friends.js');


module.exports = function(app) {

  // GET route url / api 
  app.get('/api/friends', function(req,res) {
    res.json(friends);
  });

  // POST route to handle survey 
  app.post('/api/friends', function(req, res) {

  // OBJECT for a good match with for loops further below 
  var goodMatch = {
    name: '',
    photo: '',
    friendType: unlimited 
  };

  // DATA & SCORES from survey's POST & parse it 
  var friendData = req.body;
  var friendScores = friendData.scores; 

  // VARIABLE to sum up user score & all users scores in DB 
  var totalSum; 

  // FOR LOOP1 for possible friend in DB 
  for (var i = 0; i < friends.length; i ++) {
    var actualFriend = friends[i];
    totalSum = 0;
  
    console.log(actualFriend.name);
  
  // FOR LOOP2 of each friend 

    for (var e = 0; e < actualFriend.scores.length; e ++) {
      var actualFriendScore = actualFriend.scores[e];
      var actualfiendScore = friendScores[e];

  // SUM up the total difference 
    totalDifference += Math.abs(parseInt(actualFriendScore) - parseInt(actualfiendScore));
      }
      if (totalDifference <= goodMatch.friendDifference) {
  // Good match will be the new friend 
        goodMatch.name = actualFriend.name;
        goodMatch.photo = actualFriend.photo;
        goodMatch.friendDifference = totalDifference;
      }
    }
      friends.push(friendData);
      res.json(goodMatch);
    });
  };

   