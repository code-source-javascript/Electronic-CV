import {
  GraphQLEnumType,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

const ExperienceType = new GraphQLObjectType({
  name: "Experience",
  fields: {
    position: { type: GraphQLString },
    company: { type: GraphQLString },
    from: { type: GraphQLString },
    to: { type: GraphQLString },
    responsibility: { type: new GraphQLList(GraphQLString) },
  },
});

const EducationType = new GraphQLObjectType({
  name: "Education",
  fields: {
    certification: { type: GraphQLString },
    institution: { type: GraphQLString },
    address: { type: GraphQLString },
    from: { type: GraphQLString },
    to: { type: GraphQLString },
  },
});

const CVType = new GraphQLObjectType({
  name: "CV",
  fields: {
    fname: {
      type: GraphQLString,
    },
    othername: {
      type: GraphQLString,
    },
    lname: {
      type: GraphQLString,
    },
    gender: {
      type: new GraphQLEnumType({
        name: "Gender",
        values: {
          MALE: "Male",
          FEMALE: "Female",
        },
      }),
    },
    occupation: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
    socials: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: "Social",
          fields: {
            name: GraphQLString,
            link: GraphQLString,
          },
        })
      ),
    },
    personality: {
      type: new GraphQLList(GraphQLString),
    },
    skills: {
      type: new GraphQLList(GraphQLString),
    },
    education: { type: new GraphQLList(EducationType) },
    experience: { type: new GraphQLList(ExperienceType) },
  },
});

export default CVType;
