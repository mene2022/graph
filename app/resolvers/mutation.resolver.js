const MessageModel  = require('../datamappers/message');
const UserModel  = require('../datamappers/user');
const RoleModel  = require('../datamappers/role');
const PostModel  = require('../datamappers/post');
const TopicModel  = require('../datamappers/topic');
const DrawingModel  = require('../datamappers/drawing');
const DrawingCommentModel = require('../datamappers/drawing_comment');
const VideoModel= require('../datamappers/video');
const VideoCommentModl=require('../datamappers/video_comment');
const VideoLikeModel= require('../datamappers/video_like');
const PublishModel=require('../datamappers/publish');
const CommentModel= require('../datamappers/comment')
const DrawingLikeModel= require('../datamappers/drawing_like')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { GraphQLError } = require('graphql');

require('dotenv').config();




module.exports={

    // ajout d'un user

   async signup(_,args){
    const { input } = args;
    const existingUser= await UserModel.findOne(input.username)

    if(existingUser){
        throw new Error('usename existe déja')
    }
     // Hachez le mot de passe avant de le sauvegarder

    
     const saltRounds = 10;
     const hashedPassword = await bcrypt.hash(input.password, saltRounds);
    
    input.password = hashedPassword;
    const newuser = await UserModel.create(input);

     // Créer un JWT et le retourner
     const token = jwt.sign({userId: newuser.id}, process.env.JWTSECRET, { expiresIn: '1h' });
    return {
        token,
        user: newuser
    };
   },

   // mettre a jour un user 
   async updateUser(_,args){
    const { id, input } = args;
    // Trouvez l'utilisateur dans la base de données
    const userfound = await UserModel.findByPk(id);
    if (!userfound) {
        throw new Error(`Aucun utilisateur trouvé avec l'ID ${id}`);
      }

       // Vérifiez si le mot de passe est parmi les champs à mettre à jour
    if (input.password) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(input.password, saltRounds);
        input.password = hashedPassword;
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
},

// ----------------------------Video---------------------

async addVideo(_,args){
    const {input}= args;

    const newVideo= await VideoModel.create(input);
    return newVideo;
},

async updateVideo(_,args){
    const {id, input}=args;
    const foundVideo= await VideoModel.findByPk(id);
    if(!foundVideo){
        throw new Error(`Acune  video trouvé avec l'id ${id}`)
    }
    const videoUdapte= await VideoModel.update({id}, input);
    return videoUdapte;
},

async deleteVideo(_,args){
    const deleted= await VideoModel.delete(args.id);
    if(!deleted){
        throw new Error(`Échec de la suppression de la video l'identifiant ${args.id}`)
    }
    return deleted;
},

// ----------------------Video comment--------------------------------

async addVideoComment(_,args){
    const {input}=args;
    const newCommentVideo= await VideoCommentModl.create(input);
    return newCommentVideo;
},

async updateVideoComment(_,args){
    const {id,input}=args;
    const foundCommentVdieo= await VideoCommentModl.findByPk(id);
    if(!foundCommentVdieo){
        throw new Error(`Acun commentaire  d'une video trouvé avec l'id ${id}`)
    }

    const updateCommentVideo= await VideoCommentModl.update({id},input);
    return updateCommentVideo;
},

async deleteVideoComment(_,args){
    const deleted= await VideoCommentModl.delete(args.id);
    if(!deleted){
        throw new Error(`ECchec de suppression du commentaire de la video avec l id ${args.id}`)
    }
    return deleted;
},

// -----------------Vide_like----------------------

async addVideoLike(_,args){
    const {input}=args;

    const likeVdieo= await VideoLikeModel.create(input);
    return likeVdieo;

},

async deleteVideoLike(_,args){
    const deleted= await VideoLikeModel.delete(args.id);

    if(!deleted){
        throw new Error(`Echec de suppression du like de la video avec l id ${args.id}`)

    }
    return deleted;
},

// ------------------Publish-------------------

async addPublishComment(_,args){
    const {input}=args;
    const commenteVideo= await PublishModel.create(input);
    return commenteVideo
},

async deletePublishComment(_,args){
    const deleted = await PublishModel.delete(args.id);
    if(!deleted){
        throw new Error(`Echec de suppression du commentaire de la video avec l id ${args.id}`)

    }
    return deleted;

},

// -------------------------------Drawing like----------------

 async addDrawingLike(_,args){
    const {input}=args
    const drawingLike= await DrawingLikeModel.create(input);
    return drawingLike;
 },
 async deleteDrawingLike(_,args){
    const deleted=await DrawingLikeModel.delete(args.id)
    if(!deleted){
        throw new Error(`Echec de suppression du like du dessin avec l id ${args.id}`)

    }
    return deleted

 },
//  --------------------Comment ------------------------

async addCommentDrawing(_,args){
    const {input}=args

    const commentsDrawing=await CommentModel.create(input)
    return commentsDrawing;

},

// ----------------loggin


async login(_,{username, password}){
   
    const user =await UserModel.findOne(username);
    if (!user) {
        throw new Error('No such user found');
      }

    // Comparer le mot de passe avec le hash stocké dans la base de données
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        throw new GraphQLError('Authentication failed.', {
            extensions: {
                code: 'UNAUTHORIZED',
                http: {
                    status: 401,
                },
            },
        });
    }

    // Créer un JWT et le retourner
    const token = jwt.sign({userId: user.id}, process.env.JWTSECRET, { expiresIn: '1h' });
 

    return {
        token,
        user,
      };




}
}