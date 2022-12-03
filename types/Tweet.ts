import { Comment } from "./Comment";
import { StatusType } from "./Common";

interface IUser {
  _id: string;
  name: string;
  username: string;
  profilePic: string;
}

export interface ITweet {
  _id: string;
  user: IUser;
  description: string;
  imgUrl: string;
  comments: Comment[];
  retweetedBy: string[];
  likes: string[];
  updatedAt: Date;
  createdAt: Date;
  __v: number;
}

export interface ITweetQuerySuccessResponse {
  status: StatusType.SUCCESS;
  results: number;
  data: {
    tweets: ITweet[];
  };
}

export interface ICreateTweetPayload {
  description: string;
  imgUrl?: string;
}

export interface ICreateTweetSuccessResponse {
  status: StatusType.SUCCESS;
  data: {
    tweet: {
      _id: string;
      user: string;
      description: string;
      imgUrl: string;
      retweetedBy: string[];
      likes: string[];
      comments: [];
      createdAt: Date;
      updatedAt: Date;
      __v: number;
    };
  };
}
