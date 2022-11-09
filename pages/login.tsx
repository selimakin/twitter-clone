import React from "react";
import Signin from "../components/entrance/Signin";

// const preferences = [
//   "About",
//   "Help Center",
//   "Terms of Service",
//   "Privacy Policy",
//   "Cookie Policy",
//   "Imprint",
//   "Accessibility",
//   "Ads info",
//   "Blog",
//   "Status",
//   "Careers",
//   "Brand Resources",
//   "Advertising",
//   "Marketing",
//   "Twitter for Business",
//   "Developers",
//   "Directory",
//   "Settings",
// ];

const login = () => {
  return (
    <div className="relative h-screen bg-neutral-400">
      <Signin />
    </div>
  );
};

export default login;
