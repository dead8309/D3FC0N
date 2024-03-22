import { TFeed } from "@/app/config/fake-lb";
import { cn } from "@/lib/utils";

interface FeedProps {
  data?: TFeed[];
}
export const Feed = ({ data }: FeedProps) => (
  <ul className="h-screen overflow-y-scroll">
    {data?.map((item, index) => (
      <li key={index} className="flex items-center justify-between px-4 py-2 hover:border hover:border-red-500">
        <span className="text-lg font-light">{item.teamName}</span>
        <span
          className={cn("text-lg font-light", {
            "text-green-300": item.points > 0,
            "text-red-500": item.points < 0,
          })}
        >
          {item.points > 0 ? `+${item.points}` : item.points}
        </span>
      </li>
    ))}
  </ul>
);
