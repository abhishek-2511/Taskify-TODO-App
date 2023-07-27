//import mongoose first
const mongoose = require('mongoose');

//creating our schema 
const task_schema = new mongoose.Schema(
    {
        Description:{
            type: String
        },
        Category:{
            type: String
        },
        Due_date:{
            type: Date
        },
    }
);

//creating our model with "task_schema" as Schema
const tasks = mongoose.model('tasks', task_schema);

//finally exporting our model so that it can be used inside "index.js"
module.exports = tasks;