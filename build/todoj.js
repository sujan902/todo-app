document.getElementById("todo-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from reloading the page

  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.className = "check-btn";
      completeBtn.innerHTML = '<i class="fas fa-check"></i>';
      completeBtn.onclick = () => {
    li.classList.toggle("completed");
    };

const deleteBtn = document.createElement("button");
deleteBtn.className = "delete-btn";
      deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
      deleteBtn.onclick = () => {
    li.remove();
};

actions.appendChild(completeBtn);
actions.appendChild(deleteBtn);

li.appendChild(span);
li.appendChild(actions);

document.getElementById("taskList").appendChild(li);
input.value = "";
});