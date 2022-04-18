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

import pokemon from "/src/data/pokemon/pokemon.js";
//console.log(pokemon)

const App = () => {
  //const el = document.createElement("div");
  //el.className = 'App';
  //el.textContent = 'Hola mundo!'


let shuffling = shuffle();
return shuffling;

};

//FUNCIÓN CREANDO ELEMENTOS DEL DOM
const divEl = () => {
  
  let cardsArray = [];

  for (let index = 0; index < 8; index++) {
    const card = document.createElement("div");
    const front = document.createElement("img");
    //const back= document.createElement("img"); por ahora off, hasta encontrar manera de show and hide el face y back de la carta
    
    //Asignar clase a los elementos creados
    card.className = "card";
    front.className = "front";
    //back.className = "back"; 

    //Asignado atributos a los elementos creados
    front.setAttribute("src", pokemon.items[index].image);
    //back.setAttribute("src", "img/backcard.png");

    //Incorporando los elementos (appending) al HTML. Es decir, nos los estamos llevando al HTML
    card.appendChild(front);
    //card.appendChild(back); 
    cardsArray.push(card);
  }
  return cardsArray; //retornará el listado de cartas
};


//FUNCIÓN DUPLICANDO CARTAS
const duplicateCards = () => { 
  const singleCards = divEl();
  let duplicatedCards = [];
  for (let index = 0; index < singleCards.length; index++) {
    duplicatedCards.push(singleCards[index]);
    let copy = singleCards[index].cloneNode(true);
    duplicatedCards.push(copy);
  }
  return duplicatedCards; //está será mi lista final con las 18 cartas.
};


//FUNCIÓN SHUFFLING CARTAS
const shuffle = () => {
  const shuffledCards = duplicateCards();
for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffledCards[i];
    shuffledCards[i] = shuffledCards[j];
    shuffledCards[j] = temp;
  }
  return shuffledCards; //esta será mi lista de cartas desordenado.
}; 






export default App;
