require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const nodemailer = require("nodemailer");
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kyawtun023212@gmail.com",
    pass: "test1234$",
  },
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "kyawtun023212@gmail.com",
    text: `You have a new message from ${name} (${email})\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ msg: "Error sending message" });
    }
    console.log("Email sent: " + info.response);
    res.status(200).json({ msg: "Message sent successfully." });
  });
});

app.get("/", (req, res) => {
  return res.json({ msg: "hello all" });
});

app.listen(process.env.PORT, (req, res) => {
  console.log("app running on localhost:" + process.env.PORT);
});
