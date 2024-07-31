import { cn } from "@/lib/utils";
import { useSidebar } from "@/utils/zustand";
import Link from "next/link";
import React, { useEffect } from "react";

export const Menu = () => {
  const setClose = useSidebar((s) => s.setClose);
  const isOpen = useSidebar((s) => s.isOpen);

  const navLinks = [
    { id: "/#home", name: "Home" },
    { id: "/#story", name: "Story" },
    { id: "/#about-us", name: "About" },
    { id: "/#gallery", name: "Gallery" },
    { id: "/#contact", name: "Contact" },
    { id: "/packages", name: "Packages" },
    { id: "/book-now", name: "Book now" },
  ];

  useEffect(() => {
    const handleClick = () => {
      setClose();
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [setClose]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "absolute top-11 bg-zinc-800 text-white duration-200 overflow-hidden",
        isOpen
          ? "max-h-[25rem] opacity-100 visible"
          : "max-h-0 opacity-95 invisible"
      )}
    >
      <div className="flex flex-col">
        {navLinks.map((link) => (
          <Link
            onClick={() => setClose()}
            href={link.id}
            key={link.id}
            className="p-3 text-sm hover:bg-zinc-700"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
