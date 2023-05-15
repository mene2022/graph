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

      async findUsersCommentedOnVideo(videoCommentId) {
        const preparedQuery = {
          text: `
            SELECT "user".*
            FROM "publish"
            INNER JOIN "user"
            ON "user".id = "publish".user_id
            WHERE "publish".video_comment_id = $1
          `,
          values: [videoCommentId],
        };
    
        const result = await this.client.query(preparedQuery);
        return result.rows;
      }

   

}

module.exports = new Video(client);
