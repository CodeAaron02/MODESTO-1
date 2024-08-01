"use client";

import { addPrice, completeBook } from "@/action/book";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Book } from "@prisma/client";
import React, { useState, useTransition } from "react";
import { FaCheck, FaPlus, FaSave } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { toast } from "sonner";

interface RecentReservationsProp {
  confirmBooks: Book[] | null;
}

export const RecentReservations = ({
  confirmBooks,
}: RecentReservationsProp) => {
  const [addsOn, setaddsOn] = useState<Book | null>(null);
  const [pending, setTransition] = useTransition();

  const th = [
    "Guests",
    "Email",
    "Phone Number",
    "Package",
    "Date Order",
    "Total Price",
    "Status",
    "Actions",
  ];

  const onComplete = (bookId: string) => {
    setTransition(async () => {
      await completeBook(bookId)
        .then(() => toast("Completed"))
        .catch(() => toast("Something went wrong"));
    });
  };

  const cashFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
  });

  const onSave = () => {
    setTransition(async () => {
      await addPrice(addsOn)
        .then(() => {
          toast("Save successfully");
          setaddsOn(null);
        })
        .catch(() => toast("Something went wrong"));
    });
  };

  return (
    <div className="mt-5">
      <h1 className="text-lg font-semibold">Recent Reservations</h1>

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
            {confirmBooks?.map((book) => (
              <tr key={book.id} className="text-center bg-white">
                <td className="p-2 border border-[#dddddd]">{book.name}</td>
                <td className="p-2 border border-[#dddddd]">{book.email}</td>
                <td className="p-2 border border-[#dddddd]">
                  {book.phoneNumber}
                </td>
                <td className="p-2 border border-[#dddddd]">{book.packages}</td>
                <td className="p-2 border border-[#dddddd]">{book.date}</td>
                <td className="p-2 border border-[#dddddd]">
                  {addsOn?.id === book.id ? (
                    <Input
                      onChange={(e) =>
                        setaddsOn((prev) =>
                          prev?.id === book.id
                            ? { ...prev, price: parseInt(e.target.value) }
                            : prev
                        )
                      }
                      type="number"
                      placeholder="Price"
                      defaultValue={book.price}
                    />
                  ) : (
                    cashFormatter.format(book.price)
                  )}
                </td>
                <td className="p-2 border border-[#dddddd] text-[11px]">
                  <p
                    className={cn(
                      " rounded-full p-1 text-white font-semibold capitalize",
                      book.status === "pending"
                        ? "bg-orange-500"
                        : "bg-blue-500"
                    )}
                  >
                    {book.status}
                  </p>
                </td>
                <td className="p-2 border border-[#dddddd] space-x-1 space-y-1 min-w-[12rem]">
                  {book.status === "pending" && (
                    <Button
                      title="Complete"
                      disabled={pending}
                      onClick={() => onComplete(book.id)}
                      size="sm"
                      className="bg-green-100 hover:bg-green-100 rounded-full"
                    >
                      <FaCheck className="text-green-500" />
                    </Button>
                  )}

                  <Button
                    onClick={() =>
                      setaddsOn((prev) => (prev?.id === book.id ? null : book))
                    }
                    size="sm"
                    title="Adds On"
                    className="rounded-full bg-pink-100 hover:bg-pink-100"
                  >
                    {addsOn?.id === book.id ? (
                      <IoClose className="text-pink-500 scale-[1.4]" />
                    ) : (
                      <FaPlus className="text-pink-500" />
                    )}
                  </Button>

                  {addsOn?.id === book.id && (
                    <Button
                      onClick={onSave}
                      size="sm"
                      title="Save"
                      className="rounded-full bg-yellow-100 hover:bg-yellow-100"
                    >
                      <FaSave className="text-yellow-500" />
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
