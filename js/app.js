//Single line comment
/*
multiline block comments
if you want to comment out a piece of code
you can highlight the code and press ctrl+/

home //begin of line
end //end of line
shift + end =select entire line
*/

/*======================
    variables and Primitive Datatypes
======================*/

var name ='Eric';
// the name variable save a string datatype

var some_number =89; //this is an integer datatype
var a_boolean = true;  //this is a boolean datatype

/*1111
How to name your variables
1. You can use [a-z] [A-Z] [0-9]
2. Variable NEVER start with number
3. There are certains words you can't use (reserve words)
4. No Spaces, an no -, use _
5. Use snake_case or lowerCamelCase
*/

/*======================
    Complex Datatypes - Arrays and Object LITERALS
======================*/
// Saving multiple values into one variable
var fruits = ['apple','banana','strawberry','kiwi','watermelon'];
console.log(fruits[2]);

//Object use {}
//Object LITERALS
var shirt = {
    style: 't-shirt',
    color: 'red',
    graphic: 'butterfly',
    sizes: [
        'xxa','xs','s','m','l','xl','xxl'
    ]
};

console.log(shirt.color);
console.log(shirt['color']);
console.log(shirt.sizes[3]);

/*======================
    Loops
======================*/
//for loop
//var i=0 set the start condition of the loop
//i<4  gives loop a condition where it should run
//i++ increases the valur of i by 1
console.log(fruits); // just log the fruit
for (var i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}


/*======================
    Evaluators
======================*/

/*
<
>
<=
>=

== equal to
=== REALLY equal to  //check data and data type

3 == '3' TRUE
3 === '3' FALSE
*/

console.log(3 === '3');

/*======================
    Conditionals
======================*/

//if (3 === '3'|| true) {
if (3 === '3'&& true) {
    //The code in here will only run if the condition inside of ()
    // is true
    console.log('the consition is true');
} else {
    //the code in here will only run if the condition is false
    console.log('the consition is false');
}


/*======================
    class3
======================*/
//can_drink();
//Object should have the same structure if they refer to the sam thing.

var a_person = {
    name: 'John Doe',
    age: 23,
    email: 'john.doe@fake.com'
}

var stacy = {
    name: 'Stacy Doe',
    age: 15,
    email: 'stacy.doe@fake.com'
}


var can_drink = function (person) {
    var age = person.age;

    if(age>=19){
        return true;
    }else{
        return false;
    }
}

console.log(can_drink(stacy));

/*======================
    Function stuff
======================*/
// functions are used to defer code for later use
//When we defer code inside functions, we create a scope

//Javascript files will start off in the Global Scope.
//Functions you create will create a Local Scope localized to that function



//Assignment by Value
var name = 'Matt';
var name2 = name;

//Manipulation one
name=name.toUpperCase();
console.log(name);
console.log(name2);

//Assignment by reference
var pets = ['cat', 'dog'];
var pets2=pets;

//Manupulate one
pets.push('rabbit');

console.log(pets);
console.log(pets2);

/*
The above peculiarity yields the concepts of:
1. Mutability
2. Pure and Impure Functions
3. Object Cloning
*/


/*======================
    ES6 Stuff you should know
    ECMAScript 6 
======================*/
//--VARIABLE
// let - DECLARE variable that will have it's valur reassigned.
// const - the variable will never change. *IEmuniable


let count = 0;
const namee = 'Erice';

//Function
const greeting = function () {
    return 'Hello World!';

}

//arrow function

const arrow_greeting  = () => 'Hello World!';
const expand_arrow_greeting  = () => {
    return 'Hello World!';
}

//arrow function with parameters
const arrow_greeting_with_parameters = greet => greet;


console.log(greeting());
console.log(arrow_greeting());
console.log(expand_arrow_greeting());
console.log(arrow_greeting_with_parameters('What\'s up World!'));


//The Three dots operator
let ingedients = ['onions', 'garlic', 'chicken','lemon'];
let herbs = ['parsley', 'thyme'];

const recipe = [...ingedients,...herbs];

console.log(recipe);

//Object short form

const type = 'sweater';
const color = 'red';
let size1 = [
    'small',
    'medium',
    'large'
]

const shirt1 = {
    // 'type': type,
    // 'color': color,
    // 'size': size
    //if variable = key, key can be ommitted.
    type,
    color,
    size: size1
}

console.log(shirt1);


//Arrow function common use cases
//map(), filter();

//sum(); with ES6
const sum = num_array =>{
    let total = 0;
    // let test = num_array.map(num=>{
    //     return total=total+num;
    // });

    let test = num_array.map(num=>total=total+num);    
    return test[test.length-1];
}

console.log(sum([2,3,4,5]));



const sum2 = num_array =>{
    let total = 0;
    // let test = num_array.map(num=>{
    //     return total=total+num;
    // });

    // let test = num_array.map(num=>total=total+num);    
    // return test[test.length-1];
    return num_array.map(num=>total=total+num).pop();
}

console.log(sum2([2,3,4,5]));