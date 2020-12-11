// Factory practice

// What objects do I need?

// Board

// Game / Ref

// Players
const playerFactory = (name, symbol) => {
  return { name, symbol };
};

const p1 = playerFactory("Donkey", "🐒");
const p2 = playerFactory("Krool", "🐊");

console.log({ p1, p2 });
