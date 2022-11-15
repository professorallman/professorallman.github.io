<h1>The Javascript Reference</h1>
<a href="/references">Back to references</a>
 
**Table of Contents**
- [Comments & Debugging](#comments--debugging)
  - [Comments](#comments)
  - [Debugging](#debugging)
    - [Developer tools built into the web browsers](#developer-tools-built-into-the-web-browsers)
  - [Troubleshooting errors](#troubleshooting-errors)
    - [Checking the console](#checking-the-console)
    - [Logging to the console from your scripts](#logging-to-the-console-from-your-scripts)
- [Variables & Control Flow](#variables--control-flow)
  - [Declaring Variables](#declaring-variables)
  - [Decision Structures](#decision-structures)
    - [if](#if)
    - [Disjointed if](#disjointed-if)
    - [if/else if/else](#ifelse-ifelse)
    - [Switch](#switch)
    - [For Loop](#for-loop)
- [Representing Data](#representing-data)
  - [Arrays](#arrays)
    - [Iterating over an array](#iterating-over-an-array)
      - [for with index](#for-with-index)
      - [for-of](#for-of)
      - [Array.prototype.forEach](#arrayprototypeforeach)
  - [Object Literals](#object-literals)
    - [Iterating over an object](#iterating-over-an-object)
      - [for-in](#for-in)
      - [Object.keys](#objectkeys)
      - [Object.values](#objectvalues)
      - [Object.entries](#objectentries)
  - [Classes](#classes)
- [Functions](#functions)
  - [Named function deceleration](#named-function-deceleration)
- [DOM API](#dom-api)
  - [Querying the DOM tree](#querying-the-dom-tree)
    - [Query for a single element](#query-for-a-single-element)
    - [Query the children of an element](#query-the-children-of-an-element)
    - [Query for multiple elements](#query-for-multiple-elements)
  - [Changing style and content of an element](#changing-style-and-content-of-an-element)
  - [Creating elements](#creating-elements)
  - [Listening for events](#listening-for-events)
    - [Page Loaded](#page-loaded)
    - [Click](#click)
    - [Forms](#forms)
- [Fetch API](#fetch-api)
  - [HTTP GET](#http-get)
  - [HTTP POST](#http-post)

# Comments & Debugging

## Comments

Javscript is in the C family of langauges and has both single and multi-line comments like so:

```javascript
//Single line comment
/**
* Multi line
* Comment
*/
```

## Debugging

### Developer tools built into the web browsers

Most web browsers include tools for developing websites. The esiest way to access the developer tools is to right-click anywhere on the web page and click inspect.

Once the developer tools are open you can click the "Console" tab to acces the Javascript console.

```bash
>3+3
6
>let fruit = 'Apple';
>fruit;
"Apple"
```

The console is the current living-breathing Javascript interperter with the current state of your web page after all the scripts have run. This means you can access global variables defined inside your script files directly from the console by typing the variable name directly into the console

```javascript
/* inside myscript.js **/
let myGlobalVariable = 'Hello World!';
```

```bash
>myGlobalVariable
"Hello World!"
```

## Troubleshooting errors

Most integrated development tools will catch syntax errors for you and give you the red squiggles of death under the line causing the problem. Runtime errors can be a bit trickier to catch because they are usually the result of a logic error and don't crash right away.

### Checking the console

If an error occurs you can open the devloper console to see the error. It will look somewhat like this:

```bash
ⓧ Uncaught Error: Error Message myscript.js:2
```

The `myscript.js:2` is a clickable link that you can click on to jump to the sources panel and shows your script with the red squiggles of death where the error is. The `:2` denotes the line number that is causing the error so you could also open the script in your IDE and check it there as well.

### Logging to the console from your scripts

`console.log()` can be used to send information to the console. It can be as simple as strings, or more interestingly objects.

```javascript
let exampleObject = {key:'value'}
console.log('Hello Console Log!', exambleOjbect);
```

Objects logged out to the console can be interacted with to see the properties nested in the object. You can also right-click on objects logged to the console and select 'store as global variable' to be able to access the value from the console.

In the above example the `exampleObject` is in the global scope and could be accessed directly from the console. You can also use `console.log` to get access to variables outside of the global scope!

```javascript
function myFunction(){
    let myFunctionScopedVariable = 'Hello World!';
    console.log(myFunctionScopedVariable);
}
```

# Variables & Control Flow

## Declaring Variables

In javascript we have 3 ways to declare variables

```javascript
var myVarVariable;
let myLetVariable;
const myConst;
```

`var` and `let` behave the exact same except when they do not. The most notible time is re-declaring variables. You cannot redeclare a `let` variable, which is actually a nice feature because it tells the developer that the variable was already declared elsewhere and you may be trying to re-use something that is already in use.

```javascript
var iCanReVar;
var iCanReVar;
let iCannotReLet;
let iCannotReLet;//This is an error
```

`let` is a newer feature and solves some oddities of `var`. Favor using `let` in modern javascript projects. Both `let` and `var` variables can have new values assigned . Constants are constant and cannot have new values assigned.

```javascript
var myVar = 'a';
myVar = 'b';
let myLet = 'a';
myLet = 'b';
const myConst = 'a';
myConst = 'b';//This is an error
```

## Decision Structures

### if

An `if `statement checks if a condition expression is `true` and executes a block of code or statement that immediately follows the condition check. If the expression evaluates to false then the block of code or statement is skipped.

```javascript
let myCondition = true;
if(myCondition){//start of code block
    /**
     * The code between the curly braces
     * here will run if the condition
     * between the parenthesis evaluates 
     * to true
     */
}//end of code block
if(myCondition) 
/** 
 * Notice the lack of curly braces
 * so only the next statement will run
 * You usually tell when a statement
 * ends with a semicolon ;
 * /
```

If you are just getting started I recommend avoiding omitting the curly braces. It is easier to make a logic mistake down the road if you need to have a second statement bound to the if condition. The three examples bellow are equivalent:

```javascript
let myCondition = false;

if(myCondition){
    console.log('This will not run');
}
console.log('This will run');
```

```javascript
if(myCondition) console.log('This will not run');
console.log('This will run');
```

```javascript
if(myCondition)
console.log('This will not run');
console.log('This will run');
```

As you can see using the curly brace makes it very clear what code will run if the condition is true.

### Disjointed if

If there are two `if` statements one after another, each ones condition will be evaluated and both could possibly run.

```javascript
let conditionA = true;
let conditionB = true;

if(conditionA){
    //This code will run
}
if(conditionB){
   //This code will run
}
```

### if/else if/else

If you need only one code block to run can join multi conditions together with `if(){} else if{}`. By adding the else we join to conditions together causing them to be mutually exclusive, meaning only one code block will ever run. Only the first condition to evaluate to `true` will have it's respective code block run, additionally subsequent conditions will not even be checked! You can leverage this characteristic to wisely order your conditions so that computationally intensive operations don't run needlessly.

```javascript
let conditionA = true;
let conditionB = true;

if(conditionA){
    //This code block will run
}else if(conditionB){//this condition won't even be checked
//This code block won't run
}
```

You can use a `else` to catch the case when no conditions are true

```javascript
let conditionA = false;
let conditionB = false;

if(conditionA){
    //This code block won't run
}else if(conditionB){
    //This code block won't run
}else{
    //No of the conditions were true, so else runs
    //This code block will run
}
```

### Switch

A switch statement is a fancy version of a `if/else if/else` statement. You use it to compare one value against many different values. The switch does have the added feature called *case fallthrough* where you can have multiple blocks of code execute, recall `if/else if/else` is mutually exclusive and only one code lock wil ever run.

```javascript
let compareThisTo = 'My Value';

switch(compareThisTo){
    case 'Some Value':
        //this won't run
        break;
    case 'Some Other Value':
        //this also won't run
        break;
    case 'My Value':
        //This will run!
    case 'Example of case fallthrough':
        //This will also run!
        break;
    default:
        /**
         * This would have run if
         * none of the other cases matched
         */
        break;
}
```

### For Loop

Loops allow you to repeat a block of code. A for loop follows the following syntax:

`for(initializer, condition, post loop action)`


| Syntax | Description | 
| ---------------- | ----------------------------------------------------------------------------- | 
| initializer | Sets up the `loop variable` to be used to check if the loop should exit | 
| condition | The condition that needs to be met. It should be checking if the `loop variable` is some value. | 
| post loop action | The statement gets executed after the block of code tied to the loop runs. The expression should be changing the value of `loop variable` to approach the condition needed to exit the loop. |

```javascript
for(let i = 0; i < 10; i++){
    //This code block will run 10 times
}
```

# Representing Data

## Arrays

Arrays are a ordered sequence of data. InJavascript each piece of data can be anything and they do not all have to be the same.

```javascript
let anything = ['stringvalue', false, 2.0,[]];
```

To access elements in the array we use the bracket `myArray[theIndex]` syntax, where `myArray` is the array you want to access and `[theIndex]` is a number that matches up with each element in the array starting at 0.

```javascript
let fruits = ['Apple', 'Orange', 'Peach'];
fruits[0]//Apple
fruits[1]//Orange
fruits[2]//Peach
```

### Iterating over an array

There are a handful of ways to iterate (access each value) over an array. In the following examples `myArray` is an array variable and `myValue` is a value in the array. Here is an example of accesing each value manually:

```javascript
let myArray = ['value1', 'value2'];
let myValue = myArray[0];
myValue = myArray[1];
```

#### for with index

```javascript
for(let i = 0; i < myArray.length; i++){
    let myValue = myArray[i];
}
```

#### for-of

```javascript
for(let myValue of myArray){

}
```

#### Array.prototype.forEach

```javascript
myArray.forEach((myValue)=>{

});
```

## Object Literals

Object literals are where we are creating a little object on the fly, as apposed to using a class and the `new` keyword. The can be used like traditional objects but are more frequently used as simple ways to store data. We can use dot `.` and bracket `[]` notation to access the values stored in the object literal.

```javascript
let myObjectLiteral = {
    myKey: 'myValue',
    firstName: 'Austin'
};
myObjectLiteral.myKey//myValue
myObjectLiteral['myKey']//myValue
myObjectLiteral.firstName//Austin
myObjectLiteral['firstName']//Austin
```

### Iterating over an object

Objects are not sequenced, meaning there is no guarantee the order you will iterate over the data. It's not even guarantee calling the same code twice will run in the same order! That being said it usually does.

In the following examples `myObj` is an object literal variable. `myKey` is a key in the object, and `myValue` is the value associated with `myKey` Here is an example of accessing each key/value manually:

```javascript
let myObj = { key1: 'value1', key2: 'value2'};
let myKey = 'key1';
let myValue = myObj[myKey];
myKey = 'key2';
myValue = myObj[myKey];
```

#### for-in

```javascript
for(let myKey in myObj){
    let myValue = myObj[myKey];
}
```

#### Object.keys

```javascript
Object.keys(myObj).forEach((myKey)=>{
    let myValue = myObj[myKey];
});
```

#### Object.values

```javascript
Object.values(myObj).forEach((myValue)=>{

});
```

\*note: no access to keys

#### Object.entries

```
Object.entries(myObj).forEach((entry)=>{
    let myKey = entry[0];
    let myValue = entry[1];
});
```

## Classes

Just like object literals but have a formal structure that i shared across all instances of the class. You can use the same iteration strategies above with instances of classes. Not that methods in javascript are like any other piece of data and will show up in the iteration.

```javascript
class Geometry{
    constructor(length, width){
        this.length = length;
        this.width = width;
    }

    calculateArea(){
        return this.length * this.width;
    }
}
class Square extends Geometry{
    constructor(side){
        super(side, side);
    }
}
let geom = new Geom(2,2);
geom.calculateArea();//4
let square = new Square(5);
square.calculateArea();//25
```

# Functions

Functions allow us to create reusable pieces of code. Functions are special in Javascript as they are treated like any other piece of data!

## Named function deceleration

```javascript
function myFunctionName(myFunctionVariableOne){
    let myFunctionScopedVariable;
    return 'My Return Value';
}
```

# DOM API

The DOM API is all about grabbing elements off the DOM tree and modifying their properties or listening for events.

## Querying the DOM tree

The easiest way to make sure the DOM tree is completely loaded is to use the `defer` attribute on your script tag.

```html
<script src="myscript.js" defer></script>
```

`querySelector` and `querySelectorAll` are the primary ways of querying the DOM tree. They both work with any valid CSS selector.

### Query for a single element

```javascript
let myElement = document.querySelector('p');
```

### Query the children of an element

```javascript
let myParentElement = document.querySelector('#parent');

let childElements = myParentElement.querySelector('p');
```

\*Note: we could have also done a CSS descendent selector

### Query for multiple elements

```javascript
let myElements = document.querySelectorAll('p');
```

You can use all the strategies from [Iterating over an array](#iterating-over-an-array) to work with the results of `querySelectorAll` even though it's technically a NodeList and not an Array.

## Changing style and content of an element

I recommend to do the bulk of your style work in CSS, after all it's what CSS is best for! Then in javascript all we have to is add/remove/toggle CSS classes to our element.

```html
<style>
.my-awesome-css-class{
   color: yellow;
}
</style>
<script>
let el = document.querySelector('p');
el.classList.add('my-awesome-css-class');
el.classList.remove('my-awesome-css-class');
el.classList.toggle('my-awesome-css-class');
</script>
```

For content 99% of the time you can use textContent. This will escape html and render the markup instead of running it.

```javascript
let el = document.querySelector('p');
el.textContent = 'Hello World!';
```

If you are in control of where the data is coming from and need to add HTML content you can use `innerHTML`. Note that this is dangerous if you use it with arbitrary user input as you are essentially giving them complete control of the client side of the website.

```javascript
let el = document.querySelector('section');
el.innerHTML= '<header><h1>Hello World!</h1></header>';
```

## Creating elements

You can use `innerHTML` from above or `createElement`

```javascript
let myNewElement = document.createElement('p');
myNewElement.textContent = 'Hello createElement!';
document.body.appendChild(myNewElement);
```

## Listening for events

You can listen for events on any HTML element that you grabbed off of the page with `querySelector`. You *could* use `querySelectorAll` and attach an event listener on each element but that is not advised since it attaches a ton of listeners. Events 'bubble' up the DOM tree till it is caught. This means that you can listen for an event on a parent element and catch it when an event fires from one of it's child elements. This has the added benefit that dynamically added elements events will also be captured by the parent element instead of having to attach a new event handler on each element.

### Page Loaded

You can wrap all your code in the `DOMContentLoaded` event to wait for the DOM Tree fully loaded. This means you can be sure that when you run a `querySelector` that the elements will all be there. You can also use the `defer` attribute so that you do not need to have everything in a function scope.

```javascript
document.addEventListener('DOMContentLoaded',()=>{
   //This code will run once the DOM tree is completely built
});
```

### Click

```javascript
document.addEventListener('click',(event)=>{
    let target = event.target //the thing that was clicked
    //Example event delegation, filter out things we are
    //not interested in listening for
    if(target.element.targetName !== 'BUTTON') return;
});
```

### Forms

```javascript
const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
    /**
    Stops the default behavior of forms from happening
    This lets us handle the form in javascript
    instead of issuing a request to the server
    */
    event.preventDefault();
});
```

# Fetch API

Fetch is an awesome API for allowing us to issue HTTP Requests from javascript. This means we can send requests to the server in our scripts.

Not all webpages can be accessed directly form javascript using fetch. You will have to give it a try and if you see an error in the console about `CORS` then you know it won't work.

We'll be using `async` functions to issue the requests. This allows us to `await` results from our HTTP requests. `async/await` can be a bit difficult to learn, for now just know that it means the code is not running right away and the code 'pauses' when you see the `await` keyword.

## HTTP GET

```javascript
async function MyApp(){
    const response = await fetch('https://httpbin.org/get');
    const data = await response.json(); //or response.text()
    /**
    The value of data will be the same as if you had went
    to the webpage directly
    */
}
MyApp();
```

## HTTP POST

```javascript
async function MyApp(){
   const form = document.querySelector('form');
   const formData = new FormData(form);
   const response = await fetch('https://httpbin.org/post',{
       method: 'POST',
       body: formData
   });
   const data = await response.json(); //or response.text()
}
MyApp();
```