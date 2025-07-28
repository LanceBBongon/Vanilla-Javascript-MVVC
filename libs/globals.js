//This is the globals.js file
//This file contains global variables and functions used across the application.
function isElementExisting(refs, context = "TodoUIView") {
    for (const [key, element] of Object.entries(refs)) {
        if (!element) {
            throw new Error(`[${context}] Missing DOM element: ${key}`);
        }
    }
}

/* 
    To use this fuction... You need to import DOMPurify in your project.
    You can do this by adding the following script tag in your HTML file:
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.4.0/purify.min.js"></script>
    Or by installing it via npm: npm install dompurify
*/
function sanitize_input(dirtyInput) {
    return DOMPurify.sanitize(dirtyInput, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: []
    });
}