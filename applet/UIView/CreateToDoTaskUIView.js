class CreateToDoTaskUIView {


    constructor() {
        console.log("Todo UIView loaded");

        // ✅ Cache DOM references
        this.todo_reference = {
            todo_input_text: document.getElementById("todo-input-text"),
            todo_input_button: document.getElementById("todo-input-button"),
        };
    }

    //Get element references
    get todo_add_task_text() {
        let input = this.todo_reference.todo_input_text;
        return {
            get value() {
                return sanitize_input(input.value);
            },
            get element() {
                return input;
            }
        };
    }
    
    get todo_add_task_button() {
        return this.todo_reference.todo_input_button;
    }
}