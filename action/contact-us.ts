"use server";

import nodemailer from "nodemailer";

export const contactUs = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const toEmail = formData.get("email") as string;
  const message = formData.get("message") as string;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MODESTO_EMAIL,
      pass: process.env.MODESTO_PASSWORD,
    },
  });

  const mailOptions = {
    from: toEmail,
    to: process.env.MODESTO_EMAIL,
    subject: name,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
