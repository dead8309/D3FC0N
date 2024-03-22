"use client";
import { TLeaderboard } from "@/app/config/fake-lb";
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
          <Icons.arrow className="w-44 xl:w-56" />
          <Icons.graph className="w-44 xl:w-56" />
        </div>
      </div>
    </div>
  );
};
