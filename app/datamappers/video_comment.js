const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')
class VideoComment extends CoreDatamapper {
    tableName = 'video_comment';


  

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

    async findCommentsByVideo(videoId) {
      const preparedQuery = {
        text: `
          SELECT *
          FROM "${this.tableName}"
          WHERE "video_id" = $1
        `,
        values: [videoId],
      };
  
      const result = await this.client.query(preparedQuery);
      return result.rows;
    }

}

module.exports = new VideoComment(client);