import { shuffle } from "./App.js";

describe("App.js", () => {
  it("should return a shuffle deck", () => {
    const names = ["Miguel", "Alejandra", "Gabriela"];
    const nameConcat = [
      "Miguel",
      "Alejandra",
      "Gabriela",
      "Miguel",
      "Alejandra",
      "Gabriela",
    ];
    const shuffleArr = shuffle(names);
    console.log(shuffleArr);
    expect(shuffleArr).toHaveLength(6);
    expect(shuffleArr).not.toEqual(nameConcat);
  });
});
