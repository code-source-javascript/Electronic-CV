import { GraphQLObjectType } from "graphql";
import { createUser, deleteUser, updateUser } from "../services/mutation";
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
  },
});

export default mutation;
