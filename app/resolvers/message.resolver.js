const UserModel  = require('../datamappers/user');


module.exports={
    async user(message){
     
        const user= await UserModel.findByPk(message.user_id);
        return user;
    }
   
}