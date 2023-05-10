const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')

class Drawing extends CoreDatamapper {
    tableName = 'drawing';

}

module.exports = new Drawing(client);