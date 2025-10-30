const myGreeting = function(name) {
    console.log("Hello " + name);
}

console.log(myGreeting("Zach"));


 //#######################################
const pi = 3.14159;
const findCircumference = (diameter) => {
    return pi * diameter;
};

console.log(findCircumference(20));

//#########################################

function firstFunction() {
    console.log("This is the first function");
}

function secondFunction() {
    console.log("This is the 2nd function");
    firstFunction();
    console.log("final console.log in other function")
}

firstFunction();
secondFunction();


//firstFunction is used in secondFunction, it returns the first function console log, then the 2nd function, then the first function again since it is called inside 2nd function, and then the final console.log from function2

function example1() {
    example2();
}

function example2() {
    example1();
}

//these should cause a stack overflow since they just call eachother forever