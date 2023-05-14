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



}

module.exports = new User(client);