// setting up the mongodb connection through mongoose

const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://Pratham:Pratham123@cluster0.c87sf5o.mongodb.net/issue_tracker');
const db=mongoose.connection;

//  catch an error when connecting mongodb
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});


// exports this module
module.exports=db;  
