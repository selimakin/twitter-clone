import React from "react";
// import {
//   BellIcon,
//   HashtagIcon,
//   BookmarkIcon,
//   UserIcon,
//   EnvelopeIcon,
//   EllipsisHorizontalCircleIcon,
//   QueueListIcon,
//   HomeIcon,
// } from "@heroicons/react/24/outline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MailIcon from "@mui/icons-material/Mail";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonIcon from "@mui/icons-material/Person";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";

const icons = [
  { Icon: HomeOutlinedIcon, ActiveIcon: HomeIcon, title: "Home" },
  { Icon: TagOutlinedIcon, ActiveIcon: TagIcon, title: "Explore" },
  {
    Icon: NotificationsNoneIcon,
    ActiveIcon: NotificationsIcon,
    title: "Notifications",
  },
  { Icon: MailOutlineIcon, ActiveIcon: MailIcon, title: "Messages" },
  { Icon: BookmarkBorderIcon, ActiveIcon: BookmarkIcon, title: "Bookmarks" },
  { Icon: AssignmentOutlinedIcon, ActiveIcon: AssignmentIcon, title: "Lists" },
  { Icon: PersonOutlineOutlinedIcon, ActiveIcon: PersonIcon, title: "Profile" },
  { Icon: PendingOutlinedIcon, ActiveIcon: PendingOutlinedIcon, title: "More" },
];

import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center col-span-2 px-4 md:items-start">
      <img
        className="w-10 h-10 m-3"
        src="https://links.papareact.com/drq"
        alt="twitter"
      />
      {icons.map((icon, i) => (
        <SidebarRow
          key={i}
          Icon={icon.Icon}
          ActiveIcon={icon.ActiveIcon}
          title={icon.title}
        />
      ))}
      {/* <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={EnvelopeIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={QueueListIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Profile" />
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" /> */}
    </div>
  );
};

export default Sidebar;
