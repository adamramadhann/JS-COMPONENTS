document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    function saveTask() {
        const task = [];
        document.querySelectorAll("#tasklist li").forEach(li => {
            task.push({
                text : li.firstChild.textContent,
                completed : li.classList.contains("completed")
            })
            localStorage.setItem("tasks", JSON.stringify(task))
        })
    }

    loadTeks()

    function addTask(taskText) {
        const li = document.createElement("li");

        li.textContent = taskText;
        li.addEventListener("click", () => {
            li.classList.toggle("completed")
            saveTask()
        })

        const deletedBtn = document.createElement("button");
        deletedBtn.textContent = "Hapus";
        deletedBtn.classList.add("deleted")

        li.appendChild(deletedBtn)
        taskList.appendChild(li)
    }


    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if(taskText === "") return;

        addTask(taskText)
        saveTask()
        taskInput.value = "";
    })

    taskList.addEventListener("click", (e) => {
        if(e.target.classList.contains("deleted")) {
            e.target.parentElement.remove()
            saveTask()
        } else if (e.tager.tagName === "LI") {
            e.target.classList("complated");
            saveTask()
        }
    })

    function loadTeks () {
        const taks = JSON.parse(localStorage.getItem("tasks")) || [];
        taks.forEach(task => {
            addTask(task.text);
            if(task.completed) {
                taskList.lastChild.classList.add("completed")
            }
        })
    }
})