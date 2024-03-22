import { Navbar } from "@/components/Navbar";
import { LeftBar } from "@/components/main/LeftBar";
import { MainScreen } from "@/components/main/MainScreen";
import { fakeFeed, fakeLeaderboard } from "./config/fake-lb";

export default function Home() {
  const notifications = 16;
  const leaderboard = fakeLeaderboard
  const feed = fakeFeed

  return (
    <main className="h-full overflow-hidden">
      {/* <div className="lg:hidden">View me on a larger screen</div> */}
      {/* <div className="hidden lg:block h-full"> */}
      <div className="h-full">
        <div className="flex h-full divide-x-2 divide-red-500">
          {/* Navbar with main screen */}
          <div className="w-full h-full flex flex-col divide-y-2 divide-red-500">
            <Navbar notifications={notifications} />

            {/* Main Screen */}
            <MainScreen leaderboard={leaderboard} feedData={feed} />
          </div>

          {/* Left Sidebar */}
          <LeftBar />
        </div>
      </div>
    </main>
  );
}
