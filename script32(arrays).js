var myArray = ["Hello", 42, true];

// Their members can be accessed using the square-brackets subscript syntax.
// Array indices start at zero.
myArray[1]; // = 42

// Use push to add to an Array
myArray.push("World");

//or Add/modify at a specific index:
myArray[1] = 2;

myArray; // = ["Hello", 2, true, "World"]

myArray.length; // = 4
