// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
let score = 0

for (let i = 0; i < listeMots.length; i++) {
    // Déclaration de la variable contenant le mot saisi par l'utilisateur
    // Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
    let motUtilisateur = prompt('Entrez le mot : ' + listeMots[i])
    // Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
    if (motUtilisateur === listeMots[i]) {
        score++
    }
}
// Affichage du score de l'utilisateur
console.log("Votre score est de " + score + " sur 3")