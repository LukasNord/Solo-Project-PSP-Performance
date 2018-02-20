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

router.post('/', isAuthenticated ,(req,res)=>{

  const addCohortQuery = `INSERT INTO cohorts (cohort_name) VALUES ($1)`;
  pool.query(addCohortQuery,[req.body.cohort_name])
    .then((result)=>{
      console.log('successfully added Cohort to DB');
      res.sendStatus(201);
    })
    .catch((err)=>{
      console.log('error adding cohort to DB: ', err);
      
    })


}); // end Post cohort to database.

router.get('/singleCohort/:id',(req,res)=>{
  console.log('hit single cohort route: ', req.params.id);
  
  let cohort_id = req.params.id;
  const getSingleCohortQuery = `SELECT * FROM users WHERE users.cohort = $1 ORDER BY username ASC`;
          
  pool.query(getSingleCohortQuery,[cohort_id])
      .then((result)=>{
        console.log('results of single cohort Query: ', result.rows);
        
        res.send(result.rows);
         
      }).catch((err)=>{
          console.log( err);
          
      });

});
  module.exports = router;