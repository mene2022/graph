const MessageModel  = require('../datamappers/message');

module.exports={
    async message(post){
        const message=await MessageModel.findByPk(post.message_id);
        return message;
    }
}