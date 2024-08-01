"use client";

import { Input } from "@/components/ui/input";
import React, { ElementRef, useRef, useState, useTransition } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { book } from "@/action/book";
import { toast } from "sonner";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const BookNowForm = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [pending, setTransition] = useTransition();
  const formRef = useRef<ElementRef<"form">>(null);

  const formatDate = (date: Value): string => {
    if (Array.isArray(date)) {
      return date[0] ? moment(date[0]).format("YYYY-MM-DD") : "";
    } else {
      return date ? moment(date).format("YYYY-MM-DD") : "";
    }
  };

  const onBook = async (formData: FormData) => {
    setTransition(async () => {
      await book(formData)
        .then((data) => {
          if (data?.error) {
            toast(data.error);
            return;
          }

          toast("Booked successfully");
          formRef.current?.reset();
        })
        .catch(() => toast("Something went wrong"));
    });
  };

  const packages = [
    { packageName: "Day Tour Weekdays", rentalFee: 3500 },
    { packageName: "Day Tour Weekends & Holiday", rentalFee: 4000 },
    { packageName: "Overnight (Sunday - Thursday)", rentalFee: 11900 },
    {
      packageName: "Overnight (Friday - Saturday & Holidays)",
      rentalFee: 12900,
    },
    {
      packageName: "Day & Night Tour 22Hours (Sunday - Thursday)",
      rentalFee: 16900,
    },
    {
      packageName: "Day & Night Tour 22Hours (Friday - Saturday & Holidays)",
      rentalFee: 18400,
    },
    {
      packageName: "Night & Day Tour 22Hours (Sunday - Thursday)",
      rentalFee: 16900,
    },
    {
      packageName: "Night & Day Tour 22Hours (Saturday & Holidays)",
      rentalFee: 18400,
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col gap-20 pb-20 pt-28 px-3 max-w-[65rem] mx-auto min-h-[100dvh]">
      <div className="flex items-center justify-center flex-1">
        <Calendar
          onChange={onChange}
          value={value}
          className="text-white !bg-black !border-none text-xl !flex-1"
          calendarType="gregory"
        />
      </div>

      <form
        action={onBook}
        ref={formRef}
        className="flex flex-col items-center justify-center flex-1 text-black"
      >
        <div className="w-full">
          <label htmlFor="name" className="text-sm text-white">
            Name
          </label>
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="mt-2"
          />
        </div>

        <div className="w-full mt-4">
          <label htmlFor="email" className="text-sm text-white">
            Email
          </label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="mt-2"
          />
        </div>

        <div className="w-full mt-4">
          <label htmlFor="phoneNumber" className="text-sm text-white">
            Phone Number
          </label>
          <Input
            type="tel"
            name="phoneNumber"
            placeholder="Enter your phone number"
            className="mt-2"
          />
        </div>

        <div className="w-full mt-4">
          <label htmlFor="packages" className="text-sm text-white">
            Packages
          </label>
          <select
            name="packages"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2"
          >
            <option value="">Choose package</option>
            {packages.map((p, idx) => (
              <option key={idx} value={`${p.packageName}|${p.rentalFee}`}>
                {p.packageName}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full mt-4">
          <label htmlFor="date" className="text-sm text-white">
            Date
          </label>
          <Input
            type="date"
            name="date"
            readOnly
            value={formatDate(value)}
            placeholder="Enter your phone number"
            className="mt-2"
          />
        </div>

        <Button disabled={pending} type="submit" className="mt-5 w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};
