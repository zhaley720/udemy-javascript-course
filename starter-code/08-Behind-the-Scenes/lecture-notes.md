okay, so this section is HELLA confusing... or like, at very least, it's very hard to pay attention to since it is all lecture and theory instead of coding. therefore, i can't just write the code down for the logic to click. i need to try to learn it in other ways, such as explaining it out loud, or taking notes. so this is my attempt to do just that.

# section 1: a high level overview of the javascript language

## attributes of javascript

"javascript is a hight-level, object-oriented, multi-paradigm programming language."

### high-level

- you don't have to manually interact/instruct the computer's hardware in your code
- abstracts parts of the language to make it easier to understand/work with
- will never be as fast as low level languages

### garbage-collected

- one of javascripts abstractions (we don't have to do it manually)
- algorithm inside the javascript engine
- automatically removes old/unused objects from the computer's memory

### interpreted, or "just-in-time" compiled

- how javascript turns lines of code humans can read into machine code (1s and 0s) that the computer can read
- happens inside the javascript engine

### multi-paradigm

#### paradigm = an approach to how code is supposed to be structured
popular paradigms:
1. procedural programming -> (what has been used in the course so far)
2. object oriented programming (OOP)
3. functional programming (FP)

### prototype-based object-oriented

- everything in javascript (except for primitive values) is an object
- example: arrays in javascript are just objects
    - they have values such as `arr.length` (length is an object key for a key/value pair)
    - the `arr.push` method is a key that's value is a function on the Array object that arrays can use
        - you use the function by calling it with it's key in dot notation ( `arr.push(x);` )

### has first-class functions

- functions are treated as variables and can be thought of as values, just like variables
    - you can pass functions into other functions (or themselves) just like with numbers or strings
    - you can return functions from other functions (or themselves) just like with numbers or strings
    - this is what makes the funcional programming paradigm possible with javascript
- not all programming languages can do this

### dynamic

- you don't assign data types to variables
    - java: `int i = 117;`
    - javascript: `let i = 117;`
- types become known at runtime
- can reassign a variable to a different data type

    `let x = 177;`
    
    `x = "now i'm a string!";`

### single-threaded & non-blocking event loop

- single threaded: can only do one thing at a time
    - the thread is where the code is executed in the computer's processor
- if you have a long-running task, that would block the thread
    - the "event loop" moves long running tasks and executes them in the background
        - it moves them back to the main thread once it has finished



# the javascript engine and runtime

## javascript engine: a program that executes javascript code

- every browser has a javascript engine
    - most well known is the V8 engine
        - powers chrome and node.js

## components of a javascript engine:
### call stack
- where the code is executed in the javascript engine
- uses something called "execution contexts"

### heap
- unstructured memory pool
- stores all the objects that the application needs

## compilation vs interpretation
### compilation:
- entire code is converted into machine code at once
- written to a portable binary file that can be executed by the computer

### interpretation
- interpreter program runs through source code
- read and executed line by line
- converted into machine code as it's being executed
- much slower...

### just-in-time compilation (JIT)
- combination between compilation and interpretation
- entire code is converted into machine code at once, then executed immediately
- no portable binary file like in regular compilation
- executed immediately after it's compiled
- much faster than executing code line by line (interpretation)

### how just-in-time compilation works in the engine
1. first step is parsing the code
    - parsed into a datastructure called the Abstract Syntax Tree (the AST)
2. compilation
    - takes the AST and turns it into machine code
    - starts with unoptomized machine code to start executing right away
    - re-optomizes it during execution multiple times to make it faster without stopping execution 
3. executed immediately
- all happens in special threads inside the computer that we cannot access with our code
    - seperate from the main thread in callstack executing our code

## what is a javascript runtime?
- big box containing everything we need to run javascript
    - includes the javascript engine
        - contains a heap
        - contains a call stack
    - also includes Web APIs
        - the DOM
        - timers
        - fetch api
        - etc.
        - functionalities provided to the engine, but not actually a part of the javascript language
    - also contains callback queue
        - contains all the callback functions waiting to be executed
            - example: `btn.addEventListener('onclick', myCallbackFunc);`
        - passes all callback functions to the call stack in the javascript engine via the event loop
            - will learn more about the event loop later on

    - different runtimes can look different
        - node.js doesn't have web APIs because it's not in a web browser
            - it does have C++ bindings, and thread pools (??? idk what those are yet...)




# execution contexts and the call stack

- code finished compiling
- global execution context created for top level code
    - top level code is code that is not inside of a function
        - functions should only be executed when they are called
    - abstract concept
    - box that stores all the information necessary for parts of your code to be executed
        - examples: local variables, function arguments that have been passed in
- for each function call, a new execution context is created
    - contains all information needed to run exactly that function
    - execution contexts together make up the call stack
- when functions are done executing, engine will wait for callback functions to arrive
    - example being a `btn.addEventListener('click', myCallbackFunc);`

## what is inside of a execution context?
1. variable environment
    - all variables and function declarations are stored
    - contains an 'arguments' object
        - contains all arguments passed into the function that the current context belongs to
2. scope chain
    - how an execution context knows about variables that were declared outside of the function (outside of the context)
3. the "this" keyword
    - a special variable
    - will learn more about it later
### execution contexts belonging to arrow functions do NOT contain arguments object or "this" keyword
    - can use arguments object and "this" keyword from closest regular function parent
### execution contexts are stored in a call stack (last-in first-out)