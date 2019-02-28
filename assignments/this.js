/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.

 * 1. Implicit Binding: "Automatic binding" Binds to the object before the dot. Refers to what is currently inside of the object. */

// const student = {
//   name: "Mystique",
//   age: 28,
//   superpower: "absorber",
//   speak: function() {
//     return `My name is ${this.name} and my superpower is ${this.superpower}.`;
//   }
// };
// console.log(student.speak());

/* 2. Explicit Binding: Uses a function to bind info store in different places...Passed to function in arguments. Uses.apply(), .call(), and .bind().*/
// const teacher = {
//   name: "Professor X"
// };

// const skills = ["telepathy", "mentoring"];

// function introduce(skills1, skills2) {
//   return `My name is ${
//     this.name
//   } and I am skilled in ${skills1} and ${skills2}.`;
// }
// console.log(introduce.apply(teacher, skills));

/* 3. New Binding: Constructor function. Binds 'new' attributes from a new variable to a preexisting function  */

function student(grade, math, science) {
  this.grade = grade;
  this.math = math;
  this.science = science;
  this.statement = function() {
    console.log(
      `This student is in ${this.grade} grade and will be taking ${
        this.math
      } and ${this.science} next semester.`
    );
  };
}

const adamSmith = new student("4th", "Algebra", "Biology");
console.log(adamSmith.statement());

/* 4. This points to its self but binds to window*/

// function greeting(message) {
//   console.log(this);
//   return `${message}!`;
// }
// console.log(greeting("hello"));

/*
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
