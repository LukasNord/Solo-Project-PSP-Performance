myApp.controller('UserDashboardController', ['UserService','NgTableParams','$mdDialog','SpeechService', function(UserService, NgTableParams, $mdDialog, SpeechService) {
  console.log('UserDashBoardController created');
  var self = this;
  self.userService = UserService;
  self.userObject = UserService.userObject;
  self.userSpeeches = SpeechService.speechArray;
  
 /** Get Speeches  to display to DOM**/
  SpeechService.getUserSpeeches().then(function(response){
      self.userSpeeches.list = response;
  });
  /** Edit Speech Modal **/
  //Instantiate modal, Display on DOM, pass control to EditDialogController//
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
          console.log('edit speech answer: ', answer);
          SpeechService.editSpeech(answer);
        }, function () {
          self.status = 'You cancelled the dialog.';
          console.log('exited modal via hide or cancel method');
          SpeechService.getUserSpeeches().then(function(response){
            self.userSpeeches.list = response;
        });
        });
    };

  // EDIT MODAL CONTROLLER
  function EditDialogController($mdDialog, item, SpeechService) {
    const self = this;
    self.editSingleSpeech = {};

    /** Delete Speech modal interaction**/
    self.deleteSpeech = function(speech){
      console.log('hit delete btn: ', speech);
      var check = window.confirm('Are you sure you wish to delete this speech?');
      if(check === true){
        self.cancel();
        SpeechService.deleteSpeech(speech);
      } // end delete speech modal interaction
    }
    /** Format Date to allow calendar to display values from database **/
    self.formatDate = function(dateString){
      return new Date(dateString);
    }
    /** Copy properties of passed in speech object to modal controller speech object**/
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
      console.log('edit speech answer', answer);

      $mdDialog.hide(answer);
    };
  } // End EDIT DIALOG CONTROLLER
    
    //Open modal on click of Edit button//
    self.showEditSpeechModal();
  }// END Edit Speech Modal Control Logic

  /**  Add Speech  Functionality **/
  self.newSpeech = {};    
  /** Add Speech Modal **/
    
  self.showAddSpeechModal = function (ev) {
    $mdDialog.show({
        controller: addSpeechDialogController,
        controllerAs: 'vm',
        templateUrl: '../views/partials/addSpeech.partial.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: false
      })
      .then(function (answer) {
        console.log('answer from submit button: ', answer);
        SpeechService.addSpeech(answer).then(function(response){
          SpeechService.getUserSpeeches().then(function(response){
            self.userSpeeches.list = response;
          });
        });
      }, function () {
        self.status = 'You cancelled the dialog.';
      });
  };

  function addSpeechDialogController($mdDialog) {
    const self = this;
    self.newSpeech = {
      um:0,
      uh:0,
      ah:0,
      so:0,
      like:0,
      and:0,
      but:0,
      double_clutch: 0,
      false_start: 0,
      you_know: 0,
      other: 0
    };
    self.hide = function () {
      $mdDialog.hide();
    };

    self.cancel = function () {
      $mdDialog.cancel();
    };

    // self.answer = function (answer) {
    //   console.log('answer: ', answer);
    //     $mdDialog.hide(answer);
    //   }
    self.submitSpeech = function(speech){
      if(!speech){
        window.alert('please enter some data.')
      }else if(speech.date == null ){
        window.alert('Please add a date to continue.')
      }else{
        
        $mdDialog.hide(speech);
      }
    }
  };

    

// table params





}]);
