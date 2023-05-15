/*
query {
  videoComment(id: "<COMMENT_ID>") {
    id
    content
    video {
      id
      url
      name
      type
    }
  }
}
Remplacez <COMMENT_ID> par l'identifiant du commentaire vidéo pour lequel vous souhaitez récupérer la vidéo associée.

Cette requête renverra les informations du commentaire vidéo ainsi que les détails de la vidéo associée, tels que l'ID, l'URL, le nom et le type de la vidéo.

Assurez-vous de mettre à jour votre schéma et vos résolveurs GraphQL en conséquence pour prendre en compte cette relation.



*/