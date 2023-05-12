const UserModel  = require('../datamappers/user');
const RoleModel  = require('../datamappers/role');
const MessageModel  = require('../datamappers/message');
const PostModel  = require('../datamappers/post');
const TopicModel  = require('../datamappers/topic');


module.exports={
    async users(){

        const AllUsers= await UserModel.findAll();
        return AllUsers;
    },

    async user(_,args){
       
        const user= await UserModel.findByPk(args.id);
        return user;
    },

    async roles(){

        const AllRoles= await RoleModel.findAll();
        return AllRoles;
    },

    async role(_,args){
       
        const role= await RoleModel.findByPk(args.id);
        return role;
    },
   

    async messages(){

        const AllMessage= await MessageModel.findAll();
        return AllMessage;

    },
    async message(_,args){
       
        const message= await MessageModel.findByPk(args.id);
        return message;
    },

    async posts(){

        const posts= await PostModel.findAll();
        return posts;
    },

    async post(_,args){
        const post= await PostModel.findByPk(args.id);
        return post;
    },

    async topics(){
        const topics= await TopicModel.findAll();
        return topics;
    },
   async topic(_,args){

    const topic=await TopicModel.findByPk(args.id);
    return topic;

   }
}