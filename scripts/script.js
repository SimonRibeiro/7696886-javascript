/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    let resultat = document.querySelector(".zoneScore span")
    resultat.textContent = `${score} / ${nbMotsProposes}`
}


function afficherProposition(listeMots,[i]) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.textContent = `${listeMots[i]}`
}

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    // Initialisations
    let score = 0
    let nbMotsProposes = 1

    let i = 0
    afficherProposition(listeMots,[i])

    let btnValiderMot = document.getElementById("btnValiderMot")
    btnValiderMot.addEventListener("click", () => {
        let inputEcriture = document.getElementById("inputEcriture")
        if (inputEcriture.value === listeMots[i]) {
            score++
        }
        afficherResultat(score, nbMotsProposes)
        nbMotsProposes++
        i++

        let zoneProposition = document.querySelector(".zoneProposition")
        if (listeMots[i] === undefined) {
            zoneProposition.textContent = `Le jeu est fini`
            btnValiderMot.disabled = true
        } else {
        afficherProposition(listeMots,[i])
        }

        inputEcriture.value = null
    })
}