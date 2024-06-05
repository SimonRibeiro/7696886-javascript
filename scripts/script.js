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
                nbPropositionsProposes = 1
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