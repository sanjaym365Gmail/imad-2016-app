var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



var articles = {
    'article-one': {
        title: "Article One | Sanjay Mishra ",
        heading:"Article One",
        date: "Oct 2,  2016",
        content: `<p>
                    This is first Para.This is first Para.This is first Para.This is first Para.This is first Para.This is first Para.This is first Para.This is first Para.
                </p>
                <p class="BoldThis">
                    This is Second Para.This is Second Para.This is Second Para.This is Second Para.This is Second Para.This is Second Para.This is Second Para.
                </p>
                <p>
                    This is Third Para.This is Third Para.This is Third Para.This is Third Para.This is Third Para.This is Third Para.This is Third Para.This is Third Para.
                </p>
                `,
        },
    'article-two' : {      
        title: "Article Two | Sanjay Mishra ",
        heading:"Article Two",
        date: "Oct 3,  2016",
        content: `<p>
                    This is my second article. 
                </p>
                `,
  },
    'article-three' : {
        title: "Article Three | Sanjay Mishra ",
        heading:"Article Three",
        date: "Oct 4,  2016",
        content: `<p>
                    This is my Third article. 
                </p>
                `,
    },
};

function createTemplate (data)     {
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;

var htmlTemplate =
`<html>
    <head> 
        <title> ${title} </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div Class="container">
            <div>
                <a href='/'> Back</a> 
            </div>
            <hr/> <!-- This tag is for drawing a line -->
            <h1> ${heading} </h1>
            <div> ${date} </div>
            <div> ${content} </div>
            
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req,res) {
   counter = counter +1;
   res.send(counter.toString());
});

var names =[];
app.get('/submit-name', function(req,res) { // send the names as the query parameter
   //Get the name from the request
   var name = req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

// From Express framework this facility of createing a variable works. :articleName
// whatever comes after / will be assigned to articleName variable and can be used in that function
app.get('/:articleName', function (req,res) {
    var thisArticleName = req.params.articleName;
   res.send(createTemplate(articles[thisArticleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/submit-name/:name', function(req,res) {
   //Get the name from the request
   var name = req.params.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
