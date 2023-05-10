const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')
class VideoLike extends CoreDatamapper {
    tableName = 'video_like';

}

module.exports = new VideoLike(client);
