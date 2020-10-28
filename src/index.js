// Dom selector
const cardsContainer = document.getElementById('cards-container')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const currentEl = document.getElementById('current')
const showEl = document.getElementById('show')
const hideEl = document.getElementById('hide')
const questionEl = document.getElementById('question')
const answerEl = document.getElementById('answer')
const addQuestionBtn = document.getElementById('add-question')
const clearBtn = document.getElementById('clear')
const addContainer = document.getElementById('add-container')

// Keep track of the current card
let currentActiveCard = 0 // Which card to show

// Store DOM cards
const cardEl = [] // Store DOM cards which will be in an array of elements

// Store card data
const cardsData = getCardsData()

// Create all cards
function createCards() {
    cardsData.forEach((data, index) => createCard(data, index)) // loop through the data and creating an array of cards
}

// Create a signle card in the DOM
function createCard() {
    const card = document.createElement('div')
    card.classList.add('card')

    if(index === 0) {
        card.classList.add('active')
    }

    card.innerHTML = `
    <div class="inner-card">
    <div class="inner-card-front">
      <p>
        ${data.question}
      </p>
    </div>
    <div class="inner-card-back">
      <p>
        ${data.answer}
      </p>
    </div>
  </div>
  `

  card.addEventListener('click', () => card.classList.toggle('show-answer'))

// Add to DOM cards
cardsEl.push(card)
cardsContainer.appendChild(card)

updateCurrentText()
}

// Show number of cards
function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}` // Add 1 to it because it's a 0 indexed
}

// Get cards from local storate --- Local storage setup ---
function getCardsData() {
    const cards = JSON.parse(localStorage.getItem('cards'))
    return cards === null ? [] : cards
}

// Add card to local storage
function setCardsData() {
    localStorage.setItem('cards', JSON.stringify(cards)) // We want to turn it to a string
    window.location.reload() // To reflect the cards data on the DOM
}

createCards()

