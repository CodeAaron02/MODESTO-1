"use client";

import { cn } from "@/lib/utils";
import { Book } from "@prisma/client";
import React from "react";
import { IoBook } from "react-icons/io5";
import { MdPendingActions } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { AiFillDollarCircle } from "react-icons/ai";
import { kmbFormatter } from "@/utils/kmbt-formatter";

interface DashboardProp {
  totals: {
    bookings: Book[] | null;
    completed: Book[] | null;
    pending: Book[] | null;
  };
}

export const Dashboard = ({ totals }: DashboardProp) => {
  const totalSales = totals.completed?.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  const dashboard = [
    {
      icon: <IoBook className="text-[3rem] text-blue-500" />,
      color: "bg-blue-100",
      name: "Booked",
      total: totals.bookings?.length,
    },
    {
      icon: <MdPendingActions className="text-[3rem] text-red-500" />,
      color: "bg-red-100",
      name: "Pending",
      total: totals.pending?.length,
    },
    {
      icon: <HiMiniUsers className="text-[3rem] text-yellow-500" />,
      color: "bg-yellow-100",
      name: "Completed",
      total: totals.completed?.length,
    },
    {
      icon: <AiFillDollarCircle className="text-[3rem] text-orange-500" />,
      color: "bg-orange-100",
      name: "Total Sales",
      total: totalSales,
    },
  ];

  return (
    <div className="flex justify-center gap-3">
      {dashboard.map((dash, idx) => (
        <div
          key={idx}
          className="flex items-center gap-5 p-5 bg-white rounded-2xl text-black flex-1 max-w-[20rem] shadow"
        >
          <p className={cn("p-6 rounded-2xl", dash.color)}>{dash.icon}</p>

          <div className="space-y-2 flex-1">
            <p className="text-3xl font-semibold">
              {dash.total ? kmbFormatter(dash.total) : 0}
            </p>
            <p>{dash.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
