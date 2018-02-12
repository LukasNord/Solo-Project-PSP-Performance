myApp.controller('UserController', ['ngTableParams','UserService', function(UserService) {
  console.log('UserController created');
  var self = this;
  self.userService = UserService;
  self.userObject = UserService.userObject;



  var data = [{name: "Moroni", age: 50} /*,*/];
  //  self.tableParams = new NgTableParams({}, { dataset: data});








}]);
