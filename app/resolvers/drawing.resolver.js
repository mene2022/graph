
const UserModel=require('../datamappers/user');

module.exports={
    async user (drawing){
        console.log(drawing)
        const user= await UserModel.findByPk(drawing.user_id);
        return user;
    }
}