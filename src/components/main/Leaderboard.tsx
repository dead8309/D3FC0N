"use client";
import { TLeaderboard } from "@/types";
import { Icons } from "../Icons";
import { Table1 } from "../table/Table1";

interface LeaderboardProps {
  data: TLeaderboard[];
}

export const Leaderboard = ({ data }: LeaderboardProps) => {
  return (
    <div className="flex w-full h-full flex-col justify-center divide-y-2 divide-red-500">
      {/* Main Content */}
      <div className="relative w-full px-5 py-5">
        <Table1 data={data} />
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
