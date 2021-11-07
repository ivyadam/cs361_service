// App.js

/*
    SETUP
*/
var express = require('express');
var app     = express();
PORT        = 9924;

/* 
    FUNCTIONS
*/
app.use(express.urlencoded({
    extended: true
}));

/*  
Citation for the following function:
Date: 06NOV
Copied from: w3schools.com
Source URL: https://www.w3schools.com/JS/js_random.asp
*/
function getRandomInt(max) {
    return Math.floor(Math.random() * (max - 1));
}

/*
    ROUTES
*/
app.get('/test_api', function(req, res)
    {
        res.sendFile(__dirname + "/public/test_api.html")
    });

app.post('/', (req, res) => {
    // Call random integer function.
    let return_index_val;
    return_index_val = getRandomInt(req.body.recipe.random_array.length);

    // Return function results.
    let json_response;
    json_response.recipe = req.body.recipe;
    json_response.recipe.name = req.body.recipe.name;
    json_response.recipe.recipe_url = req.body.recipe.recipe_url
    json_response.recipe.random_array = {"return_index" : return_index_val};
    res.json(json_response);
});

/*
    LISTENER
*/
app.listen(PORT, function(){
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});