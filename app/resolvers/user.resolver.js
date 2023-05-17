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
    },
   
    async  publishedComments(user){  // trouver toutes les vidéos qui ont été commentées par l'utilisateur spécifié
        const videoComments= await UserModel.findCommentsOnVideos(user.id)
        return videoComments;
    },

    async likedDrawings(user){
      const dessinsCommented= await UserModel.findLikedDrawings(user.id);
      
      return dessinsCommented
    },

    async comments(user){
      const comments=await UserModel.comments(user.id);
      return comments;
    }
  
   
  
}