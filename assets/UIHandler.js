//This class is responsible for the buttons, input, and document refference.
//This class is attached to the HTML and it has a lot of coupling to HTML.
//Without it the HTML will not be interactable.
//When I was making a front-end project that lives in the browser and is only a local application. 
//I found myself in a messy situation where I spend more time finding where I placed that piece of code is. 
//Rather than actually fixing the code, if you get what I mean.


/*
I remember and came across MVC and that can organise the code into a managable chunk this lead me to two articles.
One is from: https://hackernoon.com/writing-a-simple-mvc-model-view-controller-app-in-vanilla-javascript-u65i34lx by Eleazar Meza, 2020 and 
the other is from Tania Rasca, 2020 https://www.taniarascia.com/javascript-mvc-todo-app/ 
I found both piece to be inspiring and have greatfully contributed to my knowledge which I am greatful for. Thank you Eleazar Meza and Tania Rasca.

However those piece of information are from from ideal to what I was looking for, and have found my self having a lot of document.getElement by ID on two pieces of MVC having duplicate 
document.getElementByID() everywhere and doesn't really specify if what I as edditing was a label, button, window/div, and thought to my self that there has to be another way!... 
I had to stare long and hard at the code yet again.

My conclusion lead me to MVVC. I could've gone and made my project using other frameworks like react but I was constrained in the evironment where project will live and run poses an issue
when it comes to using framerworks. 

Before getting started lets wrap around a few concepts before delving in to the MVVC concept:

#Naming conventions and how the folder is structured.

Naming conventions are a big part in organising code. Hence why I made sure that I have this tree
Java
│   index.html
│   README.md
│
└───assets
    │   UIIndex.js
    │
    └───applet
        ├───UserLogin
        │       UserLoginController.js
        │       UserLoginModel.js
        │       UserLoginView.js
        │
        └───UserSignUp
                UserSignupController.js
                UserSignupModel.js
                UserSignUpView.js

The very top of our folder contains the index.html file and at the bottom are assets where a lot of the interesting things happen for the website.

Inside the assets folder we have UIIndex.js file which contains the UIIndex class. 

    Tip: The naming convention goes as follows U = User, I = Interface, followed by the name of the file that it's interfacing with. 

It's  always going to be associated and is always coupled to the Index.html due to how it's always referencing document.getElementById('').



#States of document.getElementByID 

Let's take the document.getElementByID in context.
The document.getElementByID queries the DOM provided you have given it an ID.
Observing document.getElementByID('element1').value() allows you to either
1. get the value
2. set the value.
3. attach an event listeners.
4. remove an event listener

However what document.getElementByID('element1') doesn't do are to parse the string as a float, int, bolean, the formatting of the date and etc. 
In a typical MVC model that usually go and be hanndled by either view or controller, and that makes the code messier thant it should.
Using MVVC however we delegate that entirely to UIIndex while the logic of manipulating(i.e hide/show div) the DOM can be delegated to Usersignup view shown in the example below. 
The other thing that 

The UIIndex class is replicated throughout the controller and view of the applications as UIIndex class will refference all the label, buttons, select, and etc. of index.html
The beauty of making a view to interface with another view is that you can then have all the parsefloat, new Date, and so on inside of UIIndex class.


    Let's take the document.getElementByID in context.
    The document.getElementByID queries the DOM provided you have given it an ID.
    Observing document.getElementByID('element1').value() allows you to either
    1. get the value
    2. set the value.
    3. attach an event listeners.
    4. remove an event listener



Rules to observe;


    Before getting started let's start with getting the naming convention of the service file, which has some inportance as MVVC has VIEW VIEW.
    I couldve have gone ahead and named the file 
    The naming convention goes as follows U = User, I = Interface, followed by the name of the file that it's interfacing with. 
*/

//Fun tip: The private property you see above had been added in 2022 ECMA script
//Fun tip: The getter and setter property had been added since 2009.

class UIHandler { //Global referrence to the initiated.
    #docRef = {};  
 
    constructor(elementsName) {
        this.#initialiseDocRef(elementsName); 
    }
 
    #initialiseDocRef(elements) {
        elements.forEach(elementId => {
            const element = document.getElementById(elementId);
            if (element) {
                this.#docRef[elementId] = element;
            } else {
                console.warn(`Element with ID '${elementId}' not found.`);
            }
        });
    }
 
    // Getter to retrieve the whole #docRef object
    get docRef() {
        return this.#docRef;
    }
 
    // Setter to remove an element by its ID from #docRef
    set removeDocRef(elementId) {
        if (this.#docRef[elementId]) {
            delete this.#docRef[elementId];
            console.log(`Element with ID '${elementId}' has been removed.`);
        } else {
            console.warn(`Element with ID '${elementId}' does not exist in docRef.`);
        }
    }
 }



const app = new IndexController();
