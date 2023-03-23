const PI = 3.14;
PI = 42; // error


//         | can      | can       | can    | scope      |
// keyword | reassign | redeclare | mutate | rules      |
//_________|__________|___________|________|____________|
// let     | yes      | no        | yes    | block scope|
// const   | no       | no        | yes    | block scope|
// var     | yes      | yes       | yes    | func scope |

//What is the difference between var and let?

// var you can redeclare like var I = 1, var I = 2, let you can not but you can
// reassign let by accessing the hoisted variable ex. let i = abc..... i = cba

// What is the difference between var and const?

// const can not be reassigned or redeclared, const also creates a block scope

// What is the difference between let and const?

// you can reassign let, const can not be reassigned.

// What is hoisting?

//when js is compiled variables are "hoisted/lifted" to the top of the document before declaration,
// you can see this best with var ex.

// var dog = cat;

//can be seen as 

// var dog;
// dog = cat;

//you can access the hoisted variable before it is delcared but it will be undefined.
