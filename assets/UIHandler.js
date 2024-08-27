class UIHandler {
    #docRef = {};  // Private field specific to each instance

    constructor(elementsFromAnotherClass) {
        console.log('UIServices UIHandler Loaded');
        this.processElements(elementsFromAnotherClass);
    }

    processElements(elementIds) {
        // Helper function to process a single element ID or a collection of IDs
        const isType = [Array.isArray(elementIds), elementIds instanceof NodeList, elementIds instanceof HTMLCollection].some(Boolean);
        const isExisting = Array.from(elementIds).some(id => id in this.#docRef);
        if (isExisting) {
            console.log('Element already exist!');
        }
        
        if (typeof elementIds === 'string') {
            const element = document.getElementById(elementIds);
            if (!element) {
                console.log('Element does not exist. Please check the DOM');
                return;
            } else {
                this.#docRef[element.id] = element;
            }
        }

        if (isType) {
            Array.from(elementIds).forEach(elementId => {
                if (typeof elementId === 'string') {
                    const element = document.getElementById(elementId);
                    if (element) {
                        this.#docRef[elementId] = element;
                    }
                } else if (elementId && typeof elementId === 'object') {
                    const element = document.getElementById(elementId.id);
                    if (element) {
                        this.#docRef[elementId.id] = element;
                    }
                }
            });
        }
    }
    // Setter to add elements to the #docRef
    set setDocRef(elements) {
        this.processElements(elements);
    }

    // Getter to retrieve the whole #docRef object
    get getDocRef() {
        if (Object.keys(this.#docRef).length > 0) {
            console.log("docRef has properties.");
            console.log(this.#docRef);
        } else {
            console.log("docRef is empty.");
        }
        return this.#docRef;
    }

    searchDocRef(elementId) {
        if (elementId in this.#docRef) {
            return this.#docRef[elementId];
            console.log(`Element with ID '${elementId}' has been removed.`);
        } else {
            console.warn(`Element with ID '${elementId}' does not exist in docRef.`);
        }
    }

    // Method to remove an element by its ID from #docRef
    removeDocRef(elementId) {
        if (elementId in this.#docRef) {
            delete this.#docRef[elementId];
            console.log(`Element with ID '${elementId}' has been removed.`);
        } else {
            console.warn(`Element with ID '${elementId}' does not exist in docRef.`);
        }
    }
}
