var express = require('express');
var router = express.Router();

let messages = [
        {
            name: 'Rick',
            text: 'We\'re no strangers to love. You know the rules and so do I. ' +
            'A full commitment\'s what I\'m thinking of. You wouldn\'t get this from any other guy.',
            date: "6/2/2019 11:45:11",
            id: "622019114511"
        },
        {
            name: 'Richard',
            text: 'I just wanna tell you how I\'m feeling... Gotta make you understand...',
            date: "6/2/2019 11:45:30",
            id: "622019114530"
        },
        {
            name: 'Paul',
            text: 'Never gonna give you up. Never gonna let you down. ' +
            'Never gonna run around and desert you. Never gonna make you cry. ' +
            'Never gonna say goodbye.',
            date: "6/2/2019 11:50:00",
            id: "622019115000"
        },
        {
            name: 'Rick Astley',
            text: 'Never gonna tell a lie and hurt you.',
            date: "6/3/2019 9:45:04",
            id: "63201994504"
        }];

// GET messages
router.get('/', function(req, res, next) {
    res.json(messages);
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
    for (let i=0; i < messages.length; i++) {
        if (messages[i].id === id) {
            messages[i].text = new_msg;
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