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

/*
How to name your variables
1. You can use [a-z] [A-Z] [0-9]
2. Variable NEVER start with number
3. There are certains words you can't use (reserve words)
4. No Spaces, an no -, use _
5. Use snake_case or lowerCamelCase
*/

/*======================
    Complex Datatypes - Array and Objects
======================*/
// Saving multiple values into one variable
var fruits = ['apple','banana','strawberry','kiwi'];
console.log(fruits[2]);

//Object use {}

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