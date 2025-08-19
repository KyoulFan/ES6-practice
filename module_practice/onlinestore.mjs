import { addItem, listItems, removeItem } from "./inventory.mjs";
addItem("iphone");
addItem("ipad");
addItem("macbook");
listItems();

removeItem("macbook");
listItems();
