var myObj = {key1: "Hello", key2: "World"};

// Keys are strings, but quotes aren't required if they're a valid
// JavaScript identifier. Values can be any type.
var myObj = {myKey: "myValue", "another key": 20};

// Object attributes can be accessed using the subscript syntax,
myObj["another key"]; // = 20

// ... or using the dot syntax, provided the key is a valid identifier.
myObj.myKey; // = "myValue"

// Objects are mutable; values can be changed and new keys added.
myObj.myThirdKey = true;
myObj["key4"] = 40;

myObj; // =  Object {myKey: "myValue", another key: 20, myThirdKey: true, key4: 40}

// Accessing a key that's not there will return undefined
myObj.key5; // = undefined
