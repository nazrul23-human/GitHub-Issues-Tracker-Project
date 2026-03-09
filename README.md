
##API Endpoints:

#All Issues:
https://phi-lab-server.vercel.app/api/v1/lab/issues 


#Single Issue:
https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}
Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33


#Search Issue:
https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}
Example:  https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications



##Answer five question:

1️⃣ What is the difference between var, let, and const?
#var:
The "old school" keyword is var. Because of its extreme flexibility—sometimes too much so—bugs may result.
1.Function-based (ignores if blocks or for loops).
2.Starts as undefined. You can use it before declaring it without a crash.
3.Low. Easy to accidentally overwrite variables.
Example:
console.log(red); 
var red = "Hello!"
Output: undefined


#let:
They are "uninitialized." If i touch them before the declaration, the engine throws a ReferenceError.
1.Block-based (stays inside { }).
2.Exists but is "uninitialized." Accessing it early causes a crash .
3.High. Prevents redeclaration in the same scope.

Example:
if (true) {
var leak = "I am Nazrul Islam";
let stay = "I am a Student";
}
console.log(leak);
Output:I am Nazrul Islam 
console.log(stay); 
Output:stay is not defined


#const:
There is a widespread misperception that const renders data immutable. This only applies to primitive values, such as booleans, strings, and numbers.
1.Block-based.
2.Must be initialized immediately. Cannot be reassigned.
3.Highest. Use this for 90% of your variables to prevent accidental changes.

Example:
const user = { name: "Nazrul Islam" };
user.name = "Rhatul Islam"; 
user = { name: "MD.Rubel" };
console.log(user.name);
Output: true
console.log(user); 
Output:false 



2️⃣ What is the spread operator (...)?
This roommate puts their belongings in the center of the corridor. My might trip over their shoes even if they haven not officially moved in yet. If i say to them, "Hey, I'm using this box," they may simply sign it.They don't give a damn about "private rooms", everything in the living room is acceptable .

This roommate has a separate room for their belongings. I can't see or touch their belongings if the door is closed. They are courteous, but i can't use their name on my own box, and i can't see their equipment until they've entered the room.

Example:
const laptop = {
  brand: "HP",
  model: "Core i5",
  color: "Silver"
};

const myLaptop = { 
  ...laptop, 
  color: "Black" 
};

console.log(myLaptop);
Output: { brand: "HP", model: "Core i5", color: "Black" }



3️⃣ What is the difference between map(), filter(), and forEach()?
#map():
Use this to modify every item in a list and obtain a new list of the same length.
I have some raw dough balls on a tray. They all turn out as cookies when i put them in the oven (the function). The quantity of stuff i have is still the same, but they have changed.

Example:
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 5);

console.log(doubled); 
Output: [5, 10, 15]


#filter():
When I wish to choose specific objects according to a condition, use this. A new, smaller list (empty list) is returned.I have at a club entrance.I check everyone's ID. Only the people over 21 are allowed to "pass" into the new room.

Example:
const ages = [15, 22, 18, 30, 12];
const voter = ages.filter(age => age >= 18);
console.log(voter);  
Output:[22, 18, 30]

#forEach():
When I don't require a fresh list back and want to perform anything for each item use this. The result is undefined.As I move along a line of pupils, I give each one a high five. I merely carrying out an activity; I have not altering the pupils or creating a new line.

Example:
const name = ['Nazrul', 'Rakib', 'Robel'];
name.forEach((item, index) => {
  console.log(${item});
});
Output: Nazrul, Rakib, Robel



4️⃣ What is an arrow function?
An Arrow Function is a modern, shorter way to write functions in JavaScript using the => symbol. Think of it as a "cleaner" version of a standard function.

Mainly Differences,
Syntax: I drop the function keyword. If the function is only one line, you can also drop the return keyword and the curly braces {}.

Return:In a one-liner, you don't need to specify return because the result is returned automatically.
Arrow functions do not generate their own this, in contrast to normal functions. In order to prevent errors in timers or event listeners, they inherit it from the surrounding code.

Example:
>Old Function
const multiply = function(a, b) {
return a * b;
};
>Arrow Function
const multiply = (a, b) => a * b;



5️⃣ What are template literals?
In JavaScript, template literals are a contemporary method of handling strings. They utilize backticks (`) instead of single quotes (') or double quotes (").
They address the two main issues with traditional strings: multi-line formatting and untidy concatenation.

Example:
>Old System:
"Hello, " + name + "! You have " + messages + " new alert."
>Template Literal System:
JavaScript
`Hello, ${name}! You have ${messages} new alert.`