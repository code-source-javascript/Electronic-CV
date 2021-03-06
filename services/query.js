import { PostModel, UserModel } from "../model";

export async function getUser(args, context) {
  try {
    const user = await UserModel.findOne({ _id: args.userId });
    if (!user) throw new Error("user not found");
    return user;
  } catch (error) {
    throw error;
  }
}

export async function getUsers(args, context) {
  try {
    const users = await UserModel.find();
    return users;
  } catch (error) {
    throw error;
  }
}

export async function getPost(args, context) {
  try {
    const post = await PostModel.findOne({ _id: args.postId });
    if (!post) throw new Error("post not found");
    return post;
  } catch (error) {
    throw error;
  }
}

export async function getPosts(args, context) {
  try {
    const posts = await PostModel.find();
    return posts;
  } catch (error) {
    throw error;
  }
}

export async function getUserPosts(args, { _user }) {
  try {
    const posts = await PostModel.find({ owner: args.userId ?? _user });
    return posts;
  } catch (error) {
    throw error;
  }
}

export async function getFollowingPosts(args, { _user }) {
  try {
    let posts = [];
    const user = await UserModel.findOne({ _id: _user });
    if (!user) throw new Error("user not found");
    const following = user.following;
    Array(following).forEach(async (element) => {
      let userPost = await PostModel.find({ owner: element });
      if (userPost) {
        posts = posts.concat(userPost);
      }
    });
    return posts;
  } catch (error) {
    throw error;
  }
}
