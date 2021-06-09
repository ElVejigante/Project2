const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';

MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log(err);
    }

    // Specify database you want to access
    const db = client.db('');

    console.log(`MongoDB Connected: ${url}`);
  
});


