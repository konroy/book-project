require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');

app.route('/books/:userID')
    .get(function(req,res,next){
        connection.query(
            "SELECT * FROM `books` WHERE userID = ? LIMIT 3", req.params.userID,
            function(error,results,fields){
                if(error) throw error;
                res.json(results);
            }
        );
    });

app.route('/')
    .post(function(req,res,next){
        connection.query(
            "INSERT INTO books (bookTitle, authorName, userID) VALUES ()",
            function(error,results,fields){
                if(error) throw error;
                res.json("Insert success");
            }
        );
    });

app.get('/status',(req,res)=> res.send('Working!'));

app.set('port',process.env.PORT || 3000);
app.listen(3000);