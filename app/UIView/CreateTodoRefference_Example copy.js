//This file here is created to be a reference for creating new UI views.
//It's a template for creating user interface views manually.

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

    addSanitizeFn(fn) {
        this.sanitizeFns.push(fn);
    }
    removeSanitizeFn(fn) {
        this.sanitizeFns = this.sanitizeFns.filter(f => f !== fn);
    }
}


