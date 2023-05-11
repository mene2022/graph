require('dotenv').config();
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./app/schemas/typeDefs')
const resolvers= require('./app/resolvers/index.resolvers')


const server = new ApolloServer({
    // Schema qui décrit ce que le client va pouvoir demander à notre serveur
    typeDefs,
    // C'est la logique de récupération des données fourni en réponse aux requêtes sur le serveur
    resolvers,
});


const port = process.env.PORT || 4000;

(async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port },
    });

    console.log(`🚀  Server ready at: ${url}`);
})();