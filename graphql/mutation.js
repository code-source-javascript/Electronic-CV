import { GraphQLObjectType } from "graphql";
import {
  createPost,
  createUser,
  deletePost,
  deleteUser,
  updatePost,
  updateUser,
} from "../services/mutation";
import PostType from "./graph-types/post";
import UserType from "./graph-types/user";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    CreateUser: {
      type: UserType,
      resolve: (_, args, context) => createUser(args, context),
    },
    UpdateUser: {
      type: UserType,
      resolve: (_, args, context) => updateUser(args, context),
    },
    DeleteUser: {
      type: UserType,
      resolve: (_, args, context) => deleteUser(args, context),
    },
    CreatePost: {
      type: PostType,
      resolve: (_, args, context) => createPost(args, context),
    },
    UpdatePost: {
      type: PostType,
      resolve: (_, args, context) => updatePost(args, context),
    },
    DeletePost: {
      type: PostType,
      resolve: (_, args, context) => deletePost(args, context),
    },
  },
});

export default mutation;
