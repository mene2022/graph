const VideoModel=require('../datamappers/video');


module.exports={
    async video(video_comment){
        const video= await VideoModel.findByPk(video_comment.video_id);
        return video;
    }
}