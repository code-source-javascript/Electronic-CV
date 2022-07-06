import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
} from "graphql";
import { PostModel, UserModel } from "../../model";
import CVType from "./cv";
import PostType from "./post";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
    cv: {
      type: CVType,
      resolve: async (parent, args) => {
        return await UserModel.findById(parent.cv);
      },
    },

    following: {
      type: new GraphQLList(UserType),
      resolve: async (parent, args) => {
        const following = Array(parent.following).map(async (element) => {
          return await UserModel.findOne(element);
        });

        return following;
      },
    },
    followers: {
      type: new GraphQLList(UserType),
      resolve: async (parent, args) => {
        const follower = await Array(parent.follower).map(async (element) => {
          return await UserModel.findOne(element);
        });

        return follower;
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: async (parent, args) => {
        const posts = Array(parent.posts).map(async (element) => {
          return await PostModel.findById(element);
        });
        return posts;
      },
    },
  }),
});

export default UserType;
