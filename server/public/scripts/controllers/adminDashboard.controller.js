myApp.controller('adminDashboardController', ['UserService', function(UserService) {
    console.log('AdminDashboard Controller created');
    var self = this;
    self.userService = UserService;
  }]);
  