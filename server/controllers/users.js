var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {
		create: function(req, res){
      console.log(req.body,'req.body')
      User.findOne({name: req.body.name}, function(err,results){
        console.log(results)
        if(results == null){  
  	  	  var user = new User({name:req.body.name})
  	  	  user.save(function(err,results){
  	  		if(err){
  	  		   console.log("something went wrong")
  	  		}	
  	  		else{
  	  			console.log("successfully add a user!")
  	  			res.json(results)
  	  		 }
          })
        }	
        else{
          console.log("user already exists!")
          error = {already: 'User already exists, please log in or use a different name'};
          res.json(error)
        }
      })
  },

    index: function(req,res){
    User.find({}).populate('bucketlist').exec(function(err, results){
      if(err){
        console.log("error populating bucket list");
      } else {
        console.log("found all users and populated list");
        res.json(results)
      }
    })
  }
	}
})();