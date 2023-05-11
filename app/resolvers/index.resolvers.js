const  Query =require('./query.resolver')
const User= require('./user.resolver');
const Mutation = require('./mutation.resolver');


const resolvers = {
    // Resolvers du type Query du schema
    Query,
    User,
    Mutation
 
 
};

module.exports = resolvers;