const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bitcoin1.jpg') {
      myImage.setAttribute ('src','images/bitcoin2.jpg');
    } else {
      myImage.setAttribute ('src','images/bitcoin1.jpg');
    }
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
}
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}
myButton.onclick = function() {
  setUserName();
}
}
