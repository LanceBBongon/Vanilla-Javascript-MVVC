//Global functions used throughout the application
function isElementExisting(refs, context = "TodoUIView") {
    for (const [key, element] of Object.entries(refs)) {
        if (!element) {
            throw new Error(`[${context}] Missing DOM element: ${key}`);
        }
    }
}

function sanitize_input(dirtyInput) {
    return DOMPurify.sanitize(dirtyInput, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: []
    });
}


//The line const app = new TodoApp(); will instantiate the TodoApp class only once. 
//By instantiating a class outside of the controller, view, and model. No additional copies are made unless you explicitly create more instances elsewhere in your code.
//
const uiview_container = {
  todoUIView: new TodoUIViewModel(),
};

//To use this container, you can access the todoUIView instance like this using:
//Destructuring the container to get the todoUIView instance
//const { todoUIView } = container;


const app = new TodoAppController(view, uiview, controller, model);