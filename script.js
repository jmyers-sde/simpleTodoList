// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// To keep track of added tasks
const tasks = new Set();

// Add task event listener
addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const task = taskInput.value.trim(); // Remove leading/trailing spaces

    if (!task) {
        alert('Task cannot be empty!');
        return;
    }

    if (tasks.has(task)) {
        alert('Task already exists!');
        return;
    }

    tasks.add(task);
    const taskItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        tasks.delete(task);
        taskItem.remove();
    });

    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = ''; // Clear the input field
}