"use client";

import { useState, useEffect } from "react";
import { Icons } from "./Icons";
import { siteConfig } from "@/config/site";

interface NavbarProps {
  notifications: number;
}

export const Navbar = ({ notifications }: NavbarProps) => {
  const [postion, setPosition] = useState({ x: 0, y: 0 });
  const currentDate = new Date();

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <nav className="flex w-full items-center justify-between px-8 py-5">
      <div className="flex text-xs gap-2 lg:gap-10">
        <img src="/flag.gif" alt="flag" className="w-14 h-14" />
        <div className="mt-4 relative border border-red-500 w-[198px] h-4">
          <p className="absolute p-4 -top-4 left-1 w-[190px] bg-black">
            not logged in
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 *:text-md">
        <div className="relative border border-red-500 w-56 h-14">
          <div className="absolute p-4 -top-3 left-3 w-48 h-20 bg-black">
            <p className="flex flex-col items-center px-2">
              <span>NOTIFICATONS</span>
              <span>&#40;{notifications}&#41;</span>
            </p>
          </div>
        </div>
        <div className="flex items-center divide-x-2 divide-dotted divide-red-500 *:px-5">
          <div className="flex flex-col text-sm">
            <span>{postion.x}</span>
            <span>{postion.y}</span>
          </div>

          {currentDate < siteConfig.endDate ? (
            <div className="flex flex-col items-center">
              <span>CTF Open</span>
              <span className="h-4 w-4 bg-red-500 rounded-full animate-pulse delay-[10000ms]" />
            </div>
          ) : (
            <div className="flex flex-col">
              <span>CTF Closed</span>
              <span>{siteConfig.endDate.toLocaleDateString()}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
