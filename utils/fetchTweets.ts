import { Tweet } from "../typings";

export const fetchTweets = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/tweets/homepage`
  );
  const data = await res.json();
  const tweets = data.tweets;

  return tweets;
};
