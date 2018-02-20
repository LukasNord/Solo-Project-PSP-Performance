myApp.controller('adminDashboardController', ['UserService','CohortService', function(UserService, CohortService) {
    console.log('AdminDashboard Controller created');
    var self = this;
    self.userService = UserService;
    self.cohorts = [];
    self.newcohort = {};
    self.singleCohort = CohortService.singleCohort;
    

   // Get cohorts to display on DOM. 
  CohortService.getCohorts()
    .then((response)=>{
      self.cohorts.list = response.data;
    }).catch((error)=>{
      console.log(error);
    });

    
  // add a cohort to the database and then update the DOM with the new list.
  self.addCohort = function(newCohort){
    CohortService.addCohort(newCohort)
      .then((response)=>{
          CohortService.getCohorts()
            .then((response)=>{
              self.cohorts.list = response.data;
            }).catch((error)=>{
              console.log(error);
            });
      }).catch((err)=>{
        console.log('error adding Cohort: ', err);
        
      })
  }

  self.getSingleCohort = function(cohort_id){
    self.cohortSize = 0;
    CohortService.getSingleCohort(cohort_id)
      .then((response)=>{
        self.singleCohort.list = response;
        self.cohortSize = response.length;
        
      })
      .catch((err)=>{
        console.log('failed to get single cohort');
        
      })
  }

  }]);
  