// setting up the mongodb connection through mongoose

const mongoose = require('mongoose');
// // const url = 'mongodb://0.0.0.0:27017/db';
// const url = 'mongodb://127.0.0.1:27017/db';


// // mongoose.connect('url') 
// mongoose.connect(url,{
    //serverSelectionTimeoutMS: 10000,
//});

mongoose.connect('mongodb://127.0.0.1/issuetracker');
const db=mongoose.connection;

//  catch an error when connecting mongodb
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});


// exports this module
module.exports=db;  