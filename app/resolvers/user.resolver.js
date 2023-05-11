const RoleModel  = require('../datamappers/role');


module.exports={
    async role_id(user){
     
        const role= await RoleModel.findByPk(user.role_id);
        return role;
    }
   
}