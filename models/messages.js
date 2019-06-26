import { MongoClient } from 'mongodb';
import { mongoURL } from "../config";

const URL = mongoURL;

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

MongoClient.connect(URL, function(err, db) {
    if (err) {
        console.log("Error in connecting to MongoDB.");
        return;
    }
    console.log("Connected...");
    let collection = db.collection('messages');
    collection.insertMany(messages);
    console.log(db.messages.find().pretty());
    db.close;
})
