import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ProfileHeader = () => {
  return (
    <div className="flex">
      <div>
        <ArrowBackIcon />
      </div>
      <div>
        <p>Name</p>
        <p>328 Tweets</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
