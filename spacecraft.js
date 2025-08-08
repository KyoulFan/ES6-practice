/* Task 1: No Parameters: Activate Hyperdrive */
const activateHyperdrive = () => {
  console.log("Hyperdrive activated!");
};
activateHyperdrive();
/* Task 2: Implicit Return: Scan for Lifeforms */
const scanForLife = () => "No lifeforms detected";
console.log(scanForLife());

/* Task 3: Implicit Return with Objects: Log Coordinates */
const currentCoordinates = () => ({ x: 10, y: 5, z: 20 });
console.log(currentCoordinates());

/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.
const spacecraft = {
  firstName: "Adam",
  receiveMessage: (message) => {
    console.log(`"Message received: ${message}`);
    console.log(`The spacecraft is: ${this.name}`);
  },
};
spacecraft.receiveMessage("Hello");

/*
 * Observations:
 * TODO: Explain here.
 * The output shows undefined because arrow function do not make their own this inside.
 * It will inherit this from the parent scope
 */
