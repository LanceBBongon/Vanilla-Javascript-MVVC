//This file here is created to be a reference for creating new UI views.
//It's a template for creating user interface views manually.
//You can use this as a guide to create your own UI views.
//However this is now superceded by the UIHandler.js file.

class CreateTodoRefference {
    constructor() {
        this.sanitizeFns = [];
        this.configElements = {
            todoList: document.getElementById('todo-list'),
            todoInput: document.getElementById('todo-input'),

        };
    }

    element() {
        return this.configElements;
    }

    get todoInputValue() {
        return this.configElements.todoInput.value;
    }
    set todoInputValue(val) {
        this.configElements.todoInput.value = val;
    }
}


