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
   
    async  commentedVideos(user){  // trouver toutes les vidéos qui ont été commentées par l'utilisateur spécifié
        const videoComments= await UserModel.findCommentsOnVideos(user.id)
        return videoComments;
    }
   // exemple: 
/*

    {
  "data": {
    "user": {
      "id": "1",
      "name": "John",
      "commentedVideos": [
        {
          "id": "1",
          "text": "Great video!",
          "videoId": "12345",
          ...
        },
        {
          "id": "2",
          "text": "Very informative!",
          "videoId": "67890",
          ...
        }
        ...
      ]
    }
  }
}






*/
   
  
}