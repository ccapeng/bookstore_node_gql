import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./schema.js";
import { makeExecutableSchema } from 'graphql-tools';
import { applyMiddleware } from "graphql-middleware";


const HOST = process.env.HOST || "http://127.0.0.1";
const PORT = process.env.PORT || 3005;

const server = new ApolloServer({ 
  typeDefs, 
  resolvers
});

// const logInput = async (resolve, root, args, context, info) => {
//   console.log(`1. logInput: ${JSON.stringify(args)}`)
//   const result = await resolve(root, args, context, info)
//   console.log(`5. logInput`)
//   return result
// }

// const logResult = async (resolve, root, args, context, info) => {
//   console.log(`2. logResult`)
//   const result = await resolve(root, args, context, info)
//   console.log(`4. logResult: ${JSON.stringify(result)}`)
//   return result
// }

// const schema = makeExecutableSchema({ typeDefs, resolvers })
// const schemaWithMiddleware = applyMiddleware(schema, logInput, logResult)
// const server = new ApolloServer({ 
//   schema: schemaWithMiddleware
// });

const app = express();
server.applyMiddleware({ app });
app.listen({ port: PORT }, () =>
  console.log(`Server ready at ${HOST}:${PORT}${server.graphqlPath}`)
);
﻿