import App from "./components/App.js";

const cardsArray = App();
//document.getElementById("root").appendChild(App());

for (let i = 0; i < cardsArray.length; i++) {
  document.getElementById("cards").appendChild(cardsArray[i]);
}

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
