"use server";

import { db } from "@/lib/db";
import { Book } from "@prisma/client";
import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";

type BookType = {
  name: string;
  email: string;
  phoneNumber: string;
  packages: string;
  date: string;
};

const sendToEmail = async (
  name: string,
  email: string,
  phoneNumber: string,
  packages: string,
  date: string
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MODESTO_EMAIL,
      pass: process.env.MODESTO_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MODESTO_EMAIL,
    subject: "Booking",
    text: `name: ${name}\nemail: ${email}\nphoneNumber: ${phoneNumber}\npackages: ${packages}\ndate: ${date}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export const book = async (formData: FormData) => {
  const { name, email, phoneNumber, packages, date } = Object.fromEntries(
    formData.entries()
  ) as BookType;

  if (!name || !email || !phoneNumber || !packages || !date) {
    return { error: "Please fill up all the fields" };
  }

  const [package_, price] = packages.split("|");

  await sendToEmail(name, email, phoneNumber, package_, date);

  await db.book.create({
    data: {
      name,
      email,
      phoneNumber,
      packages: package_,
      price: parseInt(price),
      date,
    },
  });

  revalidatePath("/");
};

export const confirmBook = async (bookId: string) => {
  await db.book.update({
    where: {
      id: bookId,
    },
    data: {
      isConfirm: true,
    },
  });

  revalidatePath("/");
};

export const deleteBook = async (bookId: string) => {
  await db.book.delete({
    where: {
      id: bookId,
    },
  });

  revalidatePath("/");
};

export const completeBook = async (bookId: string) => {
  await db.book.update({
    where: {
      id: bookId,
    },
    data: {
      status: "completed",
    },
  });

  revalidatePath("/");
};

export const addPrice = async (addsOn: Book | null) => {
  await db.book.update({
    where: {
      id: addsOn?.id,
    },
    data: {
      price: addsOn?.price,
    },
  });

  revalidatePath("/");
};
