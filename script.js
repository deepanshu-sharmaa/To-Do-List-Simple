var inputField = document.getElementById('inputField');
var addToDo = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');

addToDo.addEventListener('click', function(){
    
    var data = inputField.value;
    console.log(data);
    
    var paragraph = document.createElement('p');
    paragraph.innerText = data;
    paragraph.classList.add('dummy')
    toDoContainer.append(paragraph); 

    inputField.value='';

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration='line-through'//to cut the task
    })

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph) //to delete the tasks
    })

})