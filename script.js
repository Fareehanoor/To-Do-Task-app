// Initialize an array to store tasks
let tasks = [];

// Function to show Add Task form
function showAddTaskForm() {
  document.getElementById('addTask').classList.remove('hidden');
  document.getElementById('deleteTask').classList.add('hidden');
  document.getElementById('taskList').classList.add('hidden');
}

// Function to show Delete Task div
function showDeleteTask() {
  document.getElementById('addTask').classList.add('hidden');
  document.getElementById('deleteTask').classList.remove('hidden');
  document.getElementById('taskList').classList.add('hidden');

  // Populate delete task list
  const deleteTaskList = document.getElementById('deleteTaskList');
  deleteTaskList.innerHTML = '';
  if (tasks.length === 0) {
    const noTasks = document.createElement('li');
    noTasks.textContent = 'No tasks to delete';
    deleteTaskList.appendChild(noTasks);
  } else {
    tasks.forEach((task, index) => {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task-item');
      taskItem.innerHTML = `${task.title} - ${task.description} <i class="fas fa-trash task-delete" onclick="deleteTask(${index})"></i>`;
      deleteTaskList.appendChild(taskItem);
    });
  }
}

// Function to show Task List div
function showTaskList() {
  document.getElementById('addTask').classList.add('hidden');
  document.getElementById('deleteTask').classList.add('hidden');
  document.getElementById('taskList').classList.remove('hidden');

  // Populate task list
  const taskListItems = document.getElementById('taskListItems');
  taskListItems.innerHTML = '';
  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.textContent = `${task.title}: ${task.description}`;
    taskListItems.appendChild(taskItem);
  });
}

// Function to add a task to the Task List
function addTask() {
  const title = document.getElementById('taskTitle').value;
  const description = document.getElementById('taskDescription').value;

  if (title.trim() === '' || description.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  tasks.push({ title, description });
  document.getElementById('taskForm').reset();
}

// Function to delete a task from the Task List
function deleteTask(index) {
  tasks.splice(index, 1);
  showDeleteTask(); // Refresh the delete task list
}

// Attach event listeners to buttons
document.getElementById('addTaskBtn').addEventListener('click', showAddTaskForm);
document.getElementById('deleteTaskBtn').addEventListener('click', showDeleteTask);
document.getElementById('taskListBtn').addEventListener('click', showTaskList);
