// https://mongodb.github.io/node-mongodb-native/3.0/reference/ecmascriptnext/connecting/
// Connect to MongoDB
const MongoClient = require('mongodb').MongoClient;
const url = require('../config.js');

module.exports = {
  init,
  close,
  getDatabase
};

let db;
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

async function init() {
  let client;
  const dbName = 'data';
  const coll = 'messages';

  try {
    client = await MongoClient.connect(url, { useNewUrlParser: true });
    db = client.db(dbName);
    console.log("Connected...");
    db.createCollection(coll).then(() => {
      let msgCollection = db.collection(coll);
      msgCollection.stats((err, res) => {
        printIfError(err);
        if (res.count === 0) {
          msgCollection.insertMany(messages);
        }
      });
      // printCollection(msgCollection);
    });
  } catch (err) {
    console.log("Error in connecting to MongoDB: " + err);
  }
  
  // if (client) {
    // close(db);
  // }  
}

function printIfError(err) {
  if (err) {
    console.log("error: " + err);
  }
}

function printCollection(coll) {
  coll.find({}, (err, data) => {
    printIfError(err);
    data.toArray((err, res) => {
      printIfError(err);
      console.log(res);
    });
  });  
}

function close(db) {
  db.close;
  console.log("Disconnected.");
}

function getDatabase() {
  return db;
}