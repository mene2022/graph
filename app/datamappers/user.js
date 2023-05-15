const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')

class User extends CoreDatamapper {
    tableName = 'user';
    async findLikedVideos(user_id) {
        const preparedQuery = {
          text: `
            SELECT video.*
            FROM "video_like"
            INNER JOIN "video" ON "video_like"."video_id" = "video"."id"
            WHERE "video_like"."user_id" = $1
          `,
          values: [user_id],
        };
    
        const result = await this.client.query(preparedQuery);
        return result.rows;
      
    }
    async findCommentsOnVideos(userId) {
      const preparedQuery = {
        text: `
          SELECT video_comment.*
          FROM "publish"
          INNER JOIN video_comment
          ON video_comment.id = "publish".video_comment_id
          WHERE "publish".user_id = $1
        `,
        values: [userId],
      };
  
      const result = await this.client.query(preparedQuery);
      return result.rows;
    }

   



}

module.exports = new User(client);