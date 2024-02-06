import nodemailer from 'nodemailer';
import express from 'express';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

const __filesname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__filesname, 'public')));


app.post('/login', function (req, res){
  var x = req.body.to
  var y = req.body.sub
  var z = req.body.text
  var p = "Thank you, "+ x + " "+ y + " " + z + ". we will contact you soon";
   console.log(x)
   console.log(y)
   console.log(z)
   console.log(p)
   res.render("login.ejs", {"text":p })
  
   let mailOptions = {
    from: process.env.email,
    to: x,
    subject: y,
    html: z
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  });
  

app.get('/login', function (req, res) {
  console.log(__dirname)
  res.render("login.ejs", {"text": 'Fill this Form to get Connected With Us'})

});
const __dirname = path.dirname(fileURLToPath(import.meta.url));
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.pass
    }
  });
  
app.listen(5600, (req, res) => {
    console.log('port is running on 5600'),
    console.log(process.env.email),
    console.log(process.env.pass)
    
  });