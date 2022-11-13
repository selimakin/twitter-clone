import React, { useState } from "react";
import SidebarRow from "./SidebarRow";

import TwitterIcon from "@mui/icons-material/Twitter";
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

const Sidebar = () => {
  const [activePage, setActivePage] = useState<number>(0);

  const clickHandler = (index: number) => setActivePage(index);

  return (
    <div className="flex flex-col items-center col-span-2 px-4 md:items-start">
      <TwitterIcon className="m-3 text-4xl text-twitter" />
      {icons.map((icon, i) => (
        <SidebarRow
          key={i}
          Icon={i === activePage ? icon.ActiveIcon : icon.Icon}
          title={icon.title}
          index={i}
          isActive={i === activePage}
          onClick={clickHandler}
        />
      ))}
    </div>
  );
};

export default Sidebar;
