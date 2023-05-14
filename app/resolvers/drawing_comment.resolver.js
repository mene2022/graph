const DrawingModel=require('../datamappers/drawing');


module.exports={
    async drawing(drawing_comment){
        const drawing= await DrawingModel.findByPk(drawing_comment.drawing_id);
        return drawing;
    },

}