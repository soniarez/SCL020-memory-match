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
//console.log(pokemon);

const App = () => {
  const el = document.createElement("div");
  el.className = "App";
  el.textContent = "Hola mundo!";

  return divEl();
};

const divEl = () => {
  let cardsArray = [];
  console.log(cardsArray);

  for (let i = 0; i < 9; i++) {
    const card = document.createElement("div");
    const image = document.createElement("img");
    card.className = "card";
    image.className = "image";
    image.setAttribute("src", pokemon.items[i].image);
    card.appendChild(image);

    cardsArray.push(card);
  }

  return cardsArray;
};

export default App;
