var selectAllCard = document.querySelectorAll(".card")
var selectboard = document.querySelector(".cards")
var restartBtn = document.getElementById("play__agin")
restartBtn.innerText = "play";

var theCardFliped = false;
var lockBoard = false;
var faceCard, backCard;

function flipTheCard() {
    if (lockBoard) return;
    if (this === faceCard) return;
    this.classList.add("flip")
    if (!theCardFliped) {
        theCardFliped = true;
        faceCard = this
        return;
    }
    theCardFliped = false;
    backCard = this
    CheckingMatchingCards()
}

function disableTheClickEventForMatched() {
    faceCard.removeEventListener("click", flipTheCard)
    backCard.removeEventListener("click", flipTheCard)
    backCard.style.visibility = "hidden";
    faceCard.style.visibility = "hidden"
    backCard.style.transition = "visibility.9s"
    faceCard.style.transition = "visibility.9s"
    resetBoard()
}



function setingTimeToflipCard() {
    lockBoard = true;
    setTimeout(function () {
        faceCard.classList.remove("flip")
        backCard.classList.remove("flip")
        resetBoard()
    }, 1500)

}

function resetBoard() {
    theCardFliped = false;
    lockBoard = false;
    faceCard = null;
    backCard = null;
}



function CheckingMatchingCards() {
    faceCard.dataset.cards === backCard.dataset.cards ? disableTheClickEventForMatched() : setingTimeToflipCard();
}

function suffleTheCards() {
    restartBtn.innerText = "play agin"
    selectAllCard.forEach(function (card) {
        var getRandom = Math.floor(Math.random() * 12)
        card.style.order = getRandom
        card.addEventListener("click", flipTheCard)
        card.classList.remove("flip")
        card.style.removeProperty("transition")
        card.style.removeProperty("visibility")
    })

}
restartBtn.addEventListener("click", suffleTheCards)