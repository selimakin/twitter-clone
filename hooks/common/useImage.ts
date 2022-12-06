import React, { useState } from "react";

const useImage = () => {
  const [image, setImage] = useState<File | null>(null);

  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target && e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const removeImageHandler = () => setImage(null);

  return { image, imageChangeHandler, removeImageHandler };
};

export default useImage;
