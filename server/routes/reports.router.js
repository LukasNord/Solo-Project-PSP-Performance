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

    console.log('--------- Reports -----req.user: ', req.user );
    const getReportsQuery = `SELECT 
                            COALESCE(NULLIF(ah,''), '0')
                            COALESCE(NULLIF(uh,''), '0')
                            COALESCE(NULLIF(likes,''), '0')
                            COALESCE(NULLIF(so,''), '0')
                            COALESCE(NULLIF(but,''), '0')
                            COALESCE(NULLIF(ands,''), '0')
                            COALESCE(NULLIF(um,''), '0')
                            COALESCE(NULLIF(you_know,''), '0')
                            COALESCE(NULLIF(double_clutch,''), '0')
                            COALESCE(NULLIF(false_start,''), '0')
                            COALESCE(NULLIF(other,''), '0')
                            FROM user_speeches WHERE user_speeches.user_id = $1`;
    pool.query(getReportsQuery,[req.user.id])
        .then((result)=>{
            console.log('result of reports query: ', result.rows);
        }).catch((err)=>{
            console.log('error getting reports: ', err);
            
        });










}); // end get Reports






















  module.exports = router;