myApp.controller('ReportsController', ['UserService','ReportsService', function(UserService, ReportsService){
    console.log('reports controller loaded');
    self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;

    ReportsService.getReportData();




    self.labels = ["January", "February", "March", "April", "May", "June", "July"];
    self.series = ['Series A', 'Series B','ands'];
    self.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90],
    [100,100,0,100,0,100,100]
    ];
    self.onClick = function (points, evt) {
    console.log(points, evt);
    };
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
    // self.toggle = function () {
    //     console.log('in toggle');
        
    //     self.type = 'bar';
    //   };





































}]);//end reports controller