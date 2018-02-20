myApp.service('CohortService', ['$http', '$location', function($http, $location){
    console.log('Cohort service loaded');
    self = this;
    self.cohorts = { list: [] };
    self.singleCohort = { list: [] };

    // Get Cohorts for Display //
    self.getCohorts = function(){
        
        return $http.get('/api/cohort')
                        .then((response)=>{
                            return response;
                         })
                         .catch((error)=>{
                             return 'error getting Cohorts: ', error;
                         })
    }

    self.addCohort = function(newCohort){
        
        let sendCohort = {cohort_name: newCohort};
        
        return $http.post('/api/cohort', sendCohort)
                        .then((response)=>{
                            console.log('add cohort successful');
                            return true;
                        }).catch((err)=>{
                            console.log('failure to add cohort: ', err);
                            return err;
                        });
    }// add cohort
    
    self.getSingleCohort = function(cohort_id){
        return  $http.get(`/api/cohort/singleCohort/${cohort_id}`)
                        .then((response)=>{
                            console.log(' back from db with student list');
                            
                            $location.path(`/manageSingleCohort/${cohort_id}`)
                            return response.data;
                         })
                         .catch((error)=>{
                             return 'error getting single Cohort: ', error;
                         })
        
    }
    self.getStudents = function(cohort_id){
        return  $http.get(`/api/cohort/singleCohort/${cohort_id}`)
                        .then((response)=>{
                            console.log(' back from db with student list');
                            
                            return response.data;
                         })
                         .catch((error)=>{
                             return 'error getting single Cohort: ', error;
                         })
        
    }






























    

}]);