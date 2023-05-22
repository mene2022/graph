require('dotenv').config();
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./app/schemas/typeDefs')
const resolvers= require('./app/resolvers/index.resolvers');
const { GraphQLError } = require('graphql');


const jwt = require('jsonwebtoken');


const server = new ApolloServer({
    // Schema qui décrit ce que le client va pouvoir demander à notre serveur
    typeDefs,
  
   
    // C'est la logique de récupération des données fourni en réponse aux requêtes sur le serveur
    resolvers,
    introspection: true,

   
    
  
  
});


const port = process.env.PORT || 6000;


(async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port },
      context:({ req })=>{
        const authorization = req.headers.authorization || '';
        const secret = process.env.JWTSECRET;
       
        let userId=null;
        
        const token = authorization.replace('Bearer ', '');
    
        if(token!==''){
           

            try {
                const decoded = jwt.verify(token, secret);
                userId = decoded.userId;

            } catch (error) {
                // console.error("Failed to verify token: ", error);
            }
        }
        
       return{userId}
      }
     
     
        
    
 
   
       
    });

    console.log(`🚀  Server ready at: ${url}`);
})();

