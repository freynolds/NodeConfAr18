const Models = require("../models")
const GraphQL = require("graphql")
const resolver = require("graphql-sequelize").resolver
const attributeFields = require("graphql-sequelize").attributeFields

const types = {
  userType: new GraphQL.GraphQLObjectType({
    name: "User",
    description: "A User",
    fields: attributeFields(Models.User)
  })
}

module.exports = new GraphQL.GraphQLSchema({
    query: new GraphQL.GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            users: {
              type: GraphQL.GraphQLList(types.userType),
              resolve: resolver(Models.User)
            }
        }
    })
})
