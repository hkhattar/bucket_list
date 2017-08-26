app.factory('belt_factory',function($http){
        console.log('start belt_factory');

        var factory = {};
        var users = []

        factory.createUser = function(user,callback){
            users.push(user)
            // console.log(user.name + " in factory")
            console.log('user',user)
            var data = {name:user}
            console.log('data',data)
            $http.post('/createuser', data).success(function(output){
              console.log('output',output)
              callback(output)
            })
          }

             factory.index = function(callback)
             {
              $http.get('/users').then(function(returned_data)
              {
                if(typeof(callback)=='function')
                {
                  users = returned_data.data;
                  callback(users);
                }
              });
            };

            factory.create = function(new_item, callback)
            {
              $http.post('/new_item',new_item).then(function(returned_data)
              {
                if(typeof(callback)=='function')
                {
                    new_item = returned_data.data;
                    callback(new_item);
                }
              });
            };
        return factory;
    })


   