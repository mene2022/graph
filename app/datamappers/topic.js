const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')

class Topic extends CoreDatamapper {
    tableName = 'topic';

}

module.exports = new Topic(client);