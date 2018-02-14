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
    res.send('Must be logged in to access reports!');
  }



router.get('/getReports', isAuthenticated,(req,res)=>{
    const counterArray = [];
    console.log('--------- Reports -----req.user: ', req.user );
    const getAhQuery = `SELECT date , SUM(ah) FROM user_speeches WHERE user_speeches.user_id = $1 GROUP BY user_speeches.date`;
    const getUhQuery = `SELECT date , SUM(uh) FROM user_speeches WHERE user_speeches.user_id = $1 GROUP BY user_speeches.date`;               

    const getLikesQuery = `SELECT date , SUM(likes) FROM user_speeches WHERE user_speeches.user_id = $1 GROUP BY user_speeches.date`;                

    const getSoQuery = `SELECT date , SUM(so) FROM user_speeches WHERE user_speeches.user_id = $1 GROUP BY user_speeches.date`;              

    pool.query(getAhQuery,[req.user.id])
        .then((result)=>{
           counterArray.push(result.rows);
           console.log('pushed into array: ', counterArray);
           res.send(counterArray);
           
        }).catch((err)=>{
            console.log('error getting reports: ', err);
            
        });










}); // end get Reports






















  module.exports = router;