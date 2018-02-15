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
    self.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90],
    [100,100,0,100,0,100,100]
    ];
    //  self.onClick = function (points, evt) {
    
    // };
    self.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    self.options = {
        scales: {
        yAxes: [
            {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
            },
            {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
            }
        ]
        }
    };
    /** **/
    self.toggle = function () {
        console.log('in toggle');
        
        self.type = 'pie';
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

































}]);//end reports controller