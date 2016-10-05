console.log('Loaded!');

//Use the Javascript to change text
var element = document.getElementById("main-text");

element.innerHTML = 'New Data';

// Move the madi.png picture
var img = document.getElementById("madi");

function moveRight(){
    img.style,marginLeft = '100px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100)
    // img.style.marginLeft = '100px';
};
