//import App from './App.js';

/*describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
}); */

const game = require("./App.js");
const pokeData = require("../data/pokemon/pokemon");
//console.log(app.shuffle())

describe("shuffle", () => {
  it("should be a function", () => {
    expect(typeof game.shuffle).toBe("function");
  });
  it("should properly shuffle data", () => {
    expect(game.shuffle(pokeData)).not.toEqual(pokeData);
  });
});

describe("start", () => {
  it("should be a function", () => {
    expect(typeof game.start).toBe("function");
  });
  it("should render without crashing", () => {
    //console.log(game.start());
    expect(game.start()[0] instanceof HTMLElement).toBe(true);
  });
  it("should have 18 HTMLElements as number of cards", () => {
    expect(game.start().length).toBe(18);
  })
});

describe("playGame", () => {
  it("should be a function", () => {
    expect(typeof game.playGame).toBe("function");
  })
  //no sé cómo testetar esta parte, el test encuentra problema en el evento de card.addEventListerner. 
  //no sé si es que primero debemos testear esa parte, cuando se da el primer click
  it("should return true when comparing two cards that are a match", () => {
    expect(game.playGame('bulbasaur', 'bulbasaur')).toBe(true);
  })
});



/*test("shuffle should properly shuffle data", () => {
  expect(game.shuffle(pokeData)).not.toEqual(pokeData);
})*/

/*test("start  Should render without crashing", () => {
  //console.log(start.start() )
  expect(app.start()[0] instanceof HTMLElement).toBe(true);
})

test("there should be 18 HTMLElements", () => {
  expect(app.start().length).toBe(18);
}) */


