import React, { FormEvent, useState, useEffect } from "react";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import { useAppSelector } from "../../../store";
import { sendTweet } from "../../../api/services/Tweet";
import { ITweet } from "../../../types/Tweet";
import ImagePreview from "../../common/ImagePreview";
import useImage from "../../../hooks/common/useImage";
import useUploadImage from "../../../hooks/common/useUploadImage";

interface IProps {
  onTweet: (tweet: ITweet) => void;
}

const Icons = [
  GifBoxOutlinedIcon,
  BallotOutlinedIcon,
  SentimentSatisfiedOutlinedIcon,
  WorkHistoryOutlinedIcon,
  FmdGoodOutlinedIcon,
];

const TweetBox = ({ onTweet }: IProps) => {
  const [input, setInput] = useState<string>("");
  const [noImage, setNoImage] = useState<string>("");
  const { image, imageChangeHandler, removeImageHandler } = useImage();
  const { imageId, imageUrl, uploadImage } = useUploadImage();

  const user = useAppSelector((state) => state.authenticatedUser);
  console.log(user);

  const createTweet = async (imgUrl = "", imageId = "") => {
    const response = await sendTweet({
      description: input,
      imgUrl,
      imageId,
    });
    if (user) {
      const { id, name, username, profilePic } = user;
      const newTweet = {
        ...response,
        user: {
          _id: id,
          name,
          username,
          profilePic,
        },
      };
      onTweet(newTweet);
    }
  };

  useEffect(() => {
    if (imageUrl) {
      createTweet(imageUrl, imageId);
    }
  }, [imageUrl]);

  useEffect(() => {
    if (noImage) {
      createTweet();
    }
  }, [noImage]);

  const tweetButtonHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (image) {
      uploadImage(image, user!.username);
    } else {
      setNoImage(`${Date.now()}`);
    }
  };

  return (
    <div className="flex p-5 space-x-2">
      <img
        src={user?.profilePic ? user?.profilePic : "pp.jpg"}
        alt="avatar"
        className="object-cover mt-4 rounded-full h-14 w-14"
      />
      <div className="flex items-center flex-1 pl-2">
        <form className="flex flex-col flex-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's Happening?"
            className="w-full h-24 text-xl outline-none"
          />
          <ImagePreview image={image} onRemoveImage={removeImageHandler} />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter ">
              <label htmlFor="photo" className="leading-none">
                <PhotoOutlinedIcon className="w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150" />
              </label>
              <input
                id="photo"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={imageChangeHandler}
              />
              {Icons.map((Icon, i) => (
                <Icon key={i} className="w-5 h-5" />
              ))}
            </div>
            <button
              disabled={!input}
              onClick={tweetButtonHandler}
              className="px-5 py-2 font-bold text-white rounded-full bg-twitter disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
