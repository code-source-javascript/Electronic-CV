import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { UserModel } from "../model";
import UserType from "./user";

const CommentType = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    body: {
      type: GraphQLString,
    },
    user: {
      type: UserType,
      resolve: async (parent, args) => {
        const user = await UserModel.findById(parent.user);
        return user;
      },
    },
    date: {
      type: GraphQLString,
    },
  }),
});

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    description: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    },
    like: {
      type: new GraphQLList(UserType),
      resolve: async (parent, args) => {
        const likes = Array(parent.like).map(async (element) => {
          return await UserModel.findOne({ _id: element });
        });

        return likes;
      },
    },
    comment: {
      type: new GraphQLList(CommentType),
    },
  }),
});

export default PostType;
