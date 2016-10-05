console.log('Loaded!');

//Use the Javascript to change text
var element = document.getElementById("main-text");

element.innerHTML = 'New Data';

// Move the madi.png picture
var img = document.getElementById("madi");
var marginLeft = 20;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft +'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
    // img.style.marginLeft = '100px';
};
