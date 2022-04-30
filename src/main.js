
import * as App from "./components/App.js";

//import App from "./components/App.js";
//console.log(App);

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

const cardsArray = App.start();
//console.log(cardsArray)

//APPENDIG GAMEBOARD A HTML
for (let index = 0; index < cardsArray.length; index++) {
  document.getElementById("cards").appendChild(cardsArray[index]);
}

//FUNCIÓN RESTART
let restartGame = document.getElementById("restart");
restartGame.addEventListener("click", () => {
  document.location.reload();
});


