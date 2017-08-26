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
  },

  // createItem: function(req,res)
  // {
  // 	console.log('REQ.BODY',req.body)
  // }





  createItem: function(req,res){
    console.log(req.body);
    var item = new Item({title:req.body.title,description: req.body.description, createdBy_name: req.body.createdBy_name, createdBy_id:req.body.createdBy_id})
    item.save(function(err1){
      if(err1){
        console.log("couldnt create new item");
        res.json(false)
      } else {
        var userA = req.body.createdBy_id;
        User.findOne({_id: userA}, function(errA, first){
          if (errA) {
            console.log("issue at error A");
          } else {
          first.bucketlist.push(item);
          first.save(function(err2){
            if(err2){
              console.log("couldnt add to creators bucket list");
              res.json(false)
            } else {
              if(req.body.tagged){
                var userB = req.body.tagged;
                User.findOne({_id:userB._id}, function(errB, second){
                  if(errB){
                    console.log("issue with error B");
                  } else {
                    second.bucketlist.push(item);
                    second.save(function(err3){
                      if(err3){
                        console.log("couldnt add to tagged user's bucket list");
                        res.json(false)
                      } else {
                        console.log("completed associations");
                        // res.json(item)
                      }
                    })
                  }
                })
              }
              res.json(item)
          }
        })
      }
    })
      }
    })
  }




























	}
})();