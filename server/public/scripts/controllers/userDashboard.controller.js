myApp.controller('UserController', ['UserService','NgTableParams','$mdDialog','SpeechService', function(UserService, NgTableParams, $mdDialog, SpeechService ) {
  console.log('UserDashBoardController created');
  var self = this;
  self.userService = UserService;
  self.userObject = UserService.userObject;
  self.userSpeeches = SpeechService.speechArray;
  self.getUserSpeeches = SpeechService.getUserSpeeches;
  
 
  

/** Edit Speech Modal **/

self.editSpeech = function(speechObject){
  self.showEditSpeechModal = function (ev) {
    $mdDialog.show({
        controller: EditDialogController,
        controllerAs: 'vm',
        templateUrl: '../views/partials/editSpeech.partial.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: false,
        resolve: {
          item: function () {
            return speechObject;
          }
        }
        
      })
      .then(function (answer) {
        console.log('answer: ', answer);
        (answer);
      }, function () {
        self.status = 'You cancelled the dialog.';
      });
  };

  function EditDialogController($mdDialog, item) {
    const self = this;
    self.editSingleSpeech = {};

    /** Format Date to allow calendar to display values from database **/
    self.formatDate = function(dateString){
      return  new Date(dateString);
    }
    /** Make item available to controller data binding with DOM **/
    self.editSingleSpeech = item;

    /*fix the date string*/
    self.editSingleSpeech.date = self.formatDate(self.editSingleSpeech.date);
     
    self.hide = function () {
      $mdDialog.hide();
    };

    self.cancel = function () {
      $mdDialog.cancel();
    };

    self.answer = function (answer) {
      console.log('answer', answer);

      $mdDialog.hide(answer);
    };
  }
  
  //Open modal on click of Edit button//
  self.showEditSpeechModal();
}


/** Get Speeches via Service shortcut **/
  
self.getUserSpeeches();

/**  Add Speech  Functionality **/
self.newSpeech = {};

/** Service Call to send speech object returned by Modal controller to database */
self.addSpeech = function(newSpeech){

    SpeechService.addSpeech(newSpeech);
}
    
/** Add Speech Modal **/
  
  self.showAddSpeechModal = function (ev) {
    $mdDialog.show({
        controller: DialogController,
        controllerAs: 'vm',
        templateUrl: '../views/partials/addSpeech.partial.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
      .then(function (answer) {
        self.addSpeech(answer);
      }, function () {
        self.status = 'You cancelled the dialog.';
      });
  };

  function DialogController($mdDialog) {
    const self = this;
    self.hide = function () {
      $mdDialog.hide();
    };

    self.cancel = function () {
      $mdDialog.cancel();
    };

    self.answer = function (answer) {
      console.log('answer', answer);

      $mdDialog.hide(answer);
    };

    

   

    

  //   /* Calendar Picker Pop up - work on this later*/
  //   self.today = function() {
  //     self.dt = new Date();
  //   };
  //   self.today();
  
  //   self.clear = function() {
  //     self.dt = null;
  //   };
  
  //   self.inlineOptions = {
  //     customClass: getDayClass,
  //     minDate: new Date(),
  //     showWeeks: true
  //   };
  
  //   self.dateOptions = {
  //     dateDisabled: disabled,
  //     formatYear: 'yy',
  //     maxDate: new Date(2020, 5, 22),
  //     minDate: new Date(),
  //     startingDay: 1
  //   };
  
  //   // Disable weekend selection
  //   function disabled(data) {
  //     var date = data.date,
  //       mode = data.mode;
  //     return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  //   }
  
  //   self.toggleMin = function() {
  //     self.inlineOptions.minDate = self.inlineOptions.minDate ? null : new Date();
  //     self.dateOptions.minDate = self.inlineOptions.minDate;
  //   };
  
  //   self.toggleMin();
  
  //   self.open1 = function() {
  //     self.popup1.opened = true;
  //   };
  
  //   self.open2 = function() {
  //     self.popup2.opened = true;
  //   };
  
  //   self.setDate = function(year, month, day) {
  //     self.dt = new Date(year, month, day);
  //   };
  
  //   self.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  //   self.format = self.formats[0];
  //   self.altInputFormats = ['M!/d!/yyyy'];
  
  //   self.popup1 = {
  //     opened: false
  //   };
  
  //   self.popup2 = {
  //     opened: false
  //   };
  
  //   var tomorrow = new Date();
  //   tomorrow.setDate(tomorrow.getDate() + 1);
  //   var afterTomorrow = new Date();
  //   afterTomorrow.setDate(tomorrow.getDate() + 1);
  //   self.events = [
  //     {
  //       date: tomorrow,
  //       status: 'full'
  //     },
  //     {
  //       date: afterTomorrow,
  //       status: 'partially'
  //     }
  //   ];
  
  //   function getDayClass(data) {
  //     var date = data.date,
  //       mode = data.mode;
  //     if (mode === 'day') {
  //       var dayToCheck = new Date(date).setHours(0,0,0,0);
  
  //       for (var i = 0; i < self.events.length; i++) {
  //         var currentDay = new Date(self.events[i].date).setHours(0,0,0,0);
  
  //         if (dayToCheck === currentDay) {
  //           return self.events[i].status;
  //         }
  //       }
  //     }
  
  //     return '';
  // }
  // }




  }


 /* Retrieve data from user database */

  // var simpleList = [{date: "12-01-2018", topic: 'heroes'} /*,*/];
  // self.tableParams = new NgTableParams({
  //   page: 1,
  //   count: 20,
  //   sorting: {}
  // }, { dataset: simpleList});








}]);
