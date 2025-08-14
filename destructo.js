/* Task 1: Unveiling the Coordinates */
const coordinates = { x: 34, y: 42, z: 67 };
const { x, y } = coordinates;
console.log(`coordinates found: x=${x}, y=${y}`);

/* Task 2: The Map of Secrets */
const locations = {
  first: "Cave of Wonders",
  second: "Lake of Mystery",
  third: "Mount of Ages",
  fourth: "Desert of Shadows",
};
const { first, second, ...remaining } = locations;
console.log(`Key locations: ${first}, ${second}`);

/* Task 3: The Mysterious Door */
const doorCode = {
  upper: "Alpha",
  lower: "Omega",
};
const { upper, middle = remaining.third, lower } = doorCode;
console.log(`Door code sequence: ${upper},${middle}, ${lower}`);

/* Task 4: The Guardian's Riddle */
const riddle = {
  ancientWord: "Sphinx",
  modernWord: "Cat",
};
const { ancientWord: translation } = riddle;
console.log(`The guardian says: ${translation}`);

/* Task 5: The Array of Elements */
const elements = ["Fire", "Water", "Earth", "Air"];
const [firstElement, secondElement] = elements;
console.log(`Essential Elements: ${firstElement}, ${secondElement}`);

/* Task 6: Skipping Stones */
const stones = [1, 2, 3, 4, 5, 6];
const [firstStone, , , , , sixethStone] = stones;
console.log(`Extracted stones: ${firstStone}, ${sixethStone}`);

/* Task 7: The Array of Shadows */
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];
const [visible, ...hiddenShadows] = shadows;
console.log(
  `Visible shadow: ${visible}, hidden shadows: ${hiddenShadows.join(",")}`
);

/* Task 8: The Wise Function */
function revealPath({direction, distance}){
	console.log(`Move ${distance} meters towards ${direction}.`);
}


/* Task 9: The Scroll of Defaults */
function mixPotion({ingredient1= 'Water', ingredient2='Fireflower' }= {})
{
	console.log(`Mixing ${ingredient1}, ${ingredient2}`);
}
//add examples to function mixPotion
mixPotion({ingredient1:"dust"});
/* Task 10: The Array Spell */
function castSpell([ingredient1, ingredient2]){
	console.log(`Casting spell with ${ingredient1} and ${ingredient2}`);
}
castSpell(["Moonstone", "Lavender", "Bay Leaf"]);

/* Task 11: The Nested Secret */
const nestedSecret = { outer: { inner: "The Final Key" } };
const{outer: {inner: finalKey}} = nestedSecret;
console.log(`Unveiled secret: ${finalKey}`);



/* Task 12: The Swap of Fate */
let stoneA = "Emerald";
let stoneB = "Ruby";

[stoneB, stoneA] = [stoneA, stoneB];
console.log(`Stones swapped: A= ${stoneA}, B=${stoneB}`);
// TODO: In the treasure chamber, two mystical stones control the treasure's safeguard. Use array destructuring to swap the values of `stoneA` and `stoneB`. Print the result of the swap.
