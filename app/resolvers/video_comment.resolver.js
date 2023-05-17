const VideoModel=require('../datamappers/video');
const VideoComment=require('../datamappers/video_comment')


module.exports={
    async video(video_comment){
        const video= await VideoModel.findByPk(video_comment.video_id);
        return video;
    },
  

        async publishers(video_comment){
            const usersCommentedOnVideo= await VideoComment.findUsersCommentedOnVideo(video_comment.id) ;

    
            return usersCommentedOnVideo;
        }
    

}