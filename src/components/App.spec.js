import start from './App.js';

describe('start', () => {
  it('should render without crashing', () => {
    const el = start();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

