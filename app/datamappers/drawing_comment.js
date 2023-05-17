const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')

class DrawingComment extends CoreDatamapper {
    tableName = 'drawing_comment';


    async getCommentsByDrawing(drawingId) {
        const preparedQuery = {
          text: `
            SELECT *
            FROM "${this.tableName}"
            WHERE "drawing_id" = $1
          `,
          values: [drawingId],
        };
    
        const result = await this.client.query(preparedQuery);
        return result.rows;
      }
      async users(drawingId) {
        const preparedQuery = {
          text: `
            SELECT "user".*
            FROM "comment"
            INNER JOIN "user"
            ON "user".id = "comment".user_id
            WHERE "comment".drawing_comment_id= $1
          `,
          values: [drawingId], // Assuming you have an id property in the Drawing class
        };
    
        const result = await this.client.query(preparedQuery);
        return result.rows
 
      


}
}

module.exports = new DrawingComment(client);