"use client";

import { logout } from "@/action/auth";
import Link from "next/link";
import { useTransition } from "react";
import { FaKey } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { toast } from "sonner";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { LuLoader2 } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "./menu";
import { useSidebar } from "@/utils/zustand";

interface NavbarProp {
  self: {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  } | null;
}

export const Navbar = ({ self }: NavbarProp) => {
  const [pending, setTransition] = useTransition();
  const sidebar = useSidebar();
  const pathname = usePathname();

  const navLinks = [
    { id: "/#home", name: "Home" },
    { id: "/#story", name: "Story" },
    { id: "/#about-us", name: "About" },
    { id: "/#gallery", name: "Gallery" },
    { id: "/#contact", name: "Contact" },
    { id: "/packages", name: "Packages" },
    { id: "/book-now", name: "Book now" },
  ];

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 flex items-center justify-between py-4 md:px-5 px-3 z-[1001]",
        pathname === "/dashboard" ? "bg-white text-black" : "bg-black"
      )}
    >
      <div className="relative lg:invisible visible">
        <GiHamburgerMenu
          onClick={(e) => {
            e.stopPropagation();
            sidebar.setOpen();
          }}
          className="text-2xl"
        />
        <Menu />
      </div>

      <div className="lg:flex hidden items-center justify-center gap-8">
        {navLinks.map((navLink) => (
          <Link
            href={navLink.id}
            key={navLink.id}
            className="font-medium uppercase"
          >
            {navLink.name}
          </Link>
        ))}
      </div>

      <div>
        {!self?.id ? (
          <HoverCard openDelay={0} closeDelay={0} defaultOpen={false}>
            <HoverCardTrigger asChild>
              <Link href="/sign-in" className="text-sm uppercase">
                <FaKey className="text-xl" />
              </Link>
            </HoverCardTrigger>

            <HoverCardContent
              align="end"
              className="mt-2 text-sm p-2 pointer-events-none"
            >
              <p>Admin access</p>
            </HoverCardContent>
          </HoverCard>
        ) : (
          <div className="flex items-center gap-4">
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <Link href="/dashboard">
                  <MdDashboard className="text-xl" />
                </Link>
              </HoverCardTrigger>

              <HoverCardContent
                align="end"
                className="mt-2 text-sm p-2 pointer-events-none"
              >
                <p>Dashboard</p>
              </HoverCardContent>
            </HoverCard>

            <button
              onClick={() =>
                setTransition(async () => {
                  await logout()
                    .then(() => toast("Logout successfully"))
                    .catch(() => toast("Something went wrong"));
                })
              }
              disabled={pending}
              className="text-xs uppercase text-red-500"
            >
              {pending ? (
                <LuLoader2 className="text-xl animate-spin" />
              ) : (
                "Logout"
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
