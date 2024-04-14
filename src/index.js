
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    // Get the value entered by the user in the input field
    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value;

    // Create a new task element (e.g., <li>) with the task description
    const newTask = document.createElement('li');
    newTask.textContent = taskDescription;

    // Append the new task element to the task list
    const taskList = document.getElementById('tasks');
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = '';
  });
});
