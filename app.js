// App.js

/*
    SETUP
*/
var express = require('express');
var app     = express();
PORT        = process.env.PORT || 9924;

/* 
    FUNCTIONS
*/
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

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
    let return_index_val, array_length;
    if (req.body.random_array.array_length) {
        array_length = req.body.random_array.array_length;
        return_index_val = getRandomInt(array_length);
    
        // Return function results.
        let json_response = {};
        json_response = req.body;
        json_response.random_array = {"return_index" : return_index_val};
        res.json(json_response);
    } else {
        res.send('Error: Missing required JSON information.')
    };    
});

/*
    LISTENER
*/
app.listen(PORT, function(){
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});