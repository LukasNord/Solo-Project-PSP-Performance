myApp.service('SpeechService', ['$http', '$location', function($http, $location){
    console.log('speech service loaded');
    self = this;
    self.speechArray = { List: [] };

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




    /**Get User Speeches **/


    self.getUserSpeeches = function(){
        console.log('in getUserSpeeches Service');
        $http.get('/api/speech/getUserSpeeches')
        .then(function(response){
            console.log('get Speeches Response: ', response.data);
            self.speechArray.list = response.data;
        }).catch((err)=>{
            console.log('error getting user speeches: ', err);
            
        });
    }// end getUserSpeeches
































}]);//end service