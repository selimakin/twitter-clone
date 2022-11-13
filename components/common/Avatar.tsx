import React from "react";

interface Props {
  src: string;
  edit?: boolean;
}

const profilePic =
  "absolute bottom-0 left-0 object-cover w-24 h-24 translate-x-4 translate-y-1/2 border-2 border-white rounded-full md:border-4 md:translate-x-6 md:w-36 md:h-36";

const editPic = "object-cover border-4 border-white rounded-full w-28 h-28";

const Avatar = ({ src, edit }: Props) => {
  return <img src={src} alt="" className={edit ? editPic : profilePic} />;
};

export default Avatar;
