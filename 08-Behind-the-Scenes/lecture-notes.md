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



# scope and the scope chain

## scope

- scope: where can we access certain variables, and where can we not?
    - global scope
    - function scope
    - block scope
- javascript has lexical scoping
    - scoping controlled by placement of functions and blocks in the code
        - function written inside another function has access to parent function's variables
- scope of a variable: region of code where that variable can be accessed

1. global scope
    - for variables declared outside of functions or blocks
    - can be accessed anywhere in the program
2. function scope
    - variables declared inside the function are only accessible inside of that function, not outside
    - also called "local scope"
    - same as function's "variable environment"
3. block scope
    - only accessible inside block (such as an "if" statement block)
    - let and const are block scoped
    - var is NOT block scoped
        - var declared inside a code block would be accessible to the parent function, or the global scope
    - functions are also block scoped (only in strict mode)

## scope chain

- scopes inside other scopes can use parent scope's variables
    - called "scope lookup"



# hoisting

- makes some variables accessible/usable in code before they are actually declared
    - variables lifted to the top of their scope
- before execution code is scanned for variable declarations and each variable a new property is created in the variable environment object
- what variables are hoisted?
    - function declarations?
        - yes
        - block scoped
    - var variables?
        - yes
        - but they are undefined before declaration
            - common source of bugs
        - function scoped
    - let and const variables?
        - not hoisted
            - (technically they are, but they are in the Temporal Dead Zone, and value set to "uninitialized")
        - block scoped
    - function expressions?
        - same as their variable counterparts
            - yes for var, no for let and const

## okay, so why do we even use hoisting in the first place?

- makes programming techniques, such as mutual recurrsion, possible
    - var is a byproduct of this, but we can't remove it from javascript now without breaking previously written code



# the "this" keyword

- the "this" keyword is a special variable that is created for every execution context
    - points to the "owner" of the function in which the "this" keyword is used
- the "this" keyword is NOT static
    - depends on how the function is called
    - value only assigned when the funcion is called

### ways a function can be called

1. as a method on an object
    - when you call a method, the "this" keyword reffers to the object on which that method was called
2. simple function call
    - in "strict mode", if you call a function not as a method, the "this" keyword will be undefined
    - if you do not use "strict mode", the "this" keyword points to the global object
        - can be problematic
3. arrow functions
    - arrow functions do not have a "this" keyword
    - if you use "this" in an arrow function, it is picked up by it's parent function
4. as an event listener
    - if a function is called from an event listener, the "this" keyword points to the DOM element that the handler function is attatched to

- can also use "new", "call", "apply" and "bind" to call finctions, but we have not learned about them in the course yet



# memory management in javascript

- javascript automatically manages memory for us
- memory lifecycle
    1. memory allocated when a variable is declared
    2. memory accenned when a variable is being accessed (write, read, or updated)
    3. when a value is no longer needed, it is deleted from memory

### where is memory allocated?

- there are two types of data in javascript
    1. primatives (number, string, boolean, undefined, null, symbol, bigInt)
        - stored in the call stack
            - stored within their execution contexts
    2. objects (object literals, arrays, functions, and more...)
        - stored in the heap
        - **references to objects are stored in the call stack**
    - there may be exceptions because of modern javascript's complexity

### object refferences

- primitives are stored in execution context in the call stack
- objects are stored in the heap
- how does the code know what the object is when executing?
- variables for objects in the call stack contain refferences (the address of where to find the object in the heap)
- this is done behind the scenes and is hidden to us while coding
- **this means creating a copy of an object variable (`const myObject2 = myObject;`) the refference is pointing at the same object in memory**
    - with primitives, it makes a copy of the primitive `const x = 15; let y = x; y += 15; x === 15; y === 30;`



# garbage collection

- primitive variables are removed from memory with the execution context in the call stack
- garbage collection in the heap is done automatically in the engine
- algorithm is called mark-and-sweep
    - "alive" objects are reachable from a "root" in an active or global execution context, or a closure or event listener or timer
    - an object needs to have a path of refference points pointing to it to be "alive"
    - object in heap not being refferenced by anything active in the program is "dead"
    - all unmarked, "dead" objects are deleted
    - when an execution context that refferences an object finishes, the objects it's refferencing can then be deleted by garbage collection

### memory leak

- when an object that is no longer needed is not deleted from memory
    - happens because of old event listeners or timers
        - remember to deactivate event listeners and timers when no longer needed
    - avoid declaring really big objects in the global context