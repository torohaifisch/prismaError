import { buildSubgraphSchema } from "@apollo/subgraph";
import schema from "../schemas/observation";
import resolvers from "../resolvers/observation";
/*  Creates a subgraphschema from an array of multiple objects
 containing schema definitions and resolvers  */
const executableSchema = buildSubgraphSchema([
  { typeDefs: schema, resolvers: resolvers }
]);

export default executableSchema;
