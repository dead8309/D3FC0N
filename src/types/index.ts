export type TLeaderboard = {
  place: number;
  teamName: string;
  flagsCaptured: number;
  score: number;
};

export type TEmoticons = "/nyan-cat.gif" | "/troll.gif";

export type TFeed = {
  teamName: string;
  points: number;
  description?: string;
  img?: TEmoticons;
};

export type LeaderboardType = {
  _id: string;
  userName: string;
  level: number;
  score: number;
};

export type FeedType = {
  username?: string;
  _id: ID;
  operationType: string;
  clusterTime: ClusterTime;
  wallTime: Date;
  ns: NS;
  documentKey: DocumentKey;
  updateDescription: UpdateDescription;
};

type ID = {
  _data: string;
};

type ClusterTime = {
  $timestamp: string;
};

type DocumentKey = {
  _id: string;
};

type NS = {
  db: string;
  coll: string;
};

type UpdateDescription = {
  updatedFields: UpdatedFields;
  removedFields: any[];
  truncatedArrays: any[];
};

type UpdatedFields = {
  score: number;
};
