
const VideoModel=require('../datamappers/video');

module.exports={

    async likedBy(video){
    
        const videoLikByUsers= await VideoModel.findLikedBy(video.id);
        return videoLikByUsers;

    },

   
}