import App from './components/App.js';
//window.addEventListener('load', startGame);

const cardsArray =App();
//console.log(cardsArray);
for (let index = 0; index < cardsArray.length; index++) {
document.getElementById('cards').appendChild(cardsArray[index]);
} 
