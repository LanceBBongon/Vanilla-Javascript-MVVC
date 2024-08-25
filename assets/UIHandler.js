class UIHandler {
    static docRef = {};  // Static field shared across all instances

    constructor(elementsName = []) {
        this.#initialiseDocRef(elementsName);
    }

    #initialiseDocRef(elements) {
        if (Array.isArray(elements)) {
            elements.forEach(elementId => this.#addDocRef(elementId)); // Handle each element in the array
        } else {
            this.#addDocRef(elements); // Handle a single element
        }
    }

    #addDocRef(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            this.constructor.docRef[elementId] = element;
            console.log(`Element with ID '${elementId}' has been added.`);
        } else {
            console.warn(`Element with ID '${elementId}' not found.`);
        }
    }

    // Getter to retrieve the whole static docRef object
    get docRef() {
        return this.constructor.docRef;
    }

    // Setter to remove an element by its ID from static docRef
    set removeDocRef(elementId) {
        if (elementId in this.constructor.docRef) {
            delete this.constructor.docRef[elementId];
            console.log(`Element with ID '${elementId}' has been removed.`);
        } else {
            console.warn(`Element with ID '${elementId}' does not exist in docRef.`);
        }
    }
}