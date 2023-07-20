import { json } from '@sveltejs/kit'; // Importe la fonction 'json' du module '@sveltejs/kit'
import { comments } from "$lib/comments.js"; // Importe l'objet 'comments' depuis le fichier 'comments.js' dans le répertoire '$lib'

export function GET(requestEvent) {
    const { params } = requestEvent; // Extrait les paramètres de la requête HTTP
    const { commentId } = params; // Extrait le paramètre 'commentId' des paramètres de la requête

    const comment = comments.find((comment) => comment.id === parseInt(commentId));
    // Recherche le commentaire correspondant à l'ID spécifié dans les paramètres de la requête
    // en utilisant la méthode 'find' sur le tableau 'comments'
    // La fonction de rappel passe en revue chaque élément du tableau et retourne le premier élément qui correspond à la condition donnée.
    // Dans ce cas, on recherche un commentaire dont l'ID est égal à 'commentId' converti en entier avec 'parseInt'

    return json(comment); // Renvoie le commentaire trouvé en tant que réponse JSON
}

export async function PATCH(requestEvent) {
    const { params, request } = requestEvent; // Extrait les paramètres et la requête HTTP de l'événement de requête
    const { commentId } = params; // Extrait le paramètre 'commentId' des paramètres de la requête
    const { text } = await request.json(); // Extrait la propriété 'text' des données JSON du corps de la requête

    const comment = comments.find((comment) => comment.id === parseInt(commentId));
    // Recherche le commentaire correspondant à l'ID spécifié dans les paramètres de la requête
    // en utilisant la méthode 'find' sur le tableau 'comments'
    // La fonction de rappel passe en revue chaque élément du tableau et retourne le premier élément qui correspond à la condition donnée.
    // Dans ce cas, on recherche un commentaire dont l'ID est égal à 'commentId' converti en entier avec 'parseInt'

    comment.text = text;
    // Modifie la propriété 'text' du commentaire trouvé avec la nouvelle valeur 'text' extraite de la requête

    return json(comment); // Renvoie le commentaire modifié en tant que réponse JSON
}


export async function DELETE(requestEvent) {
    const { params } = requestEvent; // Extrait les paramètres et la requête HTTP de l'événement de requête
    const { commentId } = params; // Extrait le paramètre 'commentId' des paramètres de la requête

    const commentIndex = comments.findIndex((comment) => comment.id === parseInt(commentId));
    // Recherche l'indice de l'élément du tableau 'comments' correspondant à l'ID spécifié dans les paramètres de la requête
    // en utilisant la méthode 'findIndex' sur le tableau 'comments'
    // La fonction de rappel passe en revue chaque élément du tableau et retourne l'indice du premier élément qui correspond à la condition donnée.
    // Dans ce cas, on recherche un commentaire dont l'ID est égal à 'commentId' converti en entier avec 'parseInt'

    const comment = comments[commentIndex];
    // Accède à l'élément du tableau 'comments' correspondant à l'indice trouvé

    comments.splice(commentIndex, 1);
    // Supprime l'élément du tableau 'comments' en utilisant la méthode 'splice'
    // L'indice 'commentIndex' indique l'élément à supprimer, et le paramètre '1' spécifie le nombre d'éléments à supprimer

    return json(comment);
    // Renvoie le commentaire supprimé en tant que réponse JSON
}