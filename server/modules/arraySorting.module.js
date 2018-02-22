const moment = require('moment');



function arraySort(arrayIn){
    
    let finalizedArray = [];
    let dateArray = [];
    let umArray = [];
    let uhArray = [];
    let ahArray = [];
    let soArray = [];
    let likeArray = [];
    let andArray = [];
    let butArray = [];
    let doubleClutchArray = [];
    let falseStartArray = [];
    let youKnowArray = [];
    let otherArray = [];

    for(let i = 0; i<arrayIn.length; i++){
        dateArray.push(moment(arrayIn[i].date).format("MMM, Do YYYY"));
        
        umArray.push(arrayIn[i].um);
        uhArray.push(arrayIn[i].uh);
        ahArray.push(arrayIn[i].ah);
        soArray.push(arrayIn[i].so);
        likeArray.push(arrayIn[i].likes);
        andArray.push(arrayIn[i].ands);
        butArray.push(arrayIn[i].but);
        doubleClutchArray.push(arrayIn[i].double_clutch);
        falseStartArray.push(arrayIn[i].false_start);
        youKnowArray.push(arrayIn[i].you_know);
        otherArray.push(arrayIn[i].other);
    }

    finalizedArray.push(dateArray);
    finalizedArray.push(umArray);
    finalizedArray.push(uhArray);
    finalizedArray.push(ahArray);
    finalizedArray.push(soArray);
    finalizedArray.push(likeArray);
    finalizedArray.push(andArray);
    finalizedArray.push(butArray);
    finalizedArray.push(doubleClutchArray);
    finalizedArray.push(falseStartArray);
    finalizedArray.push(youKnowArray);
    finalizedArray.push(otherArray);

    console.log('finalized Array: ', finalizedArray);
    
    return finalizedArray;

}


module.exports = arraySort;