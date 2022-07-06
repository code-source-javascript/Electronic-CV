import { GraphQLList, GraphQLObjectType } from "graphql";
import { PostModel, UserModel } from "../model";
import {
  getFollowingPosts,
  getPost,
  getPosts,
  getUser,
  getUserPosts,
  getUsers,
} from "../services/query";
import PostType from "./graph-types/post";
import UserType from "./graph-types/user";

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    User: {
      type: UserType,
      resolve: (_, args, context) => getUser(args, context),
    },
    Users: {
      type: new GraphQLList(UserType),
      resolve: (_, args, context) => getUsers(args, context),
    },
    Post: {
      type: PostType,
      resolve: (_, args, context) => getPost(args, context),
    },
    Posts: {
      type: new GraphQLList(PostType),
      resolve: (_, args, context) => getPosts(args, context),
    },
    UserPosts: {
      type: new GraphQLList(PostType),
      resolve: (_, args, context) => getUserPosts(args, context),
    },
    FollowingPosts: {
      type: new GraphQLList(PostType),
      resolve: async (_, args, context) => getFollowingPosts(args, context),
    },
  },
});

export default query;
