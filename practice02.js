let userName = prompt("Enter your name: " );
let userAge  = prompt ("Enter your age: ");
let yearOfBirth = new Date().getFullYear() - userAge;
alert(userName + " you were born in " + yearOfBirth + ".");