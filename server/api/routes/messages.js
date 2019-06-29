// Reference: https://stackoverflow.com/questions/24621940/how-to-properly-reuse-connection-to-mongodb-across-nodejs-application-and-module
var express = require('express');
var router = express.Router();
let db = require('../../../models/db.js');

// GET messages
router.get('/', function(req, res, next) {
    let database = db.getDatabase();
    let msgColl = database.collection('messages');
    msgColl.find().toArray((err, messages) => {
        if (err) {
            console.log("error: " + err);
        }
        res.json(messages);
    })
});

// GET individual message
router.get('/:id', function(req, res, next) {
    let id = req.params.id;
    let message = messages.filter(msg => {
        return msg.id === id;
    });
    res.json(message);
});

// POST messages
router.post('/', function(req, res, next) {
    let new_message = req.body;
    messages.push(new_message);
    res.json(messages);
});

// POST message
router.post('/:id', function(req, res, next) {
    let id = req.params.id;
    let new_msg = req.body.text;
    let date = req.body.date;
    for (let i=0; i < messages.length; i++) {
        if (messages[i].id === id) {
            messages[i].text = new_msg;
            messages[i].date = date;
            break;
        }
    }
    res.json(messages);
});

// DELETE message
router.delete('/:id', function(req, res, next) {
    let id = req.params.id;
    let index;
    for (let i=0; i < messages.length; i++) {
        if (messages[i].id === id) {
            index = i;
            break;
        }
    }
    messages.splice(index, 1);
    res.json(messages);
});

// DELETE ALL messages
router.delete('/', function(req, res, next) {
    messages = [];
    res.json(messages);
});



module.exports = router;