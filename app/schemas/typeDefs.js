const fs = require('node:fs');
const path = require('node:path');
const { EOL } = require('node:os');

const schemaNames = ['query', 'user','role','message','post','topic','drawing','drawing_comment','comment','video','video_comment','video_like','mutation'];

const schemas = schemaNames.map(
    (schemaName) => fs.readFileSync(
        path.join(__dirname, `${schemaName}.gql`),
        'utf-8',
    ),
);

// l'ordre de déclaration des type importe peu, il lit l'entièreté du fichier avant de
// l'interprêter.

module.exports = schemas.join(EOL);