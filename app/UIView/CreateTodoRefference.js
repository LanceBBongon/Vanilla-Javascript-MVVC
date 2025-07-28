class CreateTodo_RefferenceHtml {
    constructor() {
        console.log("Todo UIView loaded");
        // ✅ Cache DOM references
        this.todo_dom_reference = {
            todoList: document.getElementById("todo-list"),
            todo_input_text: document.getElementById("todo-input-text"),
            todo_input_button: document.getElementById("todo-input-button"),
        };
    }

    element() {
        return this.todo_dom_reference;
    }
    get txt_add_task() {
        return () => sanitize_input(this.todo_dom_reference.todo_input_text.value);
    }
    
    //Tried this code but it does not work.
    //The problem is that the getter is not returning the value correctly at times. 
    //The program becomes confused on which value to return once it's set outside the class.
    // get txt_add_task() {
    //     return {
    //         get value() {
    //             return sanitize_input(this.todo_dom_reference.todo_input_text.value);
    //         },
    //         get element() {
    //             return this.todo_dom_reference.todo_input_text;
    //         },
    //     };
    // }

    set txt_add_task(value) {
        this.todo_dom_reference.todo_input_text.value = sanitize_input(value);
    }
}
const ICreateTodoTask_RefferenceHtml = new CreateTodo_RefferenceHtml();


