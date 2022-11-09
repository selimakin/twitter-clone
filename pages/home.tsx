import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import Feed from "../components/home/feed/Feed";
import Sidebar from "../components/home/sidebar/Sidebar";
import Widgets from "../components/home/widgets/Widgets";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";
import { Toaster } from "react-hot-toast";

interface Props {
  tweets: Tweet[];
}

const Home = () => {
  return (
    <div className="max-h-screen mx-auto overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twitter 2.0</title>
      </Head>
      <div>
        <Toaster />
      </div>
      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const tweets = await fetchTweets();
//   return {
//     props: { tweets },
//   };
// };
