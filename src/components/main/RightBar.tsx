"use client";
import { siteConfig } from "@/config/site";

export const RightBar = () => {
  return (
    <div className="flex flex-col w-grid-col-2">
      <a
        className="flex items-center justify-center h-full hover:bg-white/90 border-b border-red-500"
        href={siteConfig.links.challanges}
      >
        <img
          src="/challenges.svg"
          alt="Challenges"
          className="h-[4vw] -rotate-90"
        />
      </a>
      <a
        className="flex items-center justify-center h-full hover:bg-white/90"
        href={siteConfig.links.terminal}
      >
        <img src="/terminal.svg" alt="My Team" className="h-[4vw] -rotate-90" />
      </a>
    </div>
  );
};
