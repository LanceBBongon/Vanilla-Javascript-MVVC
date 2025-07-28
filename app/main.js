class TodoAppController {
    constructor() {
        
        // Unpackage the UI references
        this.IcreateTodoTaskValue = ICreateTodoTask_RefferenceHtml;
        this.IcreateTodoTaskElement = this.IcreateTodoTask.txt_add_task.element;

        //Initialize UI value references
        this.txt_createTask = this.IcreateTodoTaskValue.txt_add_task;

        //Initialize UI elements references
        this.onKey_createTask = this.IcreateTodoTaskElement.element.todo_input_text;
        this.btn_addTodo = this.IcreateTodoTaskElement.element.todo_input_button;


        this.handleEnterKey = this.handleEnterKey.bind(this);
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.initialise();
    }

    initialise() {
        // Attach event listeners directly
        this.onKey_createTask.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                this.txt_createTask = "500"; // Example value, replace with actual logic
                console.log("Hello from Enter Key Handler", this.txt_createTask.value());
                this.handleEnterKey(this.txt_createTask.value());
            }
        });
        this.btn_addTodo.element.addEventListener('click', () => {
            this.handleAddButtonClick(this.txt_createTask.value());
        });
    }

    handleEnterKey(todoText) {
        console.log("Hello from Enter Key Handler", todoText);
    }

    handleAddButtonClick(todoText) {
        console.log('New todo item (Button):', todoText);
    }
}

// class TodoAppView {
//     constructor() {
//         this.ICreateTodoTask = IRefCreateTodoTask;
//     }

//     renderTodoItem(todoText) {
//         const todoList = this.ICreateTodoTask.todo_dom_reference.todoList;
//         const todoItem = document.createElement("li");
//         todoItem.textContent = todoText;
//         todoList.appendChild(todoItem);
//     }

//     // Additional methods to render or update the view can be added here
// }
// // Instantiate the controller with only the UI view it needs
// const app = new TodoAppController(index.createTask);