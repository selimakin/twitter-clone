import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="hidden col-span-2 px-2 mt-2 lg:inline">
      <div className="flex items-center p-3 my-2 space-x-2 bg-gray-100 rounded-full">
        <SearchIcon className="text-gray-400 " />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Fenerbahce"
        options={{ height: 1000 }}
      />
    </div>
  );
};

export default Widgets;
