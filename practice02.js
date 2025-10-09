// Basic JavaScript program to get user's name and age, then calculate year of birth
let userName = prompt("Enter your name: " );
let userAge  = prompt ("Enter your age: ");
let yearOfBirth = new Date().getFullYear() - userAge;
alert(userName + " you were born in " + yearOfBirth + ".");