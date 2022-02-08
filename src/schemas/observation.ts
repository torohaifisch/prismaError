import { gql } from "apollo-server-koa";

const typeDefs = gql`
  "Notary observation register"
  type Observation {
    "Id of the observation in database"
    observationId: Int!
    "observation"
    text: String!
  }

  extend type Query {
    "Get a observation by its Id"
    observation(
      "Id of the observation in database"
      observationId: Int!
    ): Observation
    "Get a list of observations"
    observationList: [Observation]
  }

  extend type Mutation {
    "Creates a new observation"
    createObservation(
      text: String!
    ): Observation
    "Delete an existing observation"
    deleteObservation(
      "Id of the observation in database"
      observationId: Int!
    ): Observation
  }
`;

export default typeDefs;
