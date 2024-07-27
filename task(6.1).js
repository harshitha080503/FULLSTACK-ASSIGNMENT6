
document.addEventListener('DOMContentLoaded',()=>{//attaching event listerner to the button
    const addTaskButton=document.getElementById('add-task-button');
    const newTaskInput=document.getElementById('new-task');
    const taskList=document.getElementById('task-list');
    //to click on that some function must be declared
    addTaskButton.addEventListener('click',addTask);
    newTaskInput.addEventListener('keypress',(event)=>{
        if(event.key==="Enter"){
            addTask();
        }
    });//keypress:Instead of keep on clicking addTask button we can use enter in keyboard

    function addTask(){
        //Logic for adding a new task is present over here
        const taskText=newTaskInput.value.trim();//trim():leading and ending white spaces
        if(taskText!=''){
            const listElement=document.createElement('li');
            listElement.textContent=taskText;
            const completeButton=document.createElement('button');
            completeButton.textContent='Complete';
            completeButton.addEventListener('click',()=>{
                listElement.classList.toggle('completed');
                console.log(listElement);
            })
        

            const deleteButton=document.createElement('button');
            deleteButton.textContent='Delete';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click',()=>{
                listElement.remove();
            })


            listElement.appendChild(completeButton);
            listElement.appendChild(deleteButton);
            taskList.appendChild(listElement)
            console.log(listElement);
            newTaskInput.value="";
        }
    }
    
})