import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  UserIcon,
  EnvelopeIcon,
  EllipsisHorizontalCircleIcon,
  QueueListIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center col-span-2 px-4 md:items-start">
      <img
        className="w-10 h-10 m-3"
        src="https://links.papareact.com/drq"
        alt="twitter"
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={EnvelopeIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={QueueListIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Profile" />
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
    </div>
  );
};

export default Sidebar;
