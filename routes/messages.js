// Reference: https://stackoverflow.com/questions/24621940/how-to-properly-reuse-connection-to-mongodb-across-nodejs-application-and-module
var express = require('express');
var router = express.Router();
let db = require('../models/db.js');

// GET messages
router.get('/', function(req, res, next) {
    let database = db.getDatabase();
    let msgColl = database.collection('messages');
    msgColl.find({}).toArray((err, messages) => {
        if (err) {
            console.log("error: " + err);
        }
        res.json(messages);
    })
});

// // GET individual message by id
// router.get('/:id', function(req, res, next) {
//     let id = req.params.id;
//     let database = db.getDatabase();
//     let msgColl = database.collection('messages');
//     msgColl.find({id: id}).toArray((err, messages) => {
//         if (err) {
//             console.log("error: " + err);
//         }
//         res.json(messages);
//     })
// });

// GET individual message by name
router.get('/:name', function(req, res, next) {
    let name = req.params.name;
    let filter = name === ""? {}: {name: name};
    let database = db.getDatabase();
    let msgColl = database.collection('messages');
    msgColl.find(filter).toArray((err, messages) => {
        if (err) {
            console.log("error: " + err);
        }
        res.json(messages);
    })
});

// POST messages
router.post('/', function(req, res, next) {
    let new_message = req.body;
    let database = db.getDatabase();
    let msgColl = database.collection('messages');
    msgColl.insertOne(new_message, () => {
        msgColl.find({}).toArray((err, messages) => {
            if (err) {
                console.log("error: " + err);
            }
            res.json(messages);
        })
    });
});

// POST message
router.post('/:id', function(req, res, next) {
    let id = req.params.id;
    let new_msg = req.body.text;
    let date = req.body.date;
    let database = db.getDatabase();
    let msgColl = database.collection('messages');
    msgColl.update(
        {id: id},
        {$set: {text: new_msg, date: date}},
        () => {
            msgColl.find({}).toArray((err, messages) => {
                if (err) {
                    console.log("error: " + err);
                }
                res.json(messages);
            })
        }
    );
});

// DELETE message
router.delete('/:id', function(req, res, next) {
    let id = req.params.id;
    let database = db.getDatabase();
    let msgColl = database.collection('messages');
    msgColl.deleteOne({id: id}, () => {
        msgColl.find({}).toArray((err, messages) => {
            if (err) {
                console.log("error: " + err);
            }
            res.json(messages);
        })
    });
});

// DELETE ALL messages
router.delete('/', function(req, res, next) {
    let database = db.getDatabase();
    let msgColl = database.collection('messages');
    msgColl.drop();
    res.json([]);
});



module.exports = router;