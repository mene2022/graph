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
   

   
    
  
  
});


const port = process.env.PORT || 6000;

(async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port },
        context: async({ req }) => {
           
          
            const authorization = req.headers.authorization || '';
            const token = authorization.replace('Bearer ', '');
             
           
        //   console.log(jwt.verify(token, process.env.JWT_SECRET))
           
          
            let userId = null;
          
               
    
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                userId = decoded.userId;
               
                
                
            } catch(err) {
                throw new GraphQLError('Authentication failed.', {
                    extensions: {
                        code: 'UNAUTHORIZED',
                        http: {
                            status: 401,
                        },
                    },
                });
            }
            return {userId};
    
         
           
            
        }
     
     
        
    
   
 
   
       
    });

    console.log(`🚀  Server ready at: ${url}`);
})();

