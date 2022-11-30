import React, { useState } from "react";
// import {
//   CalendarIcon,
//   GifIcon,
//   PhotoIcon,
//   FaceSmileIcon,
//   MapPinIcon,
// } from "@heroicons/react/24/outline";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";

const TweetBox = () => {
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex p-5 space-x-2">
      <img
        src="https://links.papareact.com/gll"
        alt="avatar"
        className="object-cover mt-4 rounded-full h-14 w-14"
      />
      <div className="flex items-center flex-1 pl-2">
        <form className="flex flex-col flex-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's Happening?"
            className="w-full h-24 text-xl outline-none"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter ">
              <PhotoOutlinedIcon className="w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150" />
              <GifBoxOutlinedIcon className="w-5 h-5" />
              <BallotOutlinedIcon className="w-5 h-5" />
              <SentimentSatisfiedOutlinedIcon className="w-5 h-5" />
              <WorkHistoryOutlinedIcon className="w-5 h-5" />
              <FmdGoodOutlinedIcon className="w-5 h-5" />
            </div>
            <button
              disabled={!input}
              className="px-5 py-2 font-bold text-white rounded-full bg-twitter disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
