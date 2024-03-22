"use client";

import { useState, useEffect } from "react";
import { Icons } from "./Icons";

interface NavbarProps {
  notifications: number;
}

export const Navbar = ({ notifications }: NavbarProps) => {
  const [mouseY, setMouseY] = useState(0.0);
  const [mouseX, setMouseX] = useState(0.0);

  const handleMouseMove = (e: MouseEvent) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  const endDate = new Date("2024-04-01");
  const currentDate = new Date();

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <nav className="flex w-full items-center justify-between px-5 py-5">
      <div className="flex text-xs gap-2 lg:gap-10 xl:gap-16">
        <Icons.flag className="w-14 h-14" />
        <div className="mt-2 relative border border-red-500  w-32 h-4">
          <p className="absolute p-4 -top-4 left-1 w-[118px] bg-black">
            not logged in
          </p>
        </div>
      </div>

      <div className="flex items-center *:text-lg">
        <div className="relative border border-red-500  w-40 h-14">
          <div className="absolute p-4 -top-4 left-2 w-36 h-20 bg-black">
            <p className="flex flex-col items-center px-2">
              <span>NOTIFICATONS</span>
              <span>&#40;{notifications}&#41;</span>
            </p>
          </div>
        </div>
        <div className="flex items-center divide-x-2 divide-dotted divide-red-500 *:px-5">
          <div className="flex flex-col text-base">
            <span>{mouseX}</span>
            <span>{mouseY}</span>
          </div>

          {currentDate < endDate ? (
            <div className="flex flex-col items-center">
              <span>CTF Open</span>
              <span className="h-4 w-4 bg-red-500 rounded-full animate-pulse delay-[10000ms]" />
            </div>
          ) : (
            <div className="flex flex-col">
              <span>CTF Closed</span>
              <span>20/3/2024</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
