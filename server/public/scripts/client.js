var myApp = angular.module('myApp', ['ngRoute','ngMaterial','ngTable','chart.js','ngMdIcons']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('myApp -- config')
  $routeProvider
    .when('/', {
      redirectTo: 'landing'
    })
    .when('/landing', {
      templateUrl: '/views/templates/landing.html',
      controller: 'LoginController as vm'
    })
    .when('/login', {
      templateUrl: '/views/templates/login.html',
      controller: 'LoginController as vm',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as vm'
    })
    .when('/user', {
      templateUrl: '/views/templates/mySpeeches.html',
      controller: 'UserDashboardController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/reports', {
      templateUrl: '/views/templates/reports.html',
      controller: 'ReportsController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/admin',{
      templateUrl: '/views/templates/admin.html',
      controller: 'adminDashboardController as vm',
      resolve: {
        getuser : function(UserService){
           return UserService.getAdmin()

        }
      }
    })
    .when('/manageCohorts',{
      templateUrl: '/views/templates/manageCohorts.html',
      controller: 'adminDashboardController as vm',
      resolve: {
        getuser : function(UserService){
           return UserService.getAdmin()
        }
      }
    })
    .when('/manageSingleCohort/:id',{
      templateUrl: '/views/partials/cohortDetails.partial.html',
      controller: 'adminDashboardController as vm',
      resolve: {
        getuser : function(UserService){
           return UserService.getAdmin()
        }
      }
    })
    .when('/adminReports',{
      templateUrl: '/views/templates/adminReports.html',
      controller: 'AdminReportsController as vm',
      resolve: {
        getuser : function(UserService){
           return UserService.getAdmin()
        }
      }
    })
    .otherwise({
      template: '<h1>404</h1>'
    });
}]);
