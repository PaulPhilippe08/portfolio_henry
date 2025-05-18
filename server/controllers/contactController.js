const Message = require("../models/Message");
const { sendEmail } = require("../utils/emailSender");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Sauvegarde en base de données
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Envoi email
    const emailSent = await sendEmail(
      process.env.GMAIL_USER,
      `Nouveau message de ${name}`,
      `De: ${email}\n\nMessage: ${message}`
    );

    if (emailSent) {
      res
        .status(200)
        .json({ success: true, message: "Message envoyé avec succès" });
    } else {
      res
        .status(500)
        .json({ success: false, message: "Erreur lors de l'envoi du message" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
