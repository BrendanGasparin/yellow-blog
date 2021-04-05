// changes logos when user clicks the logo
let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/b-logo.jpeg") {
        myImage.setAttribute("src","images/b-logo2.jpg");      
    }
    else
    {
        myImage.setAttribute("src", "images/b-logo.jpeg");
    }
}

// changes the heading text to a sinister message
/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Submit to the Machine!';/*

// alerts the user every time they click the html document
/* document.querySelector('html').onclick = function() {
    alert('Stop touching me...');
} */

// changes the user and provides a personalised welcome message
// it does this by setting a value (the username)
// in the local storage of the user's browser
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

// TUTORIAL: https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript/
// regular expression to identify HTML tags in the input string, replacing the identified tag with a null string.
function removeTags(str)
{
  if (str===null || str==="")
    return "guest";
  else
    str = str.toString();
  
  return str.replace( /(<([^>]+)>)/ig, '');
}

function setUserName() {
    let myName = prompt("Enter username:");
    if(!myName) myName = "guest";
    myName = removeTags(myName);
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome, " +myName+ "!";
}

// AUTO-PROMPT FROM TUTORIAL - NOT COOL
//if(!localStorage.getItem('name')) {
//    setUserName();
//}

if(localStorage.getItem("name")) {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome, " +storedName+ "!";
}

myButton.onclick = function() {
    setUserName();
}