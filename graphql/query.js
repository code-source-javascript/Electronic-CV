import { GraphQLList, GraphQLObjectType } from "graphql";
import { PostModel, UserModel } from "../model";
import PostType from "./post";
import UserType from "./user";

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getUser: {
      type: UserType,
      resolve: async (parent, args) => {
        const user = await UserModel.findOne({ _id: args.userId });
        return user;
      },
    },
    getUsers: {
      type: new GraphQLList(UserType),
      resolve: async () => {
        const users = await UserModel.find();
        return users;
      },
    },
    getPost: {
      type: PostType,
      resolve: async (parent, args) => {
        const post = await PostModel.findOne({ _id: args.postId });
        return post;
      },
    },
    getPosts: {
      type: new GraphQLList(PostType),
      resolve: async () => {
        const posts = await PostModel.find();
        return posts;
      },
    },
    getUserPosts: {
      type: new GraphQLList(PostType),
      resolve: async (parent, args) => {
        const user = await UserModel.findOne({ _id: args.userId }).populate(
          "posts"
        );
        const userPosts = user.posts;
        return userPosts;
      },
    },
    getFollowingPosts: {
      type: new GraphQLList(PostType),
      resolve: async (parent, args, { _user }) => {
        const post = [];
        const user = await UserModel.findOne({ _id: _user });
        const following = user.following;
        Array(following).forEach(async (element) => {
          let userPost = await PostModel.find({ user: element });
          if (userPost) {
            post.concat(userPost);
          }
        });
        return post;
      },
    },
  },
});

export default query;
