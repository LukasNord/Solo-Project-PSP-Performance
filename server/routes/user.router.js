const express = require('express');
const encryptLib = require('../modules/encryption');
const Person = require('../models/Person');
const userStrategy = require('../strategies/sql.localstrategy');
const pool = require('../modules/pool.js');
const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', (req, res) => {
  // check if logged in
  if (req.isAuthenticated()) {
    // send back user object from database
    res.send(req.user);
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  //By default, user registrations will be set to 2 which represents the user security type in the sql table.
  var saveUser = {
    username: req.body.username,
    password: encryptLib.encryptPassword(req.body.password),
    user_type: 2,
    cohort: req.body.cohort
  };
  console.log('new user:', saveUser);
  pool.query('INSERT INTO users (username, password, user_type, cohort) VALUES ($1, $2, $3, $4) RETURNING id',
    [saveUser.username, saveUser.password, saveUser.user_type, saveUser.cohort], (err, result) => {
      if (err) {
        console.log('error registering user: ', err);
        //most common error will be a 409- if it's not a 409 then the above log will help debug.
        res.sendStatus(409);
        
      } else {
        
        
        res.sendStatus(201);
      }
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
    console.log('req.body on login: ', req.body);
    
    res.send(req.user);
});



// clear all server session information about this user
router.get('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
