myApp.service('UserService', ['$http', '$location', function($http, $location){
  console.log('UserService Loaded');
  var self = this;
  self.userObject = {};

  self.getuser = function(){
    $http.get('/api/user').then(function(response) {
        if(response.data.username) {
            // user has a current session on the server
            self.userObject.userName = response.data.username;
        } else {
            console.log('UserService -- getuser -- failure');
            // user has no session, bounce them back to the login page
            $location.path("/home");
        }
    },function(response){
      console.log('UserService -- getuser -- failure: ', response);
      $location.path("/home");
    });
  }

  self.logout = function() {
    console.log('UserService -- logout');
    $http.get('/api/user/logout').then(function(response) {
      console.log('UserService -- logout -- logged out');
      $location.path("/home");
    });
  }



  self.getAdmin = function(){
    $http.get('/api/user').then(function(response) {
      if(response.data.user_type == 1) {
          // user has a current session on the server
          console.log('getAdmin service: ', response.data.user_type);
          
          self.userObject.user_type = response.data.user_type;
      } else {
          console.log('UserService -- getadmin -- failure');
          // user has no session, bounce them back to the login page
          $location.path("/home");
      }
  },function(response){
    console.log('UserService -- getadmin -- failure: ', response);
    $location.path("/home");
  });
  }

  
}]);
