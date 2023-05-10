
const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')

class DrawingLike extends CoreDatamapper {
    tableName = 'drawing_like';

}

module.exports = new DrawingLike(client);







