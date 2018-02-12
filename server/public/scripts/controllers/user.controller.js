myApp.controller('UserController', ['UserService','NgTableParams', function(UserService, NgTableParams ) {
  console.log('UserController created');
  var self = this;
  self.userService = UserService;
  self.userObject = UserService.userObject;



  var simpleList = [{Date: "12-01-2018", Topic: 'heroes'} /*,*/];
  self.tableParams = new NgTableParams({
    page: 1,
    count: 20,
    sorting: {}
  }, { dataset: simpleList});








}]);
