const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

exports.sendEmail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return false;
  }
};
