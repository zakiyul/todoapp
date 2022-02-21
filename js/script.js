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

    submitForm.addEventListener("submit", e => {
        e.preventDefault();
        addTodo()
    })

    document.addEventListener(RENDER_EVENT, function(){
        console.log(todos);
    })
})