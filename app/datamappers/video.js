const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')

class Video extends CoreDatamapper {
    tableName = 'video';

}

module.exports = new Video(client);
