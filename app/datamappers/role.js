const CoreDatamapper =require('./coredatamapper');
const client = require('../db/pg')

class Role extends CoreDatamapper {
    tableName = 'role';

}

module.exports = new Role(client);