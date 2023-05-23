const UserModel  = require('../datamappers/user');
const RoleModel  = require('../datamappers/role');
const MessageModel  = require('../datamappers/message');
const PostModel  = require('../datamappers/post');
const TopicModel  = require('../datamappers/topic');
const DrawingModel  = require('../datamappers/drawing');
const DrawingCommentModel  = require('../datamappers/drawing_comment');
const VideoModel= require('../datamappers/video');
const VideoCommentModel=require('../datamappers/video_comment')

const{Islogg}=require('../services/auth.js')



module.exports={
    async users(_,__,context){
        console.log(context)
        Islogg(context.userId)
      

        const AllUsers= await UserModel.findAll();
        return AllUsers;
    },

    async getUserById(_,args,context){
        
        console.log(context)

        const user= await UserModel.findByPk(args.id);
        return user;
    },

    async roles(){

        const AllRoles= await RoleModel.findAll();
        return AllRoles;
    },

    async getRoleById(_,args){
       
        const role= await RoleModel.findByPk(args.id);
        return role;
    },
   

    async messages(){

        const AllMessage= await MessageModel.findAll();
        return AllMessage;

    },
    async getMessageById(_,args){
       
        const message= await MessageModel.findByPk(args.id);
        return message;
    },

    async posts(){

        const posts= await PostModel.findAll();
        return posts;
    },

    async getPostById(_,args,context){
      
        const post= await PostModel.findByPk(args.id);
        return post;
    },

    async topics(){
        const topics= await TopicModel.findAll();
        return topics;
    },
   async getTopicById(_,args){

    const topic=await TopicModel.findByPk(args.id);
    return topic;

   },

   async drawings(){

    const drawings= await DrawingModel.findAll();
    return drawings;
   },

   async getDrawingById(_,args){

    const drawing= await DrawingModel.findByPk(args.id)
    return drawing;
   },

   async drawingComments(){
    const drawingComments=await DrawingCommentModel.findAll();

    return drawingComments;
   },

   async getDrawingCommentById(_,args){
    const drawingComment= await DrawingCommentModel.findByPk(args.id);
    return drawingComment;
   },

   async getCommentsByDrawing(_,args){
    const commentsBydrawings=await DrawingCommentModel.getCommentsByDrawing(args.id);
    return commentsBydrawings;

   },

   async videos(){
    const videos= await VideoModel.findAll();
    return videos;
   },

   async getVideoById(_,args){
    const video=await VideoModel.findByPk(args.id);
    return video;
   },

   async videoComments(){
    const allCommentsvideos=await VideoCommentModel.findAll();
    return allCommentsvideos;
   },

   async getCommentedVideoById(_,args){
    const commentVideo= await VideoCommentModel.findByPk(args.id);
   
    return commentVideo;
   },


     async getCommentsByVideo(_,args){
        console.log(args.id)
        const commentsVideo=await VideoCommentModel.findCommentsByVideo(args.id);
        console.log(commentsVideo)
        return commentsVideo;
     },



    //  renvoie un dessin au hassard

    async radndomDrawing(){
       const randomDrawing= await DrawingModel.randomDrawing();
      
       return randomDrawing;
        
    }
  


}