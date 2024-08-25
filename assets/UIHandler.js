//This class is responsible for the buttons, input, and document refference.
//This class is attached to the HTML and it has a lot of coupling to HTML.
//Without it the HTML will not be interactable.
//When I was making a front-end project that lives in the browser and is only a local application. 
//I found myself in a messy situation where I spend more time finding where I placed that piece of code is. 
//Rather than actually fixing the code, if you get what I mean.

 //Global referrence to the initiated.
 class UIHandler {
    static #docRef = {};  // Static private field shared across all instances

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
            this.docRef[elementId] = element;
            console.log(`Element with ID '${elementId}' has been added.`);
        } else {
            console.warn(`Element with ID '${elementId}' not found.`);
        }
    }

    // Getter to retrieve the whole #docRef object
    get docRef() {
        return UIHandler.#docRef;
    }

    // Setter to remove an element by its ID from #docRef
    set removeDocRef(elementId) {
        if (elementId in UIHandler.#docRef) {
            delete UIHandler.#docRef[elementId];
            console.log(`Element with ID '${elementId}' has been removed.`);
        } else {
            console.warn(`Element with ID '${elementId}' does not exist in docRef.`);
        }
    }
}

