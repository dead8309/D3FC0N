import { LeaderboardType } from "@/types";

interface Table2Props {
  data: LeaderboardType[];
}

export const Table2 = ({ data }: Table2Props) => (
  <ol className="">
    <li className="text-sm flex items-center justify-between mb-2 border border-red-500 border-dotted">
      <div className="flex items-center w-grid-col-6 justify-between">
        <div className="w-grid-col-2">
          <div className="w-fit py-[0.25vw] px-[1vw] border border-red-500">
            PLACE
          </div>
        </div>
        <div className=" w-grid-col-3">
          <div className="w-fit py-[0.25vw] px-[1vw] border border-red-500">
            NAME
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-grid-col-8">
        <div className="w-grid-col-5 truncate">
          <div className="w-fit py-[0.25vw] px-[1vw] border border-red-500">
            FLAGS CAPTURED
          </div>
        </div>
        <div className="w-grid-col-2">
          <div className="w-fit py-[0.25vw] px-[1vw] border border-red-500">
            SCORE
          </div>
        </div>
      </div>
    </li>

    {data.length > 0 ? (
      data.map((item, index) => (
        <li
          key={index}
          className="p-1 flex w-full items-center justify-between hover:border hover:border-dashed hover:border-red-400 cursor-pointer"
        >
          <div className="w-[calc((2/24)*100vw)]">{index + 1}</div>
          <div className="w-[calc((4/24)*100vw)]">{item.userName}</div>
          <div className="w-[calc((3/24)*100vw)]">{item.level}</div>
          <div className="w-[calc((2/24)*100vw)]">{item.score}</div>
        </li>
      ))
    ) : (
      <h1>Loading...</h1>
    )}
  </ol>
);
