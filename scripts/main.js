/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

// Ici, j'ai mis la fonction lancerJeu() en commentaire pour ne pas être dérangé par l'affichage des popups. 
// lancerJeu()



let zoneSaisie = document.getElementById("inputEcriture")
console.log(zoneSaisie)

let btnValider = document.getElementById("btnValiderMot")
console.log(btnValider)

let zoneProposition = document.querySelector(".zoneProposition")
console.log(zoneProposition)

let zoneScore = document.querySelector(".zoneScore")
console.log(zoneScore)

let radioList = document.querySelectorAll(".optionSource input")
console.log(radioList)