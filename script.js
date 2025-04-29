function AddressBook() {
    this.contacts = {} ;
};
AddressBook.prototype.addContact = function(contact) {
    this.contacts[contact.firstName] = contact;
};
function Contact(firstName,lastName,contact,email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.contact = contact;
    this.email = email;
};
Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};
let addressBook = new AddressBook();
let contactForm = document.getElementById("cform")
contactForm.addEventListener("submit",function(event){
    event.preventDefault();
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const email = document.getElementById("email").value.trim();

    const newContact = new Contact(firstName,lastName,contact,email);
    addressBook.addContact(newContact);
});
function ToDo(description) {
    this.description= description;
    this.done = false;
}
ToDo.prototype.markDone = function() {
    this.done =true;
};
ToDo.prototype.markUndone = function() {
    this.done = false;
};
function ToDoList(){
    this.tasks = [];
}
ToDoList.prototype.addTask= function(task) {
    this.tasks.push(task);
};
ToDoList.prototype.removeTask = function(index) {
    this.tasks.splice(index,1);
};

const toDoList = new ToDoList();
const taskList = document.getElementById("tasklist")
const form = document.getElementById("Tform")
form.addEventListener("submit",function(event){
    event.preventDefault();
    const input= document.getElementById("taskInput");
    const task= new ToDo(input.value.trim());
    if (task.description) {
        toDoList.addTask(task);
        displayTasks();
        form.reset();
    }
});
function displayTasks() {
    taskList.innerHTML = "";
    toDoList.tasks.forEach((task,index) => {
        const li = document.createElement("li");
        li.innerHTML =`
        <span style="text-decoration:${task.done ? 'line-through' : 'none'}">
        ${task.description}
        </span>
        <button onClick= "toggleDone(${index})">${task.done ? 'Undo' : 'Done'}</button>
        <button onClick= "deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });

    
    window.toggleDone = function(index){
        const task = toDoList.tasks[index];
        task.done ? task.markDone() : task.markDone();
        displayTasks();
    }


    window.deleteTask = function(index) {
        toDoList.removeTask(index);
        displayTasks();
    }
}
