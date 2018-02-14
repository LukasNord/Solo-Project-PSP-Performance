myApp.service('ReportsService', ['$http', '$location', function($http, $location){
    console.log('reports service loaded');
    self = this;
    
    self.getReportData = function(){
        console.log('in service getReportData');
        
        $http.get('/api/reports/getReports')
            .then((response)=>{
                console.log('came back from reports API Success');
                
            }).catch((err)=>{
                console.log('error on reports API request');
                
            });





    } // end GET report Data func




































    

}]);