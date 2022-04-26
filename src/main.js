//--------------------Inicio Funciones PopUp ----------------------------
//Declaramos en variable la clase del Modal

let popUp = document.getElementById("openModal");

//Para que al cargar se redireccione al ID OpenModal y salga el popup
window.startPopup = function startPopup() {
  // window.location.href = "#openModal";
  popUp.classList.add("show-modalDialog");
};

//Al darle al la x en onclick se cambian las propiedades del CSS del popup al Hide
window.closePopup = function closePopup() {
  popUp.classList.remove("show-modalDialog");
};

//--------------------Termina Funciones PopUp ----------------------------
import App from "./components/App.js";
//window.addEventListener('load', startGame);

const cardsArray = App();
//console.log(cardsArray);

//APPENDIG GAMEBOARD A HTML
for (let index = 0; index < cardsArray.length; index++) {
  document.getElementById("cards").appendChild(cardsArray[index]);
}

//FUNCIÓN RESTART GAME
let restartBtn = document.getElementById("restart-btn");
const restart = () => {
  restartBtn.addEventListener("click", () => {
    document.location.reload();
  })
};
restart(restartBtn);

