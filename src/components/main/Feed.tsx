import { cn } from "@/lib/utils";
import { TFeed } from "@/types";

interface FeedProps {
  data?: TFeed[];
}
export const Feed = ({ data }: FeedProps) => (
  <ul className="h-screen overflow-y-scroll cursor-pointer">
    {data?.map((item, index) => (
      <li
        key={index}
        className="flex items-center justify-between px-4 py-2 hover:border hover:border-red-500"
      >
        <p className="flex flex-col">
          <span className="text-md">{item.teamName}</span>
          {item.description && (
            <span className="max-w-md text-[10px] line-clamp-1 text-white/90">
              {item.description}
            </span>
          )}
        </p>

        <p className="flex items-center h-10 overflow-hidden">
          {item.img ? (
            <img
              src={item.img}
              alt="feed-img"
              className={cn("size-10", {
                "size-16": item.img === '/nyan-cat.gif',
              })}
            />
          ) : (
            <span
              className={cn("text-md font-light", {
                "text-green-300": item.points > 0,
                "text-red-500": item.points < 0,
              })}
            >
              {item.points > 0 ? `+${item.points}` : item.points}
            </span>
          )}
        </p>
      </li>
    ))}
  </ul>
);
