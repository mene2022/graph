module.exports = {
    Islogg: function(id) {
        if(!id){
            throw new Error('Vous devez être connecté pour effectuer cette action');
        }
    }
}
