// changes logos when user clicks the logo
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/b-logo.jpeg') {
        myImage.setAttribute('src','images/b-logo2.jpg');      
    }
    else
    {
        myImage.setAttribute('src', 'images/b-logo.jpeg');
    }
}

// changes the heading text to a sinister message
/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Submit to the Machine!';/*

// alerts the user every time they click the html document
/* document.querySelector('html').onclick = function() {
    alert('Stop touching me...');
} */