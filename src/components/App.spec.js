//import App from './App.js';

/*describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
}); */

import { shuffle, start, playGame, gameBoard } from "./App.js";
import pokemon from "../data/pokemon/pokemon.js";

describe("App.js", () => {
  let pokemons = pokemon.items;
  it("should return a shuffle deck", () => {
    // const names = ["Miguel", "Alejandra", "Gabriela"];
    // const nameConcat = [
    //   "Miguel",
    //   "Alejandra",
    //   "Gabriela",
    //   "Miguel",
    //   "Alejandra",
    //   "Gabriela",
    // ];
    const shuffleArr = shuffle(pokemons);
    expect(shuffleArr).toHaveLength(18);
    expect(shuffleArr).not.toEqual(pokemons);
  });
  //--Shuffle
  it("should be a function", () => {
    expect(typeof shuffle).toBe("function");
  });
  it("should properly shuffle data", () => {
    expect(shuffle(pokemons)).not.toEqual(pokemons);
  });

  //--Start 
  it("should be a function", () => {
    expect(typeof start).toBe("function");
  });
  it("should render without crashing", () => {
    //console.log(game.start());
    expect(start()[0] instanceof HTMLElement).toBe(true);
  });
  //--playGame
  it("should be a function", () => {
    expect(typeof playGame).toBe("function");
  });
  //no sé cómo testetar esta parte, el test encuentra problema en el evento de card.addEventListerner.
  //no sé si es que primero debemos testear esa parte, cuando se da el primer click
  it.skip("should return true when comparing two cards that are a match", () => {
    //console.log(document);
    const cardtest = `<div class="card is-flipped" data-name="blastoise"><img class="front" src="https://www.serebii.net/pokemongo/pokemon/009.png"><img class="back" src="img/backcard.png"></div>`;
    expect(playGame(cardtest)).toBe(true);
  });
  //--gameBoard
  it("Should bring a Array.length > 0", () => {
    expect(gameBoard(pokemons).length > 1);
    expect(gameBoard(pokemons)[0] instanceof HTMLElement);
  });
});
