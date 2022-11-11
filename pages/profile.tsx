import Head from "next/head";
import React from "react";
import Sidebar from "../components/home/sidebar/Sidebar";
import Widgets from "../components/home/widgets/Widgets";
import Profile from "../components/profile/Profile";

const profile = () => {
  return (
    <div className="max-h-screen mx-auto overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twitter 2.0</title>
      </Head>
      <main className="grid grid-cols-9">
        <Sidebar />
        <Profile />
        <Widgets />
      </main>
    </div>
  );
};

export default profile;
