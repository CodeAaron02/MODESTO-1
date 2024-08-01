import { db } from "./db";

export const getTotals = async () => {
  const bookings = await db.book.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const pending = await db.book.findMany({
    where: {
      status: "pending",
    },
  });

  const completed = await db.book.findMany({
    where: {
      status: "completed",
    },
  });

  return { bookings, completed, pending };
};

export const getNotConfirmBooks = async () => {
  const notConfirmBooks = await db.book.findMany({
    where: {
      isConfirm: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return notConfirmBooks;
};

export const getConfirmBooks = async () => {
  const confirmBooks = await db.book.findMany({
    where: {
      isConfirm: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return confirmBooks;
};
