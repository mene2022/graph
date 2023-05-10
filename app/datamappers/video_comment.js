const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')
class VideoComment extends CoreDatamapper {
    tableName = 'video_comment';

}

module.exports = new VideoComment(client);