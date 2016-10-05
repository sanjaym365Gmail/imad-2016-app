console.log('Loaded!');



var button = document.getElementById("counter");

button.onclick = function() {
  // create a request Object
  var request = new XMLHttpRequest();
  // Capture the response in the variable
  request.onReadyStateChange = function(){
    if (request.readyState === XMLHttpRequest.DONE)  {
        //Take some action
        if (request.status === 200){
            // Get the counter value from the counter page
            var counter = request.responseText; 
            // Display the value. Render it in the correct span
            var spanToDisplay = document.getElementById("count");
            spanToDisplay.innerHTML = counter.toString();
        }
    }
  };
  
  // Make a request to the counter end point
  request.open("GET", "http://sanjaym365gmail.imad.hasura-app.io/counter",true);
  request.send();
  
  
};


