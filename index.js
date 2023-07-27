//Importing our express
const express = require('express');

//the port on which the server runs
const port = process.env.port || 8000;

//instantializing the app
const app = express();

//Database configuration
const db = require('./config/mongoose');

//database model
const tasks = require('./models/task');
const { error } = require('console');

//Setting the routes 
app.set('case sensitive routing',false);

app.set('views', './views');

//setting up the view engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

//middleware for asset folder
app.use(express.static('assets'));


//Homepage of our app
app.get('/', async function(req,res){

    try{
        const task = await tasks.find({});
        
        const options = {
            title: 'Taskify - TODO App',
            task_list: task,
        };
        
        return res.render('todo_list.ejs',options);
    } 
    catch(error){
        console.log('There was an error in fetching the tasks from the database')
        return;
    }
});


//route for creating a task
app.post('/create-task',async function(req,res){

    try{
        const new_task = await tasks.create(req.body);
        //on successful creation of task return to home page
        return res.redirect('back');
    }
    catch(error){
        console.log('Error in creating a task!!', error);
        return;
    }
});


//deleting a Task
app.get('/delete-tasks/', async function(req,res){

    //deleting many documents with given ids together 
    //$in - searches for any id from the given list of ids
    try{
        //first i will store all ids in this array and will be using these ids to delete from the database
        let ids = [];
        for(let i in req.query){
            //adding the ids
            ids.push(req.query[i]);
        }
        await tasks.deleteMany({
            _id: {$in:ids}
        });

        return res.redirect('back');
    }
    catch(error){
        console.log('Unable to delete from the database');
        return;
    }

});


//listening to the port 8000
app.listen(port, function(err){

    if(err){
        console.log('There was an error in starting the server');
        return;
    }
    //on Success
    console.log(`Server is running on port ${port}`);
});