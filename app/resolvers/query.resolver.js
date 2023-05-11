const UserModel  = require('../datamappers/user');


module.exports={
    async users(){

        const AllUsers= await UserModel.findAll();
        return AllUsers;
    },

    async user(_,args){
       
        const user= await UserModel.findByPk(args.id);
        return user;
    }
   
}