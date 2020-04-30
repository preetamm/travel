
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require("compression");


const app = express();

app.use(cors());

app.use(compression());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())


app.use('/', (req, res) => {
    var options = {
        root: path.join(__dirname, 'html')
      }
    
    res.sendFile("home.html", options, ()=> {
        console.log("someting is wrong")
    });
})

app.listen(3000, ()=> {
    console.log("server satarted")
})