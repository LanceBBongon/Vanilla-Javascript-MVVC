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
- You are restricted by administrative previledges.
- You got a lot of constraints but HTML, CSS, and JavaScript ain't them.
- You prefer MVC which is scalable and maintainbale for the long term viability of the program.



#Set-up and naming conventions, and getting organised.

The whole reason of a programming paradigm such MVC is to ensure that we got a project that can be maintained and scaled.
So, getting organised is the first step in order to get the project off the ground. 

##Creating the project's initial files and folder.
To create the project, several folders need to be created. 

- Step 1) Create a folder that will contain all the project's files, and folder.

- Step 2) Inside the folder you have created, create the following folders:
    - applet ~ this folder will contain all the features of the program. This is where a lot of the MVVC stuff happens.
    - libs ~ this folder will contain all external libraries. (i.e Bootstrap)
    - css folder ~ this folder contains all the CSS files. 

- Step 3) Inside the project folder create the following files.
    - index.html


<pre>
    
    

</pre>


Before getting started. 

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
