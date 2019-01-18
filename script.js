// import {allCards} from './modules/cards.js';

const allCards = [{
        name: 'kent',
        img: 'images/kent.jpg',
    },
    {
        name: 'verkligen',
        img: 'images/verkligen.jpg',
    },
    {
        name: 'isola',
        img: 'images/isola.jpg',
    },
    {
        name: 'hagnesta-hill',
        img: 'images/hagnesta-hill.jpg',
    },
    {
        name: 'vapen-o-ammunition',
        img: 'images/vapen-o-ammunition.jpg',
    },
    {
        name: 'du-och-jag-doden',
        img: 'images/du-och-jag-doden.jpg',
    },
    {
        name: 'tillbaka-till-samtiden',
        img: 'images/tillbaka-till-samtiden.jpg',
    },
    {
        name: 'rod',
        img: 'images/rod.jpg',
    },
    {
        name: 'en-plats-i-solen',
        img: 'images/en-plats-i-solen.jpg',
    },
    {
        name: 'jag-ar-inte',
        img: 'images/jag-ar-inte.jpg',
    },
    {
        name: 'tigerdrottningen',
        img: 'images/tigerdrottningen.jpg',
    },
    {
        name: 'da-som-nu',
        img: 'images/da-som-nu.jpg',
    },
];


// Spara spelplan i variabel och placera ut kortbehållare
const board = document.getElementById('board');
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
    card.classList.add('card');
    card.dataset.value = item.name;
    card.src = item.img;
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

// Gör två kort klickbara 
var flippedCards = 0;
var guessOne = '';
var guessTwo = '';
var points = 0;

cardContainer.addEventListener('click', function(event) {
    event.preventDefault();
    // Gör så att endast korten är klickbara
    if (event.target.dataset.value == undefined) {
        return;
    }
    if (flippedCards < 2) {
        flippedCards++;
        event.target.classList.add('selectedCard');
    }
    if (flippedCards == 1) {
        guessOne = event.target.dataset.value;
    }
    if (flippedCards == 2) {
        var selections = document.querySelectorAll('.selectedCard');
        guessTwo = event.target.dataset.value;
        if (guessOne == guessTwo) {
            points++;
            selections.forEach(card => {
                card.classList.add('wonCards');
            });
            flippedCards = 0;
            guessOne, guessTwo = '';
        } else {
            selections.forEach(card => {
                card.classList.remove('selectedCard');
            });
            flippedCards = 0;
            guessOne, guessTwo = '';
        }
    }
});


//Timer
function countdown() {
    var timeInSeconds = 60;

    function clockTicking() {
        var counter = document.getElementById("gametimer");
        timeInSeconds--;
        counter.innerHTML = "Tiden går: 0:" + (timeInSeconds < 10 ? "0" : "") + String(timeInSeconds);
        if (timeInSeconds > 0) {
            setTimeout(clockTicking, 1000);
        } else {

            alert("Spelet är slut");
        }
    }
    clockTicking();
}
countdown();