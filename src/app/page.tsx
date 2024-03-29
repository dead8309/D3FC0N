"use client";

import { Navbar } from "@/components/Navbar";
import { RightBar } from "@/components/main/RightBar";
import { MainScreen } from "@/components/main/MainScreen";
import { fakeFeed, fakeLeaderboard } from "../config/fake-lb";
import { useEffect, useMemo, useState } from "react";
import io, { Socket } from "socket.io-client";
import { FeedType, LeaderboardType } from "@/types";

export default function Home() {
  const notifications = 16;
  const [socket, setSocket] = useState<Socket | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardType[]>([]);
  const [feed, setFeed] = useState<FeedType[]>([]);

  const findLeaderboardEntry = (
    leaderboardArray: LeaderboardType[],
    documentKeyId: string
  ): string | undefined => {
    return leaderboardArray.find((entry) => entry._id === documentKeyId)
      ?.userName;
  };

  useEffect(() => {
    const newSocket = io("https://d3fcon-backend.onrender.com/");
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Connected to server");
    });

    newSocket.on("change", (data) => {
      console.log("Received data:", data);
      setLeaderboard(data.data);
      if (data.change) {
        const username = findLeaderboardEntry(
          data.data,
          data.change.documentKey._id
        );
        setFeed((prev) => [...prev, { ...data.change, username }].reverse());
      }
    });

    newSocket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
  }, []);

  return (
    <main className="h-full overflow-hidden">
      {/* <div className="lg:hidden">View me on a larger screen</div> */}
      {/* <div className="hidden lg:block h-full"> */}
      <div className="h-full">
        <div className="flex h-full divide-x-2 divide-red-500">
          {/* Navbar with main screen */}
          <div className="w-grid-col-22 h-full flex flex-col divide-y-2 divide-red-500">
            <Navbar notifications={notifications} />

            {/* Main Screen */}
            <MainScreen leaderboard={leaderboard} feedData={feed} />
          </div>

          {/* Right Sidebar */}
          <RightBar />
        </div>
      </div>
    </main>
  );
}
