import React, { useState } from "react";
import Avatar from "../common/Avatar";
import CoverPicture from "../common/CoverPicture";
import TabList from "./TabList";
import ProfileInfo from "./ProfileInfo";
import ProfileHeader from "./ProfileHeader";

const tabs = [
  { name: "tweets", span: 1 },
  { name: "tweets & replies", span: 2 },
  { name: "media", span: 1 },
  { name: "likes", span: 1 },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const clickHandler = (index: number) => setActiveTab(index);

  return (
    <div className="col-span-7 md:col-span-6 lg:col-span-5 border-x">
      <ProfileHeader />
      <div className="relative">
        <CoverPicture src="ata.jpg" />
        <Avatar src="ata.jpg" />
      </div>
      <ProfileInfo />
      <TabList tabs={tabs} activeTab={activeTab} onClick={clickHandler} />
    </div>
  );
};

export default Profile;
