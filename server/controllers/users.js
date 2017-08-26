var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {
		create: function(req, res){
      console.log(req.body)
      User.findOne({user_name: req.body.name}, function(err,results){
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
          res.json(results)
        }
      })
  },
	}
})();