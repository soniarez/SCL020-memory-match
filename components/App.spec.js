//import App from './App.js';

/*describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
}); */

import {
  shuffle,
  clearSelectCards,
  sound,
  clearSelectedCardsNames,
  sumScore,
  drawScoreSetValue,
} from "./App.js";

describe("Shuffle Fucntion", () => {
  it("Should return a shuffle deck", () => {
    const nameConcat = [
      "Sonia",
      "Heike",
      "Alejandra",
      "Sonia",
      "Heike",
      "Alejandra",
    ];
    const shuffleArr = shuffle(nameConcat);
    expect(shuffleArr).toHaveLength(12);
    expect(shuffleArr).not.toEqual(nameConcat);
  });
});

describe("Function clearSelectCards", () => {
  it("Should return a clear Array", () => {
    const fullArray = ["Sonia", "Heike", "Alejandra"];
    expect(clearSelectCards(fullArray)).toEqual([]);
  });
});

describe("Function clearSelectCardsName", () => {
  it("Should return a clear Cards Name Array", () => {
    const fullNameArray = ["Chocolate", "Vanilla", "Cherry"];
    expect(clearSelectedCardsNames(fullNameArray)).toEqual([]);
  });
});

describe("Function Sound", () => {
  it("Sound should be a HTMLAudioElement", () => {
    let testSound = "sound/match.mp3";
    expect(sound(testSound) instanceof HTMLAudioElement);
  });
});

describe("Function SumScore", () => {
  it("should add 1 to the current score", () => {
    let testScore = 5;
    expect(sumScore(testScore)).toBe(6);
  });
});

describe("Function drawScoreSetValue", () => {
  it("Should be an HTML Element", () => {
    let mockScore = 2;
    expect(drawScoreSetValue(mockScore) instanceof HTMLElement);
  });
  it("should be a typeof string", () => {
    let mockScore = 2;
    let testResult = drawScoreSetValue(mockScore);
    expect(typeof testResult === "string").toBe(true);
  });
  it("the result should include the score", () => {
    let mockScore = 2;
    let testResult = drawScoreSetValue(mockScore);
    expect(testResult).toMatch("20");
  });
});
