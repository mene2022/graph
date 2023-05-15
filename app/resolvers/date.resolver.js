const { GraphQLScalarType, Kind } = require('graphql');
const { parseISO, format } = require('date-fns');

module.exports={
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Custom scalar type for Date',
        parseValue(value) {
          return parseISO(value); // Convertir une valeur de date provenant du client (input) en objet Date
        },
        serialize(value) {
          return format(value, 'yyyy-MM-dd'); // Formater une valeur de date pour l'envoyer au client (output)
        },
        parseLiteral(ast) {
          if (ast.kind === Kind.STRING) {
            return parseISO(ast.value); // Convertir une valeur de date provenant du client (inline) en objet Date
          }
          return null;
        },
      })
}