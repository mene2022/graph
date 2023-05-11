const  Query =require('./query.resolver')
const  Message =require('./message.resolver')
const User= require('./user.resolver');
const Mutation = require('./mutation.resolver');
const Post = require('./post.resolver');


const resolvers = {
    // Resolvers du type Query du schema
    Query,
    User,
    Mutation,
    Message,
    Post
 
 
};

module.exports = resolvers;