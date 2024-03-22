"use client";

import { fakeFeed } from "@/config/fake-lb";
import { TFeed, TLeaderboard } from "@/types";
import { Leaderboard } from "./Leaderboard";
import { Icons } from "../Icons";
import { Feed } from "./Feed";
import Image from "next/image";

interface MainScreenProps {
  leaderboard: TLeaderboard[];
  feedData?: TFeed[];
}

export const MainScreen = ({ leaderboard, feedData }: MainScreenProps) => {
  return (
    <div className="flex w-full h-full  items-start divide-x-2 divide-red-500 overflow-hidden">
      {/* Left Sidebar */}

      <div className="flex w-grid-col-3 h-full items-center justify-center px-5">
        <img
          src="/scoreboard.svg"
          alt="scoreboard"
          className="-rotate-90 h-[8vw]"
        />
      </div>

      <div className="h-full flex w-full divide-x-2 divide-red-500">
        <Leaderboard data={leaderboard} />

        {/* Current Feed */}
        <div className="flex w-1/2 flex-col">
          <div className="w-full flex flex-col">
            <div className="w-full border-b border-red-500">
              <span className="w-full text-lg ml-4 uppercase font-light">
                Current Feed
              </span>
            </div>

            <Feed data={feedData} />
            {/* Feed */}
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-evenly -mt-24 divide-y divide-red-500">
            <div className="w-full flex flex-col">
              <div className="w-full border-b border-red-500">
                <span className="w-full text-lg ml-4 uppercase font-light">
                  Top Teams
                </span>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <Icons.emptyGraph className="flex-1 px-4  w-full" />
              </div>
            </div>
  
            <div className="w-full flex flex-col">
              <div className="w-full border-b border-red-500">
                <span className="w-full text-lg ml-4 uppercase font-light">
                  Team Stats
                </span>
              </div>
              <div className="flex-1 px-4 w-full">
                <span className="text-2xl">_mm_</span>
  
                <div className="mt-4 flex items-center justify-between divide-x divide-red-500 divide-dotted">
                  <div className="pr-5">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-1">
                        <Icons.trident className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                      </div>
                      <div className="flex gap-1">
                        <Icons.star className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                      </div>
                      <div className="flex gap-1">
                        <Icons.square className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
  
                  <div className="pl-5">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-1 items-center">
                        <span className="text-[20px]">?</span>
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                      </div>
                      <div className="flex gap-1">
                        <Icons.leftArrow className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                        <Icons.flag className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      </div>
      
    </div>
  );
};
