const mongoose = require('mongoose');

const db = {};

db.dbConnection=(callback)=>{
    mongoose.connect('mongodb://127.0.0.1:27017/practice', { 
    }, (error, result) => {
        if (error) { 
            console.log('Connecton failed', error);
            callback('Database Not Connected !!');
        } else {
            callback(null, ' Database  Connected successfully');

        }

    })
}
module.exports = db ;