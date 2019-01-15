// Spara spelplan i variabel och placera ut kortbehållare
const board = document.getElementById('board');
const cardContainer = document.createElement('section');
cardContainer.setAttribute('class', 'cardContainer');
board.appendChild(cardContainer);

// Skriv ut kortens framsidor med respektive bild och tilldela dem klass
allCards.forEach(item => {
    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;
    card.style.backgroundImage = `url(${item.img})`;
}) 