import React from "react";
import { Dashboard } from "./_components/dashboard";
import { getConfirmBooks, getNotConfirmBooks, getTotals } from "@/lib/booking";
import { PendingReservation } from "./_components/pending-reservation";
import { RecentReservations } from "./_components/recent-reservations";
import dynamic from "next/dynamic";
const Analytics = dynamic(() => import("./_components/analytics"), {
  ssr: false,
});

const DashboardPage = async () => {
  const totals = await getTotals();
  const notConfirmBooks = await getNotConfirmBooks();
  const confirmBooks = await getConfirmBooks();

  return (
    <div className="py-20 px-8 bg-zinc-100 text-black">
      <h1 className="text-3xl font-bold mb-5">DASHBOARD</h1>

      <Dashboard totals={totals} />
      <PendingReservation notConfirmBooks={notConfirmBooks} />
      <RecentReservations confirmBooks={confirmBooks} />
      <Analytics totals={totals} />
    </div>
  );
};

export default DashboardPage;
