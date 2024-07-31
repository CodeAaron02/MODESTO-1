const ChatBot = dynamic(() => import("@/components/chat-bot"), { ssr: false });
import { Navbar } from "@/components/navbar";
import { getSelf } from "@/lib/self";
import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

const MainLayout = async ({ children }: { children: ReactNode }) => {
  const self = await getSelf();

  return (
    <div>
      <Navbar self={self} />
      <main>{children}</main>
      <ChatBot />
    </div>
  );
};

export default MainLayout;
