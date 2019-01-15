// Alla kort
const allCards = [{
    'name': 'kent',
    'img': '/images/kent.jpg',
},
{
    'name': 'verkligen',
    'img': '/images/verkligen.jpg',
},
{
    'name': 'isola',
    'img': '/images/isola.jpg',
},
{
    'name': 'hagnesta-hill',
    'img': '/images/hagnesta-hill.jpg',
},
{
    'name': 'vapen-o-ammunition',
    'img': '/images/vapen-o-ammunition.jpg',
},
{
    'name': 'du-och-jag-doden',
    'img': '/images/du-och-jag-doden.jpg',
},
{
    'name': 'tillbaka-till-samtiden',
    'img': '/images/tillbaka-till-samtiden.jpg',
},
{
    'name': 'rod',
    'img': '/images/rod.jpg',
},
{
    'name': 'en-plats-i-solen',
    'img': '/images/en-plats-i-solen.jpg',
},
{
    'name': 'jag-ar-inte',
    'img': '/images/jag-ar-inte.jpg',
},
{
    'name': 'tigerdrottningen',
    'img': 'tigerdrottningen.jpg',
},
{
    'name': 'da-som-nu',
    'img': '/images/da-som-nu.jpg',
},
];

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