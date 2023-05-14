const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')

class Video extends CoreDatamapper {
    tableName = 'video';
    async findLikedBy(videoId) {
        const preparedQuery = {
          text: `
            SELECT "user".*
            FROM "video_like"
            INNER JOIN "user" ON "video_like"."user_id" = "user"."id"
            WHERE "video_like"."video_id" = $1
          `,
          values: [videoId],
        };
    
        const result = await this.client.query(preparedQuery);
        return result.rows;
      }

}

module.exports = new Video(client);
