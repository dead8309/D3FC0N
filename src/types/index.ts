export type TLeaderboard = {
  place: number;
  teamName: string;
  flagsCaptured: number;
  score: number;
};


export type TEmoticons = '/nyan-cat.gif' | '/troll.gif'

export type TFeed = {
  teamName: string;
  points: number;
  description?: string;
  img?: TEmoticons;
};
