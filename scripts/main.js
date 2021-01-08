//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Submit to the Machine!';

// click sensitivity everwhere
/* document.querySelector('html').onclick = function() {
    alert('Stop touching me...');
} */

// logo changer
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