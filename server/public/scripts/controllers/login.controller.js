myApp.controller('LoginController', ['$http', '$location', 'UserService','CohortService', function($http, $location, UserService, CohortService) {
    console.log('LoginController created');
    var self = this;
    self.user = {
      username: '',
      password: '',
      cohort: ''
    };
    self.message = '';
    self.userObject = UserService.userObject;
    self.cohorts = CohortService.cohorts;
    
/** User Login Logic - move to service eventually **/

    self.login = function () {
      if (self.user.username === '' || self.user.password === '') {
        self.message = "Enter your username, password, and cohort!";
      } else {
        console.log('sending to server...', self.user);
        $http.post('/api/user/login', self.user).then(
          function (response){
            console.log('Response to success onLogin: ', response);
            if(response.status == 200){
                if(response.data.user_type == 1){
                  $location.path('/admin');
                }else{
                console.log('Response to success onLogin: ', response);
                    $location.path('/user');
                }
            }else {
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
      if (self.user.username === '' || self.user.password === '' || self.user.cohort === '') {
        self.message = "Please choose a username, password, and cohort.";
      } else {
        
        $http.post('/api/user/register', self.user).then(function (response) {
          swal({
            title: "Welcome!",
            text: "You can now Log In with your Username and Password!",
            icon: "success",
          });
          $location.path('/login');
        },
          function (response) {
            
            console.log('response: ', response.status);
            if( response.status === 409){
              self.message = "This Username is already taken, please try another one."
            }else if(response.status === 500){
              self.message = "Something went wrong, please try again.  If the issues persists please notify the administrator of the site."
            }
          });
      }
    }

    //Load list of cohorts
  CohortService.getCohorts()
    .then((response)=>{
      self.cohorts.list = response.data;
      console.log('self.cohorts.list: ', response.data);
      
    }).catch((error)=>{
      console.log(error);
    });

    //Landing Page functions

  self.goToLogin = function(){
    $location.path('/login');
  }
  self.goToRegister = function(){
    $location.path('/register');
  }
}]);
