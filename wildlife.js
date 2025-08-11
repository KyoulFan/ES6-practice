/* Task 1: Track Animal Sightings */
function animalSanctuary(...animal) {
  console.log(`Animal signtings: ${animal}`);
}

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
const habitat = [...forestHabitats, savannahHabitats];
console.log(`Combined habitats: ${habitat}`);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
  population: 500,
  status: "Endangered",
};

const rhinoNewStatus = {
  ...rhinoStatus,
  population: 600,
  newHabitat: "forest C",
};
console.log("Updated Rhino Status：", rhinoNewStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
  name: "Leo",
  age: 5,
  species: "Lion",
};
const lionGenetic = { ...lionProfile, genetic: "good" };
console.log("Origin Lion Profile: ", lionProfile);
console.log("New Lion Profile: ", lionGenetic);

/*
 * Observations:
 * TODO: Explain here: New object(shallow copy) does not changed the original one，
 * for the edited property is the
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
  waterQuality: "Good",
  foodSupply: {
    herbivores: "Abundant",
    carnivores: "Sufficient",
  },
};

const newEcosystemHealth = {
  ...ecosystemHealth,
  foodSupply: {
    ...ecosystemHealth.foodSupply,
    herbivores: "Sufficient",
    carnivores: "not enought",
  },
};
console.log("Original Ecosystem Health: ", ecosystemHealth);
console.log("New Ecosystem Health: ", newEcosystemHealth);
/*
 * Observations:
 * TODO: Explain here.
 */
