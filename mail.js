import nodemailer from 'nodemailer';
import express from 'express';

const app = express();
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: ''
    }
  });
  
  let mailOptions = {
    from: '',
    to: '',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  app.listen(6000, (req, res) => {
    console.log('port is running on 6000')
  })