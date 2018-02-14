const express = require('express');
const encryptLib = require('../modules/encryption');
const Person = require('../models/Person');
const userStrategy = require('../strategies/sql.localstrategy');
const pool = require('../modules/pool.js');
const router = express.Router();

// Checks to make sure the user is logged to hit any routes where we use the middleware
var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()){
      return next();
    }
    res.send('Must be logged in to add items!');
  }



/** Get All User Speeches**/
router.get('/getUserSpeeches',isAuthenticated, (req,res)=>{
    console.log('---> Hit GET USER SPEECHES');
    
    const getSpeechesQuery = `SELECT * FROM user_speeches WHERE user_speeches.user_id = $1`;
    pool.query(getSpeechesQuery, [req.user.id])
        .then((result)=> {
            console.log('result.rows: ', result.rows);
            
            res.send(result.rows);  
        }).catch((err)=>{
            console.log('error getting speeches: ', err);
        });
}); //end GET UserSPeeches

/** Add User Speech to Database. Return Speech ID and use it to add comment to database. */
router.post('/addSpeech', isAuthenticated, (req, res, next) => {
    var saveSpeech = req.body;
    // Place holder for later stretch feature.
    saveSpeech.role = 3; 
    const addSpeechQuery = 'INSERT INTO user_speeches (user_id, date, topic, role, ah, uh, likes, so, but, ands, um, you_know, double_clutch, false_start, other, comment) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)';
    pool.query(addSpeechQuery, [req.user.id, saveSpeech.date, saveSpeech.topic,saveSpeech.role, saveSpeech.ah, saveSpeech.uh, saveSpeech.like, saveSpeech.so, saveSpeech.but, saveSpeech.and, saveSpeech.um, saveSpeech.you_know, saveSpeech.double_clutch, saveSpeech.false_start, saveSpeech.other, saveSpeech.comment])
            .then((result) =>{
                res.sendStatus(201);
            }).catch((err)=> {
                console.log('error making saveSpeech query: ', err);
                res.sendStatus(500);
            }); 
});//end post
  

/** Edit the speech **/
router.put('/editSpeech', isAuthenticated, (req,res,next)=>{
    
    const blingList = [req.body.date, req.body.topic, req.body.role,req.body.ah,req.body.uh,req.body.likes,req.body.so,req.body.but,req.body.ands,req.body.um,req.body.you_know,req.body.double_clutch,req.body.false_start,req.body.other,req.body.comment,req.body.id];
    const editSingleSpeechQuery = `UPDATE user_speeches 
                                   SET date = $1, topic = $2, role = $3, ah = $4, uh = $5, likes = $6, so = $7, but = $8, ands = $9, um = $10, you_know = $11, double_clutch = $12, false_start = $13, other = $14, comment = $15
                                   WHERE user_speeches.id = $16`;
    pool.query(editSingleSpeechQuery, blingList)
        .then((result)=>{
            res.sendStatus(200);
        }).catch((err)=>{
            console.log('error updating speech record: ', err);
            res.sendStatus(500);
        });
}); // end Edit Speech



router.delete('/deleteSpeech/:id', isAuthenticated, (req,res,next)=>{

    console.log('req.params.id: ', req.params.id);
    const deleteQuery = `DELETE FROM user_speeches WHERE id = $1;`
    
    pool.query(deleteQuery,[req.params.id])
        .then((result)=>{
            console.log('item deleted: ', result);
            
            res.sendStatus(202)
        }).catch((err)=>{
            console.log('failed to delete item: ', err);
            res.sendStatus(500)
        });

});











module.exports = router;