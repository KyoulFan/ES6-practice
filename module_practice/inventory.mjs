const inventory = [];
export function addItem(item) {
  //add corner case
  if (!item || typeof item !== "string") throw new Error("item name needed");
  inventory.push(item);
  console.log(`Added ${item}`);
}

export function removeItem(item) {
  let isRemoved = false;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i] === item) {
      isRemoved = true;
      inventory.splice(i, 1);
      i--;
    }
  }

  if (isRemoved) {
    console.log(`Removed ${item}`);
  } else {
    console.log(`Cannot find ${item}`);
  }
}

export const listItems = () => {
  console.log(`Listing all items:`);
  inventory.forEach((item, idx) => {
    console.log(`${idx + 1}: ${item}`);
  });
};
