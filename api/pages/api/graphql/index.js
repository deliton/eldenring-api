import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./typeDef";
import { resolvers } from "./resolvers";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import microCors from "micro-cors";
import { send } from "micro";

const cors = microCors();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = apolloServer.start();

// https://github.com/apollographql/apollo-server/blob/main/packages/apollo-server-micro/README.md#cors-example
export default cors(async (req, res) => {
  await startServer;
  const handler = apolloServer.createHandler({
    path: "/api/graphql",
  });

  if (req.method === 'OPTIONS') {
    return send(res, 200, 'ok');
  }
  return handler(req, res);
})
