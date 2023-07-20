import { json } from '@sveltejs/kit' // Importe la fonction 'json' du module '@sveltejs/kit'
import { comments } from "$lib/comments.js"; // Importe l'objet 'comments' depuis le fichier 'comments.js' dans le répertoire '$lib'

export function GET() {
  return json(comments); // Renvoie tous les commentaires existants en tant que réponse JSON
}

export async function POST(requestEvent){
  const { request } = requestEvent; // Extrait la requête HTTP de l'événement de requête

  const {text} = await request.json(); // Extrait la propriété 'text' des données JSON du corps de la requête
  // La ligne ci-dessus utilise l'opérateur 'await' pour attendre que la promesse retournée par 'request.json()' se résolve.
  // Cela permet de récupérer les données JSON du corps de la requête et de les assigner à la variable 'text'.

  const newComment = {
    id : comments.length +1, // Génère un nouvel ID basé sur la longueur actuelle des commentaires
    text
  };
  // Crée un nouvel objet 'newComment' contenant l'ID du commentaire (basé sur la longueur actuelle des commentaires)
  // et le texte du commentaire extrait de la requête.

  comments.push(newComment); // Ajoute le nouveau commentaire à la liste des commentaires existants

  return json(newComment, { statut:201}); // Renvoie le nouvel objet de commentaire en tant que réponse JSON avec un statut de réponse 201 (créé)
}

