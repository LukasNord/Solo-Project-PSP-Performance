const express = require('express');
const encryptLib = require('../modules/encryption');
const Person = require('../models/Person');
const userStrategy = require('../strategies/sql.localstrategy');
const pool = require('../modules/pool.js');
const router = express.Router();







router.post('/addSpeech', (req, res, next) => {
    console.log('hit speech router with Post');
    
    var saveSpeech = req.body;
    saveSpeech.role = 3;
    console.log('new Speech:', saveSpeech);
    pool.query('INSERT INTO user_speeches (user_id, date, topic, role, ah, uh, likes, so, but, ands, um, you_know, double_clutch, false_start, other) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING id',
      [req.user.id, saveSpeech.date, saveSpeech.topic,saveSpeech.role, saveSpeech.ah, saveSpeech.uh, saveSpeech.like, saveSpeech.so, saveSpeech.but, saveSpeech.and, saveSpeech.um, saveSpeech.you_know, saveSpeech.double_clutch, saveSpeech.false_start, saveSpeech.other], (err, result) => {
        if (err) {
          console.log('error posting new Speech: ', err);
            
          res.sendStatus(500);
          
        } else {
          res.sendStatus(201);
          console.log('successfully added new speech');
          
        }
      });
  });





module.exports = router;