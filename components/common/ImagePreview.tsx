import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface IProps {
  image: File | null;
  onRemoveImage: () => void;
}

const ImagePreview = ({ image, onRemoveImage }: IProps) => {
  if (!image) return <></>;
  return (
    <div className="relative mb-2">
      <span
        className="absolute p-1 text-white rounded-full cursor-pointer backdrop-brightness-50 hover:backdrop-brightness-75 top-1.5 right-1.5"
        onClick={onRemoveImage}
      >
        <CloseOutlinedIcon />
      </span>
      <img src={URL.createObjectURL(image)} />
    </div>
  );
};

export default ImagePreview;
