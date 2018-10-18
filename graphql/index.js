const Models = require("../models")
const GraphQL = require("graphql")
const resolver = require("graphql-sequelize").resolver
const attributeFields = require("graphql-sequelize").attributeFields


const userType = new GraphQL.GraphQLObjectType({
    name: "User",
    description: "A User",
    fields: attributeFields(Models.User)
  }),
  commentType = new GraphQL.GraphQLObjectType({
    name: "Comment",
    description: "A Comment",
    fields: attributeFields(Models.Comment)
  })
  postType = new GraphQL.GraphQLObjectType({
    name: "Post",
    description: "A Post",
    fields: { 
      ...attributeFields(Models.Post),
      user: {
        type: userType,
        resolve: resolver(Models.Post.User)
      },
      comments: {
        type: GraphQL.GraphQLList(commentType),
        resolve: resolver(Models.Post.Comments)
      }
    }
  })


module.exports = new GraphQL.GraphQLSchema({
  query: new GraphQL.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      users: {
        type: GraphQL.GraphQLList(userType),
        resolve: resolver(Models.User)
      },
      posts: {
        type: GraphQL.GraphQLList(postType),
        resolve: resolver(Models.Post)
      },
      comment: {
        type: GraphQL.GraphQLList(commentType),
        resolve: resolver(Models.Comment)
      },
    }
  })
})
