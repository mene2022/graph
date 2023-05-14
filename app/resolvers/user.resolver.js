const RoleModel  = require('../datamappers/role');
const UserModel=require('../datamappers/user')



module.exports={
    async role(user){
     
        const role= await RoleModel.findByPk(user.role_id);
        return role;
    },

    async likedVideos(user){
        const videolikes=await UserModel.findLikedVideos(user.id);
        return videolikes;
    }
 
   
}