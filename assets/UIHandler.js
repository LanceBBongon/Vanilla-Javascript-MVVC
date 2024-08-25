class UIHandler {
    static docRef = {};  // Static field shared across all instances

    constructor(elementsName = []) {
        this.#initializeDocRef(elementsName);
    }

    #initializeDocRef(elements) {
        if (Array.isArray(elements)) {
            elements.forEach(elementId => this.#addDocRef(elementId)); // Handle each element in the array
        } else {
            this.#addDocRef(elements); // Handle a single element
        }
    }

    #addDocRef(elementId) {
        if (!elementId) {
            console.warn('Invalid element ID provided.');
            return;
        }
        
        const element = document.getElementById(elementId);
        if (element) {
            this.constructor.docRef[elementId] = element;
            console.log(`Element with ID '${elementId}' has been added.`);
        } else {
            console.warn(`Element with ID '${elementId}' not found.`);
        }
    }

    // Setter to add an element to the docRef
    set docRef(elementId) {
        this.#initializeDocRef(elementId);
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
