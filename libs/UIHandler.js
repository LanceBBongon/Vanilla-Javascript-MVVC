
class UIReferenceManager {
    constructor(configElements, valueKeys = [], globalFns = [], perKeyFns = {}) {
        this.globalFns = Array.isArray(globalFns) ? globalFns : [globalFns];
        this.perKeyFns = perKeyFns;

        Object.keys(configElements).forEach(key => {
            // Element getter
            Object.defineProperty(this, key + 'Element', {
                get() {
                    return document.getElementById(configElements[key]);
                },
                enumerable: true,
                configurable: true
            });

            // Only add value getter/setter for specified keys
            if (valueKeys.includes(key)) {
                Object.defineProperty(this, key + 'Value', {
                    get: () => {
                        const el = this[key + 'Element'];
                        let val = el ? el.value : undefined;
                        // Apply global functions
                        this.globalFns.forEach(fn => { val = fn(val); });
                        // Apply per-key functions
                        if (this.perKeyFns[key]) {
                            this.perKeyFns[key].forEach(fn => { val = fn(val); });
                        }
                        return val;
                    },
                    set: (val) => {
                        const el = this[key + 'Element'];
                        // Apply global functions
                        this.globalFns.forEach(fn => { val = fn(val); });
                        // Apply per-key functions
                        if (this.perKeyFns[key]) {
                            this.perKeyFns[key].forEach(fn => { val = fn(val); });
                        }
                        if (el) el.value = val;
                    },
                    enumerable: true,
                    configurable: true
                });
            }
        });
    }

    // Dynamically add a new global function
    addGlobalFn(fn) {
        this.globalFns.push(fn);
    }

    // Dynamically add a new per-key function
    addPerKeyFn(key, fn) {
        if (!this.perKeyFns[key]) this.perKeyFns[key] = [];
        this.perKeyFns[key].push(fn);
    }
}


// Example usage
// Define the configuration for UI elements
const configElements = {
    todoList: "todo-list",
    todoInputText: "todo-input-text",
    todoInputButton: "todo-input-button"
};

const valueKeys = ["todoInputText"];

const globalFns = [
    v => v.trim()
];
// Define per-key functions
// These functions will be applied to the value of the specific key
const perKeyFns = {
    todoInputText: [
        v => DOMPurify.sanitize(v, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] })
    ]
};

const todoUI = new UIReferenceManager(configElements, valueKeys, globalFns, perKeyFns);

// Usage example:
todoUI.todoInputTextValue = "  <b>New Task</b>  ";
console.log(todoUI.todoInputTextValue); // "New Task"