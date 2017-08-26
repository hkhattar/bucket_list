var app = angular.module('app', ['ngRoute','ngCookies']);

app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!

$routeProvider
      
        .when('/',{
          templateUrl: 'partials/login.html',
           controller: 'belt_controller'
        })

         .when('/dashboard',{
          templateUrl: 'partials/dashboard.html',
           controller: 'belt_controller'
        })

         .when('/do',{
          templateUrl: 'partials/do.html',
           controller: 'belt_controller'
        })


        
        
});