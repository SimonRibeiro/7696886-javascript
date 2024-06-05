let resultat = document.querySelector(".zoneScore span")
function afficherResultat(score, nbPropositionsProposes) {
    resultat.textContent = `${score} / ${nbPropositionsProposes}`
}

function afficherProposition(listePropositions,[i]) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.textContent = `${listePropositions[i]}`
}

function lancerJeu() {
    let score = 0
    let nbPropositionsProposes = 1

    let listePropositions = listeMots
    let i = 0
    afficherProposition(listePropositions,[i])

    let mots = document.getElementById("mots")
    let phrases = document.getElementById("phrases")

    mots.addEventListener("change", () => {
        if (mots.checked === true) {
            listePropositions = listeMots
        }
        i = 0
        afficherProposition(listePropositions,[i])
        score = 0
        nbPropositionsProposes = 1
        resultat.textContent = `0`
        btnValiderMot.disabled = false
        inputEcriture.disabled = false
        inputEcriture.value = null
    })
    
    phrases.addEventListener("change", () => {
        if (phrases.checked === true) {
            listePropositions = listePhrases
        }
        i = 0
        afficherProposition(listePropositions,[i])
        score = 0
        nbPropositionsProposes = 1
        resultat.textContent = `0`
        btnValiderMot.disabled = false
        inputEcriture.disabled = false
        inputEcriture.value = null
    })

    let zoneProposition = document.querySelector(".zoneProposition")
    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")

    btnValiderMot.addEventListener("click", () => {
        if (inputEcriture.value === listePropositions[i]) {
            score++
        }
        afficherResultat(score, nbPropositionsProposes)
        nbPropositionsProposes++
        i++

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
            afficherResultat(score, nbPropositionsProposes)
            nbPropositionsProposes++
            i++
    
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