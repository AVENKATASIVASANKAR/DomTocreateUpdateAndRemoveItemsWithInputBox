var todobtn=document.getElementById('todo-btn');
var update=document.getElementById('update');
var remove=document.getElementById('remove');
var inp =document.getElementById('inp');
var list=document.getElementById('todo-list');
var todoitem=document.getElementById('todo-item');

var  InputValue=''
inp.addEventListener('input',function(e){
 InputValue=e.target.value;
})

function newTextItem(){
    var newElement=document.createElement('li');
    
    newElement.id='list'+count;
    var count=parseInt(list.childElementCount)+1;
    var text=document.createTextNode(InputValue);
    newElement.appendChild(text);
    list.appendChild(newElement);
    return newElement;
}

todobtn.addEventListener('click',newTextItem);

function updateItem(){

    var newElement=document.createElement('li');
    
    newElement.id='list'+count;
    var count=parseInt(list.childElementCount)+1;
    var text=document.createTextNode(InputValue);
    newElement.appendChild(text);
    list.appendChild(newElement);


    var newUpdate=list.firstElementChild;
   var Answer= list.replaceChild(newElement,newUpdate);
    console.log(Answer);
        }
update.addEventListener('click',updateItem);

  
function RemoveItem(){
    var newElement=document.createElement('li');
    
    newElement.id='list'+count;
    var count=parseInt(list.childElementCount)+1;
    var text=document.createTextNode(InputValue);
    newElement.appendChild(text);
    


   
   var Answer= list.removeChild(list.firstChild);
    console.log(Answer);
}



remove.addEventListener('click',RemoveItem)