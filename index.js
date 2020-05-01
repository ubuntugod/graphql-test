import { GraphQLServer } from 'graphql-yoga'
import resolvers from './graph-ql/resolvers'

const server = new GraphQLServer({
    typeDefs: 'graph-ql/schema.graphql',
    resolvers
})

server.start(() => console.log(`Running GraphQL Server ...`))