myApp.service('SpeechService', ['$http', '$location', function($http, $location){
    console.log('speech service loaded');
    self = this;
    self.speechArray = { List: [] };


     /**GET All User Speeches **/
     self.getUserSpeeches = function(){
        let promise = $http.get('/api/speech/getUserSpeeches')
                        .then(function(response){
                            //self.speechArray.list = response.data;
                            return response.data;
                        }).catch((err)=>{
                            console.log('error getting user speeches: ', err);
                            
                        });
        return promise;
    }// end getUserSpeeches

    /**POST speech to database **/
    self.addSpeech = function(newSpeech){
        let promise = $http.post('/api/speech/addSpeech', newSpeech)
                        .then( function(response){
                            console.log('speech added');
                            return true;
                        })
                        .catch((err)=> {
                            console.log('error posting: ', err);
                        });
        return promise;
    }// end add speech


    /** PUT Edit Speech in database **/
    self.editSpeech = function(editedSpeech){
        
        $http.put(`/api/speech/editSpeech/`, editedSpeech)
        .then(function(response){
            console.log('Edit Speech came back success!');  
            self.getUserSpeeches();      
        }).catch((err)=>{
            console.log('error editing speech on put call: ', err); 
        });
    }// end editSpeech



    /** Delete a Speech **/
    self.deleteSpeech = function(deletedSpeech){
            $http.delete(`/api/speech/deleteSpeech/${deletedSpeech.id}`)
                            .then(function(response){
                                console.log('successfully deleted speech:', response);
                                
                            }).catch((err)=>{
                                console.log('failed to delete speech: ', err);   
                                
                            });
           
    }

























}]);//end service