console.log('Loaded!');

//Use the Javascript to change text
var element = document.getElementById("main-text");

element.innerHTML = 'New Data';

// Move the madi.png picture
var img = document.getElementById("madi");

img.onclick = function(){
    img.style.marginleft = '100px';
};
