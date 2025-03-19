# Vanilla-Javascript-MVVC

I heard that javascript doesn't have a lot of scalability.

I remember and came across MVC and that can organise the code into a managable chunk leading me to two articles.

&nbsp; - One is from: https://hackernoon.com/writing-a-simple-mvc-model-view-controller-app-in-vanilla-javascript-u65i34lx by Eleazar Meza, 2020.
&nbsp; - The other is from https://www.taniarascia.com/javascript-mvc-todo-app/ by Tania Rasca, 2020.

I found both piece to be inspiring and have greatfully impacted my knowledge which I am greatful for. Thank you Eleazar Meza and Tania Rasca.

I'm pretty sure there are various ways of programming paradigm, framework, or techniques that could address a program scalability, maintainability, and alternative paradigm for JavaScript.
You are certainly free to explore and use those as you like. However if you have certain conditions as I had where:
- You can't use frameworks.
- You can only use a browser.
- The project you are building is a web app that lives in the client.
- You got a lot of constraints but HTML, CSS, and JavaScript ain't them.
- You prefer MVC which is scalable and maintainbale for the long term.


#Getting Started with MVVC
I first got into MVVC because 


#Naming conventions and how the folder is structured.
Naming conventions are a big part in organising code. Hence why I made sure that I have this tree
<pre>
Project Folder
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
</pre>


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
