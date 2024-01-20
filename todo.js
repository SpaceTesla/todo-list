let inp = document.querySelector("#text");
let form = document.querySelector("#myForm");
let todo = document.querySelector("#todo-list");

// Initially hide the todo-list
todo.classList.add("d-none");

// Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("clicked");

  // Checking if input is not empty
  if (inp.value.trim() !== "") {
    // Creating elements for the task
    let task = document.createElement("div");
    task.classList.add(
      "list-group-item",
      "bg-dark-subtle",
      "border",
      "border-dark-subtle",
      "text-dark-emphasis",
      "fs-5",
      "d-flex"
    ); // Added Bootstrap classes for styling

    // Creating checkbox
    let cb = document.createElement("input");
    cb.type = "checkbox";
    cb.classList.add("form-check-input", "me-2"); // Added Bootstrap classes for styling

    // Creating task text
    let taskText = document.createElement("span");
    taskText.innerHTML = inp.value;
    taskText.classList.add("me-auto"); // Align text to the left

    // Creating delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm"); // Added Bootstrap classes for styling

    // Event listener for delete button
    deleteBtn.addEventListener("click", () => {
      todo.removeChild(task);
      toggleTodoListVisibility();
    });

    // Event listener for checkbox
    cb.addEventListener("change", () => {
      if (cb.checked) {
        // Apply strikethrough style when checkbox is checked
        taskText.style.textDecoration = "line-through";
      } else {
        // Remove strikethrough style when checkbox is unchecked
        taskText.style.textDecoration = "none";
      }
    });

    // Appending elements to the task
    task.appendChild(cb);
    task.appendChild(taskText);
    task.appendChild(deleteBtn);

    // Appending task to the todo list container
    todo.appendChild(task);
    inp.value = ""; // Clearing input after adding the task

    // Show the todo-list since there's at least one item
    toggleTodoListVisibility();
  }
});

function toggleTodoListVisibility() {
  // Hide todo-list if there are no items
  if (todo.children.length === 0) {
    todo.classList.add("d-none");
  } else {
    todo.classList.remove("d-none");
  }
}
