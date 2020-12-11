// Factory practice

// What objects do I need?

// Board --->
// An array
// It's DOM representation?

// Game / Ref --->
// Roatating players
// Determining win conditions

// Players --->
// Name, symbol
// Listeners for humans / logic input for computer
const playerFactory = (name, symbol) => {
  return { name, symbol };
};

const p1 = playerFactory("Donkey", "🐒");
const p2 = playerFactory("Krool", "🐊");

console.log({ p1, p2 });
