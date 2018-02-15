myApp.service('ReportsService', ['$http', '$location', function($http, $location){
    console.log('reports service loaded');
    self = this;
    self.datesArray = [];
    self.ahSumArray = [];
    self.reportResults = { list: [] };
    
    self.getReportData = function(){
        console.log('in service getReportData');
        let promise = $http.get('/api/reports/getReports')
                        .then((response)=>{
                            console.log('response.data from API call: ', response.data);           
                            return response.data; 
                        }).catch((err)=>{
                            console.log('error on reports API request', err);
                        });
        return promise;

    } // end GET report Data func

    
    

    






























    

}]);