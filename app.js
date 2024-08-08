/////////////////ALERT QUESTIONS////////////////

// 1: QUESTION
alert("well come to this wepsite");

// 2: QUESTION 

alert("Error! Please Enter a Valid Password");

// 3: QUESTION

// Display the message in an alert box with line breaks
alert("kahan jarahe ho.\nnicha dekho.\n.itna nicha nhi bs ye ok likha ha wahan");

// 4: QUESTION 

alert("well come to js land")
alert("Happy Coding!\n ▢ Prevent this page from creating a aditional dialogs.")

// 5: QUESTION 

alert("Hello... i can run JS Through my web browser's console.")
console.log("Hello... i can run JS Through my web browser's console.")

// 7: QUESTION
//Q: Practice placement of <script></script> element in
//following sections of your project in exercise 6:
//a. Head
//b. Body (before your page’s HTML)
//c. Body (inside your page’s HTML)
//d. Body (after your page’s HTML)
/////////////ANSWER//////////////
//c. Body (inside your page's HTML) ANSWER......



/////////////////VARIABLES FOR STRINGS ////////////////////

// 1: QUESTION

var username; //answer:-

// 2: QUESTION

var myName = "Huzaifa Qureshi"; //answer:-

// 3: QUESTION

var massage = "hello world"
alert("massage"); //answer:-

// 4: QUESTION

var studentName = "jhone Doe"
var studentAge = "15"
var studentData = "Certified Mobile Application Development"

alert(studentName);
alert(studentAge);
alert(studentData);  //answer:-

// 5: QUESTION

alert("pizza\npizz\npiz\npi\np") //answer:-

// 6: QUESTION

var email = "www.hq03112119535@gmail.com";

alert("My Email Address is:"+email); //answer:-

// 7: QUESTION

var lerner = "A smarter way to learn JavaScript";
alert("I Am Trying To Learn from the Book " + lerner); //answer:-

// 8: QUESTION

document.write("Yah! I can write HTML content through JavaScript.");  //answer:-

// 9: QUESTION

alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");  //answer:-

////////////////////VARIABLES FOR NUMBERS/////////////////

// 1: QUESTION

var age = 15;

alert("i am " + age + "years old"); //answer:-

// 2: QUESTION

if(localStorage.getItem('visitCount')) {
    // Increment the existing counter
    var count = parseInt(localStorage.getItem('visitCount')) + 1;
    localStorage.setItem('visitCount', count);
} else {
    // Initialize the counter if it doesn't exist
    localStorage.setItem('visitCount', 1);
}

// Display the visit count wherever you need to
var visitCount = localStorage.getItem('visitCount');
alert("You Have Visited This Site: " + visitCount + " Times"); //answer:-

// 3: QUESTION

var birthday = 2008;

document.write("<br>My birth year is " + birthday + "<br> Data type of my deeclared variable is number.<br>");  //answer:-

// 4: QUESTION

var visitorName = +prompt("Tell me the Your Name Please...");
var productTitle = +prompt("Can You Please Put The Product-name.");
var ordered = +prompt("How many Products You Want.");

alert("<strong>" + visitorName + "</strong> ordered <strong>" + ordered + " " + productTitle + "</strong> On XYZ Closing Store.." ); //answer:-

///////////////////////////VARIABLE NAMES: LEGAL & ILLEGAL////////////////////

// 1: QUESTION

var a, b, c;
var a = 10, b = 5, c = 20; // answer:-

// 2: QUESTION

//legal VARIABLE NAMES:-
 
var firstName;   ///PASCELCASE
var firstname;   ///LOWER CAMEL CASE
var first_name;  ///SNAKE CASE
var first-neme;  ///THIS-IS-KIBAB-CASE

//ILLEGAL VARIABLE NAMES:-

// 1: number se start nhi kar skhte
/// (1) 2firstname; LIKE THAT:
// 2: Special character us nhi kar skhte.
/// (2) @#%firtsname; LIKE THAT:
// 3: Space not allow.
/// (3) first name; LIKE THAT:

// 3: QUESTION

document.write("<br> <h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain. NUMBER $ and For example $my_1stVariable");
document.write("Variables must begin with a $ _ and leters...")
document.write("Variable names are case. sensitive like rafey and RAFEY both are different variables in js...");
document.write("Variable names should not be JS. like this for catch case and var let const");


////////////////////MATH EXPRESSIONS////////////////////////

// 1: QUESTION

// var a = +prompt("enter your number")
//  var b = +prompt("enter your number")
//  c = a+b
//  document.write("sum of   " + a +" and  "+ b +" = "+c)

 ///////////////SUBTRACTION//////////


//  var a = +prompt("enter your number")
//  var b = +prompt("enter your number")
//  c = a-b
//  document.write("sub of   " + a +" and  "+ b +" = "+c)

 ////////////////DIVISION//////////////////

//  var a = +prompt("enter your number")
//  var b = +prompt("enter your number")
// c = a/b
// document.write("Divison of   " + a +" and  "+ b +" = "+c)

/////////////////MODULUS////////////////

// var a = +prompt("enter your number")
// var b = +prompt("enter your number")
// c = a%b
// document.write("modulus of   " + a +" and  "+ b +" = "+c)

//////////////////


