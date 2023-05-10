const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')

class Post extends CoreDatamapper {
    tableName = 'post';

}

module.exports = new Post(client);