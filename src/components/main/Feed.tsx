import { cn } from "@/lib/utils";
import { FeedType, TFeed } from "@/types";

interface FeedProps {
  data?: FeedType[];
}
export const Feed = ({ data }: FeedProps) => (
  <ul className="h-screen overflow-y-scroll cursor-pointer">
    {data?.map((item, index) => (
      <li
        key={index}
        className="flex items-center justify-between px-4 py-2 hover:border hover:border-red-500"
      >
        <p className="flex flex-col">
          <span className="text-md">
            {item.username ? item.username : "Anonymous"}
          </span>
          <span className="max-w-md text-[10px] line-clamp-1 text-white/90">
            New Score
          </span>
        </p>

        <p className="flex items-center h-10 overflow-hidden">
          <span className={cn("text-md font-light text-green-300")}>
            {`+${item.updateDescription.updatedFields.score}`}
          </span>
        </p>
      </li>
    ))}
  </ul>
);
