const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

const routes = require('./server/routes/routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

//create connection with sql
const db = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'nodemysql'
});

//connect
db.connect((err) => {
    if(err){
        throw err;
    } else {
        console.log('Connected');
    }
});



//crate db
app.get('/createdb', (req,res) => {
    let sql = 'Create Database nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('database created...');
    })
});

//insert houses into database
app.get('/addhouse', (req,res) => {
    let house = {street: '66 red ave', city: 'hartford', rooms: 4, parking_spots: 4}
    let sql = 'INSERT INTO Houses SET ?'
    let query = db.query(sql, house, (err, result) => {
        if(err) throw err;
        else console.log(result);
        res.send('House Inserted');
    });
});

//select All houses
app.get('/gethouses', (req,res) => {
    let sql = 'SELECT * FROM Houses'
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        else console.log(results);
        res.send(results);
    });
});

//Select a specific house
app.get('/gethouse/:id', (req,res) => {
    let sql = `SELECT * FROM Houses WHERE idHouses = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        else console.log(result);
        res.send('House Record Found!');
    });
});

//update a house
app.get('/updatehouse/:id', (req,res) => {
    let street = '44 terrence st';
    let sql = `UPDATE Houses SET street = '${street}' WHERE idHouses = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        else console.log(result);
        res.send('House Record Updated!');
    });
});

app.post('/test', (req, res) => {
    console.log(req.body)
    let data = {
        name: 'bruno',
        age: 4
    }
    res.send(data);
});

app.listen(port, () => {
    console.log('Listening');
});
