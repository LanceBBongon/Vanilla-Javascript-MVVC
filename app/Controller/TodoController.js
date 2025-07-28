// class TodoAppController {
//   constructor(view, uiview, controller, model) {
//     //Get the UI Refferences
//     this.ui_createTodoTask = uiview.createTodoTask;

//     // Bind handlers once to avoid creating new functions on every event registration
//     this.handleEnterKey = this.handleEnterKey.bind(this);
//     this.initialise();
//   }

//   initialise() {
//     this.ui_createTodoTask.todo_add_task_text.element.addEventListener('keyup', this.handleEnterKey);
//   }

//   handleEnterKey(event) {
//     if (event.key === 'Enter') {
//       let todoText = this.ui_createTodoTask.todo_add_task_text.value;
//       console.log("Hello from Enter Key Handler", todoText);
//     }
//   }

//   handleAddButtonClick() {
//     const todoText = this.ui_createTodoTask.todo_add_task_text.value;
//     console.log('New todo item (Button):', todoText);

//   }
// }