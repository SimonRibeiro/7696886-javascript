let resultat = document.querySelector(".zoneScore span")
function afficherResultat(score, nbPropositionsProposes) {
    resultat.textContent = `${score} / ${nbPropositionsProposes}`
}

function afficherProposition(listePropositions,[i]) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.textContent = `${listePropositions[i]}`
}

function validerNom(nom) {
    if (nom.length >= 2) {
        return true
    }
    return false
}

function validerEmail(email) {
    let emailRegExp = new RegExp(/[\w.-]+@[\w.-]+\.[\w.-]+/) 
    // "[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+" (besoin de doubler les \ pour prendre en compte le .)
    // OU "[\\w.-]+@[\\w.-]+\\.[\\w.-]+" (doubler aussi les \ pour les \w)
    // OU /[\w.-]+@[\w.-]+\.[\w.-]+/ (remplacer les " " par des / /)
    if (emailRegExp.test(email)) {
        return true
    }
    return false
}

/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, scoreMail) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${scoreMail} sur le site d'Azertype !`
    location.href = mailto
}

function lancerJeu() {
    let score = 0

    initAddEventListenerPopup()
    let btnEnvoyerMail = document.querySelector(".popup form")
    btnEnvoyerMail.addEventListener("submit", (event) => {
        event.preventDefault()
        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value
        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value
        let scoreMail = `${score} / ${i}`
        if (validerNom(nom) && validerEmail(email)) {
            afficherEmail(nom, email, scoreMail)
        } else {
            console.log(`Erreur : champ(s) invalide(s)`)
        }
    })

    let listePropositions = listeMots
    let i = 0
    afficherProposition(listePropositions,[i])

    let optionSource = document.querySelectorAll('input[name="optionSource"]')
    for (let j = 0; j < optionSource.length; j++) {
        optionSource[j].addEventListener("change", (event) => {
            if (event.target.value === "2") {
                listePropositions = listePhrases
            } else {
                listePropositions = listeMots
            }
                i = 0
                afficherProposition(listePropositions,[i])
                score = 0
                resultat.textContent = `0`
                btnValiderMot.disabled = false
                inputEcriture.disabled = false
                inputEcriture.value = null
        })
    }

    let zoneProposition = document.querySelector(".zoneProposition")
    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")

    btnValiderMot.addEventListener("click", () => {
        if (inputEcriture.value === listePropositions[i]) {
            score++
        }
        i++
        afficherResultat(score, i)

        if (listePropositions[i] === undefined) {
            zoneProposition.textContent = `Le jeu est fini`
            btnValiderMot.disabled = true
            inputEcriture.disabled = true
        } else {
        afficherProposition(listePropositions,[i])
        }
        inputEcriture.value = null
    })

    inputEcriture.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            if (inputEcriture.value === listePropositions[i]) {
                score++
            }
            i++
            afficherResultat(score, i)
    
            if (listePropositions[i] === undefined) {
                zoneProposition.textContent = `Le jeu est fini`
                btnValiderMot.disabled = true
                inputEcriture.disabled = true
            } else {
            afficherProposition(listePropositions,[i])
            }
            inputEcriture.value = null
        }
    })
}