myApp.controller('LoginController', ['$http', '$location', 'UserService', function($http, $location, UserService) {
    console.log('LoginController created');
    var self = this;
    self.user = {
      username: '',
      password: ''
    };
    self.message = '';

/** User Login Logic - move to service eventually **/

    self.login = function () {
      if (self.user.username === '' || self.user.password === '') {
        self.message = "Enter your username and password!";
      } else {
        console.log('sending to server...', self.user);
        $http.post('/api/user/login', self.user).then(
          function (response) {
            if (response.status == 200) {
             
              // location works with SPA (ng-route)
              $location.path('/user');
            } else {
              console.log('failure error: ', response);
              self.message = "Incorrect credentials. Please try again.";
            }
          },
          function (response) {
            console.log('failure error: ', response);
            self.message = "Incorrect credentials. Please try again.";
          });
      }
    };
/* Register User Logic */ //Move to Service eventually.
    self.registerUser = function () {
      if (self.user.username === '' || self.user.password === '') {
        self.message = "Choose a username and password!";
      } else {
        console.log('sending to server...', self.user);
        $http.post('/api/user/register', self.user).then(function (response) {
          console.log('success');
          $location.path('/home');
        },
          function (response) {
            console.log('duplicate username in database');
            console.log('response: ', response.status);
            if( response.status === 409){
              self.message = "This Username is already taken, please try another one."
            }else if(response.status === 500){
              self.message = "Something went wrong, please try again.  If the issues persists please notify the administrator of the site."
            }

            
            
          });
      }
    }
}]);
