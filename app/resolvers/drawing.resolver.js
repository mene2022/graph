
const UserModel=require('../datamappers/user');
const DrawingModel= require('../datamappers/drawing')

module.exports={
    async user (drawing){
        console.log(drawing)
        const user= await UserModel.findByPk(drawing.user_id);
        return user;
    },

    async likedByUsers(drawing){
        const findUsersWhoLikedDrawing= await DrawingModel.findUsersWhoLikedDrawing(drawing.user_id);
        return findUsersWhoLikedDrawing;
    }
}