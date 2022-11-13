import React from "react";

const ProfileInfo = () => {
  return (
    <div className="flex justify-between px-4">
      <div className="mt-20">
        <p>Name</p>
        <p>@Username</p>
        <p>Joined tarih</p>
        <p>
          <span>43 following</span> <span>23 Followers</span>
        </p>
      </div>
      <button className="self-start px-4 py-1 mt-3 font-semibold border border-gray-300 rounded-3xl hover:bg-neutral-200">
        Edit profile
      </button>
    </div>
  );
};

export default ProfileInfo;
