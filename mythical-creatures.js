const mythicalCreatures = [
  { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
  { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
  { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
  { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
  { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" },
];

const waterCreature = mythicalCreatures.find(function (creature) {
  return creature.type === "Water";
});
//console.log(waterCreature); will print the complete object, we only need type element here
console.log(waterCreature.type);

const griffinCreature = mythicalCreatures.findIndex(function (creature) {
  return creature.name === "Griffin";
});
console.log(griffinCreature);

const forestCreatures = mythicalCreatures.find(function (creature) {
  return creature.lastSeen === "Enchanted Forest";
});
// console.log(forestCreatures.lastSeen);need the name of creature
console.log(waterCreature.name);
