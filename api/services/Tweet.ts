import { AxiosResponse } from "axios";
import {
  ICreateTweetPayload,
  ICreateTweetSuccessResponse,
  ITweetQuerySuccessResponse,
} from "../../types/Tweet";
import instance from "../axios";

export const fetchHomepageTweets = async () => {
  try {
    const response: AxiosResponse<ITweetQuerySuccessResponse> =
      await instance.get("tweets/homepage");
    return response.data.data.tweets;
  } catch (e) {
    throw e;
  }
};

export const sendTweet = async (createTweetPayload: ICreateTweetPayload) => {
  try {
    console.log("createTweetPayload", createTweetPayload);
    const response: AxiosResponse<ICreateTweetSuccessResponse> =
      await instance.post("tweets", createTweetPayload);

    return response.data.data.tweet;
  } catch (e) {
    throw e;
  }
};
