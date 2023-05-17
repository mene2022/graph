const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')

class Drawing extends CoreDatamapper {
    tableName = 'drawing';

    async findUsersWhoLikedDrawing(drawingId) {
        const preparedQuery = {
          text: `
            SELECT "user".*
            FROM "drawing_like"
            INNER JOIN "user"
            ON "user".id = "drawing_like".user_id
            WHERE "drawing_like".drawing_id = $1
          `,
          values: [drawingId],
        };
    
        const result = await this.client.query(preparedQuery);
        return result.rows;
      }

}

module.exports = new Drawing(client);