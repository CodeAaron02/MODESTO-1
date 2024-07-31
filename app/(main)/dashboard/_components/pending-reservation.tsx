"use client";

import { confirmBook, deleteBook } from "@/action/book";
import { Button } from "@/components/ui/button";
import { Book } from "@prisma/client";
import React, { useTransition } from "react";
import { toast } from "sonner";

type PendingReservationProp = {
  notConfirmBooks: Book[] | null;
};

export const PendingReservation = ({
  notConfirmBooks,
}: PendingReservationProp) => {
  const [pending, setTransition] = useTransition();

  const th = [
    "Guests",
    "Email",
    "Phone Number",
    "Package",
    "Date Order",
    "Actions",
  ];

  const onConfirm = (bookId: string) => {
    setTransition(async () => {
      await confirmBook(bookId)
        .then(() => toast("Confirm successfully"))
        .catch(() => toast("Something went wrong"));
    });
  };

  const onDeleteBook = (bookId: string) => {
    setTransition(async () => {
      await deleteBook(bookId)
        .then(() => toast("Deleted successfully"))
        .catch(() => toast("Something went wrong"));
    });
  };

  return (
    <div className="mt-5">
      <h1 className="text-lg font-semibold">Pending Reservations</h1>

      <div className="mt-3 overflow-auto text-black text-sm">
        <table className="w-full">
          <thead>
            <tr>
              {th.map((th) => (
                <th key={th} className="font-medium p-3 bg-white border">
                  {th}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {notConfirmBooks?.map((book) => (
              <tr key={book.id} className="text-center bg-white">
                <td className="p-2 border border-[#dddddd]">{book.name}</td>
                <td className="p-2 border border-[#dddddd]">{book.email}</td>
                <td className="p-2 border border-[#dddddd]">
                  {book.phoneNumber}
                </td>
                <td className="p-2 border border-[#dddddd]">{book.packages}</td>
                <td className="p-2 border border-[#dddddd]">{book.date}</td>
                <td className="p-2 border border-[#dddddd] space-x-2 space-y-2">
                  <Button
                    disabled={pending}
                    onClick={() => onConfirm(book.id)}
                    size="sm"
                    className="bg-green-500 hover:bg-green-400"
                  >
                    Confirm
                  </Button>
                  <Button
                    onClick={() => onDeleteBook(book.id)}
                    size="sm"
                    className="bg-red-500 hover:bg-red-400"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
