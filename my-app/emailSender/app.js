const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000");
});

app.get("/", (req, res, err) => {
  
  res.send(info);
});

app.post("/", (req, res) => {
  let user = req.body;
  sendMail(user, info => res.send(info));
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"Formularz kontaktowy na stronie <jak.staw@gmail.com>', 
    to: "jak.staw@gmail.com", 
    subject: "Formularz na stronie - prośba o kontakt", 
    html: `<h1>Od: ${user.name} < ${user.email} ></h1><br>
            <p>${user.message}</p>`,
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}
