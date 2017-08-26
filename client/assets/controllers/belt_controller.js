
app.controller('belt_controller', ['$scope','$cookies','$rootScope','$location','$routeParams','belt_factory',

    function($scope,$cookies,$rootScope,$location,$routeParams,belt_factory)
    {
      console.log('belt_controller loaded');
      if(!$cookies.get('_id')){
        // console.log('$rootScope.user',$rootScope.user)
        $location.url('/')
        } else {
        // $scope.logged = $rootScope.user
        $scope.logged = $cookies.get('name');
        }
      

	$scope.addUser = function(data)
    {
        belt_factory.createUser($scope.newUser,function(user)
        {
            console.log('user',user)
            $scope.currentUser = user;
            console.log('$scope.currentUser',$scope.currentUser)
            $cookies.put('name', user.name);
            $cookies.put('_id', user._id);
            console.log($scope.currentUser, "logging current user");
            // $rootScope.user = user.name;
            // console.log('$rootScope.user',$rootScope.user)
            // $scope.logged = $rootScope.user
            // console.log('$scope.logged',$scope.logged)
            // $scope.newUser = {};
            $location.path('/dashboard')
        });
       
    }

    $scope.logout = function(){
        $cookies.remove("name");
        $cookies.remove("_id");
        $scope.currentUser = {};
        $location.path('/');
        
  }

  	}
  	// function
  	
  ]);

// survey_factory.addUser($scope.new_user, function(data){
//             console.log('data',data.data)
//             $scope.currentUser = data.data;
//             $cookies.put('name', data.data.name);
//             $cookies.put('_id', data.data._id);
//             console.log($scope.currentUser, "logging current user");
//             $location.path('/dashboard/' + $scope.currentUser._id);
//         });