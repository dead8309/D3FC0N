import { TLeaderboard } from "@/config/fake-lb";
import { AnimatePresence, motion } from "framer-motion";

interface Table1Props {
  data: TLeaderboard[];
}

export const Table1 = ({ data }: Table1Props) => (
  <table className="w-full caption-bottom">
    <thead>
      <tr className="border border-dotted border-red-500">
        <th className="px-4 font-medium text-left">
          <span className="py-1 border -ml-4 border-red-500">PLACE</span>
        </th>
        <th className="px-4 font-medium text-left">
          <span className="py-1 border border-red-500">NAME</span>
        </th>
        <th className="px-4 font-medium text-left">
          <span className="py-1 border px-2 border-red-500 text-nowrap">
            FLAGS CAPTURED
          </span>
        </th>
        <th className="px-4 font-medium text-left">
          <span className="py-1 border px-2 border-red-500">SCORE</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index} className="hover:border border-solid border-red-500">
          <td className="px-5 py-2 align-middle">{index + 1}</td>
          <td className="px-5 py-2 align-middle">{item.teamName}</td>
          <td className="px-5 py-2 align-middle">{item.flagsCaptured}</td>
          <td className="px-5 py-2 align-middle">{item.score}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
