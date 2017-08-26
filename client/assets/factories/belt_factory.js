app.factory('belt_factory',function($http){
        console.log('start belt_factory');

        var factory = {};
        var users = []

        factory.createUser = function(user,callback){
            users.push(user)
            // console.log(user.name + " in factory")
            console.log('user',user)
            var data = {name:user}
            $http.post('/createuser', data).success(function(output){
              console.log('output',output)
              callback(output)
            })
          }
        return factory;
    })


   