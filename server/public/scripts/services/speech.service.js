myApp.service('SpeechService', ['$http', '$location', function($http, $location){
    console.log('speech service loaded');
    self = this;


    /**Add speech to database **/
    self.addSpeech = function(newSpeech){
        console.log('newSpeech hit service: ', newSpeech);
        
        $http.post('/api/speech/addSpeech', newSpeech)
        .then( function(response){
            console.log('speech added');
            
        })
        .catch((err)=> {
            console.log('error posting: ', err);
            
        });


    }// end add speech








































}]);//end service