//--------------------Inicio Funciones PopUp ----------------------------
//Declaramos en variable la clase del Modal
let popUp = document.querySelector(".modalDialog");

//Para que al cargar se redireccione al ID OpenModal y salga el popup
window.startPopup = function startPopup() {
  window.location.href = "#openModal";
};

//Al darle al la x en onclick se cambian las propiedades del CSS del popup al Hide
window.closePopup = function closePopup() {
  popUp.classList.toggle("hide-modalDialog");
};

//--------------------Termina Funciones PopUp ----------------------------
import App from "./components/App.js";
//window.addEventListener('load', startGame);


const cardsArray = App();
//console.log(selectedCards);

//console.log(cardsArray);
for (let index = 0; index < cardsArray.length; index++) {
  document.getElementById("cards").appendChild(cardsArray[index]);
}
