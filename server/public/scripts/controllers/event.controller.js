myApp.controller('EventsController', ['UserService','NgTableParams','$mdDialog','SpeechService','CohortService','$location','$timeout', function(UserService, NgTableParams, $mdDialog, SpeechService, CohortService, $location, $timeout) {
    console.log('Event controller Loaded');
    
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
    self.cohorts = CohortService.cohorts;
    self.publicEventParticipants = [];
    self.publicEventDate = new Date();
    self.students = [];
    self.eventTopic = '';
    class Person{

        constructor(person, cohortName){
            this.name = person.username;
            this.cohortName = cohortName;
            this.user_id = person.id;
            this.ah = 0;
            this.uh = 0; 
            this.like = 0; 
            this.so = 0;
            this.but = 0;
            this.and = 0;
            this.um = 0;
            this.you_know = 0;
            this.double_clutch = 0;
            this.false_start = 0;
            this.other= 0;
            this.saved = false;
        }
    }

    
    self.addPersonToTable = function(person,cohortName){
        if(!person || ! cohortName){
            window.alert('Must select a cohort and student name first.')
        }else{
            let newPerson = new Person(person,cohortName);
            console.log('add person: ', person, cohortName);
            console.log('new Person: ', newPerson);
            
            self.publicEventParticipants.push(newPerson);
        }
        

    }

    // Load List of Cohorts //
    CohortService.getCohorts()
    .then((response)=>{
      self.cohorts.list = response.data;
      console.log('self.cohorts.list: ', response.data);
      
    }).catch((error)=>{
      console.log(error);
    });

    self.cohortSelected = function(id){
        
        console.log('cohort selected ID: ', id);
        CohortService.getStudents(id)
        .then((response)=>{
             
          self.students.list = response;
          
        })
        .catch((err)=>{
          console.log('failed to get single cohort');
          
        })    
    }

    
    self.savePublicEventSpeech = function(person, date,topic){
        console.log('date of public event: ', date);
        
        person.saved = true;
        let newSpeech = person;
        newSpeech.date = date;
        newSpeech.topic = topic;
        console.log('newSpeech.topic', topic);
        
        let speechToSend = angular.copy(newSpeech);
        console.log('speechToSend: ', speechToSend);
        
         SpeechService.addPublicEventSpeech(speechToSend).then((response)=>{
            console.log('added speech via public event successfully!');
            
         }).catch((err)=>{
             console.log('failed to add speech via public event');
            
         })
        
    }
    

    self.leavePublicEventView = function(){

        swal({
            title: "Are you sure?",
            text: "Have you saved all user data? If not, leaving this page will result in data loss.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                window.location.href = 'http://localhost:9000/#!/user';
            }
          });


        

        
    }






    








}]); // end controller