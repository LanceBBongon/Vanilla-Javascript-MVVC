class UIHandler {
    static docRef = {};  // Static field shared across all instances

    constructor(elements = []) {
        console.log('UIServices UIHandler Loaded');
        this.docRef = elements; // Use the setter during initialization
    }

    #processElements(elements) {
        if (!elements || (Array.isArray(elements) && elements.length === 0)) {
            console.log('UI handler has no objects in it.');
            return;
        }

        if (elements instanceof HTMLElement) {
            this.#addOrUpdateDocRef(elements);
        } else if (elements instanceof NodeList || Array.isArray(elements)) {
            elements.forEach(element => this.#addOrUpdateDocRef(element)); // Handle each element
        } else if (typeof elements === 'string') {
            this.#addOrUpdateDocRef(elements); // Handle a single element ID
        } else {
            console.warn('Invalid elements provided to initialize.');
        }
    }

    #addOrUpdateDocRef(element) {
        let elementId = null;

        if (!elementId || !element) {
            console.warn('Invalid element or element ID provided.');
            return;
        }

        if (elementId in this.constructor.docRef) {
            console.log(`Element with ID '${elementId}' already exists in docRef.`);
            return;
        }


        if (typeof element === 'string') {
            elementId = element;
            element = document.getElementById(elementId);
        } else if (element instanceof HTMLElement) {
            elementId = element.id;
        }


        this.constructor.docRef[elementId] = element;
        console.log(`Element with ID '${elementId}' has been added.`);
    }

    // Setter to add elements to the docRef
    set docRef(elements) {
        this.#processElements(elements);
    }

    // Getter to retrieve the whole static docRef object
    get docRef() {
        return this.constructor.docRef;
    }

    // Method to remove an element by its ID from static docRef
    removeDocRef(elementId) {
        if (elementId in this.constructor.docRef) {
            delete this.constructor.docRef[elementId];
            console.log(`Element with ID '${elementId}' has been removed.`);
        } else {
            console.warn(`Element with ID '${elementId}' does not exist in docRef.`);
        }
    }
}
