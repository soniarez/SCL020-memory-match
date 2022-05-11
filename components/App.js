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

// import pokemon from "../data/pokemon/pokemon.js";
//console.log(pokemon)

//FUNCIÓN SCORE
const drawScoreSetValue = (score) => {
  // console.log("score", score);
  // let labelScore = document.getElementById("score");
  return "Score: " + score * 10;
};

const clearSelectCards = (selectedCards) => {
  selectedCards = [];
  return selectedCards;
};
const clearSelectedCardsNames = (selectedCardsNames) => {
  selectedCardsNames = [];
  return selectedCardsNames;
};
const sumScore = (score) => {
  score += 1;
  return score;
};

const sound = (path) => {
  if (path) {
    let matchSound = new Audio(path);
    matchSound.play();
    return matchSound;
  }
  return true;
};

//FUNCIÓN SHUFFLING CARTAS
const shuffle = (pokemon) => {
  let duplicate = pokemon.concat(pokemon);
  duplicate.sort(() => Math.random() - 0.5);
  return duplicate; //retornará array de cartas aleatoriamente
};

let timerEl = "";

let secs = 0;
let mins = 0;
let SS = "";
let MM = "";
const getTime = () => {
  secs++;
  if (secs == 60) {
    secs = 0;
    mins++;
  }

  secs < 10 ? (SS = `0${secs}`) : (SS = `${secs}`);
  mins < 10 ? (MM = `0${mins}`) : (SS = `${mins}`);

  timerEl = "Timer: " + `${MM}:${SS}`;
  // console.log(timerEl, "timerEl");
  return timerEl;
};

//export default App;
export {
  drawScoreSetValue,
  clearSelectCards,
  clearSelectedCardsNames,
  sumScore,
  sound,
  shuffle,
  getTime,
};
