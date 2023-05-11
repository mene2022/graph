
const UserModel  = require('../datamappers/user');


module.exports={
   async addUser(_,args){
    const { input } = args;
    console.log(input)
    const user = await UserModel.create(input);
    console.log(user)
    return user;
   },

   async updateUser(_,args){
    const{id,input}=args;
    console.log(id);
    console.log(input);
    return 1;
   },

   async deleteUser(_,{id}){
    const deleted= await UserModel.delete(id)
    if(!deleted){
        throw new Error(`Échec de la suppression de l'utilisateur avec l'identifiant ${id}`)
    }
    return deleted
   }
}