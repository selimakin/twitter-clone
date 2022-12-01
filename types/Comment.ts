export interface Comment {
  _id: string;
  user: {
    _id: string;
    name: string;
    username: string;
    profilePic: string;
  };
  description: string;
  likes: string[];
}
