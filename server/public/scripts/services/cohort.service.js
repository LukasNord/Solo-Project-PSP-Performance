myApp.service('CohortService', ['$http', '$location', function($http, $location){
    console.log('Cohort service loaded');
    self = this;
    self.cohorts = { list: [] };
    self.singleCohort = { list: [] };

    // Get Cohorts for Display //
    self.getCohorts = function(){
        
        let promise = $http.get('/api/cohort')
                        .then((response)=>{
                            return response;
                         })
                         .catch((error)=>{
                             return 'error getting Cohorts: ', error;
                         })
        return promise;
    }

    self.addCohort = function(newCohort){
        
        let sendCohort = {cohort_name: newCohort};
        
        let promise = $http.post('/api/cohort', sendCohort)
                        .then((response)=>{
                            console.log('add cohort successful');
                            return true;
                        }).catch((err)=>{
                            console.log('failure to add cohort: ', err);
                            return err;
                        });
        return promise;
    }// add cohort
    
    self.getSingleCohort = function(cohort_id){
        let promise = $http.get(`/api/cohort/singleCohort/${cohort_id}`)
                        .then((response)=>{
                            $location.path(`/manageSingleCohort/${cohort_id}`)
                            return response.data;
                         })
                         .catch((error)=>{
                             return 'error getting single Cohort: ', error;
                         })
        return promise;

    }
    






























    

}]);