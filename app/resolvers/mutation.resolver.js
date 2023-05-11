const MessageModel  = require('../datamappers/message');
const UserModel  = require('../datamappers/user');
const RoleModel  = require('../datamappers/role');
const PostModel  = require('../datamappers/post');


module.exports={

    // ajout d'un user

   async addUser(_,args){
    const { input } = args;
    console.log(input)
    const user = await UserModel.create(input);
    return user;
   },

   // mettre a jour un user 
   async updateUser(_,args){
    const { id, input } = args;
    // Trouvez l'utilisateur dans la base de données
    const userfound = await UserModel.findByPk(id);
    if (!userfound) {
        throw new Error(`Aucun utilisateur trouvé avec l'ID ${id}`);
      }
       // Mettez à jour l'utilisateur

      const user= await UserModel.update({id},input);
    
       return user;
       
    
   },
 // supprimer un user 
   async deleteUser(_,{id}){
    const deleted= await UserModel.delete(id)
    if(!deleted){
        throw new Error(`Échec de la suppression de l'utilisateur avec l'identifiant ${id}`)
    }
    return deleted
   },

// --------------------ROLE--------------------------

   //ajout d'un role

   async addRole(_,args){
    const { input } = args;
    const role = await RoleModel.create(input);

    return role;

   },

   // mettre à jour un role
   async updateRole(_,args){


    const { id, input } = args;

    // Trouvez le roledans la base de données
    const rolefound = await RoleModel.findByPk(id);
    if (!rolefound) {
        throw new Error(`Aucun role trouvé avec l'ID ${id}`);
      }
       // Mettez à jour le role
       console.log(id,input)
      const role= await RoleModel.update({id},input);
       return role;
       
    
   },

   async deleteRole(_,{id}){
    const deleted= await RoleModel.delete(id)
    if(!deleted){
        throw new Error(`Échec de la suppression du role avec l'identifiant ${id}`)
    }
    return deleted

   },

   //--------------------Message----------------------

   async addMessage(_,args){
    const { input } = args;
    const message = await MessageModel.create(input);

    return message;

   },

   // update un message 

   async updateMessage(_,args){


    const { id, input } = args;

    // Trouvez le message la base de données
    const messagefound = await MessageModel.findByPk(id);
    if (!messagefound) {
        throw new Error(`Aucun message trouvé avec l'ID ${id}`);
      }
       // Mettez à jour le message
    
      const message= await MessageModel.update({id},input);
       return message;
       
    
   },

   // supprimé un message

   async deleteMessage(_,{id}){
    const deleted= await MessageModel.delete(id)
    if(!deleted){
        throw new Error(`Échec de la suppression de message avec l'identifiant ${id}`)
    }
    return deleted

   },

   //----------------Post----------------------------
   async addPost(_,args){
    const {input}=args;
    const post= await PostModel.create(input)

    return post
   },

   async updatePost(_,args){

    const {id,input}=args;
     // Trouvez le post la base de données

     const foundpost= await PostModel.findByPk(id);
     if(!foundpost){
        throw new Error(`Aucun post trouvé avec l'ID ${id}`)
     }
     const post= await PostModel.update({id},input);

     return post;

   },
   async deletePost(_,{id}){
    const deleted =await PostModel.delete(id)
    if(!deleted){
        throw new Error(`Échec de la suppression de post avec l'identifiant ${id}`);
    }
    return deleted;
   }

}