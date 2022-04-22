//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

import pokemon from "../data/pokemon/pokemon.js";
//console.log(pokemon)

const App = () => {
  //const el = document.createElement("div");
  //el.className = 'App';
  //el.textContent = 'Hola mundo!'

  let shuffling = shuffle();
  //console.log(shuffling);
  let cardDeck = divEl(shuffling);

  return cardDeck;
};

//FUNCIÓN SHUFFLING CARTAS
const shuffle = () => {
  let originalCards = pokemon.items;
  let copyCards = originalCards.concat(originalCards);
  let shuffledCards = [];

  for (let i = copyCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copyCards[i];
    copyCards[i] = copyCards[j];
    copyCards[j] = temp;
    //console.log(copyCards)
    shuffledCards = copyCards;
  } //console.log(shuffledCards)
  return shuffledCards; //retornará array de cartas aleatoriamente
};

//FUNCIÓN CREANDO ELEMENTOS DEL DOM
const divEl = (shuffledCards) => {
  let cardsArray = [];
  let selectedCards = [];
  let selectedCardsNames = [];
  let count = 0;

  for (let index = 0; index < shuffledCards.length; index++) {
    const card = document.createElement("div");
    const front = document.createElement("img");
    const back = document.createElement("img");

    //Asignar clase a los elementos creados
    card.classList = "card";
    front.classList = "front";
    back.classList = "back";

    //Asignado atributos a los elementos creados
    front.setAttribute("src", shuffledCards[index].image);
    back.setAttribute("src", "img/backcard.png");
    //card.setAttribute("name", shuffledCards[index].id); //agregando atributo name a tarjetas
    card.dataset.name = shuffledCards[index].id;

    //Incorporando los elementos (appending) al HTML
    card.appendChild(front);
    card.appendChild(back);

    cardsArray.push(card);

    //Llamando a la función handleClick
    handleClick(card, selectedCards, selectedCardsNames, count);
  }

  return cardsArray; //retornará el listado de cartas
};

//FUNCIÓN HANDLING CLICK
const handleClick = (card, selectedCards, selectedCardsNames, count) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
    //selectedCardsNames.push(card.getAttribute("name"));
    selectedCards.push(card);
    selectedCardsNames.push(card.dataset.name);


    //Comparando entre dos tarjetas (dos selecciones del usuario)
    if (selectedCardsNames.length === 2) { 
      
      if (selectedCardsNames[0] === selectedCardsNames[1]) {
        let matchSound = new Audio("sound/match.mp3");
        matchSound.play();
        count++;
      } else {
       selectedCards[0].classList.add("no-matched");
       selectedCards[1].classList.add("no-matched");
       if (selectedCards[0].classList.contains("no-matched") && selectedCards[1].classList.contains("no-matched"));
       selectedCards[0].classList.toggle("is-flipped");
       selectedCards[1].classList.toggle("is-flipped");
      }
    }
  });
};


//FUNCIÓN TIMER
/*let startTime = 0.2;
let time = startTime * 60;

let countDownEl = document.getElementById("demo");

const countDown = () => {
  let minutes = Math.floor(time/60);
  let seconds = time % 60;

  if (seconds < 10) {
   "0" + seconds;
  } else {
    seconds;
  }

  countDownEl.innerHTML = `${minutes}m ${seconds}s`;
  time--;

  if (time <= 0) {
    countDownEl.innerHTML = "EXPIRED";
  }
}
setInterval(() => {
  countDown();
}, 1000); */


export default App;
