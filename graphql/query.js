import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { UserModel } from "../model";
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
  },
});

export default query;
