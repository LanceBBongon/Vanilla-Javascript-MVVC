/*

MIT License

Copyright (c) 2024 Lance Lowie Borromeo Bongon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:


Redistribution: Any redistribution must also include these terms and conditions, allowing others to modify and distribute the software under the same terms.
Attribution: The original copyright notice and permission notice must be included in all copies or substantial portions of the software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

This project makes use of the following third-party software:

- **Bootstrap**: Bootstrap v5.3.0 (https://getbootstrap.com/)
  - Copyright 2011-2024 The Bootstrap Authors
  - Licensed under the MIT License (https://github.com/twbs/bootstrap/blob/main/LICENSE)


**License Modification Clause**: 
The copyright holder, Lance Lowie Borromeo Bongon, reserves the right to change the license of future versions of the Software. Any such change will be clearly indicated in the relevant version of the Software and will not affect the rights of users under the previous license, which will continue to apply to copies of the Software distributed under it. This provision takes precedence over the above clause.


*/
class UIHandler {
    static #instance;
    #docRef = {};  // Private field specific to each instance

    constructor(elementsFromAnotherClass) {
        console.log('UIServices UIHandler Loaded');
        this.processElements(elementsFromAnotherClass);
    }

    processElements(elementIds) {
        // Check if elementIds is an actual HTMLElement
        if (elementIds instanceof HTMLElement) {
            // Check if the element is already in docRef
            if (elementIds.id in this.#docRef) {
                console.log('Element already exists!');
                return;
            }
            // Store the element directly in docRef
            this.#docRef[elementIds.id] = elementIds;
            console.log(`Element with ID '${elementIds.id}' stored in docRef.`);
        } else if (typeof elementIds === 'string') {
            // If it's a string, try to get the element from the live DOM
            const element = document.getElementById(elementIds);
            if (element) {
                if (element.id in this.#docRef) {
                    console.log('Element already exists!');
                    return;
                }
                this.#docRef[element.id] = element;
                console.log(`Element with ID '${element.id}' stored in docRef.`);
            } else {
                console.log(`Element with ID '${elementIds}' does not exist in the DOM.`);
            }
        } else if (Array.isArray(elementIds) || elementIds instanceof NodeList || elementIds instanceof HTMLCollection) {
            // Handle collections of elements or element IDs
            Array.from(elementIds).forEach(item => {
                if (typeof item === 'string') {
                    const element = document.getElementById(item);
                    if (element && !(element.id in this.#docRef)) {
                        this.#docRef[element.id] = element;
                    }
                } else if (item instanceof HTMLElement && !(item.id in this.#docRef)) {
                    this.#docRef[item.id] = item;
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

    get getDocRefValue() {
        if (Object.keys(this.#docRef).length > 0) {
            console.log("docRef has properties with values.");
            
            const docRefValues = Object.fromEntries(
                Object.entries(this.#docRef).map(([key, element]) => [key, element?.value])
            );
    
            console.log(docRefValues);
            return docRefValues;
        } else {
            console.log("docRef is empty.");
            return {};
        }
    }

    

    searchDocRef(elementId) {
        if (elementId in this.#docRef) {
            return this.#docRef[elementId];
        } else {
            console.warn(`Element with ID '${elementId}' does not exist in docRef.`);
            return
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

    static getInstance() {
        if (!UIHandler.#instance) {
            UIHandler.#instance = new UIManager();
        }
        return UIHandler.#instance;
    }
}
