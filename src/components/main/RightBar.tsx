"use client";
import { siteConfig } from "@/app/config/site";
import { Icons } from "../Icons";

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
        href={siteConfig.links.my_team}
      >
        <img src="/team.svg" alt="My Team" className="h-[4vw] -rotate-90" />
      </a>
    </div>
  );
};
