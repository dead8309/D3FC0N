export const fakeLeaderboard = [
  {
    place: 1,
    teamName: "_mm_",
    flagsCaptured: 16,
    score: 7654,
  },
  {
    place: 2,
    teamName: "GINGER",
    flagsCaptured: 15,
    score: 6543,
  },
  {
    place: 3,
    teamName: "Redrocket",
    flagsCaptured: 14,
    score: 4322,
  },
  {
    place: 4,
    teamName: "funkys",
    flagsCaptured: 13,
    score: 3211,
  },
  {
    place: 5,
    teamName: "dragonsector",
    flagsCaptured: 12,
    score: 2211,
  },
  {
    place: 6,
    teamName: "xyz",
    flagsCaptured: 11,
    score: 2220,
  },
  {
    place: 7,
    teamName: "hello",
    flagsCaptured: 10,
    score: 2000,
  },
  {
    place: 8,
    teamName: "pgts",
    flagsCaptured: 9,
    score: 1111,
  },
  {
    place: 9,
    teamName: "abcs",
    flagsCaptured: 8,
    score: 1000,
  },
  {
    place: 10,
    teamName: "lmnop",
    flagsCaptured: 5,
    score: 444,
  },
];

export const fakeFeed = [
  {
    teamName: "_mm_",
    points: 10,
  },
  {
    teamName: "Redrocket",
    points: 10,
  },
  {
    teamName: "funkys",
    points: 10,
  },
  {
    teamName: "dragonsector",
    points: 10,
  },
  {
    teamName: "xyz",
    points: 10,
  },
  {
    teamName: "hello",
    points: 10,
  },
  {
    teamName: "pgts",
    points: -10,
  },
  {
    teamName: "abcs",
    points: 10,
  },
  {
    teamName: "lmnop",
    points: -10,
  },
  {
    teamName: "_mm_",
    points: 10,
  },
  {
    teamName: "_mm_",
    points: -10,
  },
  {
    teamName: "Redrocket",
    points: 10,
  },
  {
    teamName: "funkys",
    points: -10,
  },
  {
    teamName: "hello",
    points: 10,
  },
  {
    teamName: "pgts",
    points: 10,
  },
  {
    teamName: "abcs",
    points: 10,
  },
  {
    teamName: "lmnop",
    points: 10,
  },
  {
    teamName: "dragonsector",
    points: 10,
  },
  {
    teamName: "xyz",
    points: 10,
  },
  {
    teamName: "hello",
    points: 10,
  },
  {
    teamName: "pgts",
    points: 10,
  },
  {
    teamName: "abcs",
    points: 10,
  },
  {
    teamName: "Redrocket",
    points: 10,
  },
  {
    teamName: "funkys",
    points: 10,
  },
  {
    teamName: "dragonsector",
    points: 10,
  },
  {
    teamName: "hello",
    points: 10,
  },
  {
    teamName: "pgts",
    points: 10,
  },
  {
    teamName: "abcs",
    points: 10,
  },
  {
    teamName: "xyz",
    points: 10,
  },
];

export type TLeaderboard = {
  place: number;
  teamName: string;
  flagsCaptured: number;
  score: number;
};

export type TFeed = {
  teamName: string;
  points: number;
};
