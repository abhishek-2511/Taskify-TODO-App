/*link handler function*/
function change_link(ids){
    /* if no task is selected for deletion, then the user will be prompted to select atleast one task to delete*/
    /* but still the task will be added. */

    if(ids.length == 0){
        window.alert('Please select atleast one task to delete!!');
    }
    s = '/delete-tasks/?'
    let count = 0; 

    for(let id of ids){
        s = s + "id" + count + "="
        s = s + id;
        if(count < ids.length-1){
            s = s + "&";
        }
        count++;
    }
    //replacing the href of the delete button/link to the desired query params
    document.querySelector('#task-action>a').setAttribute('href',s);
}

//add button
//adding event listener to the add button,so that the action href changes to a desired end point
document.querySelector('#task-action>a').addEventListener('click', function(){
    
    let ids = new Array();
    for(let checkbox of document.querySelectorAll('input[type="checkbox"]')){

        if(checkbox.checked){
            ids.push(checkbox.getAttribute('id'));
            //console.log('Checkbox ticked');
        }
    }
    change_link(ids);
});





/* logo handler */
/* if no category is choosen for a particular task, then all the category logos will be hidden from the user in the category list */
for(let logo of document.querySelectorAll('.logo')){
    
    if(logo.innerText =='Choose a Category'){
        logo.style.display = "none"
    }
    if(logo.innerText == "Home"){
        logo.style.backgroundColor = 'purple';
    }
    if(logo.innerText == "Personal"){
        logo.style.backgroundColor = 'coral';
    }
    if(logo.innerText == "Work"){
        logo.style.backgroundColor = 'red';
    }
    if(logo.innerText == "School"){
        logo.style.backgroundColor = 'green';
    }
    if(logo.innerText == "Cleaning"){
        logo.style.backgroundColor = 'deeppink';
    }
    if(logo.innerText == "Other"){
        logo.style.backgroundColor = 'deepskyblue';
    }
}


//add button
// if no field is filled for the task addition, then a warning will be shown to the user to select all the fields. but still all the tasks will be shown to him/her
document.querySelector('button[type="submit"]').addEventListener('click', function(){

    if(document.querySelector('textarea').value=="" || document.querySelector('#two-dropdowns select').value=="Choose a Category" || document.querySelector('#two-dropdowns input').value==""){

        window.alert('Remember to fill all the fields from next time!!!')
        
    }
});