import React, { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

const useUploadImage = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageId, setImageId] = useState<string>("");

  const uploadImage = (file: File, username: string) => {
    const storage = getStorage(app);
    const fileName = `${username}${Date.now()}`;
    const storageRef = ref(storage, `images/tweets/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      () => {},
      () => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setImageId(fileName);
          setImageUrl(downloadUrl);
        });
      }
    );
  };

  return { imageId, imageUrl, uploadImage };
};

export default useUploadImage;
