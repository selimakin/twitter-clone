import React from "react";

interface Props {
  src: string;
  edit?: boolean;
}

const editCover = "px-0.5";

const CoverPicture = ({ src, edit }: Props) => {
  return <img src={src} alt="" className={edit ? editCover : ""} />;
};

export default CoverPicture;
