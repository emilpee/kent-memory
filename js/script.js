import allCards from './cards.js';

var flippedCards = 0;
var guessOne = '';
var guessTwo = '';
var points = 0;
var timeLeft = 60;
var winTime = 1000;
var loseTime = 2000;

// Spara spelplan i variabel och placera ut kortbehållare
const board = document.querySelector('#board');
const cardContainer = document.createElement('div');
cardContainer.setAttribute('class', 'cardContainer');
board.appendChild(cardContainer);

// Skapa kopior av varje kort
var allCardsCopy = allCards;
const doubleImg = allCards.concat(allCardsCopy);

// Blanda korten innan de skrivs ut
shuffle(doubleImg);

// Skriv ut kortens framsidor med respektive bild och tilldela dem klass
doubleImg.forEach(item => {
    var card = document.createElement('img');
    card.classList.add('bg');
    card.classList.add('card');
    card.dataset.value = item.name;
    card.src = item.img;
    card.alt = "Memorykort";
    cardContainer.appendChild(card);
})

// Funktion som blandar alla kort
function shuffle(array) {
    for (let i = 0; i < doubleImg.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Reset game
function gameReset() {
    flippedCards = 0;
    guessOne, guessTwo = '';
}

// Poäng och meddelande
var message = document.querySelector("#message");
var displayPoints = document.querySelector("#points");
displayPoints.innerHTML = points;

cardContainer.addEventListener('click', (event) => {
    let clickedCard = event.target;
    clickedCard.classList.remove('bg'); // flip
    // Undvik klick på spelplan och vunna kort
    if (clickedCard.dataset.value == undefined ||  clickedCard.classList.contains("wonCards")) {
        return;
    }
    if (flippedCards < 2) {
        flippedCards++;
        clickedCard.classList.toggle('selectedCard');
    }
    if (flippedCards == 1) {
        guessOne = clickedCard.dataset.value;
        clickedCard.classList.add('noTarget'); // Gör att bilden ej är klickbar igen
    }
    if (flippedCards == 2) {
        var selections = document.querySelectorAll('.selectedCard');
        guessTwo = clickedCard.dataset.value;
        if (guessOne === guessTwo) {
            points++;
            displayPoints.innerHTML = points;
            gameReset();
            message.innerHTML = "Och jag vet, jag har rätt, du har fel";
            setTimeout(function() {
                message.innerHTML = '';
                selections.forEach(card => {
                    card.classList.add('wonCards');
                });
            }, winTime);
        } else {
            selections.forEach(card => {
                message.innerHTML = "Gör fel, gör om, gör rätt";
                cardContainer.classList.add('noTarget'); // Stäng av klickbarhet
                setTimeout(function() {
                    card.classList.remove('selectedCard');
                    card.classList.add('flipBack');
                    gameReset();
                    card.classList.remove('noTarget'), cardContainer.classList.remove('noTarget'); // Gör bilder klickbara igen
                    message.innerHTML = '';
                }, loseTime);
                setTimeout(function() {
                    card.classList.add('bg');
                    card.classList.remove('flipBack');
                }, loseTime);
            })
        }
    }
})

//Timer
const gameTimer = document.querySelector('#gametimer');
var timeTick = setInterval(() => {
    gameTimer.innerHTML = "Tiden går: 0:" + (timeLeft < 11 ? "0" : "") +
        --timeLeft;


    if (timeLeft <= 0) {
        board.innerHTML = `
            <div id=\"finishedGame\">Tyvärr, tiden tog slut</div>
            <img class="loseImg" src=\"../images/lose.gif\">
                <div id=\"finishedGamemenu\">
                    &larr; Börja om på nytt?
                </div>
            </a>
        `;
        cardContainer.style.opacity = "0.4";
        document.querySelector("#messagebar").style.display = "none";

        document.querySelector('#finishedGamemenu').addEventListener('click', () => {
            window.location.reload();
        })

        clearInterval(timeTick);
    } 
    
    else if (points == 12) {
        board.innerHTML = `
            <div id=\"finishedGame\">Får jag gratulera, du vann kent memory med stil!</div>
            <img class=\"winpic\" src=\"../images/win.gif\">
            <a href=\"spela.html\"> 
              <div id=\"finishedGamemenu\">&larr; Tillbaka</div>
            </a>
        `;

        document.querySelector("#messagebar").style.display = "none";
        document.querySelector('#finishedGamemenu').addEventListener('click', () => {
            window.location.reload();
        })

    }

}, loseTime);

