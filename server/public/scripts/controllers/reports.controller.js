myApp.controller('ReportsController', ['UserService','ReportsService', function(UserService, ReportsService){
    console.log('reports controller loaded');
    self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
    self.reportResults = ReportsService.reportResults;

    self.type = 'chart';
    self.labels = ["January", "February", "March", "April", "May", "June", "July"];
    // self.labels = [];
    self.series = ["Um","Uh","Ah","So","Like","And","But","Double Clutch","False Start","You Know", "Other"];
    self.data = [];
    
    //  self.onClick = function (points, evt) {
    
    self.datasetOverride = [{ yAxisID: 'y-axis-1' }];
    self.options = {
        
        
        title: {
            position: 'top',
            display: true,
            text: 'Filler Words',
            fontSize: 36
        },
        scales: {
        yAxes: [{
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
            }]
        }
    };
    
    ReportsService.getReportData().then(function(response){
        console.log('inside chain promise: ', response);
        
        self.reportResults.list = response;
        self.labels = response[0];
        self.data[0] = response[1];
        self.data[1] = response[2];
        self.data[2] = response[3];
        self.data[3] = response[4];
        self.data[4] = response[5];
        self.data[5] = response[6];
        self.data[6] = response[7];
        self.data[7] = response[8];
        self.data[8] = response[9];
        self.data[9] = response[10];
        self.data[10] = response[11];
        
        
    });

    self.colors =  [
                    {fill: false,borderColor: '#0062ff',
                        backgroundColor : '#0062ff',
                        pointBackgroundColor: '#0062ff',
                        pointHoverBackgroundColor: '#0062ff',
                        borderColor: '#0062ff',
                        pointBorderColor: '#0062ff',
                        pointHoverBorderColor: '#0062ff',}, 
                    {fill: false,
                        backgroundColor : '#ff4b4f',
                        pointBackgroundColor: '#ff4b4f',
                        pointHoverBackgroundColor: '#ff4b4f',
                        borderColor: '#ff4b4f',
                        pointBorderColor: '#ff4b4f',
                        pointHoverBorderColor: '#ff4b4f',}, 
                    {fill: false,
                        backgroundColor : '#F2A30F',
                        pointBackgroundColor: '#F2A30F',
                        pointHoverBackgroundColor: '#F2A30F',
                        borderColor: '#F2A30F',
                        pointBorderColor: '#F2A30F',
                        pointHoverBorderColor: '#F2A30F',}, 
                    {fill: false,
                        backgroundColor : '#1A2A40',
                        pointBackgroundColor: '#1A2A40',
                        pointHoverBackgroundColor: '#1A2A40',
                        borderColor: '#1A2A40',
                        pointBorderColor: '#1A2A40',
                        pointHoverBorderColor: '#1A2A40',}, 
                    {fill: false,
                        backgroundColor : '#72F522',
                        pointBackgroundColor: '#72F522',
                        pointHoverBackgroundColor: '#72F522',
                        borderColor: '#72F522',
                        pointBorderColor: '#72F522',
                        pointHoverBorderColor: '#72F522',},
                    {fill: false,
                        backgroundColor : '#148F7A',
                        pointBackgroundColor: '#148F7A',
                        pointHoverBackgroundColor: '#148F7A',
                        borderColor: '#148F7A',
                        pointBorderColor: '#148F7A',
                        pointHoverBorderColor: '#148F7A',},
                    {fill: false,
                        backgroundColor : '#5E0409',
                        pointBackgroundColor: '#5E0409',
                        pointHoverBackgroundColor: '#5E0409',
                        borderColor: '#5E0409',
                        pointBorderColor: '#5E0409',
                        pointHoverBorderColor: '#5E0409',},
                    {fill: false,
                        backgroundColor : '#2F367F',
                        pointBackgroundColor: '#2F367F',
                        pointHoverBackgroundColor: '#2F367F',
                        borderColor: '#2F367F',
                        pointBorderColor: '#2F367F',
                        pointHoverBorderColor: '#2F367F',},
                    {fill: false,
                        backgroundColor : '#F2E205',
                        pointBackgroundColor: '#F2E205',
                        pointHoverBackgroundColor: '#F2E205',
                        borderColor: '#F2E205',
                        pointBorderColor: '#F2E205',
                        pointHoverBorderColor: '#F2E205',},
                    {fill: false,
                        backgroundColor : '#F27405',
                        pointBackgroundColor: '#F27405',
                        pointHoverBackgroundColor: '#F27405',
                        borderColor: '#F27405',
                        pointBorderColor: '#F27405',
                        pointHoverBorderColor: '#F27405',},
                    {fill: false,
                        backgroundColor : '#025159',
                        pointBackgroundColor: '#025159',
                        pointHoverBackgroundColor: '#025159',
                        borderColor: '#025159',
                        pointBorderColor: '#025159',
                        pointHoverBorderColor: '#025159',},
                 ];





























}]);//end reports controller