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


// get cohort list for display // 
router.get('/',(req,res)=>{
    
    const getCohortsQuery = `SELECT * FROM cohorts ORDER BY cohort_name ASC`;
            
    pool.query(getCohortsQuery)
        .then((result)=>{
          res.send(result.rows);
           
        }).catch((err)=>{
            console.log( err);
            
        });

}); // end get Reports


  module.exports = router;