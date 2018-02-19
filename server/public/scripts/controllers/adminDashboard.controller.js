myApp.controller('adminDashboardController', ['UserService','CohortService', function(UserService, CohortService) {
    console.log('AdminDashboard Controller created');
    var self = this;
    self.userService = UserService;
    self.cohorts = [];

    CohortService.getCohorts()
      .then((response)=>{
        self.cohorts.list = response.data;
      }).catch((error)=>{
        console.log(error);
      });

 






  }]);
  