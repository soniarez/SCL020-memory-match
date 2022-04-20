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
  
  for (let index = 0; index <shuffledCards.length; index++) {
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
    card.setAttribute("name", shuffledCards[index].id); //agregando atributo name a tarjetas

    //Incorporando los elementos (appending) al HTML.
    card.appendChild(front);
    card.appendChild(back);

    cardsArray.push(card);
    //console.log(cardsArray);

    //HANDLING CLICK
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
      selectedCards.push(card.getAttribute("name"));
    
      if (selectedCards.length === 2) {
        //document.body.style.pointerEvents = "none";
        if (selectedCards[0] === selectedCards[1]) {
          //console.log("its a match");
        } else {
          //console.log("no match");
        }
      }
    }); 
  }

  return cardsArray; //retornará el listado de cartas
};


let countDownDate = new Date("Apr 19, 2022 11:26:25").getTime();
const countDown = () => {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = `${minutes}m ${seconds}s`;
  if (distance < 0) {
    clearInterval(countDown);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
};

setInterval(()=>{
  countDown()
},1000)


export default App;