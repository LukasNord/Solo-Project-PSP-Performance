myApp.service('CohortService', ['$http', '$location', function($http, $location){
    console.log('Cohort service loaded');
    self = this;
    self.cohorts = { list: [] };


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

    
    

    






























    

}]);