document.addEventListener("DOMContentLoaded", function(){
    const submitForm = document.getElementById("form");
    const todos = [];
    const RENDER_EVENT = "render-todo";

    const generateId = () => {
        return +new Date();
    }
    const generateTodoObj = (id, task, timestamp, isCompleted) => {
        return {
            id,
            task,
            timestamp,
            isCompleted
        }
    }
    
    function addTodo(){
        const titleTodo = document.getElementById("title").value;
        const dateTodo = document.getElementById("date").value;

        const generateID = generateId();
        const todoObj = generateTodoObj(generateID, titleTodo, dateTodo, false);
        todos.push(todoObj);

        document.dispatchEvent(new Event(RENDER_EVENT));
    }

    function makeTodo(todoObj){
        const titleTodo = document.createElement("h2");
        titleTodo.innerText = todoObj.task;

        const dateTodo = document.createElement("p");
        dateTodo.innerText = todoObj.timestamp;

        const textContainer = document.createElement("div");
        textContainer.classList.add("inner");
        textContainer.append(titleTodo, dateTodo);

        const container = document.createElement("div");
        container.classList.add("item", "shadow");

        container.append(textContainer);
        container.setAttribute("id", `todo-${todoObj.id}`);

        return container;
    }

    submitForm.addEventListener("submit", e => {
        e.preventDefault();
        addTodo()
    })

    document.addEventListener(RENDER_EVENT, function(){
        const todoListYgHarusDiLakukan = document.getElementById("todos");
        todoListYgHarusDiLakukan.innerHTML = "";

        for(let todoItem of todos){
            const todoEl = makeTodo(todoItem);
            todoListYgHarusDiLakukan.append(todoEl)
        }

    })
})