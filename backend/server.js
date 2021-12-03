const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mysql = require('mysql2');
const dotenv = require('dotenv');

const app = express();


//middlewares
app.use(cors());
app.use(bodyParser.json());


//database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'graceschool',
    port: 3306,

});


//connection to database check
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});


//importing routes
const studentsRoute = require('./routes/students');


app.use('/students', studentsRoute);


// test route 
app.get('/', (req,res )=> {
  // res.json({ message: 'Hello Benny'});

  let qr = `select * from students`;

   db.query(qr, (err,result) => {
      

    if(err) 
    {
      console.log(err,'errs');

    }

    if(result.length>0)

    {
      res.send({
        message: "All Students",
        data:result
      });
    }
   });
});


//get one student 

app.get('/students/:adm_no', (req,res) => {

  
 let sAdm = req.params.adm_no;

let qr = `select * from students where adm_no = ${aAdm}`;

  db.query(qr, (err,results) => {

    if(err) console.error(err,'errs');
 
    if(result.length>0)
     {
    
      res.send({
      message: "Student with the given adm_no",
      data:results
      });
   }

  });

});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`)
});
