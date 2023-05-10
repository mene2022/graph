const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')

class Publish extends CoreDatamapper {
    tableName = 'publish';

}

module.exports = new Publish(client);