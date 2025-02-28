document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    function saveTask() {
        const tasks = [];
        document.querySelectorAll("#taskList li").forEach(li => {
            tasks.push({
                text: li.firstChild.textContent,
                completed: li.classList.contains("completed")
            });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(task => {
            addTask(task.text);
            if (task.completed) {
                taskList.lastChild.classList.add("completed");
            }
        });
    }

    function addTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
            saveTask();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Hapus";
        deleteBtn.classList.add("delete");

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Mencegah event bubbling ke li
            li.remove();
            saveTask();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        addTask(taskText);
        saveTask();
        taskInput.value = "";
    });

    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
            saveTask();
        } else if (e.target.tagName === "LI") {
            e.target.classList.toggle("completed");
            saveTask();
        }
    });

    loadTasks();
});