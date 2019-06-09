var express = require('express');
var router = express.Router();

let messages = [
        {
            name: 'Rick',
            text: 'We\'re no strangers to love. You know the rules and so do I. ' +
            'A full commitment\'s what I\'m thinking of. You wouldn\'t get this from any other guy.',
            date: "6/2/2019 11:45:00",
            index: 0
        },
        {
            name: 'Richard',
            text: 'I just wanna tell you how I\'m feeling... Gotta make you understand...',
            date: "6/2/2019 11:45:30",
            index: 1
        },
        {
            name: 'Paul',
            text: 'Never gonna give you up. Never gonna let you down. ' +
            'Never gonna run around and desert you. Never gonna make you cry. ' +
            'Never gonna say goodbye.',
            date: "6/2/2019 11:50:00",
            index: 2
        },
        {
            name: 'Rick Astley',
            text: 'Never gonna tell a lie and hurt you.',
            date: "6/3/2019 9:45:00",
            index: 3
        }];

// GET messages
router.get('/', function(req, res, next) {
    res.json(messages);
});

// POST message
router.post('/', function(req, res, next) {
    new_message = req.body;
    messages.push(new_message);
    res.json(new_message);
});

module.exports = router;