let todoList=[
{
  items:'Buy Cloths',
  dueDate:'4/10/2024'
},
{
  items:'Go to school',
  dueDate:'4/10/2024'
}
];
displayItems();

function addTodo()
{
  let inputElement=document.querySelector("#todo-input");
  let dateElement=document.querySelector("#todo-date");
  let todoItem=inputElement.value;
  let todoDate=dateElement.value;
  todoList.push({items:todoItem,dueDate:todoDate});
  
  inputElement.value='';
  dateElement.value='';
  displayItems();
}

function displayItems()
{
  let containerElement=document.querySelector('.todo-container');
  let newHtml='';
  
  for(let i=0;i<todoList.length;i++)
  {
    let todoItem=todoList[i].items;
    let todoDate=todoList[i].dueDate;
    newHtml+=`
    
    <span>${todoItem} </span>
    <span>${todoDate} </span>
    <button class="btn-delete" onclick="todoList.splice(${i},1);displayItems();">Delete</button>
    
    `
    
  }
  containerElement.innerHTML=newHtml;
}
