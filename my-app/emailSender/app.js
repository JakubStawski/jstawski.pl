const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.listen(3000, () => {
  console.log("The server started on port 3000");
});

app.get("/", (res) => {
  res.send(info);
});

app.post("/", (req, res) => {
  let user = req.body;
  sendMail(user, info => res.send(info));
});

async function sendMail(user, callback) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: `"Formularz kontaktowy na stronie < jak.staw@gmail.com >`, 
    to: "jak.staw@gmail.com", 
    subject: "Formularz na stronie jstawski.pl - prośba o kontakt", 
    html: `<strong>Od: ${user.name} < ${user.email} ></strong><br />
            <p>${user.message}</p>`,
  };
  let info = await transporter.sendMail(mailOptions);
  console.log(info);
  callback(info);
}
