const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')

class DrawingComment extends CoreDatamapper {
    tableName = 'drawing_comment';
 
      


}

module.exports = new DrawingComment(client);