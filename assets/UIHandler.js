class UIHandler {
    docRef = {};  // Public field specific to each instance

    constructor(elementsFromAnotherClass) {
        console.log('UIServices UIHandler Loaded');
        this.processElements(elementsFromAnotherClass);
    }

    processElements(elementIds) {
        // Helper function to process a single element ID
        const processElement = (id) => {
            if (id) {  // Check if the id is valid (not null or undefined)
                const element = document.getElementById(id);
                if (element) {
                    this.docRef[id] = element;
                    console.log(element);
                }
            }
        };
    
        if (typeof elementIds === 'string') {
            processElement(elementIds);
        } else if (elementIds instanceof NodeList || elementIds instanceof HTMLCollection || Array.isArray(elementIds)) {
            Array.from(elementIds).forEach(element => processElement(element.id));
            if (elementIds instanceof NodeList) {
                console.log('A NodeList was passed to the UIHandler.');
            }
        }
    }

    // Setter to add elements to the docRef
    set setDocRef(elements) {
        this.processElements(elements);
    }

    // Getter to retrieve the whole docRef object
    get getDocRef() {
        if (Object.keys(this.docRef).length > 0) {
            console.log(this.docRef);
        } else {
            console.log("docRef is empty.");
        }
        return this.docRef;
    }

    // Method to remove an element by its ID from docRef
    removeDocRef(elementId) {
        if (elementId in this.docRef) {
            delete this.docRef[elementId];
            console.log(`Element with ID '${elementId}' has been removed.`);
        } else {
            console.warn(`Element with ID '${elementId}' does not exist in docRef.`);
        }
    }
}