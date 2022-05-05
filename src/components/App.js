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

<<<<<<< HEAD
const start = () => {
  let shuffling = shuffle(pokemon.items);

  let cardDeck = gameBoard(shuffling);

  return cardDeck;
};

//FUNCIÓN SHUFFLING CARTAS
const shuffle = (pokemon) => {

  //let originalCards = pokemon.items;
  //let copyCards = originalCards.concat(originalCards);
  //let shuffledCards = [];
  let shuffledCards = pokemon.concat(pokemon);

  shuffledCards = shuffledCards.sort(() => Math.random() - 0.5); 

  //shuffledCards = copyCards;

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
    card.onclick = () => playGame(card);
    //playGame(card);
  }
  return cardsArray; //retornará el listado de cartas
};

//Sacamos las variables, porque al mandarlas como parametro siempre se recibia el mismo array de las primeras cartas seleccionadas
let selectedCards = [];
let selectedCardsNames = [];

let score = 0;
let firstClicked = false; //por default antes de partir el juego no se ha dado el primer click
let time = "";
let lockGameBoard = false; //por default al iniciarl el juego el gameboard NO está bloqueado, pemrite dar click.
//Más adelante hay que pasarlo a true para para innovilizar más selecciones durante la evaluación de match o no match

//FUNCIÓN HANDLING CLICK
const playGame = (card) => {
  //card.addEventListener("click", () => {
  if (lockGameBoard) return; //como el gameboard NO está bloqueado, se entra a la función
  if (card.classList) {
    card.classList.toggle("is-flipped");
  }

  if (!firstClicked) {
    timerOn();
  }
  firstClicked = true; // al darse el primer click en tarjeta se inicia el timer

  if (selectedCardsNames.length < 2) {
    selectedCards.push(card);
    selectedCardsNames.push(card.dataset.name);
    if (selectedCardsNames.length === 2) {
      if (selectedCardsNames[0] === selectedCardsNames[1]) {
        match();
      } else {
        lockGameBoard = true; //se bloquea el gameboard para evitar que el usuario seleccione más de un par de tarjetas
        noMatch();
      }
      drawScore();
      if (score === 9) {
        winGame();
      }
    }
  }
  //});
};

//FUNCIÓN MATCH
const match = () => {
  let matchSound = new Audio("sound/match.mp3");
  matchSound.play();
  selectedCards = [];
  selectedCardsNames = [];
  score++;
};

//FUNCIÓN NO MATCH
const noMatch = () => {
  setTimeout(() => {
    selectedCards[0].classList.toggle("is-flipped");
    selectedCards[1].classList.toggle("is-flipped");
    selectedCards = [];
    selectedCardsNames = [];
    lockGameBoard = false; //se desbloquea el gameboard para seguir seleccionando parejas
  }, 1500);
};
=======
>>>>>>> 348f9fc835d098b76c1cf1704864f6540782d7f7

//FUNCIÓN SCORE
const drawScoreSetValue = (score) => {
  console.log('score', score)
  // let labelScore = document.getElementById("score");
  return "Score: " + score * 10;
};

const clearSelectCards = (selectedCards) =>{
  selectedCards = [];
  return selectedCards;
}
const clearSelectedCardsNames = (selectedCardsNames) =>{
  selectedCardsNames = [];
  return selectedCardsNames
}
const sumScore = (score)=>{
  score += 1;
  return score;
}

const sound = (path) =>{
  if(path){
    let matchSound = new Audio(path);
    matchSound.play();
  }
  return true;
}
//FUNCIÓN SHUFFLING CARTAS
const shuffle = (pokemon) => { 
  let duplicate = pokemon.concat(pokemon);
  duplicate.sort(() => Math.random() - 0.5); 
  return duplicate; //retornará array de cartas aleatoriamente
};
let time =  '';
let timerEl = '';

let secs = 0;
let mins = 0;
let SS = "";
let MM = "";
const getTime = () =>{ 
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
    }

    secs < 10 ? (SS = `0${secs}`) : (SS = `${secs}`);
    mins < 10 ? (MM = `0${mins}`) : (SS = `${mins}`);

    timerEl = "Timer: " + `${MM}:${SS}`;
    console.log(timerEl, 'timerEl')
    return timerEl; 
}
 

 
//export default App;
<<<<<<< HEAD
export { shuffle, start, playGame, gameBoard };
=======
export {  
  drawScoreSetValue, 
  clearSelectCards,
  clearSelectedCardsNames,
  sumScore,
  sound,
  shuffle, 
  getTime
};
>>>>>>> 348f9fc835d098b76c1cf1704864f6540782d7f7
