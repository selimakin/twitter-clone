import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import TextField from "@mui/material/TextField";
import Backdrop from "../common/Backdrop";
import Avatar from "../common/Avatar";
import CoverPicture from "../common/CoverPicture";

const EditProfile = () => {
  return (
    <>
      <Backdrop />
      <div className="absolute overflow-y-auto -translate-x-1/2 -translate-y-1/2 bg-white w-152 top-1/2 left-1/2 h-2/3 rounded-2xl">
        <div className="h-full overflow-y-auto">
          <div className="grid items-center grid-cols-10 pr-4 my-2">
            <div className="p-2 rounded-full cursor-pointer justify-self-center hover:bg-gray-200">
              <CloseIcon />
            </div>
            <p className="col-span-7 col-start-3 text-xl font-bold">
              Edit profile
            </p>
            <button className="px-4 py-1 font-bold text-white align-middle bg-black rounded-full justify-self-start">
              Save
            </button>
          </div>
          <div className="relative">
            <div>
              <CoverPicture src="ata.jpg" edit />
              <AddAPhotoOutlinedIcon className="absolute p-2 text-4xl text-white translate-y-1/2 rounded-full cursor-pointer -translate-x-11 backdrop-brightness-50 hover:backdrop-brightness-75 bottom-1/2 left-1/2" />
              <CloseIcon className="absolute p-2 text-4xl text-white translate-x-2 translate-y-1/2 rounded-full cursor-pointer backdrop-brightness-50 hover:backdrop-brightness-75 bottom-1/2 left-1/2" />
            </div>
            <div className="absolute bottom-0 left-0 translate-x-4 translate-y-2/3">
              <Avatar src="ata.jpg" edit />
              <AddAPhotoOutlinedIcon className="absolute z-10 p-2 text-4xl text-white -translate-x-1/2 translate-y-1/2 rounded-full cursor-pointer backdrop-brightness-50 hover:backdrop-brightness-75 bottom-1/2 left-1/2" />
            </div>
          </div>
          <form className="flex flex-col px-4 mt-24 mb-6 space-y-6">
            <TextField id="name" label="Name" variant="outlined" fullWidth />
            <TextField
              id="bio"
              label="Bio"
              multiline
              rows={4}
              // defaultValue="Default Value"
              fullWidth
            />
            <TextField
              id="location"
              label="Location"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="website"
              label="Website"
              variant="outlined"
              fullWidth
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
