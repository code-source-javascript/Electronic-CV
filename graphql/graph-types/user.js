import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
} from "graphql";
import { UserModel } from "../../model";

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
        const follower = Array(parent.follower).map(async (element) => {
          return await UserModel.findOne(element);
        });

        return follower;
      },
    },
  }),
});

export default UserType;
