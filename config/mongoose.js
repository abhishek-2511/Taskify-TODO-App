//import mongoose
const mongoose = require('mongoose');

/* connected to the database and added params to ignore all the deprecation warnings */
mongoose.connect('mongodb://0.0.0.0/todo_list_database', {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

//on error in connection
db.on('error', console.error.bind(console, "Error in connecting to the database!!!"));

//on successfull connection with database
db.once('open', function(){
    console.log('Successfully connected with the DataBase')
});