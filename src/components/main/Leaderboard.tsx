"use client";
import { TLeaderboard } from "@/types";
import { Icons } from "../Icons";
import { Table1 } from "../table/Table1";
import { Table2 } from "../table/Table2";

interface LeaderboardProps {
  data: TLeaderboard[];
}

export const Leaderboard = ({ data }: LeaderboardProps) => {
  return (
    <div className="flex w-grid-col-13 h-full flex-col divide-y-2 divide-red-500">
      {/* Main Content */}
      <div className="relative flex-1 w-full px-5 py-5 overflow-y-scroll text-[1.25vw]">
        <Table2 data={data}  />
      </div>

      {/* Footer */}
      <div className="mt-10 px-5 py-5">
        <div className="flex items-center justify-around">
          <img src="/globe.gif" alt="globe" className="w-[30%]"/>
          <Icons.arrow className="w-60 stroke-[4]" />
          <img src="/sinwave.gif" alt="sinwave" className="w-[30%]"/>
        </div>
      </div>
    </div>
  );
};
