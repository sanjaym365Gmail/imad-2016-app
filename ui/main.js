console.log('Loaded!');

var counter = 0;

var button = document.getElementById("counter");

button.onclick = function() {
  // Make a request to the counter end point
  
  // Capture the response in the variable
  
  // Display the value. Render it in the correct span
  counter = counter + 1;
  var spanToDisplay = document.getElementById("count");
  spanToDisplay.innerHTML = counter
};


