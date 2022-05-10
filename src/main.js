//import App from "./components/App.js";
//console.log(App);  


import * as App from "./components/App.js";
import pokemon from "./data/pokemon/pokemon.js";
//Importing data from json

 /*const fetcher = async() => {
  let response = await fetch("./data/pokemon/pokemon.json");
  let data = await response.json();
  return data;
}

let pokemon = await fetcher(); */


//Sacamos las variables, porque al mandarlas como parametro siempre se recibia el mismo array de las primeras cartas seleccionadas
let selectedCards = [];
let selectedCardsNames = [];

let score = 0;
let firstClicked = false; //por default antes de partir el juego no se ha dado el primer click
let time = "";
let lockGameBoard = false; //por default al iniciarl el juego el gameboard NO está bloqueado, pemrite dar click.
//Más adelante hay que pasarlo a true para para innovilizar más selecciones durante la evaluación de match o no match

//FUNCIÓN POP UP RULES
//Declaramos en variable la clase del Modal
let popUp = document.getElementById("openModal");
//Para que al cargar se redireccione al ID OpenModal y salga el popup
window.startPopup = function startPopup() {
  popUp.classList.add("show-modalDialog");
};
//Al darle al la x en onclick se cambian las propiedades del CSS del popup al Hide
window.closePopup = function closePopup() {
  popUp.classList.remove("show-modalDialog");
};


const start = () => {
  let shuffling = App.shuffle(pokemon.items);
  return gameBoard(shuffling);
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

    //Llamando a la función playGame
    card.onclick = () => playGame(card);

    cardsArray.push(card);
  }

  return cardsArray; //retornará el listado de cartas
};

const cardsArray = start();

for (let index = 0; index < cardsArray.length; index++) {
  document.getElementById("cards").appendChild(cardsArray[index]);
} 

//FUNCIÓN HANDLING CLICK
const playGame = (card) => {
  if (lockGameBoard) return; //como el gameboard NO está bloqueado, se entra a la función
  card.classList.toggle("is-flipped");

  if (!firstClicked) {
    timerStart();
  }
  // console.log(firstClicked, "click");
  firstClicked = true; // al darse el primer click en tarjeta se inicia el timer

  if (selectedCardsNames.length < 2) {
    selectedCards.push(card);
    selectedCardsNames.push(card.dataset.name);
    if (selectedCardsNames.length === 2) {
      if (selectedCardsNames[0] === selectedCardsNames[1]) {
        match();
        selectedCards
      } else {
        lockGameBoard = true; //se bloquea el gameboard para evitar que el usuario seleccione más de un par de tarjetas
        noMatch();
      }
      // console.log("score 1111", score);
      drawScore();
      if (score === 9) {
        winGame();
      }
    }
  }
};

//FUNCIÓN MATCH
const match = () => {
  App.sound("sound/match.mp3");
  selectedCards = App.clearSelectCards(selectedCards);
  selectedCardsNames = App.clearSelectedCardsNames(selectedCardsNames);
  score = App.sumScore(score);
};

//FUNCIÓN NO MATCH
const noMatch = () => {
  setTimeout(() => {
    selectedCards[0].classList.toggle("is-flipped");
    selectedCards[1].classList.toggle("is-flipped");
    selectedCards = App.clearSelectCards(selectedCards);
    selectedCardsNames = App.clearSelectedCardsNames(selectedCardsNames);
    lockGameBoard = false; //se desbloquea el gameboard para seguir seleccionando parejas
  }, 1500);
};

//FUNCIÓN WIN
const winGame = () => {
  setTimeout(() => {
    App.sound("sound/winner.mp3");
    congratsPopup();
    clearInterval(time);
  }, 1300);
};

//FUNCIÓN OPEN MODAL
const congratsPopup = () => {
  let winAlert = document.getElementById("openModal2");
  winAlert.classList.add("show-modalDialog");

  let congratsMessage = document.getElementById("congrats-message");
  congratsMessage.textContent = "Congrats, you have found all the matches!";

  let closeCongrats = document.getElementById("close");
  closeCongrats.addEventListener("click", () => {
    winAlert.classList.remove("show-modalDialog");
  });
};

//FUNCIÓN START TIMER
const timerStart = () => {
  let timerID = document.getElementById("timer");
  time = setInterval(() => {
    timerID.textContent = App.getTime();
  }, 1000);
};

const drawScore = () => {
  let labelScore = document.getElementById("score");
  labelScore.textContent = App.drawScoreSetValue(score);
};


//FUNCIÓN RESTART
let restartGame = document.getElementById("restart");
restartGame.addEventListener("click", () => {
  document.location.reload();
});


