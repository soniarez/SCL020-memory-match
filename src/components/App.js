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
  let cardDeck = gameBoard(shuffling);

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

    shuffledCards = copyCards;
  }
  return shuffledCards; //retornará array de cartas aleatoriamente
};

//FUNCIÓN CREANDO ELEMENTOS DEL DOM
const gameBoard = (shuffledCards) => {
  let cardsArray = [];

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
    card.dataset.name = shuffledCards[index].id;

    //Incorporando los elementos (appending) al HTML
    card.appendChild(front);
    card.appendChild(back);

    cardsArray.push(card);

    //Llamando a la función playGame

    playGame(card);
  }

  return cardsArray; //retornará el listado de cartas
};

//Sacamos las variables, porque al mandarlas como parametro siempre se recibia el mismo array de las primeras cartas seleccionadas
let selectedCards = [];
let selectedCardsNames = [];

let score = 0;

//FUNCIÓN HANDLING CLICK
const playGame = (card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");

    // Se hace un if donde pregunto si el lenght es < 2 para dejarle push al array de la primera carta
    if (selectedCardsNames.length < 2) {
      selectedCards.push(card);
      selectedCardsNames.push(card.dataset.name);

      // despues del push se pregunta si lo que hay en el array es = 2 si no es igual a 2 quedamos a la espera de la 2da carta
      if (selectedCardsNames.length === 2) {
        //Ya tenemos 2 cartas ahora hay que ver si son iguales o no
        //Si son iguales Suena el pikachu y se reinicia los array
        if (selectedCardsNames[0] === selectedCardsNames[1]) {
          //let matchSound = new Audio("sound/match.mp3");
          //matchSound.play();
          selectedCards = [];
          selectedCardsNames = [];
          score++;
        } else {
          //Si son diferentes se dan vuelta y se vacian los array , se le coloca un timeout para que de tiempo de voltear
          setTimeout(() => {
            selectedCards[0].classList.toggle("is-flipped");
            selectedCards[1].classList.toggle("is-flipped");
            selectedCards = [];
            selectedCardsNames = [];
          }, 1200);
        }
        drawScore(score);
        if (score === 2) {
          congratsPopup();
        }
      }
    }
  });
};


//FUNCIÓN SCORE
const drawScore = (score) => {
  let labelScore = document.getElementById("score");
  labelScore.textContent = "Score: " + score;
};


//Funcion open modal
const congratsPopup = () => {
  let winAlert = document.getElementById("openModal2");
  winAlert.classList.add("show-modalDialog");

  let closeCongrats = document.getElementById("close");
  closeCongrats.addEventListener("click", () => {
    winAlert.classList.remove("show-modalDialog");
  });
};


//FUNCIÓN TIMER
let startTime = 0;
let time = startTime * 60;

const countDown = () => {
  let countDownEl = document.getElementById("timer");

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
 
  if (seconds < 10) {
    "0" + seconds;
  } else {
    seconds;
  }

  countDownEl.innerHTML = "Timer: " + `${minutes}m ${seconds}s`;
  time++;

  if (time <= 0) {
    countDownEl.innerHTML = "EXPIRED";
  }
};
//setInterval(countDown, 1000);












export default App;
