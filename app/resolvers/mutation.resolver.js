const MessageModel  = require('../datamappers/message');
const UserModel  = require('../datamappers/user');
const RoleModel  = require('../datamappers/role');
const PostModel  = require('../datamappers/post');
const TopicModel  = require('../datamappers/topic');
const DrawingModel  = require('../datamappers/drawing');
const DrawingCommentModel = require('../datamappers/drawing_comment');




module.exports={

    // ajout d'un user

   async addUser(_,args){
    const { input } = args;
    const newuser = await UserModel.create(input);
    return newuser;
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
        throw new Error(`Échec de la suppression de message avec l'identifiant ${args.id}`)
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
        throw new Error(`Échec de la suppression de post avec l'identifiant ${args.id}`);
    }
    return deleted;
   },

// -------------------------------Topic------------------------------------------

async addTopic(_,args){
    const {input}=args;
    const newtopic= await TopicModel.create(input);
    return newtopic;

},

async updateTopic(_,args){
    const {id,input}=args;
    const foundtopic= await TopicModel.findByPk(id);
    if(!foundtopic){
        throw new Error(`Aucun topic trouvé avec l'ID ${id}`);
    }

    const topic= await TopicModel.update({id},input);
     return topic;
},

async deleteTopic(_,{id}){
    const deleted = await TopicModel.delete(id);

    if(!deleted){
        throw new Error(`Échec de la suppression de topic avec l'identifiant ${args.id}`)
    }

    return deleted;
},

// -------------------------Drawing------------------------------

async addDrawing(_,args){
    const {input}=args;
    const newdrawing= await DrawingModel.create(input);
    return newdrawing;

},

async updateDrawing(_,args){
    console.log(args)
    const {id,input}=args;
    const founddrawing= await DrawingModel.findByPk(id);
    if(!founddrawing){
        throw new Error(`Aucun dessin trouvé avec l'ID ${id}`);
    }

    const drawing =await DrawingModel.update({id},input);
    return drawing;
},
async deleteDrawing(_,{id}){

    const deleted =await DrawingModel.delete(id)
    if(!deleted){
        throw new Error(`Échec de la suppression du dessin  avec l'identifiant ${args.id}`)
    }

    return deleted;
},

// ---------------------Drawing comment----------------------------------


async addDrawingComment(_,args){
    const {input}=args
    const newdrawingComment= await DrawingCommentModel.create(input);
    return newdrawingComment;
},

async updateDrawingComment(_,args){  
    const {id,input}=args;
    const foundDrawingComment= await DrawingCommentModel.findByPk(id);
    if(!foundDrawingComment){
        throw new Error(`Aucun commentaire de dessin trouvé avec l'ID ${id}`)
    }

    const drawingcomment= await DrawingCommentModel.update({id},input);
    return drawingcomment;
},
async deleteDrawingComment(_,args){
    const deleted =await DrawingCommentModel.delete(args.id);
    if(!deleted){
        throw new Error(`Échec de la suppression du commentaire avec l'identifiant ${args.id}`)
    }
    return deleted;
}

}