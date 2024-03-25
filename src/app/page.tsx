'use client'

import { Navbar } from "@/components/Navbar";
import { RightBar } from "@/components/main/RightBar";
import { MainScreen } from "@/components/main/MainScreen";
import { fakeFeed, fakeLeaderboard } from "../config/fake-lb";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const notifications = 16;
  const leaderboard = fakeLeaderboard
  const [feed,setFeed] = useState(fakeFeed)

  useEffect(() => {
    const randomFeed = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * fakeFeed.length);
      const randomFeed = fakeFeed[randomIndex];
      setFeed(prev => [randomFeed, ...prev])
    }, 500)

    return () => clearInterval(randomFeed)
  }, [])

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
