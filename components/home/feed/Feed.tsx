import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Tweet } from "../../../typings";
import { fetchTweets } from "../../../utils/fetchTweets";
import Post from "./Post";
import TweetBox from "./TweetBox";
import toast from "react-hot-toast";

interface Props {
  tweets: Tweet[];
}

const Feed = () => {
  const [tweets, setTweets] = useState(null);

  const handleRefresh = async () => {
    const refreshToast = toast.loading("Refreshing...");
    const tweets = await fetchTweets();
    setTweets(tweets);
    toast.success("Feed Updated!", { id: refreshToast });
  };

  console.log(tweets);

  return (
    <div className="col-span-7 md:col-span-6 lg:col-span-5 border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <ArrowPathIcon
          onClick={handleRefresh}
          className="w-8 h-8 mt-5 mr-5 transition-all duration-500 ease-out cursor-pointer text-twitter hover:rotate-180 active:scale-125"
        />
      </div>
      <div>
        <TweetBox />
      </div>
      <div>
        {/* {tweets.map((tweet) => (
          <Post key={tweet._id} tweet={tweet} />
        ))} */}
      </div>
    </div>
  );
};

export default Feed;
