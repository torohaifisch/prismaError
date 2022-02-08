import { ApolloServer } from "apollo-server-koa";
import { AddressInfo } from "net";
import { PrismaClient } from "@prisma/client";
import Koa from "koa";
import Router from "koa-router";
import executableSchema from "./helpers/makeSchema";

require("dotenv").config();

const prisma = new PrismaClient();

async function startApolloServer() {
  const app = new Koa();
  const router = new Router();
  router.get("/isHealthy", (ctx) => {
    ctx.body = "ok";
    ctx.status = 200;
  });

  const apolloServer = new ApolloServer({
    schema: executableSchema,
    context: ({ ctx }) => {
      return {
        prisma
      };
    }
  });
  app.use(router.routes());

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/api/graphql" });

  const server = app.listen(4000);

  const { port } = server.address() as AddressInfo;
  console.log(`Server running on port ... ${port}`);
  return { apolloServer, server, app };
}

try {
  startApolloServer();
} catch (error) {
  console.log(error);
}
