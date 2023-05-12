const PostModel = require('../datamappers/post')


module.exports={
    async post(topic){

        const post= await PostModel.findByPk(topic.post_id);
        return post;

    }

}