import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const tabs = [
  { name: "tweets", span: 1, active: true },
  { name: "tweets & replies", span: 2, active: false },
  { name: "media", span: 1, active: false },
  { name: "likes", span: 1, active: false },
];

const Profile = () => {
  return (
    <div className="col-span-7 md:col-span-6 lg:col-span-5 border-x">
      <div className="flex">
        <div>
          <ArrowBackIcon />
        </div>
        <div>
          <p>Name</p>
          <p>328 Tweets</p>
        </div>
      </div>
      <div className="relative">
        <img src="ata.jpg" alt="" className="" />
        <img
          src="ata.jpg"
          alt=""
          className="absolute bottom-0 left-0 object-cover w-24 h-24 translate-x-6 translate-y-1/2 border-4 border-white rounded-full md:w-36 md:h-36"
        />
      </div>
      <div className="flex justify-between px-4">
        <div className="mt-20">
          <p>Name</p>
          <p>@Username</p>
          <p>Joined tarih</p>
          <p>
            <span>43 following</span> <span>23 Followers</span>
          </p>
        </div>
        <div className="mt-3">
          <button className="px-4 py-1 font-semibold border border-gray-300 rounded-3xl hover:bg-neutral-200">
            Edit profile
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 mt-5 justify-items-stretch">
        {tabs.map((tab) => (
          <div
            className={`col-span-${tab.span} pt-3 hover:bg-gray-300 flex justify-center`}
          >
            <span className="pb-4 text-center border-b-4 border-transparent hover:border-blue-400">
              {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
