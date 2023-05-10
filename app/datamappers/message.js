const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')

class Message extends CoreDatamapper {
    tableName = 'message';

    async findMessagesByUserId(userId) {
        const preparedQuery = {
          text: `SELECT * FROM "${this.tableName}" WHERE user_id = $1`,
          values: [userId],
        };
    
        const result = await this.client.query(preparedQuery);
        return result.rows;
      }

}

module.exports = new Message(client);