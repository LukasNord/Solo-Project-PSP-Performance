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

    console.log('userID: ', req.user.id);
    const getSpeechesQuery = `SELECT * FROM user_speeches WHERE user_speeches.user_id = $1`;
    pool.query(getSpeechesQuery, [req.user.id])
        .then((result)=> {
            console.log('--------success Getting speeches');
            
            res.send(result.rows);  
        }).catch((err)=>{
            console.log('error getting speeches: ', err);
            
        });

}); //end GET UserSPeeches






/** Add User Speech to Database. Return Speech ID and use it to add comment to database. */
router.post('/addSpeech', isAuthenticated, (req, res, next) => {
    console.log('hit speech router with Post');
    var saveSpeech = req.body;
    saveSpeech.role = 3;
    console.log('new Speech:', saveSpeech);
    const addSpeechQuery = 'INSERT INTO user_speeches (user_id, date, topic, role, ah, uh, likes, so, but, ands, um, you_know, double_clutch, false_start, other, comment) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)';
    pool.query(addSpeechQuery, [req.user.id, saveSpeech.date, saveSpeech.topic,saveSpeech.role, saveSpeech.ah, saveSpeech.uh, saveSpeech.like, saveSpeech.so, saveSpeech.but, saveSpeech.and, saveSpeech.um, saveSpeech.you_know, saveSpeech.double_clutch, saveSpeech.false_start, saveSpeech.other, saveSpeech.comment])
            .then((result) =>{
                res.sendStatus(201);
            }).catch((err)=> {
                console.log('error making saveSpeech query: ', err);
                res.sendStatus(500);
            }); 
});//end post
  





module.exports = router;