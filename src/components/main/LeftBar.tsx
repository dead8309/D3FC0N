import { siteConfig } from "@/app/config/site";

export const LeftBar = () => {
  return (
    <div className="flex flex-col w-20 items-center justify-between">
      <a
        className="flex w-full h-full items-end hover:bg-white/90"
        href={siteConfig.links.challanges}
      >
        <span className="w-full text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl pl-6 -rotate-90">
          Challanges
        </span>
      </a>
      <div className="w-full h-[2px] bg-red-500" />
      <a
        className="flex w-full h-full items-end hover:bg-white/90"
        href={siteConfig.links.my_team}
      >
        <span className="w-full text-nowrap text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl pl-10 -rotate-90">
          My Team
        </span>
      </a>
    </div>
  );
};
