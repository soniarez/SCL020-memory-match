//import App from './App.js';

/*describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
}); */

import {
  // drawScoreSetValue,
  // clearSelectCards,
  // clearSelectedCardsNames,
  // sumScore,
  // sound,
  shuffle,
  // getTime,
} from "./App.js";

describe("Testing Functions", () => {
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
    expect(shuffleArr).toHaveLength(6);
    expect(shuffleArr).not.toEqual(nameConcat);
  });
});
