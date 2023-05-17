const DrawingModel=require('../datamappers/drawing');
const DrawingCommentModel=require('../datamappers/drawing_comment')


module.exports={
    async drawing(drawing_comment){
        const drawing= await DrawingModel.findByPk(drawing_comment.drawing_id);
        return drawing;
    },

    async users(drawing_comment){
        const us= await DrawingCommentModel.users(drawing_comment.id);
        return us;
    }

}