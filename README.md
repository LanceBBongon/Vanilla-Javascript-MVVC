# Vanilla-Javascript-MVVC

The purpose of Vanilla-Javascript-MVVC is to demonstrate MVVC architechture for maintainability and scalability allowing a developer to use vanilla javascript code and scale it.

Head over the the wiki of this repository for explaination.



This in itself is valid code. The problem is that it overwrites the it gets confused when using the setter...
get todo_input_button() {
    let todoInputButton = this.todo_dom_reference.todo_input_button;
        return {
            get value() {
                return () => sanitize_input(todoInputButton.value);
            },
            get element() {
                return todoInputButton;
            }
    };
}

const IIndex = {
    //Sorted by feature and user interface reference
    createTask: {
        //Using this creates conflickt when it comes to setting the value.
        txt_createTask: ICreateTodoTask_RefferenceHtml.todo_add_task_text,

        onKey_createTask: ICreateTodoTask_RefferenceHtml.todo_add_task_text.element,
        btn_addTodo: ICreateTodoTask_RefferenceHtml.todo_input_button,
    }
};