
let todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [
    // {
    // item: 'writing',
    // dueDate: '03/03/24'
    // },
    // {
    // item: 'script',
    // dueDate: '03/03/20'
    // }
];
displayItems();

function addTask() {
                 // Implementation for adding task
                 let taskInput = document.querySelector('#task-input');
                 let dateInput = document.querySelector('#date-input');
                 let taskItem = taskInput.value.trim();
                 let dateItem = dateInput.value.trim();

                 console.log(taskItem);
                 todoList.push({item: taskItem, dueDate: dateItem});
                 taskInput.value = '';
                 dateInput.value = '';
                 localStorage.setItem('todoList', JSON.stringify(todoList));
                 displayItems();
             }

function displayItems(){
        localStorage.setItem('todoList', JSON.stringify(todoList));
        let displayElement=document.querySelector('.todo-container');
        let newHtml='';
        for(let i=0; i<todoList.length; i++){
            let {item, dueDate}= todoList[i];
            newHtml+= `
                        <span>${item}</span>
                        <span>${dueDate}</span>
                        <button id="delete"; onclick=' 
                        todoList.splice(${i}, 1); displayItems();'>Delete</button>
                              `;
            
        }
        console.log(newHtml);
        displayElement.innerHTML=newHtml;
}